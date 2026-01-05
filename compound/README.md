# Compound

Research-backed information on peptides, SARMs, nootropics, and performance compounds.

## Features

- **48+ Compounds** - Full database with real studies and dosing protocols
- **Free Blog** - Educational content available to everyone
- **Pro Subscription** - $5/month for full access, AI Coach, and source recommendations
- **Stacks** - Curated protocols for specific goals

## Tech Stack

- Next.js 14
- Tailwind CSS
- Supabase (Auth & Database)
- Stripe (Subscriptions)

## Setup

1. Clone the repo
2. Copy `.env.example` to `.env.local` and fill in your keys
3. Run `npm install`
4. Run `npm run dev`

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
- `STRIPE_SECRET_KEY` - Your Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key
- `STRIPE_PRICE_ID` - The price ID for the $5/month subscription

## Deploy

Push to GitHub and connect to Vercel. Set environment variables in Vercel dashboard.

## Supabase Setup

Run the SQL in `supabase-schema.sql` to create the required tables:
- `profiles` - User profiles with subscription status
- `subscriptions` - Stripe subscription tracking

## Stripe Setup

1. Create a product with a $5/month recurring price
2. Copy the price ID to your environment variables
3. Set up the Stripe webhook to handle subscription events
