'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Code2, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Play,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: Shield,
      title: "Real-Time Guardrails",
      description: "Joins as a security teammate in VS Code, Cursor, and Claude Code. Blocks vulnerabilities before AI suggests them.",
      highlights: ["IDE extension for instant feedback", "MCP server for Claude Code", "Blocks dangerous patterns in milliseconds"]
    },
    {
      icon: Code2,
      title: "Semantic Analysis",
      description: "AI code looks 90% correct. That's the dangerous part. We find the 10% that looks right but kills you in production.",
      highlights: ["SQL injections that look parameterized", "Auth that looks solid but bypasses 2FA", "Dependencies that don't exist"]
    },
    {
      icon: Zap,
      title: "Model Fingerprinting",
      description: "Know which AI wrote your code and what mistakes it typically makes. Predict vulnerabilities before they happen.",
      highlights: ["GPT-4: Overcomplicates auth patterns", "Claude: Best with prompt injections", "Copilot: Higher secret leakage rate"]
    }
  ]

  const stats = [
    { value: "45%", label: "Of AI code has vulnerabilities", source: "Veracade 2025" },
    { value: "1 in 5", label: "Orgs breached by AI code", source: "Aikido Security 2026" },
    { value: "3x", label: "More vulnerabilities vs human code", source: "Security Research" }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "For small teams getting started with AI coding",
      features: [
        "Up to 5 developers",
        "500 scans/day",
        "Basic vulnerability detection",
        "Community support",
        "VS Code extension"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "For growing teams with AI-native workflows",
      features: [
        "Up to 25 developers",
        "Unlimited scans",
        "Semantic vulnerability analysis",
        "Model fingerprinting",
        "Slack & Discord integration",
        "Priority support",
        "SSO ready"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations with advanced security needs",
      features: [
        "Unlimited developers",
        "Custom deployment options",
        "Advanced analytics & reporting",
        "Dedicated success manager",
        "SLA guarantee",
        "On-premise available",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  const testimonials = [
    {
      quote: "ZeroFalse caught an SQL injection that looked exactly like a parameterized query. Our senior engineer missed it. ZeroFalse didn't.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      image: "/api/placeholder/48/48"
    },
    {
      quote: "The model fingerprinting feature alone saved us from three potential breaches in our first month.",
      author: "Michael Rodriguez",
      role: "Head of Engineering",
      company: "DataFlow",
      image: "/api/placeholder/48/48"
    }
  ]

  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-cyan-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              Now supporting GPT-5, Claude 4, and Copilot X
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
            >
              The Intent Firewall for{' '}
              <span className="text-gradient">AI-Native</span> Development
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-navy-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              AI agents write code that looks correct. <span className="text-white font-semibold">45% of it has dangerous vulnerabilities.</span> 
              ZeroFalse finds the threats that look right but kill you in production.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-navy-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/25 group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white glass rounded-lg hover:bg-white/10 transition-all duration-200 group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-8 text-navy-400 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                Setup in 2 minutes
              </span>
            </motion.div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-20 relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30" />
            <div className="relative glass-strong rounded-2xl p-2">
              <div className="bg-navy-950 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-navy-800">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-danger" />
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <div className="w-3 h-3 rounded-full bg-success" />
                  </div>
                  <div className="flex-1 text-center text-sm text-navy-400 font-mono">
                    ZeroFalse Dashboard
                  </div>
                </div>
                <div className="p-6 grid grid-cols-3 gap-6">
                  <div className="col-span-2 space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1 glass rounded-lg p-4">
                        <div className="text-navy-400 text-sm mb-1">Security Score</div>
                        <div className="text-3xl font-bold text-white">94<span className="text-cyan-400">/100</span></div>
                        <div className="text-success text-sm mt-1">↑ +3pts this week</div>
                      </div>
                      <div className="flex-1 glass rounded-lg p-4">
                        <div className="text-navy-400 text-sm mb-1">Threats Blocked</div>
                        <div className="text-3xl font-bold text-white">1,247</div>
                        <div className="text-success text-sm mt-1">↑ 12% from last month</div>
                      </div>
                    </div>
                    <div className="glass rounded-lg p-4 h-48 flex items-end justify-between gap-2">
                      {[40, 65, 45, 80, 55, 90, 85, 70, 95, 88, 92, 94].map((h, i) => (
                        <div key={i} className="flex-1 bg-cyan-500/20 rounded-t-sm relative group">
                          <div 
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm transition-all duration-500"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="glass rounded-lg p-4">
                      <div className="text-navy-400 text-sm mb-3">Active Sessions</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">Claude Code</div>
                            <div className="text-navy-400 text-xs">45 min • 234 lines</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">Cursor IDE</div>
                            <div className="text-navy-400 text-xs">12 min • 89 lines</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="glass rounded-lg p-4">
                      <div className="text-navy-400 text-sm mb-3">Recent Threats</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="px-2 py-1 rounded bg-danger/20 text-danger">Critical</span>
                          <span className="text-navy-300">SQL Injection</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="px-2 py-1 rounded bg-warning/20 text-warning">High</span>
                          <span className="text-navy-300">Hardcoded Secret</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-navy-800/50 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-navy-300 mb-1">{stat.label}</div>
                <div className="text-navy-500 text-sm">{stat.source}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-navy-400 text-lg max-w-2xl mx-auto">
              The only security agent that joins your AI team, not fights against it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                <div className="relative glass rounded-2xl p-8 h-full hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-navy-400 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-navy-300">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Comparison Section */}
      <section className="py-24 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Catches What Others Miss
              </h2>
              <p className="text-navy-400 text-lg mb-8 leading-relaxed">
                Traditional SAST tools look for patterns. We understand intent. 
                See how ZeroFalse catches the SQL injection that looks perfectly safe.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-danger/20 flex items-center justify-center shrink-0">
                    <X className="h-4 w-4 text-danger" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">What AI Wrote</div>
                    <div className="text-navy-400 text-sm">Looks like parameterized query, but uses template literal</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">ZeroFalse Detection</div>
                    <div className="text-navy-400 text-sm">Identifies string interpolation vulnerability in SQL context</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-danger/50 to-warning/50 rounded-2xl blur opacity-30" />
              <div className="relative code-block">
                <div className="flex items-center gap-2 mb-4 text-navy-400 text-sm">
                  <div className="w-3 h-3 rounded-full bg-danger" />
                  <span>vulnerable.js</span>
                </div>
                <pre className="text-sm overflow-x-auto">
                  <code className="text-navy-300">
                    <span className="text-purple-400">const</span> <span className="text-cyan-400">query</span> = <span className="text-warning">`SELECT * FROM users WHERE id = {'${'}id{'}'}`</span>;{'\n'}
                    <span className="text-navy-500">// Looks parameterized, but it's not!</span>{'\n'}
                    {'\n'}
                    <span className="text-navy-500">// ZeroFalse catches this because:</span>{'\n'}
                    <span className="text-navy-500">// 1. Template literal in SQL context</span>{'\n'}
                    <span className="text-navy-500">// 2. Variable interpolation detected</span>{'\n'}
                    <span className="text-navy-500">// 3. No actual parameterization used</span>
                  </code>
                </pre>
                <div className="mt-4 p-3 bg-danger/10 border border-danger/30 rounded-lg">
                  <div className="flex items-center gap-2 text-danger text-sm font-medium">
                    <Shield className="h-4 w-4" />
                    Critical: SQL Injection Vulnerability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">Trusted by Security Teams</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 relative"
              >
                <div className="text-cyan-400 text-4xl font-serif mb-4">"</div>
                <p className="text-navy-200 text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-navy-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Pricing Section */}
      <section className="py-24 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-navy-400 text-lg">Start free. Scale as your AI coding scales.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl ${plan.popular ? 'bg-gradient-to-b from-cyan-500/20 to-navy-900 border-2 border-cyan-500/50' : 'glass'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-cyan-500 text-navy-950 text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-navy-400">{plan.period}</span>
                  </div>
                  <p className="text-navy-400 text-sm mb-6">{plan.description}</p>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${plan.popular ? 'bg-cyan-400 text-navy-950 hover:bg-cyan-300' : 'glass text-white hover:bg-white/10'}`}>
                    {plan.cta}
                  </button>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-navy-300">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-navy-400">
              Open source maintainers: <span className="text-cyan-400">Free unlimited scanning</span> for public repositories
            </p>
          </div>
        </div>
      </section>

{/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            AI Agents Are Writing Code Right Now.
            <br />
            <span className="text-gradient">Are You Verifying It?</span>
          </h2>
          <p className="text-navy-400 text-lg mb-8">
            Join 500+ teams using ZeroFalse to secure their AI-native software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-navy-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/25">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white glass rounded-lg hover:bg-white/10 transition-all duration-200">
              Talk to Sales
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-navy-400 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400" />
              14-day trial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400" />
              No credit card
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400" />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}