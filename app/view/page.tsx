import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pencil, Eye, Upload, UserCircle, PenSquare } from "lucide-react"
import Link from "next/link"

export default function ViewPage() {
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-3xl mx-auto">
        <nav className="flex justify-between mb-8 border-b">
          <Link href="/create" className="flex items-center gap-2 px-4 py-2">
            Create <Pencil className="w-4 h-4" />
          </Link>
          <Link href="/view" className="flex items-center gap-2 px-4 py-2 border-b-2 border-blue-600">
            View <Eye className="w-4 h-4" />
          </Link>
          <Link href="/upload" className="flex items-center gap-2 px-4 py-2">
            Upload <Upload className="w-4 h-4" />
          </Link>
        </nav>

        <div className="mb-6 flex gap-4">
          <Input placeholder="Enter Hall-Ticket No:" className="max-w-md bg-gray-100" />
          <Button className="bg-black hover:bg-black/90">Search</Button>
        </div>

        <div className="bg-gray-200 p-6 rounded-lg">
          <div className="bg-gray-400 p-6 rounded-lg relative">
            <UserCircle className="absolute top-4 right-4 w-12 h-12" />
            <PenSquare className="absolute top-4 right-20 w-6 h-6" />

            <div className="space-y-2 mb-6">
              <p>
                <span className="font-medium">Name :</span> Binod
              </p>
              <p>
                <span className="font-medium">Hall-Ticket No :</span> 217023026031
              </p>
              <p>
                <span className="font-medium">Batch :</span> A
              </p>
              <p>
                <span className="font-medium">SEM: </span> I
              </p>
              <p>
                <span className="font-medium">Year :</span> 1
              </p>
              <p>
                <span className="font-medium">Fee Status:</span> completed !!
              </p>
              <p>
                <span className="font-medium">Attendance :</span> 75&#60;=
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="secondary">Verified</Button>
              <Button variant="secondary">Upload marks</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

