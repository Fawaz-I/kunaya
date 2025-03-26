# Kunaya - Tiger Nut Milk

A modern, responsive website showcasing Kunaya's premium Tiger Nut Milk products. Built with Next.js, React, and TailwindCSS.

![Kunaya Website Screenshot](/public/og-image.jpg)

## Features

- Fully responsive design optimized for all devices
- Modern UI with smooth animations and transitions
  - Custom animation system using Tailwind CSS
  - Sequenced element animations with configurable delays
  - Smooth fade-in and slide-in effects for enhanced user experience
- Newsletter system with Mailchimp integration
  - Secure form submission with reCAPTCHA protection
  - Responsive feedback messages
  - Multiple form variants (default and inline)
  - Error handling and validation
- SEO optimized with metadata, sitemap, and robots.txt
- Performance optimized with Next.js App Router
- Accessibility focused design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom animation extensions
- **Deployment**: Vercel
- **Performance**: Optimized images, fonts, and bundle size
- **Animation**: Custom Tailwind keyframes and animation utilities
- **Email Marketing**: Mailchimp API integration
- **Security**: Google reCAPTCHA v2 Invisible

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

3. Set up environment variables
   - Create a `.env.local` file in the root directory
   - Add the following variables (replace with your actual values):
   ```
   # Mailchimp (for newsletter functionality)
   MAILCHIMP_API_KEY=your_api_key
   MAILCHIMP_LIST_ID=your_list_id
   MAILCHIMP_SERVER_PREFIX=your_server_prefix
   
   # reCAPTCHA (for form protection)
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key
   
   # Optional: Set to 'true' to enable test mode for newsletter
   NEWSLETTER_TEST_MODE=false
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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

## Project Structure

```
/
├── app/               # Next.js App Router files
│   ├── page.tsx       # Home page
│   ├── newsletter/    # Newsletter signup page
│   └── api/           # API routes
├── components/        # React components
│   ├── hero-section.tsx       # Hero section with animations
│   ├── benefits-section.tsx   # Product benefits section
│   ├── why-tiger-nut-milk.tsx # Product information
│   ├── newsletter-signup.tsx  # Newsletter form
│   └── ui/                    # Reusable UI components
├── lib/              # Utility functions and shared code
├── public/           # Static assets
└── tailwind.config.ts # Tailwind configuration with custom animations
```

## Performance Optimizations

This project includes several performance optimizations:

- Image optimization with next/image
- Font optimization with next/font
- Bundle analysis for code splitting
- Server-side rendering for improved SEO
- Optimized Tailwind CSS configuration
- CSS-based animations for better performance than JavaScript animations
- Animation fill-mode backwards to ensure smooth animation starts

## Animation System

The project features a custom animation system built with Tailwind CSS:

- **Keyframe Definitions**: Custom keyframes in tailwind.config.ts for various animation types
- **Animation Classes**: Pre-defined animation utilities like `animate-fade-in`, `animate-slide-in-left`
- **Sequencing**: Animation delays using arbitrary values like `[animation-delay:200ms]`
- **Fill Mode**: Using `[animation-fill-mode:backwards]` to ensure elements start in their pre-animation state
- **Performance**: CSS-based animations for optimal performance and smooth transitions

Example usage in components:
```jsx
<h1 className="animate-slide-in-left [animation-delay:200ms] [animation-fill-mode:backwards]">
  Discover Tiger Nut Milk
</h1>
```

## Newsletter System

The website includes a complete newsletter subscription system:

- **Mailchimp Integration**: Subscribers are automatically added to a Mailchimp list
- **reCAPTCHA Protection**: Uses Google reCAPTCHA v2 Invisible to prevent spam submissions
- **Form Variants**: 
  - Default: Full-width form with heading and description
  - Inline: Compact form for use in other components
- **Responsive Feedback**: Visual feedback for success/error states
- **Error Handling**: Proper validation and error handling for all edge cases
- **Test Mode**: Development mode for testing without sending actual API requests

Environment variables required:
```
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_LIST_ID=your_list_id
MAILCHIMP_SERVER_PREFIX=your_server_prefix
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
