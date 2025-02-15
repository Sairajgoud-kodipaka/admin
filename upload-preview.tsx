export default function UploadPreview() {
  return (
    <div className="min-h-screen bg-[#ffffff] p-8 font-mono">
      {/* Navigation Tabs */}
      <nav className="max-w-3xl mx-auto flex justify-between mb-12">
        <div className="flex-1 text-center">
          <h2 className="text-xl font-bold">Create</h2>
          <div className="h-[1px] bg-[#000000] mt-1"></div>
        </div>
        <div className="flex-1 text-center">
          <h2 className="text-xl font-bold">View</h2>
          <div className="h-[1px] bg-[#000000] mt-1"></div>
        </div>
        <div className="flex-1 text-center">
          <h2 className="text-xl font-bold">Upload</h2>
          <div className="h-[1px] bg-[#000000] mt-1"></div>
        </div>
      </nav>

      {/* Content Area */}
      <div className="max-w-3xl mx-auto bg-[#d9d9d9] aspect-video flex flex-col items-center justify-center p-8">
        <p className="text-center mb-4">MARKS OF 217023026033 (name) have been sucessfully uploaded.</p>
        <p className="text-center">
          click{" "}
          <a href="#" className="underline">
            here
          </a>{" "}
          to see the preview
        </p>
      </div>
    </div>
  )
}

