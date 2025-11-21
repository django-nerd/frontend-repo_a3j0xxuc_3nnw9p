import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[520px] rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-xl">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
            InvoiceFlow AI
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200/90">
            Upload invoices, let AI extract the details, and export to CSV. Built for finance teams.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition">Pricing</a>
            <a href="#signup" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">Sign Up</a>
          </div>
        </div>
      </div>
    </section>
  )
}
