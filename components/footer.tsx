import Link from "next/link"
import { Newspaper, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Newspaper className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">YANEWS</span>
            </div>
            <p className="text-gray-400 mb-4">Delivering the latest and most relevant news from around the world.</p>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.twitter.com/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/handayani_aja_" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/health" className="text-gray-400 hover:text-white">
                  Health
                </Link>
              </li>
              <li>
                <Link href="/category/sports" className="text-gray-400 hover:text-white">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/category/technology" className="text-gray-400 hover:text-white">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/category/entertainment" className="text-gray-400 hover:text-white">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link href="/category/business" className="text-gray-400 hover:text-white">
                  Business
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">Way Huwi, Kecamatan Jati Agung, Lampung Selatan, Lampung</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">+6289677889930</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">handayani.122140166@student.itera.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} YANEWS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

