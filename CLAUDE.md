# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website at petermayor.net built on Start Bootstrap Resume template. Static single-page site with Bootstrap 4, custom SCSS, and minimal JavaScript.

## Build Commands

- `npm run build` or `gulp` - Full build (CSS compilation, JS minification, vendor copy)
- `gulp dev` - Development server with browser-sync and live reload
- `gulp css` - Compile and minify SCSS to CSS
- `gulp js` - Minify JavaScript

## Architecture

### File Structure

- `index.html` - Single-page portfolio (About, Projects, Skills, Experience, Education sections)
- `scss/` - SASS source files with partials pattern
  - `resume.scss` - Main entry importing all partials
  - `_variables.scss` - Colors and layout constants
- `js/resume.js` - jQuery-based smooth scroll and navigation
- `css/` - Compiled CSS output (generated, don't edit directly)
- `vendor/` - Third-party libraries copied from node_modules

### Color Variables (scss/_variables.scss)

- Primary: #1561b2 (blue)
- Secondary: #868e96
- Background: #e4c8ac (warm tan)
- Accent: #de9b5a

### Deployment

GitHub Actions workflow deploys to AWS S3 on push to master. Runs `npm ci` and `npx gulp css js`, then syncs to S3 bucket.
