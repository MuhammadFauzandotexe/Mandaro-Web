import Image from "next/image"
import { ProductShowcase } from "@/components/product-showcase"
import { SiteHeader } from "@/components/site-header"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-700">
                  Our Products
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Explore our innovative products that combine advanced technology with everyday needs
                </p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* GameBox+ */}
              <div className="group relative overflow-hidden rounded-lg border shadow-md transition-all hover:shadow-lg">
                <div className="relative h-64 overflow-hidden bg-blue-600">
                  <Image
                    src="/images/robot-arm-white.jpeg"
                    alt="GameBox+"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-700">GameBox+</h2>
                  <p className="mt-2 text-gray-600">
                    Wahana permainan arcade modern dengan leaderboard cloud dan sistem tiket digital. Pengalaman bermain
                    game yang imersif dengan teknologi terkini.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Arcade</span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Cloud</span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Digital Tickets
                    </span>
                  </div>
                  <ProductShowcase productId={1} />
                </div>
              </div>

              {/* AutoScoop */}
              <div className="group relative overflow-hidden rounded-lg border shadow-md transition-all hover:shadow-lg">
                <div className="relative h-64 overflow-hidden bg-blue-600">
                  <Image
                    src="/images/robot-arms-collaborative.jpeg"
                    alt="AutoScoop"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-700">AutoScoop</h2>
                  <p className="mt-2 text-gray-600">
                    Lengan robot pembuat es krim yang dapat dikustomisasi via mobile app dan pembayaran QR. Pengalaman
                    menikmati es krim yang unik dan personal.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Robotics
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Mobile App
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      QR Payment
                    </span>
                  </div>
                  <ProductShowcase productId={2} />
                </div>
              </div>

              {/* QRWash */}
              <div className="group relative overflow-hidden rounded-lg border shadow-md transition-all hover:shadow-lg">
                <div className="relative h-64 overflow-hidden bg-blue-600">
                  <Image
                    src="/images/robot-arm-orange.jpeg"
                    alt="QRWash"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-700">QRWash</h2>
                  <p className="mt-2 text-gray-600">
                    Mesin cuci mandiri dengan sistem pemesanan dan pembayaran digital berbasis aplikasi. Solusi laundry
                    modern yang efisien dan praktis.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Laundry
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Digital Booking
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      App-Based
                    </span>
                  </div>
                  <ProductShowcase productId={3} />
                </div>
              </div>

              {/* Snack-o-Tron */}
              <div className="group relative overflow-hidden rounded-lg border shadow-md transition-all hover:shadow-lg">
                <div className="relative h-64 overflow-hidden bg-blue-600">
                  <Image
                    src="/images/robot-dog-black.jpeg"
                    alt="Snack-o-Tron"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-700">Snack-o-Tron</h2>
                  <p className="mt-2 text-gray-600">
                    Mesin camilan otomatis yang mengenali wajah pelanggan dan menyarankan menu sesuai kebiasaan.
                    Pengalaman menikmati camilan yang personal dan efisien.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">AI</span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Facial Recognition
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      Personalization
                    </span>
                  </div>
                  <ProductShowcase productId={4} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-blue-900 text-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <Image src="/images/mandaro-logo.png" alt="Mandaro Technologies Logo" fill className="object-cover" />
              </div>
              <span className="font-bold">Mandaro Technologies</span>
            </div>
            <p className="text-sm text-blue-200">© 2025 Mandaro Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
