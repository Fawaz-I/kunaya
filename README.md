# Kunaya - Tiger Nut Milk

A modern, responsive website showcasing Kunaya's premium Tiger Nut Milk products. Built with Next.js, React, and TailwindCSS.

![Kunaya Website Screenshot](/public/og-image.jpg)

## Features

- Fully responsive design optimized for all devices
- Modern UI with smooth animations and transitions
- SEO optimized with metadata, sitemap, and robots.txt
- Performance optimized with Next.js App Router
- Accessibility focused design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Deployment**: Vercel
- **Performance**: Optimized images, fonts, and bundle size

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/kunaya.git
   cd kunaya
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Analyze Bundle Size

```bash
npm run analyze
# or
yarn analyze
```

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import the project to Vercel
3. Vercel will detect Next.js and set up the build configuration automatically
4. Your site will be deployed to a global CDN with HTTPS enabled

Alternatively, you can deploy directly from the command line:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
/
├── app/               # Next.js App Router files
├── components/        # React components
├── lib/              # Utility functions and shared code
├── public/           # Static assets
└── styles/           # Global styles
```

## Performance Optimizations

This project includes several performance optimizations:

- Image optimization with next/image
- Font optimization with next/font
- Bundle analysis for code splitting
- Server-side rendering for improved SEO
- Optimized Tailwind CSS configuration

## License

This project is licensed under the MIT License - see the LICENSE file for details.
