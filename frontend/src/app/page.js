import { Navbar } from "@/components/Navbar";
import { CodePreview } from "@/components/CodePreview";
import { StatsCounter } from "@/components/StatsCounter";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { Footer } from "@/components/Footer";
import { 
  Shield, 
  Zap, 
  Brain, 
  Fingerprint, 
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Real-Time Guardrails",
    description: "Zerofalse joins as a security teammate in VS Code, Cursor, and Claude Code. Blocks vulnerabilities BEFORE AI suggests them — not after.",
    features: [
      "IDE extension for instant feedback",
      "MCP server for Claude Code integration",
      "Blocks dangerous patterns in milliseconds"
    ],
    visual: (
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-lg">
          <span className="text-2xl">🤖</span>
          <span className="text-xs text-gray-400">AI Suggests</span>
        </div>
        <ArrowRight className="w-6 h-6 text-gray-600" />
        <div className="flex flex-col items-center gap-2 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
          <Shield className="w-6 h-6 text-green-400" />
          <span className="text-xs text-green-400">Zerofalse Checks</span>
        </div>
        <ArrowRight className="w-6 h-6 text-gray-600" />
        <div className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-lg">
          <CheckCircle className="w-6 h-6 text-green-400" />
          <span className="text-xs text-gray-400">Safe / Blocked</span>
        </div>
      </div>
    )
  },
  {
    number: "02",
    title: '"Looks Clean" Detection ⭐',
    description: "AI code looks 90% correct. That's the dangerous part. We find the 10% that looks right but kills you in production.",
    features: [
      "SQL injections that look parameterized",
      "Auth that looks solid but bypasses 2FA",
      "Dependencies that don't exist (hallucinations)"
    ],
    visual: (
      <div className="space-y-4">
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-4 h-4 text-red-400" />
            <span className="text-xs font-medium text-red-400">Looks Clean</span>
          </div>
          <code className="text-sm text-red-300">
            const query = `SELECT * FROM users WHERE id = ${id}`
          </code>
        </div>
        <div className="flex justify-center">
          <ArrowRight className="w-6 h-6 text-gray-600 rotate-90" />
        </div>
        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-xs font-medium text-green-400">Actually Safe</span>
          </div>
          <code className="text-sm text-green-300">
            db.query('SELECT * FROM users WHERE id = ?', [id])
          </code>
        </div>
      </div>
    ),
    reverse: true
  },
  {
    number: "03",
    title: "AI Model Fingerprinting",
    description: "Know which AI (GPT-5.3, Claude 4.6, Copilot) wrote your code and what mistakes it typically makes.",
    features: [
      "GPT-5.3: 75% secure, overcomplicates auth",
      "Claude 4.6: 90% secure, best with prompts",
      "Copilot: 70% secure, 40% higher secret leakage"
    ],
    visual: (
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-800 rounded-lg text-center">
          <div className="text-xs text-gray-400 mb-1">GPT-5.3</div>
          <div className="text-2xl font-bold text-yellow-400">75%</div>
          <div className="text-xs text-gray-500">Secure</div>
        </div>
        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs bg-green-500 text-black px-2 rounded-full">Best</div>
          <div className="text-xs text-gray-400 mb-1">Claude 4.6</div>
          <div className="text-2xl font-bold text-green-400">90%</div>
          <div className="text-xs text-gray-500">Secure</div>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg text-center">
          <div className="text-xs text-gray-400 mb-1">Copilot</div>
          <div className="text-2xl font-bold text-red-400">70%</div>
          <div className="text-xs text-gray-500">Secure</div>
        </div>
      </div>
    )
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "49",
    description: "For small teams getting started with AI coding",
    features: [
      "Up to 5 developers",
      "50 scans/day",
      "Basic vulnerability detection",
      "Community support"
    ]
  },
  {
    name: "Pro",
    price: "199",
    description: "For growing teams with AI-native workflows",
    features: [
      "Up to 20 developers",
      "Unlimited scans",
      '"Looks clean" detection',
      "Model fingerprinting",
      "Slack integration",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "999",
    description: "For organizations with advanced security needs",
    features: [
      "Up to 200 developers",
      "SSO & SAML",
      "Custom rules",
      "Dedicated support",
      "SLA guarantee",
      "On-premise option"
    ]
  }
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-300">Built for the Post-Coding Era</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            The Intent Firewall for
            <br />
            <span className="gradient-text">AI-Native Software</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-8 animate-slide-up delay-100">
            AI agents write code that looks correct. <strong className="text-white">45% of it has dangerous vulnerabilities.</strong>
            <br />
            Zerofalse finds the 10% that looks right but kills you in production.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up delay-200">
            <a
              href="#install"
              className="group flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-all hover:scale-105"
            >
              <span>🚀</span>
              Start Free — Install GitHub App
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/10"
            >
              <span>📊</span>
              See Live Demo
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-500 mb-16 animate-fade-in delay-300">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Free for 14 days
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Setup in 2 minutes
            </span>
          </div>

          <CodePreview />
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">The Problem</span>
            <h2 className="mt-2 text-4xl font-bold text-white">AI Codes. Humans Can't Verify.</h2>
            <p className="mt-4 text-xl text-gray-400">We're in Stage 3. Security review is breaking down.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-white/5">
              <div className="text-sm text-gray-500 mb-2">2024</div>
              <h3 className="text-xl font-bold text-white mb-2">Stage 1: AI Assists</h3>
              <p className="text-gray-400 mb-4">AI helps humans write code</p>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Security: Works</span>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 border border-white/5">
              <div className="text-sm text-gray-500 mb-2">2025</div>
              <h3 className="text-xl font-bold text-white mb-2">Stage 2: AI Writes</h3>
              <p className="text-gray-400 mb-4">AI generates complete code</p>
              <div className="flex items-center gap-2 text-yellow-400">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm">Security: Breaks</span>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">NOW</div>
              <div className="text-sm text-green-400 mb-2">2026</div>
              <h3 className="text-xl font-bold text-white mb-2">Stage 3: AI Agents</h3>
              <p className="text-gray-400 mb-4">AI agents work autonomously</p>
              <div className="flex items-center gap-2 text-red-400">
                <XCircle className="w-4 h-4" />
                <span className="text-sm">Security: Fails</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-white mb-2">
                <StatsCounter end={45} suffix="%" />
              </div>
              <div className="text-gray-400">of AI code has security flaws</div>
              <div className="text-sm text-gray-600 mt-1">Veracode 2025</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-white mb-2">1 in 5</div>
              <div className="text-gray-400">orgs breached by AI code</div>
              <div className="text-sm text-gray-600 mt-1">Aikido 2026</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-white mb-2">
                <StatsCounter end={274} suffix="%" />
              </div>
              <div className="text-gray-400">more vulnerabilities vs human code</div>
              <div className="text-sm text-gray-600 mt-1">Security Research</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">How It Works</span>
            <h2 className="mt-2 text-4xl font-bold text-white">The Only Security Agent That Joins Your AI Team</h2>
          </div>

          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">Dashboard</span>
            <h2 className="mt-2 text-4xl font-bold text-white">Visibility Into AI Code Across Your Organization</h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10 bg-gray-800/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex gap-6 text-sm">
                <span className="text-white font-medium border-b-2 border-green-500 pb-4 -mb-4">Overview</span>
                <span className="text-gray-500 hover:text-gray-300 cursor-pointer">Live Sessions</span>
                <span className="text-gray-500 hover:text-gray-300 cursor-pointer">Provenance</span>
                <span className="text-gray-500 hover:text-gray-300 cursor-pointer">Threats</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-gray-800/50 border border-white/5">
                  <div className="text-sm text-gray-400 mb-1">Security Score</div>
                  <div className="text-3xl font-bold text-white mb-2">94/100</div>
                  <div className="text-sm text-green-400">↑ +3pts this week</div>
                </div>
                <div className="p-6 rounded-xl bg-gray-800/50 border border-white/5">
                  <div className="text-sm text-gray-400 mb-1">Code Today</div>
                  <div className="text-3xl font-bold text-white mb-2">2,847</div>
                  <div className="text-sm text-green-400">↑ 23% from yesterday</div>
                </div>
                <div className="p-6 rounded-xl bg-gray-800/50 border border-white/5">
                  <div className="text-sm text-gray-400 mb-1">Active Sessions</div>
                  <div className="text-3xl font-bold text-white mb-2">2</div>
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Healthy
                  </div>
                </div>
              </div>

              <div className="h-64 flex items-end justify-between gap-2 px-4">
                {[40, 60, 80, 70, 90, 95, 94].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-500 ${
                        i === 6 ? "bg-green-500" : "bg-gray-700"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-gray-500">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/10"
            >
              Explore Dashboard Features
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <blockquote className="text-2xl sm:text-3xl font-medium text-white italic mb-6">
            "Zerofalse caught an SQL injection that looked exactly like a parameterized query. Our senior engineer missed it. Zerofalse didn't."
          </blockquote>
          <cite className="text-gray-400 not-italic">— CTO, Series A Startup</cite>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-white/5">
            <div className="text-4xl font-bold text-green-400 mb-2">
              <StatsCounter end={127} />
            </div>
            <div className="text-gray-400">Threats Blocked</div>
            <div className="text-sm text-gray-600">this month</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-white/5">
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              <StatsCounter end={34} />
            </div>
            <div className="text-gray-400">"Looks Clean"</div>
            <div className="text-sm text-gray-600">caught</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-white/5">
            <div className="text-4xl font-bold text-red-400 mb-2">
              <StatsCounter end={23} />
            </div>
            <div className="text-gray-400">Hallucinated Packages</div>
            <div className="text-sm text-gray-600">blocked</div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">Pricing</span>
            <h2 className="mt-2 text-4xl font-bold text-white">Simple Pricing</h2>
            <p className="mt-4 text-xl text-gray-400">Start free. Scale as your AI coding scales.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>

          <div className="text-center mt-12 text-gray-400">
            <p className="flex items-center justify-center gap-6">
              <span className="flex items-center gap-2">
                <span className="text-green-400">🎓</span>
                Free for open source
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400">💳</span>
                No credit card to start
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="install" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AI Agents Are Writing Code Right Now.
            <br />
            <span className="gradient-text">Are You Verifying What They're Building?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join 50+ teams using Zerofalse to secure their AI-native software.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-all hover:scale-105"
            >
              <span>🚀</span>
              Start Free — Install GitHub App
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/10"
            >
              Schedule a Demo
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Free 14-day trial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              No credit card
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Setup in 2 min
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}