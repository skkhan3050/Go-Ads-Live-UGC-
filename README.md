# GoAdsLive UGC Video Platform

A high-converting UGC (User-Generated Content) video production landing page and lead capture platform built for D2C brands, e-commerce stores, and high-growth businesses.

## Features

- **High-Performance Video Showcase**: Responsive video player grid featuring portfolio works, client case studies, and creator showcases.
- **Interactive UGC Creator Wall**: Showcase of vetted creator profiles with niche filters (Beauty, Tech, Fashion, Food & Beverage, Fitness).
- **Lead Capture System**: High-converting multi-step lead capture form with instant client validation and honeypot spam protection.
- **Automated Google Sheets Sync**: Integrated Apps Script webhook pipeline that automatically logs lead submissions directly to Google Sheets in real-time.
- **Local Fallback Storage**: Submissions are safely preserved locally in `contacts.json` ensuring zero lead loss.
- **Zero-Dependency Lightweight Backend**: Node.js HTTP server supporting range requests for seamless video streaming and Next.js static asset routing.

## Project Structure

```text
├── server.js                      # Core HTTP server with video streaming & lead API
├── google-sheet-config.json       # Google Sheets webhook & spreadsheet configuration
├── google-sheet-script.js         # Google Apps Script receiver code
├── contacts.example.json          # Template for lead storage
├── www.yuvichaarfunnels.com/      # Web application frontend assets & static pages
│   ├── index.html                 # Main landing page
│   ├── thank-you.html             # Confirmation & post-submission page
│   ├── videos/                    # UGC video portfolio & thumbnails
│   └── _next/                     # Frontend bundles and styles
└── package.json                   # Project metadata & start scripts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/) with [Git LFS](https://git-lfs.github.com/) (for video files)

### Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/skkhan3050/Go-Ads-Live-UGC-.git
   cd Go-Ads-Live-UGC-
   ```

2. Start the local server:
   ```bash
   npm start
   # or
   node server.js
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Google Sheets Integration

Lead submissions are automatically forwarded to Google Sheets via Google Apps Script:
- **Config**: `google-sheet-config.json`
- **Script**: Deploy the code in `google-sheet-script.js` as a Google Apps Script Web App set to *"Execute as: Me"* and *"Who has access: Anyone"*.
- Paste the deployed Web App URL into `google-sheet-config.json` under `"webhookUrl"`.

## License

ISC License.
