import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { code, language, model } = body

    // Simulate AI code analysis
    const analysis = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      score: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
      threats: [],
      summary: {
        totalLines: code.split('\n').length,
        analyzedLines: code.split('\n').filter(line => line.trim()).length,
        model: model || 'unknown',
        language: language || 'javascript'
      }
    }

    // Simulate threat detection
    const threatPatterns = [
      { pattern: /eval\s*\(/, type: 'Code Injection', severity: 'High' },
      { pattern: /innerHTML\s*=/, type: 'XSS Vulnerability', severity: 'Medium' },
      { pattern: /password\s*=\s*['"][^'"]+['"]/, type: 'Hardcoded Secret', severity: 'Critical' },
      { pattern: /SELECT\s+.*\s+FROM\s+.*\$\{/, type: 'SQL Injection', severity: 'Critical' }
    ]

    threatPatterns.forEach(({ pattern, type, severity }) => {
      if (pattern.test(code)) {
        analysis.threats.push({
          type,
          severity,
          line: code.split('\n').findIndex(line => pattern.test(line)) + 1,
          message: `Potential ${type.toLowerCase()} detected`,
          recommendation: 'Review and sanitize input'
        })
      }
    })

    // Adjust score based on threats
    analysis.score = Math.max(0, analysis.score - (analysis.threats.length * 15))
    analysis.riskLevel = analysis.score > 90 ? 'Low' : analysis.score > 70 ? 'Medium' : 'High'

    return NextResponse.json(analysis)
  } catch (error) {
    return NextResponse.json(
      { error: 'Analysis failed', message: error.message },
      { status: 500 }
    )
  }
}