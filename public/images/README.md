# SweatOut Gym Images

This folder contains all static images for the SweatOut Health & Fitness website.

## Folder Structure

- **`hero/`** - Hero section background images for homepage and other pages
- **`trainers/`** - Photos of gym trainers and staff
- **`gallery/`** - Gym facility photos, equipment, workout sessions
- **`programs/`** - Images for different fitness programs (strength training, cardio, yoga, etc.)
- **`blog/`** - Featured images for blog posts
- **`testimonials/`** - Customer photos and success stories
- **`shop/`** - Product images for merchandise and supplements
- **`about/`** - Images for the About Us page (gym history, facilities, team)

## Image Guidelines

### Recommended Sizes:
- **Hero images**: 1920x1080px (landscape)
- **Trainer photos**: 800x800px (square)
- **Gallery images**: 1200x800px (landscape)
- **Blog featured images**: 1200x630px (landscape)
- **Product images**: 800x800px (square)

### File Naming Convention:
- Use lowercase with hyphens: `hero-gym-interior.jpg`
- Be descriptive: `trainer-john-smith.jpg`
- Include category prefix when helpful: `program-yoga-class.jpg`

### Supported Formats:
- `.jpg` / `.jpeg` - For photos
- `.png` - For logos, graphics with transparency
- `.webp` - For optimized web images

## Usage in Code

Reference images using absolute paths from the public folder:

```tsx
<ImageWithFallback
  src="/images/hero/gym-interior.jpg"
  alt="SweatOut Gym Interior"
/>
```

## Current Status

🔴 **Placeholder folders created** - Upload your gym images to the appropriate folders.

Replace the Unsplash URLs in the codebase with your own branded images once uploaded.

