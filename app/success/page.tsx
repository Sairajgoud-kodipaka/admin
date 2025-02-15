import { Pencil, Eye, Upload } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
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

        <div className="bg-gray-200 p-12 rounded-lg text-center">
          <p className="mb-4">MARKS OF 217023026033 (name) have been successfully uploaded.</p>
          <p>
            click{" "}
            <Link href="/view" className="underline">
              here
            </Link>{" "}
            to see the preview
          </p>
        </div>
      </div>
    </main>
  )
}

