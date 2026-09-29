import React, { useState } from 'react'
import LoginLeftSide from './LoginLeftSide'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, Eye, EyeOff } from 'lucide-react'

const LoginForm = ({ role, title, subtitle }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <LoginLeftSide />

      <div className="flex-1 flex items-center justify-center px-6">

        <div className="w-full max-w-md animate-fade-in">

          {/* Back to portals */}
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors"
          >
            <ArrowLeftIcon size={16} />
            Back to portals
          </Link>

          {/* Title */}
          <div className="mb-8">

            <h1 className="text-2xl sm:text-3xl font-medium text-zinc-800">
              {title}
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              {subtitle}
            </p>

          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded flex items-start gap-3 p-4">

              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></div>

              <span>{error}</span>

            </div>
          )}

          {/* Login Form */}
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >

            {/* Email */}
            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="......"
                  className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default LoginForm