# Kunaya

Website for Kunaya's tiger nut milk brand. Built with Next.js and TypeScript.

![Kunaya Website Screenshot](/public/og-image.jpg)

## What's Inside

- Responsive design that works on mobile and desktop
- Custom animations built with Tailwind CSS
- Newsletter signup with Mailchimp integration
- reCAPTCHA spam protection and rate limiting
- SEO setup with sitemap and metadata

## Built With

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Mailchimp API
- Google reCAPTCHA

## Running Locally

You'll need Node.js 18+ installed.

```bash
# Clone and install
git clone https://github.com/yourusername/kunaya.git
cd kunaya
npm install

# Set up environment variables
cp .env.local.example .env.local
# Fill in your Mailchimp and reCAPTCHA keys

# Start development server
npm run dev
```

Visit http://localhost:3000 to see it running.

## Deployment

```bash
npm run build     # Build for production
npm run analyze   # Check bundle size
```

## Key Features

**Animations**: Custom CSS animations using Tailwind. Elements fade in and slide as you scroll.

**Newsletter**: Mailchimp integration with spam protection. Users can subscribe and unsubscribe.

**Performance**: Image optimization, font loading, and bundle analysis built in.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```bash
# Mailchimp
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_LIST_ID=your_list_id
MAILCHIMP_SERVER_PREFIX=your_server_prefix

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key

# Optional: Test mode
NEWSLETTER_TEST_MODE=false
```

## License

MIT
