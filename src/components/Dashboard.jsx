import { useEffect, useState, useRef } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Dashboard() {
  const [invoices, setInvoices] = useState([])
  const [userId, setUserId] = useState('demo-user-1')
  const fileRef = useRef()
  const [loading, setLoading] = useState(false)

  const fetchInvoices = async () => {
    const res = await fetch(`${API}/api/invoices`, {
      headers: { 'x-user-id': userId }
    })
    const data = await res.json()
    setInvoices(data)
  }

  useEffect(() => {
    fetchInvoices()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  const onUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setLoading(true)
    const fd = new FormData()
    fd.append('file', file)
    await fetch(`${API}/api/invoices/upload`, {
      method: 'POST',
      headers: { 'x-user-id': userId },
      body: fd,
    })
    setLoading(false)
    fileRef.current.value = ''
    fetchInvoices()
  }

  const onChangeField = async (id, field, value) => {
    await fetch(`${API}/api/invoices/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
      body: JSON.stringify({ invoice_id: id, [field]: value })
    })
    fetchInvoices()
  }

  const onExport = () => {
    window.open(`${API}/api/invoices/export`, '_blank')
  }

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Your Invoices</h2>
        <div className="flex items-center gap-3">
          <label className="px-4 py-2 rounded-lg bg-indigo-600 text-white cursor-pointer hover:bg-indigo-500">
            <input ref={fileRef} type="file" accept="application/pdf,image/*" className="hidden" onChange={onUpload} />
            {loading ? 'Uploading...' : 'Upload Invoice'}
          </label>
          <button onClick={onExport} className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20">Export to CSV</button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/50">
        <table className="min-w-full text-sm text-slate-200">
          <thead className="text-slate-300/80">
            <tr>
              <th className="px-4 py-3 text-left">File</th>
              <th className="px-4 py-3 text-left">Invoice #</th>
              <th className="px-4 py-3 text-left">Vendor</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id} className="border-t border-white/10">
                <td className="px-4 py-3">{inv.file_name || '-'}</td>
                <td className="px-4 py-3">
                  <input className="bg-transparent border border-white/10 rounded px-2 py-1 w-40" value={inv.invoice_number || ''} onChange={(e)=>onChangeField(inv.id,'invoice_number', e.target.value)} />
                </td>
                <td className="px-4 py-3">
                  <input className="bg-transparent border border-white/10 rounded px-2 py-1 w-40" value={inv.vendor_name || ''} onChange={(e)=>onChangeField(inv.id,'vendor_name', e.target.value)} />
                </td>
                <td className="px-4 py-3">
                  <input className="bg-transparent border border-white/10 rounded px-2 py-1 w-40" value={inv.date || ''} onChange={(e)=>onChangeField(inv.id,'date', e.target.value)} />
                </td>
                <td className="px-4 py-3">
                  <input className="bg-transparent border border-white/10 rounded px-2 py-1 w-28" value={inv.total_amount || ''} onChange={(e)=>onChangeField(inv.id,'total_amount', parseFloat(e.target.value)||0)} />
                </td>
                <td className="px-4 py-3">
                  <select className="bg-transparent border border-white/10 rounded px-2 py-1" value={inv.status || 'Processing'} onChange={(e)=>onChangeField(inv.id,'status', e.target.value)}>
                    <option className="bg-slate-800" value="Processing">Processing</option>
                    <option className="bg-slate-800" value="Needs Review">Needs Review</option>
                    <option className="bg-slate-800" value="Approved">Approved</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
