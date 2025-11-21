import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        <Hero />
        <Pricing />
        <div id="signup" className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-2">Your Dashboard</h2>
          <p className="text-slate-300 mb-6">Use the upload button to add PDF invoices. The AI will auto-fill details which you can edit, then export to CSV.</p>
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default App
