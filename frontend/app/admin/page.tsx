'use client'
import React from 'react'
import { useState } from 'react'
import SideBar from '../(components)/shared/SideBar'
import Header from '../(components)/admin/Header'
import { BookCheck, Clock } from 'lucide-react'
import StatCards from '../(components)/admin/StatCards'

function Page() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [showMenuButton, setShowMenuButton] = useState(true)

    const openSidebar = () => {
        setShowMenuButton(false)
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

  return (
    <div className="min-h-screen bg-gray-50">
        <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} onExitComplete={() => setShowMenuButton(true)}/>

        <main className="md:ml-64">
            <Header openSidebar={openSidebar} showMenuButton={showMenuButton} />
            <div className="flex flex-col gap-5 px-4 py-6 sm:px-6 md:px-8 md:py-10 md:flex-col md:gap-8">
                <h1 className="text-2xl md:text-4xl text-brand-navy font-bold">Welcome Thaviru De Silva</h1>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-5 text-brand-navy/70">
                    <div className="flex items-center gap-1">
                        <BookCheck className="w-4 h-4 md:w-4.5 md:h-4.5" />
                        <p className="text-sm md:text-[1rem]">Admin ID:  ADM-0011</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 md:w-4.5 md:h-4.5" />
                        <p className="text-sm md:text-[1rem]">Last Login: Today, 10:00 AM</p>
                    </div>
                </div>

                {/* StatCards */}
                <StatCards />


            </div>
        </main>

        
    </div>
  )
}

export default Page