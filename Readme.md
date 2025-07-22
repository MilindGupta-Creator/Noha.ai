# JobTrackr – Job Applications Dashboard

JobTrackr is a modern, responsive web application for tracking job applications, built with Next.js, React, and Tailwind CSS. It features a clean dashboard, theming support, and a reusable component system.

---

## Features

- **Dashboard Overview**: Visual summary of total applications, interviews, offers, and response rate.
- **Job Applications Table**: Track and manage job applications with company, position, status, and date applied.
- **Add Application Modal**: Easily add new job applications via a dialog form.
- **Status Badges**: Visual status indicators (Applied, Interview, Offer, Rejected).
- **Search & Filter**: UI for searching and filtering applications.
- **Navigation**: Responsive Navbar and Sidebar for easy navigation.
- **Theming**: Light/dark mode toggle with system preference support.
- **Reusable UI Components**: Button, Card, Dialog, Dropdown, Table, Tooltip, Avatar, Badge, Input, etc.
- **Design System**: Consistent color palette and typography (see `src/app/assets/design.md`).

---

## Screenshots

Here are some screenshots of the application:

### Dashboard Overview
![Dashboard Overview](https://postimg.cc/LgsCYchC)


### Add Application Modal
![Add Application Modal](/image2.png)

### Listing Example Example
![Add Job](/image3.png)

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), custom CSS variables
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **State Management**: React hooks (`useState`)
- **No backend/API**: All data is managed client-side (no database or server integration).

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
  app/
    Dashboard.tsx      # Main dashboard UI and logic
    Navbar.tsx         # Top navigation bar
    Sidebar.tsx        # Side navigation
    layout.tsx         # App layout and theme provider
    page.tsx           # App entry point
    assets/design.md   # Design system documentation
    globals.css        # Global styles (Tailwind, custom CSS vars)
  components/
    theme-provider.tsx # Theme context provider
    ui/                # Reusable UI components (button, card, dialog, etc.)
  lib/
    utils.ts           # Utility functions (e.g., className merge, theme hook)
```

---

## Customization

- **Design System**: Colors, typography, and component guidelines are documented in `src/app/assets/design.md`.
- **Theming**: Easily switch between light and dark mode using the theme toggle in the Navbar.
- **Component Library**: Extend or customize UI components in `src/components/ui/`.

---

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm start` – Start production server
- `npm run lint` – Lint codebase

---

## License

This project is for educational/demo purposes.

---

### Next Steps

- Integrate with a backend or database for persistent data.
- Add authentication and user management.
- Expand analytics and reporting features.

---

*For screenshots, deployment instructions, or contribution guidelines, let me know and I can add those sections as well!*
