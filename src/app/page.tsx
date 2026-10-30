'use client'
import AccessibilityBar from '@/components/AccessibilityBar'
import SHAChecker from '@/components/SHAChecker'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function Home() {
  const [search, setSearch] = useState('')
  const [hospitals, setHospitals] = useState<any[]>([])
  const [problems, setProblems] = useState<any[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      const { data: hData, error: hErr } = await supabase.from('hospitals').select('*').limit(4)
      if (hErr) setError(hErr.message)
      else setHospitals(hData || [])
      
      const { data: pData } = await supabase.from('problems').select('*').limit(5)
      setProblems(pData || [])
    }
    load()
  }, [])

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      <AccessibilityBar />
      <div className="p-4 bg-white">
        <h1 className="text-xl font-bold">Quality Health Care for Everyone, Everywhere</h1>
        <p className="text-xs text-gray-500 mt-1">Adults | Children | Disabilities — SHA + M-Pesa — All Diseases</p>

        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search malaria, toothache, eye, mama..." className="w-full border p-3 rounded-xl mt-4 text-sm" />

        <div className="mt-4"><SHAChecker /></div>

        <div className="mt-4">
          <h2 className="font-bold text-sm">Hospitals Near You — Keroka</h2>
          {error && <p className="text-xs text-red-500">{error}</p>}
          {hospitals.length > 0 ? hospitals.map((h) => (
            <div key={h.id} className="border p-3 rounded-xl mt-2 flex justify-between">
              <div>
                <p className="font-bold text-sm">{h.name || h.name_en || h.hospital_name || 'Hospital'}</p>
                <p className="text-xs text-gray-500">{h.county || h.location || h.sub_county || ''} — ⭐ {h.rating || '4.5'}</p>
                <p className="text-[10px]">Paybill {h.paybill || '200222'}</p>
              </div>
              <Link href="/hospitals" className="text-blue-600 text-xs">Book ›</Link>
            </div>
          )) : <p className="text-xs text-red-500 mt-2">Loading hospitals from Supabase... {hospitals.length} found. Check console F12</p>}
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-sm">Common Problems — With KSL Video</h2>
          {problems.map((p) => (
            <div key={p.id} className="border p-3 rounded-xl mt-2">
              <p className="font-bold text-sm">{p.icon || '🩺'} {p.name_en || p.name}</p>
              <p className="text-xs text-gray-500">{p.description_en || p.description || ''}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-xl">
          <p className="text-xs font-bold">📺 AdMob Banner — Video Education — Earn</p>
        </div>
        <div className="mt-4 p-3 bg-gray-900 text-white rounded-xl">
          <p className="text-xs font-bold">M-Pesa: Paybill 200222 / Till 000000</p>
          <p className="text-[10px]">Owner: +254795682865 — jacksonkinuthia347@gmail.com</p>
        </div>
        <div className="h-20"></div>
      </div>

      <div className="fixed bottom-0 w-full max-w-md bg-white border-t flex justify-around p-3 text-xs">
        <span className="text-blue-600">🏠 Home</span><span>📷 Scan</span><span>👤 Profile</span>
      </div>
    </div>
  )
}