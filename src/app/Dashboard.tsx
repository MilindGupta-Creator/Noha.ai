"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Briefcase,
  Calendar,
  Building2,
  Info,
  CheckCircle2,
  Clock,
  X,
  Plus,
  Filter,
  Search,
} from "lucide-react"

const tableHeaders = ["Company", "Position", "Status", "Applied Date", "Details"]


const StatusBadge = ({ status }: { status: string }) => {
  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case "applied":
        return {
          variant: "default" as const,
          className: "bg-blue-100 text-blue-700 hover:bg-blue-200",
          icon: <CheckCircle2 className="w-3 h-3" />,
        }
      case "interview":
        return {
          variant: "default" as const,
          className: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
          icon: <Clock className="w-3 h-3" />,
        }
      case "rejected":
        return {
          variant: "destructive" as const,
          className: "bg-red-100 text-red-700 hover:bg-red-200",
          icon: <X className="w-3 h-3" />,
        }
      case "offer":
        return {
          variant: "default" as const,
          className: "bg-green-100 text-green-700 hover:bg-green-200",
          icon: <CheckCircle2 className="w-3 h-3" />,
        }
      default:
        return {
          variant: "secondary" as const,
          className: "bg-gray-100 text-gray-700 hover:bg-gray-200",
          icon: <Clock className="w-3 h-3" />,
        }
    }
  }

  const config = getStatusConfig(status)

  return (
    <Badge variant={config.variant} className={`${config.className} flex items-center gap-1 font-medium`}>
      {config.icon}
      {status}
    </Badge>
  )
}

const statusOptions = ["Applied", "Interview", "Offer", "Rejected"]

const Dashboard = () => {
  const [jobApplications, setJobApplications] = useState([
    {
      id: 1,
      company: "Acme Corp",
      position: "Frontend Developer",
      status: "Applied",
      dateApplied: "2024-06-01",
    },
    {
      id: 2,
      company: "TechStart Inc",
      position: "Full Stack Engineer",
      status: "Interview",
      dateApplied: "2024-05-28",
    },
    {
      id: 3,
      company: "Innovation Labs",
      position: "React Developer",
      status: "Offer",
      dateApplied: "2024-05-25",
    },
    {
      id: 4,
      company: "Digital Solutions",
      position: "UI/UX Developer",
      status: "Rejected",
      dateApplied: "2024-05-20",
    },
  ])

  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    company: "",
    position: "",
    status: statusOptions[0],
    dateApplied: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleStatusChange = (status: string) => {
    setForm({ ...form, status })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.company || !form.position || !form.status || !form.dateApplied) return
    setJobApplications([
      ...jobApplications,
      {
        id: jobApplications.length + 1,
        ...form,
      },
    ])
    setForm({ company: "", position: "", status: statusOptions[0], dateApplied: "" })
    setOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Briefcase className="w-8 h-8" />
              </div>
              <div>
                <p className="text-blue-100 mt-1">Manage your job applications</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 dark:bg-white/10 dark:hover:bg-white/20"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button 
                size="sm" 
                className="bg-white text-blue-700 hover:bg-blue-50 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700" 
                onClick={() => setOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Application
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Applications</p>
                  <p className="text-3xl font-bold mt-1">24</p>
                </div>
                <Briefcase className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Interviews</p>
                  <p className="text-3xl font-bold mt-1">8</p>
                </div>
                <Calendar className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Offers</p>
                  <p className="text-3xl font-bold mt-1">3</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Response Rate</p>
                  <p className="text-3xl font-bold mt-1">67%</p>
                </div>
                <Building2 className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications Table */}
        <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Recent Applications</CardTitle>
                <CardDescription className="mt-1 dark:text-gray-400">Track your job application progress</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search applications..."
                    className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-100 dark:border-gray-700">
                  {tableHeaders.map((header) => (
                    <TableHead
                      key={header}
                      className="bg-gray-50/50 dark:bg-slate-800/50 text-gray-700 dark:text-gray-300 py-4 px-6 font-semibold text-sm tracking-wide"
                    >
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobApplications.map((application, index) => (
                  <TableRow
                    key={application.id}
                    className="hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors border-b border-gray-50 dark:border-gray-700 group"
                  >
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                          {application.company.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{application.company}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Technology</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <div className="font-medium text-gray-900 dark:text-white">{application.position}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Full-time</div>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <StatusBadge status={application.status} />
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {new Date(application.dateApplied).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>

      {/* Modal for Add Application */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white dark:bg-slate-800">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white">Add New Application</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
              <Input 
                name="company" 
                value={form.company} 
                onChange={handleChange} 
                placeholder="Company name" 
                className="dark:bg-slate-700 dark:text-white dark:border-gray-600"
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Position</label>
              <Input 
                name="position" 
                value={form.position} 
                onChange={handleChange} 
                placeholder="Position" 
                className="dark:bg-slate-700 dark:text-white dark:border-gray-600"
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Status</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button type="button" variant="outline" className="w-full justify-between dark:bg-slate-700 dark:text-white dark:border-gray-600">
                    {form.status}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dark:bg-slate-800 dark:text-white">
                  {statusOptions.map((status) => (
                    <DropdownMenuItem key={status} onClick={() => handleStatusChange(status)}>
                      {status}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date Applied</label>
              <Input 
                name="dateApplied" 
                type="date" 
                value={form.dateApplied} 
                onChange={handleChange} 
                className="dark:bg-slate-700 dark:text-white dark:border-gray-600"
                required 
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">Add</Button>
              <DialogClose asChild>
                <Button type="button" variant="outline" className="dark:bg-slate-700 dark:text-white dark:border-gray-600">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Dashboard
