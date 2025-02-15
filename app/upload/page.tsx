import { Button } from "@/components/ui/button"
import { Pencil, Eye, Upload } from "lucide-react"
import Link from "next/link"

export default function UploadPage() {
  const subjects = [
    "C Programming",
    "Logic Theory",
    "Mathematics-1",
    "Communication Skills",
    "Business Economics",
    "Communication Skills",
    "",
    "INFORMATION TECHNOLOGY (LAB EXTERNAL)",
    "C LANGUAGE (LAB EXTERNAL)",
    "",
    "CGPA",
    "SCGPA",
    "STATUS",
  ]

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-3xl mx-auto">
        <nav className="flex justify-between mb-8 border-b">
          <Link href="/create" className="flex items-center gap-2 px-4 py-2">
            Create <Pencil className="w-4 h-4" />
          </Link>
          <Link href="/view" className="flex items-center gap-2 px-4 py-2">
            View <Eye className="w-4 h-4" />
          </Link>
          <Link href="/upload" className="flex items-center gap-2 px-4 py-2 border-b-2 border-blue-600">
            Upload <Upload className="w-4 h-4" />
          </Link>
        </nav>

        <div className="bg-gray-200 p-6 rounded-lg">
          <div className="bg-black text-white rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left border-b border-gray-700">Subjects</th>
                  <th className="px-4 py-2 text-left border-b border-gray-700">Marks Scored</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => (
                  <tr key={index} className="border-b border-gray-700 last:border-0">
                    <td className="px-4 py-2">{subject || "—"}</td>
                    <td className="px-4 py-2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="secondary">Upload marks</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

