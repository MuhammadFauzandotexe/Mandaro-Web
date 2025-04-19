"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Product {
  id: number
  name: string
  description: string
  features: string[]
  images: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: "GameBox+",
    description: "Wahana permainan arcade modern dengan leaderboard cloud dan sistem tiket digital.",
    features: [
      "Leaderboard berbasis cloud",
      "Sistem tiket digital",
      "Integrasi dengan aplikasi mobile",
      "Multiplayer support",
      "Customizable game themes",
    ],
    images: [
      "/images/robot-arm-white.jpeg",
      "/images/robot-dog-schematic.jpeg",
      "/placeholder.svg?height=400&width=600&text=GameBox+%20Interface",
    ],
  },
  {
    id: 2,
    name: "AutoScoop",
    description: "Lengan robot pembuat es krim yang dapat dikustomisasi via mobile app dan pembayaran QR.",
    features: [
      "Customizable via mobile app",
      "QR payment integration",
      "Multiple flavor options",
      "Automated cleaning system",
      "Real-time status monitoring",
    ],
    images: [
      "/images/robot-arms-collaborative.jpeg",
      "/placeholder.svg?height=400&width=600&text=AutoScoop%20App",
      "/placeholder.svg?height=400&width=600&text=AutoScoop%20In%20Action",
    ],
  },
  {
    id: 3,
    name: "QRWash",
    description: "Mesin cuci mandiri dengan sistem pemesanan dan pembayaran digital berbasis aplikasi.",
    features: [
      "Digital booking system",
      "In-app payment",
      "Real-time machine status",
      "Notification when laundry is done",
      "Usage analytics",
    ],
    images: [
      "/images/robot-arm-orange.jpeg",
      "/placeholder.svg?height=400&width=600&text=QRWash%20App",
      "/placeholder.svg?height=400&width=600&text=QRWash%20Interface",
    ],
  },
  {
    id: 4,
    name: "Snack-o-Tron",
    description: "Mesin camilan otomatis yang mengenali wajah pelanggan dan menyarankan menu sesuai kebiasaan.",
    features: [
      "Facial recognition",
      "Personalized recommendations",
      "Contactless payment",
      "Inventory management",
      "Usage analytics dashboard",
    ],
    images: [
      "/images/robot-dog-black.jpeg",
      "/images/robot-dog-schematic.jpeg",
      "/placeholder.svg?height=400&width=600&text=Snack-o-Tron%20Mobile",
    ],
  },
]

export function ProductShowcase({ productId }: { productId: number }) {
  const product = products.find((p) => p.id === productId) || products[0]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (autoScroll) {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
      }
    }, 3000)
  }

  useEffect(() => {
    startAutoScroll()

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [autoScroll, product.images.length])

  useEffect(() => {
    if (isDialogOpen) {
      setAutoScroll(true)
      startAutoScroll()
    } else {
      setAutoScroll(false)
    }
  }, [isDialogOpen])

  const nextImage = () => {
    setAutoScroll(false)
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setAutoScroll(false)
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <Dialog onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4 flex items-center gap-2">
          <Maximize2 className="h-4 w-4" />
          View Product Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-700">{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        <div className="relative mt-4 overflow-hidden rounded-lg bg-blue-50">
          <div className="relative aspect-video">
            <Image
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${product.name} image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next image</span>
          </Button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
            {product.images.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentImageIndex ? "bg-blue-600" : "bg-blue-300"}`}
                onClick={() => {
                  setAutoScroll(false)
                  setCurrentImageIndex(index)
                }}
              >
                <span className="sr-only">Image {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700">Features:</h4>
          <ul className="mt-2 space-y-1">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
