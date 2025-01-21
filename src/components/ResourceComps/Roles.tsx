import React from 'react'

export default function Roles({ roles }: { roles: string }) {
  return (
    <div className="px-6 py-4 cursor-not-allowed backdrop:blur-md sm:mt-10 text-center font-semibold border-[8.19px] border-white/30 text-[#153899] bg-[#1d4ed8]/10 hover:bg-[#1d4ed8]/30 rounded-full flex items-center justify-center">
      {roles}
    </div>
  )
}
