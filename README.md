# Unico Website

A modern, responsive business website built with Next.js, TypeScript, and Tailwind CSS. Features comprehensive service pages, contact forms, and a professional design.

## Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Multiple Services**: Software Development, Portfolio Management, Interior Design, Data Insights, AI Consulting
- **Contact Form**: Functional contact form with email notifications
- **SEO Optimized**: Proper meta tags and structure
- **Performance**: Optimized for speed and user experience

## Project Structure

```
unico-website/
├── app/                           # Next.js App Router pages
│   ├── layout.tsx                 # Root layout with Navbar + Footer
│   ├── page.tsx                   # Home page
│   ├── about/page.tsx             # About page
│   ├── services/                  # Services pages
│   │   ├── page.tsx
│   │   ├── software-development/
│   │   ├── portfolio-management/
│   │   ├── interior-design/
│   │   ├── data-insights/
│   │   └── ai-consulting/
│   ├── contact/page.tsx           # Contact form
│   ├── faq/page.tsx               # FAQ section
│   ├── success/page.tsx           # Thank you page
│   └── not-found.tsx              # Custom 404
├── components/                    # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── ContactForm.tsx
│   └── ...
├── lib/                          # Utility functions
│   ├── mail.ts                   # Email handling
│   └── validators.ts             # Form validation
├── utils/
│   └── data.ts                   # Static data
├── styles/
│   └── globals.css               # Global styles
└── public/                       # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Gmail account or SMTP server for contact form emails

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd unico-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the `.env.local` file and update with your SMTP credentials:
   ```env
   # SMTP Configuration for Contact Form
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=your-email@gmail.com
   SMTP_TO=contact@unico.com
   
   # Site URL
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Email Configuration

The contact form uses Nodemailer to send emails. For Gmail:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use this app password in `SMTP_PASS`

## Customization

### Colors and Branding

Update the primary colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... other shades
  }
}
```

### Content

- **Services**: Update `utils/data.ts` to modify services, testimonials, and FAQ
- **Contact Info**: Update contact details in `utils/data.ts`
- **Company Info**: Modify company details throughout the components

### Images

Add your images to the `public/images/` directory:
- `public/images/hero/` - Hero section images
- `public/images/services/` - Service-related images
- `public/images/clients/` - Client logos/photos
- `public/logo.svg` - Company logo

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Nodemailer
- **Validation**: Zod
- **Icons**: Lucide React + Custom SVGs

## License

This project is licensed under the MIT License.

## Support

For support or questions about this project, please contact us through the website or create an issue in the repository.

---

**Note**: Remember to update the content, images, and contact information to match your actual business details before deploying to production. 