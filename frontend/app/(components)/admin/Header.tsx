'use client'
import React from 'react'
import { Bell, Search } from 'lucide-react'
import Avatar from '@mui/material/Avatar'

type HeaderProps = {
    openSidebar: () => void
    showMenuButton: boolean
}

function Header({ openSidebar, showMenuButton }: HeaderProps) {
  return (
        <div className="h-16 w-full shadow-md bg-white flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {showMenuButton && (
            <button onClick={openSidebar} className="text-2xl md:hidden bg-gray-100 px-1 border border-gray-200 flex justify-center">
                ☰
            </button>
            )}
        <div className="min-w-0 flex-1 max-w-2xl relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search admin dashboard..." className="px-10 h-9 border border-gray-200 rounded-lg py-1 w-full bg-gray-100 " />
        </div>
        <div className="flex shrink-0 items-center gap-3 sm:gap-6">
            <div className="relative hidden md:block">
                <Bell className="hover:cursor-pointer"/>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center gap-2">
                <Avatar className="hover:cursor-pointer" alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 28, height: 28 }} />
                <p className="hidden md:block hover:cursor-pointer">System Admin</p>
            </div>
        </div>
    </div>
  )
}

export default Header