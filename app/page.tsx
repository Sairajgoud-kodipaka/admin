"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import Cookies from "js-cookie"

export default function LoginPage() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (credentials.username === "ADMIN" && credentials.password === "ADMIN") {
      // Set authentication cookie
      Cookies.set("authenticated", "true", { expires: 1 }) // Expires in 1 day
      toast.success("Login successful!")
      router.push("/create")
    } else {
      toast.error("Invalid credentials. Please try again.")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-8">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-16  rounded-lg flex items-center img-logo.png justify-center">
            <img className="w-10 h-10 -ml-48 mr-28 align-top" src="logo.png" alt="image description" />
           
            <span className="text-2xl font-bold text-center">ADMIN</span>
          </div>
        </div>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Login ID</label>
            <Input
              type="text"
              placeholder="Enter your Login-ID"
              className="bg-white text-slate-800 hover:g"
              value={credentials.username}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              placeholder="Enter the password"
              className="bg-white-600 text-slate-400"
              value={credentials.password}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>

          <Button type="submit" className="w-full bg-black hover:bg-black/90 text-white">
            LOGIN
          </Button>
        </form>
      </div>
    </main>
  )
}

