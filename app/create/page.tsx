"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil, Eye, Upload } from "lucide-react"
import Link from "next/link"

export default function CreatePage() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    batch: "",
    hallTicket: "",
    dob: "",
    code: "",
    yearOfStudy: "",
  })

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-3xl mx-auto">
        <nav className="flex justify-between mb-8 border-b">
          <Link href="/create" className="flex items-center gap-2 px-4 py-2 border-b-2 border-blue-600">
            Create <Pencil className="w-4 h-4" />
          </Link>
          <Link href="/view" className="flex items-center gap-2 px-4 py-2">
            View <Eye className="w-4 h-4" />
          </Link>
          <Link href="/upload" className="flex items-center gap-2 px-4 py-2">
            Upload <Upload className="w-4 h-4" />
          </Link>
        </nav>

        <form className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <label className="w-48 text-sm font-medium">Enter name :</label>
              <Input className="flex-1 bg-gray-100" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-48 text-sm font-medium">Enter Father&apos;s Name:</label>
              <Input className="flex-1 bg-gray-100" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-48 text-sm font-medium">Enter Batch :</label>
              <Input className="flex-1 bg-gray-100" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-48 text-sm font-medium">Enter Hall-Ticket No:</label>
              <Input className="flex-1 bg-gray-100" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-48 text-sm font-medium">Enter DOB :</label>
              <Input type="date" className="flex-1 bg-gray-100" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-48 text-sm font-medium">Enter CODE :</label>
              <Input className="flex-1 bg-gray-100" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-48 text-sm font-medium">Enter Year Of Study :</label>
              <Input className="flex-1 bg-gray-100" />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button className="bg-black hover:bg-black/90">Submit</Button>
            <Button className="bg-black hover:bg-black/90">Save & View</Button>
          </div>
        </form>
      </div>
    </main>
  )
}

