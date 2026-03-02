import Link from 'next/link'
import { Shield, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Security', 'Enterprise', 'Pricing', 'Changelog'],
    Solutions: ['Startups', 'Enterprise', 'Open Source', 'Agencies'],
    Resources: ['Documentation', 'API Reference', 'Blog', 'Community'],
    Company: ['About', 'Careers', 'Contact', 'Press'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  }

  return (
    <footer className="border-t border-navy-800 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ZeroFalse</span>
            </Link>
            <p className="text-navy-400 text-sm mb-6 max-w-xs">
              The intent firewall for AI-native development. Verify AI-generated code before it reaches production.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-navy-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-navy-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-navy-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-navy-400 hover:text-white transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-sm">
            © 2026 ZeroFalse, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-navy-500 text-sm">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}