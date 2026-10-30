'use client'
import { useState } from 'react'
import { calcRemaining } from '@/lib/sha'

export default function SHAChecker() {
  const [type, setType] = useState<'SHIF' | 'POMSF'>('SHIF')
  const limit = type === 'SHIF' ? 2000 : 45000
  const used = 0
  const fee = 500
  const remaining = calcRemaining(limit, used, fee)

  return (
    <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
      <p className="text-xs font-bold mb-2">SHA Checker / Kuangalia SHA</p>
      <div className="flex gap-2 mb-2">
        <button onClick={() => setType('SHIF')} className={type === 'SHIF' ? 'bg-green-600 text-white px-3 py-1 rounded-full text-xs' : 'bg-white border px-3 py-1 rounded-full text-xs'}>SHIF 2k</button>
        <button onClick={() => setType('POMSF')} className={type === 'POMSF' ? 'bg-blue-600 text-white px-3 py-1 rounded-full text-xs' : 'bg-white border px-3 py-1 rounded-full text-xs'}>POMSF 45k Family</button>
      </div>
      <p className="text-xs">SHA Pays: Ksh {fee} | You Pay: 0 | Remaining: Ksh {remaining}</p>
      <p className="text-[10px] text-gray-500 mt-1">Family covers 6 members / Familia watu 6</p>
    </div>
  )
}