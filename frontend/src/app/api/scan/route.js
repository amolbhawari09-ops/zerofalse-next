import { NextResponse } from "next/server";

// Mock scan endpoint - replace with actual implementation
export async function POST(request) {
  try {
    const body = await request.json();
    const { code, filename, model } = body;

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock vulnerability detection
    const vulnerabilities = [];
    
    // Check for SQL injection patterns
    if (code.includes("${") && code.toLowerCase().includes("select")) {
      vulnerabilities.push({
        id: "sql-injection-001",
        type: "SQL Injection",
        severity: "critical",
        line: code.split("\n").findIndex(line => line.includes("${")) + 1,
        message: "Possible SQL injection via template literal",
        suggestion: "Use parameterized queries instead",
        looksClean: true
      });
    }

    // Check for hardcoded secrets
    const secretPatterns = [/api[_-]?key/i, /password/i, /secret/i, /token/i];
    secretPatterns.forEach(pattern => {
      if (pattern.test(code) && code.includes("=")) {
        vulnerabilities.push({
          id: "secret-001",
          type: "Hardcoded Secret",
          severity: "high",
          line: code.split("\n").findIndex(line => pattern.test(line)) + 1,
          message: "Potential hardcoded secret detected",
          suggestion: "Use environment variables",
          looksClean: false
        });
      }
    });

    // Calculate security score
    const baseScore = 100;
    const deductions = vulnerabilities.reduce((acc, v) => {
      if (v.severity === "critical") return acc + 25;
      if (v.severity === "high") return acc + 15;
      if (v.severity === "medium") return acc + 10;
      return acc + 5;
    }, 0);

    const score = Math.max(0, baseScore - deductions);

    return NextResponse.json({
      success: true,
      scanId: `scan-${Date.now()}`,
      timestamp: new Date().toISOString(),
      filename,
      model: model || "unknown",
      score,
      vulnerabilities,
      summary: {
        total: vulnerabilities.length,
        critical: vulnerabilities.filter(v => v.severity === "critical").length,
        high: vulnerabilities.filter(v => v.severity === "high").length,
        medium: vulnerabilities.filter(v => v.severity === "medium").length,
        low: vulnerabilities.filter(v => v.severity === "low").length,
        looksCleanDetected: vulnerabilities.filter(v => v.looksClean).length
      }
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get scan history
export async function GET() {
  return NextResponse.json({
    scans: [
      {
        id: "scan-001",
        timestamp: new Date().toISOString(),
        filename: "auth.js",
        score: 94,
        vulnerabilities: 2
      }
    ]
  });
}
