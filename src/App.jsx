import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Palette, Type, LayoutGrid, Square, Circle, MousePointerClick,
  Search, ChevronDown, Share2, Home, Briefcase, Folder, Calendar,
  Bell, Menu, X, Plus, ArrowRight, Clock, MapPin, Star, Check,
  Loader2, TrendingUp, Users, Activity, BarChart3
} from 'lucide-react'

const colors = {
  primary: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3B82F6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a'],
  secondary: ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8B5CF6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95'],
  neutral: ['#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b'],
  success: ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d'],
  error: ['#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d'],
}

function App() {
  const [activeSection, setActiveSection] = useState('color-palette')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState(false)

  const navItems = [
    { id: 'foundations', label: 'FOUNDATIONS', items: [
      { id: 'color-palette', label: 'Color Palette' },
      { id: 'typography', label: 'Typography' },
      { id: 'spacing-radius', label: 'Spacing & Radius' },
    ]},
    { id: 'components', label: 'COMPONENTS', items: [
      { id: 'buttons', label: 'Buttons' },
      { id: 'inputs', label: 'Inputs' },
      { id: 'cards', label: 'Cards' },
      { id: 'navigation', label: 'Navigation' },
      { id: 'data-display', label: 'Data Display' },
      { id: 'feedback', label: 'Feedback' },
      { id: 'layout', label: 'Layout Example' },
    ]},
  ]

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const showToast = () => {
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`glass fixed lg:sticky top-0 h-screen w-72 flex-shrink-0 z-50 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="p-6 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <LayoutGrid className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Parallax Labs</h2>
              <p className="text-xs text-white/60">Design System</p>
            </div>
          </div>
        </div>
        <nav className="p-4 overflow-y-auto h-[calc(100vh-88px)]">
          {navItems.map((section) => (
            <div key={section.id} className="mb-6">
              <p className="text-xs font-semibold text-white/40 px-3 mb-2 tracking-wider">{section.label}</p>
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-primary text-white shadow-lg shadow-blue-500/20'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </motion.aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 glass p-2 rounded-lg"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Enterprise AI SaaS</span> Design System
          </h1>
          <p className="text-white/60 text-lg">Premium dark theme showcase - Parallax Labs style</p>
        </motion.div>

        {/* Color Palette */}
        {activeSection === 'color-palette' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Color Palette</h2>
            <div className="space-y-8">
              {Object.entries(colors).map(([name, shades]) => (
                <div key={name} className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 capitalize text-white">{name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3">
                    {shades.map((color, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="group relative"
                      >
                        <div 
                          className="h-20 rounded-lg border border-white/10 mb-2"
                          style={{ backgroundColor: color }}
                        />
                        <p className="text-xs text-white/60">{color}</p>
                        <p className="text-xs text-white/40">{i === 5 ? `${name}-500` : `${name}-${(i+1)*100}`}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Typography */}
        {activeSection === 'typography' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Typography</h2>
            <div className="glass rounded-xl p-6 lg:p-8 space-y-6">
              <div>
                <p className="text-sm text-white/40 mb-4">Font Family: Inter</p>
                <div className="space-y-4">
                  <div className="border-b border-white/8 pb-4">
                    <p className="text-xs text-white/40 mb-2">H1 - 48-60px / 800</p>
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-white">The quick brown fox</h1>
                  </div>
                  <div className="border-b border-white/8 pb-4">
                    <p className="text-xs text-white/40 mb-2">H2 - 36-48px / 700</p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">The quick brown fox jumps</h2>
                  </div>
                  <div className="border-b border-white/8 pb-4">
                    <p className="text-xs text-white/40 mb-2">H3 - 30-36px / 600</p>
                    <h3 className="text-3xl lg:text-4xl font-semibold text-white">The quick brown fox jumps over</h3>
                  </div>
                  <div className="border-b border-white/8 pb-4">
                    <p className="text-xs text-white/40 mb-2">H4 - 24-30px / 600</p>
                    <h4 className="text-2xl lg:text-3xl font-semibold text-white">The quick brown fox jumps over the lazy dog</h4>
                  </div>
                  <div className="border-b border-white/8 pb-4">
                    <p className="text-xs text-white/40 mb-2">Body - 16px / 400</p>
                    <p className="text-base text-white/87">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-2">Caption - 14px / 400</p>
                    <p className="text-sm text-white/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Spacing & Radius */}
        {activeSection === 'spacing-radius' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Spacing & Radius</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Spacing Scale</h3>
                <div className="space-y-3">
                  {[4, 8, 12, 16, 24, 32].map((space) => (
                    <div key={space} className="flex items-center gap-4">
                      <div className="w-20 text-sm text-white/60">{space}px</div>
                      <div className="bg-gradient-primary h-8" style={{ width: `${space * 2}px` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Border Radius</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm text-white/60">4px</div>
                    <div className="w-16 h-16 glass rounded-sm" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm text-white/60">8px</div>
                    <div className="w-16 h-16 glass rounded" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm text-white/60">12px</div>
                    <div className="w-16 h-16 glass rounded-md" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm text-white/60">16px</div>
                    <div className="w-16 h-16 glass rounded-lg" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm text-white/60">24px</div>
                    <div className="w-16 h-16 glass rounded-xl" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-sm text-white/60">32px</div>
                    <div className="w-16 h-16 glass rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Buttons */}
        {activeSection === 'buttons' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Buttons</h2>
            <div className="glass rounded-xl p-6 lg:p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-white/60 mb-4">Primary</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-2.5 bg-gradient-primary rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                      Default
                    </button>
                    <button className="px-6 py-2.5 bg-gradient-primary rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                      Hover State
                    </button>
                    <button onClick={handleLoading} className="px-6 py-2.5 bg-gradient-primary rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2">
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                      {loading ? 'Loading...' : 'Loading'}
                    </button>
                    <button disabled className="px-6 py-2.5 bg-white/10 rounded-lg text-white/40 font-medium cursor-not-allowed">
                      Disabled
                    </button>
                  </div>
                </div>
                <div className="border-t border-white/8 pt-6">
                  <p className="text-sm text-white/60 mb-4">Secondary</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-2.5 glass glass-hover rounded-lg text-white font-medium">
                      Default
                    </button>
                    <button className="px-6 py-2.5 glass glass-hover rounded-lg text-white font-medium">
                      Hover
                    </button>
                    <button disabled className="px-6 py-2.5 glass rounded-lg text-white/40 font-medium cursor-not-allowed">
                      Disabled
                    </button>
                  </div>
                </div>
                <div className="border-t border-white/8 pt-6">
                  <p className="text-sm text-white/60 mb-4">Ghost</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-2.5 hover:bg-white/5 rounded-lg text-white/80 hover:text-white font-medium transition-all">
                      Default
                    </button>
                    <button className="px-6 py-2.5 hover:bg-white/5 rounded-lg text-white/80 hover:text-white font-medium transition-all">
                      Hover
                    </button>
                  </div>
                </div>
                <div className="border-t border-white/8 pt-6">
                  <p className="text-sm text-white/60 mb-4">Destructive</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-2.5 bg-error-500 hover:bg-error-600 rounded-lg text-white font-medium transition-all">
                      Delete
                    </button>
                    <button disabled className="px-6 py-2.5 bg-error-500/20 rounded-lg text-white/40 font-medium cursor-not-allowed">
                      Disabled
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Inputs */}
        {activeSection === 'inputs' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Inputs</h2>
            <div className="glass rounded-xl p-6 lg:p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-white/80 mb-2 block">Text Input</label>
                  <input 
                    type="text" 
                    placeholder="Enter text..." 
                    className="w-full px-4 py-2.5 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/80 mb-2 block">Search with Icon</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="w-full pl-10 pr-4 py-2.5 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm text-white/80 mb-2 block">Textarea</label>
                <textarea 
                  rows="4"
                  placeholder="Enter your message..." 
                  className="w-full px-4 py-2.5 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>
              <div className="md:w-1/2">
                <label className="text-sm text-white/80 mb-2 block">Select Dropdown</label>
                <div className="relative">
                  <select className="w-full px-4 py-2.5 glass rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Cards */}
        {activeSection === 'cards' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Cards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div whileHover={{ scale: 1.02 }} className="glass glass-hover rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-white/60">Experience</p>
                  <Briefcase className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">9.3 yrs</h3>
                <p className="text-sm text-success-400 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +2.1 from last year
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="glass glass-hover rounded-xl overflow-hidden">
                <div className="h-32 bg-gradient-primary relative">
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">AI Resume Parser</h3>
                  <p className="text-sm text-white/60 mb-4">Intelligent parsing and analysis of resumes using machine learning</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">AI/ML</span>
                    <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      View Project <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="glass glass-hover rounded-xl p-6 border-2 border-blue-500/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-primary px-3 py-1 text-xs text-white">Popular</div>
                <h3 className="text-xl font-semibold text-white mb-2">Pro Plan</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">$49</span>
                  <span className="text-white/60">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-success-400" />
                    Unlimited Projects
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-success-400" />
                    Priority Support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-success-400" />
                    Advanced Analytics
                  </li>
                </ul>
                <button className="w-full py-2.5 bg-gradient-primary rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Navigation */}
        {activeSection === 'navigation' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Navigation</h2>
            <div className="space-y-6">
              <div className="glass rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
                  <nav className="hidden md:flex items-center gap-6">
                    <a href="#" className="text-sm text-white hover:text-blue-400 transition-colors">Home</a>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Projects</a>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Teams</a>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Settings</a>
                  </nav>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 glass glass-hover rounded-lg text-sm text-white flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <div className="w-8 h-8 rounded-full bg-gradient-primary" />
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-2 text-sm">
                <Home className="w-4 h-4 text-white/60" />
                <span className="text-white/40">/</span>
                <span className="text-white/60">Projects</span>
                <span className="text-white/40">/</span>
                <span className="text-white">AI Resume Parser</span>
              </div>
            </div>
          </motion.section>
        )}

        {/* Data Display */}
        {activeSection === 'data-display' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Data Display</h2>
            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Experience Timeline</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-success-500 shadow-lg shadow-success-500/50" />
                      <div className="w-0.5 h-full bg-white/10 mt-2" />
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-white">Senior AI Engineer</h4>
                          <p className="text-white/60">Parallax Labs</p>
                        </div>
                        <span className="px-3 py-1 bg-success-500/20 text-success-400 text-sm rounded-full">2.5 yrs</span>
                      </div>
                      <p className="text-sm text-white/60 mb-2">2024 - Present</p>
                      <p className="text-sm text-white/80">Leading AI/ML initiatives and building enterprise SaaS products</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <div className="w-0.5 h-full bg-white/10 mt-2" />
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-white">Full Stack Developer</h4>
                          <p className="text-white/60">TechCorp Inc.</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">3.2 yrs</span>
                      </div>
                      <p className="text-sm text-white/60 mb-2">2021 - 2024</p>
                      <p className="text-sm text-white/80">Developed scalable web applications and microservices</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-white">Junior Developer</h4>
                          <p className="text-white/60">StartupXYZ</p>
                        </div>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">1.6 yrs</span>
                      </div>
                      <p className="text-sm text-white/60 mb-2">2020 - 2021</p>
                      <p className="text-sm text-white/80">Frontend development and UI/UX implementation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="border-b border-white/8">
                    <tr>
                      <th className="text-left p-4 text-sm font-semibold text-white/80">Name</th>
                      <th className="text-left p-4 text-sm font-semibold text-white/80">Status</th>
                      <th className="text-left p-4 text-sm font-semibold text-white/80">Role</th>
                      <th className="text-left p-4 text-sm font-semibold text-white/80">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/8 hover:bg-white/2 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary" />
                        <span className="text-white">Alex Johnson</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-success-500/20 text-success-400 text-xs rounded-full">Active</span>
                      </td>
                      <td className="p-4 text-white/80">Admin</td>
                      <td className="p-4 text-white/60">Oct 28, 2026</td>
                    </tr>
                    <tr className="border-b border-white/8 hover:bg-white/2 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary" />
                        <span className="text-white">Sarah Chen</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Pending</span>
                      </td>
                      <td className="p-4 text-white/80">Editor</td>
                      <td className="p-4 text-white/60">Oct 27, 2026</td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary" />
                        <span className="text-white">Mike Davis</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">Inactive</span>
                      </td>
                      <td className="p-4 text-white/80">Viewer</td>
                      <td className="p-4 text-white/60">Oct 26, 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">Primary</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">Secondary</span>
                <span className="px-3 py-1 bg-success-500/20 text-success-400 text-sm rounded-full">Success</span>
                <span className="px-3 py-1 bg-error-500/20 text-error-400 text-sm rounded-full">Error</span>
                <span className="px-3 py-1 glass text-white/80 text-sm rounded-full">Default</span>
              </div>
            </div>
          </motion.section>
        )}

        {/* Feedback */}
        {activeSection === 'feedback' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Feedback</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Modal</h3>
                <button onClick={() => setModalOpen(true)} className="px-6 py-2.5 bg-gradient-primary rounded-lg text-white font-medium">
                  Open Modal
                </button>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Toast</h3>
                <button onClick={showToast} className="px-6 py-2.5 bg-gradient-primary rounded-lg text-white font-medium">
                  Show Toast
                </button>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Progress Bar</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm text-white/60 mb-1">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Skeleton Loader</h3>
                <div className="space-y-3">
                  <div className="h-4 bg-white/10 rounded animate-pulse" />
                  <div className="h-4 bg-white/10 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-white/10 rounded animate-pulse w-1/2" />
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Layout Example */}
        {activeSection === 'layout' && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Full Dashboard Layout Example</h2>
            <div className="glass rounded-xl overflow-hidden">
              <div className="p-4 border-b border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
                  <h3 className="font-semibold text-white">Dashboard</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-white/5 rounded-lg"><Bell className="w-5 h-5 text-white/60" /></button>
                  <div className="w-8 h-8 rounded-full bg-gradient-primary" />
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="glass rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-xs text-success-400">+12%</span>
                    </div>
                    <p className="text-2xl font-bold text-white">2,543</p>
                    <p className="text-xs text-white/60">Total Users</p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Activity className="w-5 h-5 text-purple-400" />
                      <span className="text-xs text-success-400">+8%</span>
                    </div>
                    <p className="text-2xl font-bold text-white">1,234</p>
                    <p className="text-xs text-white/60">Active Now</p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <BarChart3 className="w-5 h-5 text-success-400" />
                      <span className="text-xs text-success-400">+23%</span>
                    </div>
                    <p className="text-2xl font-bold text-white">$45.2K</p>
                    <p className="text-xs text-white/60">Revenue</p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Folder className="w-5 h-5 text-yellow-400" />
                      <span className="text-xs text-success-400">+5%</span>
                    </div>
                    <p className="text-2xl font-bold text-white">892</p>
                    <p className="text-xs text-white/60">Projects</p>
                  </div>
                </div>
                <div className="glass rounded-lg p-6 h-64 flex items-center justify-center">
                  <p className="text-white/40">Chart Placeholder - Analytics Overview</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </main>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass rounded-xl max-w-md w-full p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Modal Title</h3>
              <button onClick={() => setModalOpen(false)} className="p-1 hover:bg-white/5 rounded">
                <X className="w-5 h-5 text-white/60" />
              </button>
            </div>
            <p className="text-white/80 mb-6">This is a premium glassmorphism modal with smooth animations.</p>
            <div className="flex gap-3">
              <button onClick={() => setModalOpen(false)} className="flex-1 px-4 py-2 glass glass-hover rounded-lg text-white">
                Cancel
              </button>
              <button onClick={() => setModalOpen(false)} className="flex-1 px-4 py-2 bg-gradient-primary rounded-lg text-white">
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 right-4 glass rounded-lg px-6 py-3 flex items-center gap-2 z-50"
        >
          <Check className="w-5 h-5 text-success-400" />
          <span className="text-white">Action completed successfully!</span>
        </motion.div>
      )}
    </div>
  )
}

export default App
