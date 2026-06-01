# AI Developer Portfolio

A world-class, premium developer portfolio built with a futuristic AI research lab aesthetic.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & GSAP
- **3D Graphics**: Three.js & React Three Fiber
- **Smooth Scrolling**: Lenis

## Setup Instructions

1. **Install dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **View the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features Included
- **Custom Cursor**: A dynamic, `mix-blend-difference` framer-motion cursor.
- **Cinematic Loader**: An immersive initialization screen.
- **Interactive 3D Hero**: A procedural starfield / neural network built with `maath` and React Three Fiber.
- **Smooth Scrolling**: High-performance scrolling powered by Lenis.
- **Magnetic Buttons**: Interactive navigation links that snap to the cursor.
- **Bento Grid Layouts**: Modern UI for the About section with scroll-triggered reveal animations.

## Project Structure
- `/components/animations`: Reusable motion wrappers (`FadeIn`, `Magnetic`).
- `/components/canvas`: Three.js and WebGL components.
- `/components/sections`: Page sections (`Hero`, `About`).
- `/components/shared`: Global layout elements (`Navbar`, `CustomCursor`, `Loader`, `Providers`).
- `/app`: Next.js App Router configuration and global CSS.
