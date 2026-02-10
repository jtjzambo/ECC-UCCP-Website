# UCCP Ecumenical Center Church Website - PRD

## Original Problem Statement
Build and refine a church website for UCCP Ecumenical Center Church in Zamboanga City with:
- Homepage with editable text
- Blog page fetching devotionals from "Our Daily Bread" (odb.org)
- Leadership page with photos for all church roles
- History page with historical content from PDF and photos
- Privacy Policy page

## Target Audience
- Church members and congregation
- Visitors seeking information about the church
- Community members looking for events and services

## Core Requirements

### Completed Features ✅
1. **Homepage** - Welcome page with church information
2. **About Page** - Church overview and mission
3. **Services Page** - Worship services information
4. **Blog Page** - Auto-fetches devotionals from Our Daily Bread RSS feed (client-side)
5. **Leadership Page** - All church leadership roles with photos
6. **History Page** - National UCCP history timeline + local church history with photos
7. **Events Page** - Church events listing
8. **Contact Page** - Contact information and form
9. **Donate Page** - Donation information
10. **Statement of Faith Page** - Church beliefs
11. **Privacy Policy Page** - Data privacy information (RA 10173 compliance)
12. **Cookie Notice Banner** - Lightweight notice for first-time visitors (180-day localStorage persistence)

### In Progress 🔄
None - all items complete

### Completed This Session ✅
1. **Lightbox/Zoom Feature** - Fixed overlay click interception, images now zoom properly
2. **Mobile Header Fix** - "Zamboanga City" text visible on mobile
3. **Church Staff Photos** - Photos display correctly for staff members

### Future/Backlog 📋
1. Backend cleanup - Remove deprecated devotional endpoints from server.py

## Technical Architecture

### Frontend (React + Tailwind CSS)
- `/app/frontend/src/pages/` - Page components
- `/app/frontend/src/components/` - Reusable components (Header, Footer, Lightbox)
- `/app/frontend/src/mock.js` - Static data

### Key Pages
- `Home.jsx` - Landing page
- `BlogPage.jsx` - Client-side RSS fetching from odb.org
- `LeadershipPage.jsx` - Church leadership with photos
- `HistoryPage.jsx` - Historical content with timeline
- `PrivacyPage.jsx` - Privacy policy (RA 10173)

### Backend (FastAPI - Partially Deprecated)
- `/app/backend/server.py` - Contains deprecated endpoints for devotionals
- Blog functionality moved to frontend for Cloudflare Pages deployment

### External Dependencies
- Our Daily Bread RSS Feed: `https://odb.org/feed/`
- CORS Proxy: `allorigins.win` (for client-side RSS fetching)

## Deployment Model
Frontend-only static deployment to **Cloudflare Pages**:
- Emergent → GitHub → Cloudflare Pages
- All dynamic content fetched client-side
- No backend required in production

## Data Privacy
- No user accounts or data collection
- Essential cookies only
- Third-party embeds governed by their policies
- Compliant with Data Privacy Act of 2012 (RA 10173)

---
Last Updated: December 2025
