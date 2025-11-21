export default function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12 text-white">
        <h2 className="text-3xl font-bold">Simple pricing</h2>
        <p className="mt-2 text-slate-300">Start free. Upgrade when you need more.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/50">
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="text-slate-300">50 AI credits, upload PDFs, manual edits</p>
            <p className="mt-4 text-3xl font-extrabold">$0</p>
          </div>
          <div className="p-6 rounded-2xl border border-indigo-400/30 bg-indigo-600/10">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-slate-200">Unlimited uploads, priority processing</p>
            <p className="mt-4 text-3xl font-extrabold">$49/mo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
