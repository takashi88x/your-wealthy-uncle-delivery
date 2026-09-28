# Your Wealthy Uncle — Delivery Pages

## Routes
- `/download/first-10k`
- `/download/money-tracker`
- `/download/90-day-reset`

## Deploy
1. Upload this folder to GitHub.
2. Import the repository into Vercel.
3. Deploy with the defaults for a Next.js project.
4. Copy the deployed URL.
5. In each Stripe Payment Link, configure the post-payment redirect to its matching route.

## Important
This is the fast MVP delivery setup. The product files are served as public static downloads, so anyone who has the direct file URL could access that file. For the first launch this keeps the experience extremely simple. If sales grow, replace the public files with signed/expiring download URLs.
