# Journey Timeline - Saras AI Assessment

**Live:** <https://saras-journey-assessment.vercel.app/>

Timeline showing learning steps that alternate left and right.

## Running locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>

## Structure

Everything renders from one array in `app/configs/journeyData.ts`.

The main timeline component filters odd steps to the left column and even steps to the right. Center column is the black road that extends as you add more items to the array.

Cards and connectors change color based on the flag property (red/orange/purple).

## Files

- `JourneyTimeline.tsx` - main grid layout
- `JourneyStep.tsx` - individual cards
- `journeyData.ts` - the data array
- `journey.ts` - typescript types

## Stack

Next.js 16, TypeScript, Tailwind CSS, tailwind-merge

## Deploy

```bash
npm run build
npm start
```

---

Saras AI Institute - Frontend Assessment
