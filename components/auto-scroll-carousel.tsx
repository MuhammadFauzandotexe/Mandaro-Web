"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  interval?: number
  className?: string
}

export function AutoScrollCarousel({ images, interval = 3000, className = "" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setIsPaused(true)
    setCurrentIndex(index)

    // Resume auto-scrolling after a brief pause
    setTimeout(() => {
      setIsPaused(false)
    }, 5000)
  }

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, interval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPaused, interval])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
        onClick={() => {
          prevSlide()
          setIsPaused(true)
          setTimeout(() => setIsPaused(false), 5000)
        }}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous image</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
        onClick={() => {
          nextSlide()
          setIsPaused(true)
          setTimeout(() => setIsPaused(false), 5000)
        }}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next image</span>
      </Button>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => goToSlide(index)}
          >
            <span className="sr-only">Image {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
