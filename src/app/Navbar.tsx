"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Briefcase,
  Bell,
  Plus,
  BarChart3,
  Settings,
  User,
  LogOut,
  Menu,
  X,
  Home,
  FileText,
  Target,
  Moon,
  Sun,
} from "lucide-react"
import { useTheme } from "next-themes"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true) // Toggle this to see different states
  const { theme, setTheme } = useTheme()

  const navigationItems = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Applications", href: "/applications", icon: Briefcase },
    
    { name: "Documents", href: "/documents", icon: FileText },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Goals", href: "/goals", icon: Target },
  ]

  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white shadow-xl border-b border-blue-500/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">JobTrackr</span>
                <span className="text-xs text-blue-100 -mt-1">Career Management</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.slice(0, 4).map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 hover:text-white transition-all duration-200 flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Button>
                )
              })}
            </div>
          </div>

         

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                {/* Theme Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-white/20 transition-colors"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </Button>

                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative p-2 hover:bg-white/20 transition-colors">
                      <Bell className="w-5 h-5" />
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
                        3
                      </Badge>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 bg-white text-gray-900 shadow-lg rounded-lg">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                      <div className="font-medium">Interview Reminder</div>
                      <div className="text-sm text-gray-500">Google interview tomorrow at 2 PM</div>
                      <div className="text-xs text-gray-400">2 hours ago</div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                      <div className="font-medium">Application Update</div>
                      <div className="text-sm text-gray-500">Microsoft moved your application to next round</div>
                      <div className="text-xs text-gray-400">1 day ago</div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                      <div className="font-medium">Follow-up Reminder</div>
                      <div className="text-sm text-gray-500">Time to follow up with Apple</div>
                      <div className="text-xs text-gray-400">2 days ago</div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* User Profile */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 hover:bg-white/20">
                      <Avatar className="h-9 w-9 border-2 border-white/20">
                        <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
                        <AvatarFallback className="bg-white/20 text-white font-semibold">JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-white text-gray-900 shadow-lg rounded-lg">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">John Doe</p>
                        <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Analytics
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              /* Guest Actions */
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 transition-colors"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Sign In
                </Button>
                <Button size="sm" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold transition-colors">
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2 hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4">
            <div className="flex flex-col space-y-2">
              

              {/* Mobile Navigation */}
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    className="justify-start text-white hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Button>
                )
              })}

              {isLoggedIn && (
                <div className="pt-4 border-t border-white/20">
                  <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Application
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
