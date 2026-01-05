# Compound

**Know what you're taking.**

The complete guide to peptides, SARMs, nootropics, and performance compounds. Research-backed information with AI-powered guidance.

## Features

- **Compound Database** - Detailed information on peptides, SARMs, nootropics, and support compounds
- **Coach AI** - Claude-powered assistant for personalized guidance  
- **Curated Stacks** - Pre-built protocols for common goals
- **Clean UI** - Dark theme, intuitive navigation, mobile-friendly

## Tech Stack

- **Frontend**: Next.js 16, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **AI**: Claude API (Anthropic)
- **Hosting**: Vercel

## Quick Start

### 1. Install Dependencies

```bash
cd app
npm install
```

### 2. Set Up Supabase Database

1. Go to your Supabase project SQL Editor
2. Run `supabase-schema.sql` to create tables
3. Run `supabase-seed.sql` to populate initial data

### 3. Environment Variables

Create `app/.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Development Server

```bash
cd app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

```bash
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Project Structure

```
compound/
├── app/                      # Next.js application
│   ├── src/
│   │   ├── app/             # Pages and routes
│   │   │   ├── page.tsx     # Home page
│   │   │   ├── compound/    # Compound detail pages
│   │   │   ├── stacks/      # Curated stacks
│   │   │   └── disclaimer/  # Legal disclaimer
│   │   └── lib/
│   │       ├── types.ts     # TypeScript definitions
│   │       └── data.ts      # Mock data (replace with Supabase)
│   ├── package.json
│   └── .env.local           # Environment variables (create this)
├── supabase-schema.sql      # Database schema
├── supabase-seed.sql        # Initial compound data
└── README.md
```

## Compounds Included

**Peptides**: MK-677, BPC-157, TB-500, Ipamorelin, CJC-1295

**Nootropics**: Semax, Selank, NA-Semax, NA-Selank, Dihexa, Pinealon

**SARMs**: RAD-140, Ostarine, LGD-4033

**Support**: Alpha-GPC, Lion's Mane, Enclomiphene

## Roadmap

- [ ] Connect Supabase for live data
- [ ] Implement Claude API for Coach
- [ ] User accounts and authentication
- [ ] Protocol tracking and logging
- [ ] Voice mode for Coach
- [ ] Expand to 100+ compounds

## Disclaimer

Compound provides educational information only. Not medical advice. All compounds are used at your own risk. Consult a healthcare provider before starting any new supplement or compound.

## License

MIT
