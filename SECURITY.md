# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please:

1. **Do NOT** open a public issue
2. Email the maintainers privately with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will respond within 48 hours and work with you to resolve the issue.

## Security Practices

This project follows these security practices:

### Code

- No `innerHTML` with uncontrolled input
- No `eval()` or `Function()` constructor
- Input validation and sanitization
- TypeScript strict mode enabled

### Dependencies

- Regular dependency audits (`pnpm audit`)
- Minimal dependency footprint
- No dependencies with known vulnerabilities
- Lockfile committed to repository

### Build & Deploy

- No secrets in repository
- Environment variables for sensitive data
- Static output only (no server-side execution)
- Content Security Policy headers recommended

### Data

- No data collection by default
- No third-party analytics
- No cookies except strictly necessary
- GDPR-compliant by design

## Security Headers

When deploying, we recommend these headers:

```
Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Acknowledgments

We appreciate responsible disclosure and will acknowledge security researchers who help us improve.
