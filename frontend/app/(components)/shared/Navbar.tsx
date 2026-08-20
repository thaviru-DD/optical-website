'use client'
import { useState } from "react"
import Link from "next/link"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="w-full bg-white text-brand-navy shadow-md">
      <div className="max-auto flex max-w-7xl items-center justify-between px-4 py-4">


        {/* Logo */}
        <div className="text-2xl font-bold">
          R.A. Jayasinghe Optical
        </div>

        {/* Desktop navigations */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/spectacles">Spectacles</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/aboutUs">About</Link>
          <Link href="/contactus">Contact</Link>
          <Link href="/apoinments">Appointments</Link>
        </div>

        {/* Mobile menu button */}
         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile navigations */}
      {isOpen && (
        <div className="md:hidden border-t px-4 py-4">
          <div className="flex flex-col gap-4">
            <Link href="/">Home</Link>
            <Link href="/spectacles">Spectacles</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/aboutUs">About</Link>
            <Link href="/contactus">Contact</Link>
            <Link href="/apoinments">Appointments</Link>
          </div>
        </div>
      )}




    </nav>
  )
}

export default Navbar