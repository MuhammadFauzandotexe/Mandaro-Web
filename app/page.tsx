import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Cpu, Layers, MessageSquare, Smartphone, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductShowcase } from "@/components/product-showcase"
import { AutoScrollCarousel } from "@/components/auto-scroll-carousel"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  const robotImages = [
    {
      src: "/images/robot-arm-white.jpeg",
      alt: "White robotic arm with gripper",
    },
    {
      src: "/images/robot-arms-collaborative.jpeg",
      alt: "Collaborative robot arms",
    },
    {
      src: "/images/robot-arm-orange.jpeg",
      alt: "Orange industrial robot arm",
    },
    {
      src: "/images/robot-dog-black.jpeg",
      alt: "Black robotic dog",
    },
    {
      src: "/images/robot-dog-schematic.jpeg",
      alt: "Robot dog schematic",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mb-4 hidden md:block">
                  {/* <Image src="/images/mandaro-logo.png" alt="Mandaro Technologies Logo" fill className="object-cover" /> */}
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Mandaro Technologies
                  </h1>
                  <p className="text-xl text-blue-100">Code, Circuits, and Creativity for Digitilize Our Life</p>
                </div>
                <div className="max-w-[600px] text-blue-100 md:text-xl">
                  <p>
                    We combine expertise in software engineering, hardware system design, IoT, and modern robotics to
                    create solutions for the future.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-blue-700 hover:bg-blue-50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-white text-blue-700  hover:bg-blue-800 hover:text-white">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <AutoScrollCarousel images={robotImages} interval={3000} className="w-full max-w-[500px] shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-700">About Us</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Mandaro Technologies adalah perusahaan teknologi kreatif yang menggabungkan keahlian dalam software
                  engineering, hardware system design, Internet of Things (IoT), serta teknologi robotik modern untuk
                  menciptakan solusi masa depan.
                </p>
              </div>
              <div className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                <p>
                  Kami merancang dan membangun sistem pintar yang menyatu dengan kebutuhan industri, hiburan, dan
                  kehidupan sehari-hari—menawarkan pengalaman digital yang imersif dan efisien. Fokus kami adalah
                  menciptakan inovasi yang bukan hanya canggih, tetapi juga fun dan relevan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-700">
                  Our Services
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Layanan kami mencakup berbagai solusi teknologi terintegrasi
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-blue-100 p-3">
                  <Layers className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-700">Software-to-Hardware Integration</h3>
                <p className="text-sm text-gray-500 text-center">
                  Sistem kontrol berbasis web/mobile untuk mesin industri, dashboard manajemen berbasis cloud, dan API
                  komunikasi.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-blue-100 p-3">
                  <Smartphone className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-700">Smart Payment Service</h3>
                <p className="text-sm text-gray-500 text-center">
                  Sistem pembayaran digital (QRIS, NFC, EDC) dan pembayaran otomatis dengan integrasi sensor pengguna.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-blue-100 p-3">
                  <Cpu className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-700">IoT System Design</h3>
                <p className="text-sm text-gray-500 text-center">
                  Sensor jaringan untuk smart building & smart agriculture, IoT gateway lokal, dan Machine Learning.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-blue-100 p-3">
                  <Zap className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-700">Creative Tech</h3>
                <p className="text-sm text-gray-500 text-center">
                  Implementasi teknologi kreatif seperti GameBox+, AutoScoop, QRWash, dan Snack-o-Tron.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section
        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-700">
                  Our Products
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Produk inovatif yang menggabungkan teknologi canggih dengan kebutuhan sehari-hari
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                <div className="bg-blue-600 h-48 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/robot-arm-white.jpeg"
                    width={400}
                    height={200}
                    alt="GameBox+"
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-700">GameBox+</h3>
                  <p className="mt-2 text-gray-500">
                    Wahana permainan arcade modern dengan leaderboard cloud dan sistem tiket digital.
                  </p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  <ProductShowcase productId={1} />
                </div>
              </div>
              <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                <div className="bg-blue-600 h-48 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/robot-arms-collaborative.jpeg"
                    width={400}
                    height={200}
                    alt="AutoScoop"
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-700">AutoScoop</h3>
                  <p className="mt-2 text-gray-500">
                    Lengan robot pembuat es krim yang dapat dikustomisasi via mobile app dan pembayaran QR.
                  </p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  <ProductShowcase productId={2} />
                </div>
              </div>
              <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                <div className="bg-blue-600 h-48 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/robot-arm-orange.jpeg"
                    width={400}
                    height={200}
                    alt="QRWash"
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-700">QRWash</h3>
                  <p className="mt-2 text-gray-500">
                    Mesin cuci mandiri dengan sistem pemesanan dan pembayaran digital berbasis aplikasi.
                  </p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  <ProductShowcase productId={3} />
                </div>
              </div>
              <div className="flex flex-col rounded-lg border shadow-sm overflow-hidden">
                <div className="bg-blue-600 h-48 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/robot-dog-black.jpeg"
                    width={400}
                    height={200}
                    alt="Snack-o-Tron"
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-700">Snack-o-Tron</h3>
                  <p className="mt-2 text-gray-500">
                    Mesin camilan otomatis yang mengenali wajah pelanggan dan menyarankan menu sesuai kebiasaan.
                  </p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Learn More</Button>
                  <ProductShowcase productId={4} />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Additional Services */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-700">
                  Layanan Tambahan
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Solusi teknologi masa kini untuk berbagai kebutuhan
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-700">Smart Retail Solutions</h3>
                <p className="text-sm text-gray-500">
                  Rak pintar dengan deteksi produk yang diambil, auto payment, dan pelacakan inventori. Cermin pintar
                  dengan AR untuk fashion retail.
                </p>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-700">Micro-Fulfillment Robotics</h3>
                <p className="text-sm text-gray-500">
                  Sistem robotik gudang kecil untuk usaha logistik skala kecil-menengah. Dapat dikontrol dari dashboard
                  mobile, mendukung voice command.
                </p>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-700">Tech-Enhanced Event Booth</h3>
                <p className="text-sm text-gray-500">
                  Booth pameran dengan sensor gerak, AI interaktif (asisten virtual), dan experience gamifikasi.
                  Photobooth AR dengan integrasi NFT dan pembayaran langsung.
                </p>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-700">EduRobot Kits</h3>
                <p className="text-sm text-gray-500">
                  Kit edukasi robotik IoT untuk sekolah dan universitas. Platform pembelajaran berbasis aplikasi dengan
                  simulasi & coding block interface.
                </p>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-700">Smart Environment Monitoring</h3>
                <p className="text-sm text-gray-500">
                  Perangkat portable untuk mendeteksi kualitas udara, suara, suhu, dan kelembaban. Cocok untuk event
                  besar atau ruang publik.
                </p>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-700">Custom Solutions</h3>
                <p className="text-sm text-gray-500">
                  Solusi teknologi kustom sesuai kebutuhan spesifik bisnis Anda. Konsultasikan kebutuhan Anda dengan tim
                  ahli kami.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-700">
                    Contact Us
                  </h2>
                  <p className="text-gray-500 md:text-xl">
                    Hubungi kami untuk informasi lebih lanjut tentang produk dan layanan kami
                  </p>
                </div>
                <div className="space-y-4 text-gray-500">
                  <div className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-blue-600" />
                    <span>info@mandaro-tech.com</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="mr-2 h-5 w-5 text-blue-600" />
                    <span>+62 21 1234 5678</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="mr-2 h-5 w-5 text-blue-600" />
                    <span>www.mandaro-tech.com</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-blue-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image src="/images/mandaro-logo.png" alt="Mandaro Technologies Logo" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Mandaro Technologies</h4>
                  <p className="text-xs text-blue-200">Digitilize Our Life</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="#about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="#services" className="hover:text-white">
                    Software Integration
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Smart Payment
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    IoT Systems
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm text-blue-200">
            <p>© 2025 Mandaro Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
