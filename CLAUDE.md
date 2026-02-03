# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website at petermayor.net built with Astro and Tailwind CSS. Static single-page site with component-based architecture.

## Build Commands

- `npm run dev` - Development server with hot reload
- `npm run build` - Production build to `dist/`
- `npm run preview` - Preview production build locally

## Architecture

### File Structure

- `src/pages/index.astro` - Main page composing all sections
- `src/layouts/Layout.astro` - Base HTML layout with meta tags and fonts
- `src/components/` - Astro components for each section
  - `Nav.astro` - Sidebar navigation with scroll-spy
  - `About.astro` - About section with bio and social links
  - `Projects.astro` - Projects grid using ProjectCard
  - `Skills.astro` - Skills section using SkillCategory
  - `Experience.astro` - Work history using ExperienceItem
  - `Education.astro` - Education entries
  - `SocialLinks.astro` - Email, LinkedIn, GitHub icons
- `src/data/` - JSON data files
  - `projects.json` - Project entries
  - `experience.json` - Work history
  - `education.json` - Education entries
- `src/styles/global.css` - Tailwind imports and custom styles
- `public/` - Static assets (images, resume PDF)

### Color Theme (tailwind.config.mjs)

- Primary: #1561b2 (blue)
- Secondary: #868e96
- Background: #e4c8ac (warm tan)
- Accent: #de9b5a

### Deployment

GitHub Actions workflow deploys to AWS S3 on push to master. Runs `npm run build`, then syncs `dist/` to S3 bucket.
