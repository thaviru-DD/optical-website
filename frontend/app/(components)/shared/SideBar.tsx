'use client'
import React from 'react'
import Link from 'next/link'
import { ChevronLeft, ClipboardClock, Cog, LayoutDashboard, LogOut, MessageCircleMore, ShoppingCart } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type SideBarProps = {
    isOpen: boolean
    onClose: () => void
    onExitComplete: () => void
}

function SideBar({ isOpen, onClose, onExitComplete }: SideBarProps) {
    
  return (
    <div className="fixed inset-y-0 left-0 z-50">
        {/* Mobile sidebar content */}
        <AnimatePresence onExitComplete={onExitComplete}>
            {isOpen && (
                <motion.div initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }} className="md:hidden flex flex-col gap-20 bg-brand-navy text-white p-4 w-64 h-screen rounded-tr-4xl relative">

            {/* Close button */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.15 }} onClick={onClose}
                className="absolute top-4 -right-5 bg-brand-navyLight w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer"
            >
                <ChevronLeft />
            </motion.div>
                    <div>
                        <h1 className="font-bold text-[1.2rem]">R.A. Jayasinghe</h1>
                    </div>

                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                                <LayoutDashboard size={18} />
                                <Link href="/admin/dashboard">Dashboard</Link>
                            </div>
                            
                            <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                                <ShoppingCart size={18} />
                                <Link href="/admin/products">Products</Link>
                            </div>
                            <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                                <ClipboardClock size={18} />
                                <Link href="/admin/appointments">Appointments</Link>
                            </div>
                        </div>
                
                        <div className="flex flex-col gap-2">
                            <div className="w-full h-[0.5px] bg-white"></div>
                            <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                                <MessageCircleMore size={18} />
                                <Link href="/admin/logout">Chat box</Link>
                            </div>
                            <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                                <Cog size={18} />
                                <Link href="/admin/settings">Settings</Link>
                            </div>
                            <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                                <LogOut size={18} />
                                <Link href="/admin/logout">Logout</Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Desktop sidebar content */}
        <div className="hidden md:flex flex-col gap-20 bg-brand-navy text-white p-4 w-64 h-screen">
            <div>
                <h1 className="font-bold text-[1.2rem]">R.A. Jayasinghe</h1>
            </div>

            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                        <LayoutDashboard size={18} />
                        <Link href="/admin/dashboard">Dashboard</Link>
                    </div>
                    
                    <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                        <ShoppingCart size={18} />
                        <Link href="/admin/products">Products</Link>
                    </div>
                    <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                        <ClipboardClock size={18} />
                        <Link href="/admin/appointments">Appointments</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="w-full h-[0.5px] bg-white"></div>
                    <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                        <MessageCircleMore size={18} />
                        <Link href="/admin/logout">Chat box</Link>
                    </div>
                    <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                        <Cog size={18} />
                        <Link href="/admin/settings">Settings</Link>
                    </div>
                    <div className="flex items-center cursor-pointer gap-4 p-2 hover:bg-brand-navyLight hover:rounded-lg hover:shadow-lg">
                        <LogOut size={18} />
                        <Link href="/admin/logout">Logout</Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SideBar