import React from 'react'
import {
  LayoutDashboard,
  CalendarCheck,
  CalendarDays,
  Receipt,
  Settings
} from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white">

      {/* Profile */}
      <div className="flex flex-col items-center py-6 border-b border-slate-700">

        {/* Profile Image */}
        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-semibold">
          E
        </div>

        {/* Employee Name */}
        <h2 className="mt-3 text-base font-semibold">
          Employee Name
        </h2>

      </div>

      {/* Navigation */}
      <nav className="px-4 py-6">

        <p className="text-xs font-semibold text-slate-400 uppercase mb-4">
          Navigation
        </p>

        {/* Dashboard */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 text-white mb-2"
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>

        {/* Attendance */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition mb-2"
        >
          <CalendarCheck size={20} />
          <span>Attendance</span>
        </a>

        {/* Leave */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition mb-2"
        >
          <CalendarDays size={20} />
          <span>Leave</span>
        </a>

        {/* Payslips */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition mb-2"
        >
          <Receipt size={20} />
          <span>Payslips</span>
        </a>

        {/* Settings */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
        >
          <Settings size={20} />
          <span>Settings</span>
        </a>

      </nav>

    </div>
  )
}

export default Sidebar