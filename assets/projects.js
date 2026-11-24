// Edit this file to change project text, order, or media.
// Paths are relative to index.html. Spaces and special characters are handled automatically.
const PROJECTS = [
  {
    id: "fleet",
    title: "Fleet Management X",
    type: "Flutter mobile app",
    description:
      "An enterprise fleet management application for tracking vehicles, services, tyres, Thermo King reports, " +
      "vehicle inspections and damage reports. Drivers and admins get dashboards with alerts for upcoming " +
      "service deadlines, tyre replacements and unrepaired damages, plus PDF report generation and Excel export.",
    tags: ["Flutter", "Dart", "BLoC", "REST API (dio)", "go_router", "get_it", "Secure storage", "PDF & Excel", "Image picker"],
    images: [
      { src: "FleetManagementX/Screenshot_20250610_095617.png", caption: "Home dashboard with live alerts" },
      { src: "FleetManagementX/Screenshot_20250610_104017.png" },
      { src: "FleetManagementX/Screenshot_20250610_112605.png" },
      { src: "FleetManagementX/Screenshot_20251009_150608.png" },
      { src: "FleetManagementX/Screenshot_20251009_152506.png" },
      { src: "FleetManagementX/Screenshot_20251010_111133.png" },
      { src: "FleetManagementX/Screenshot_20251030_103107.png" },
      { src: "FleetManagementX/Screenshot_20251030_103141.png" },
      { src: "FleetManagementX/Screenshot_20251106_090750.png" },
      { src: "FleetManagementX/2025-06-11 14_03_59-fleet_mng.png", caption: "Development view" },
      { src: "FleetManagementX/2025-06-11 15_30_46-fleet_mng.png", caption: "Development view" },
      { src: "FleetManagementX/Diagram veza OLD.drawio.png", caption: "Database relationship diagram" }
    ],
    videos: [],
    links: []
  },
  {
    id: "blood",
    title: "Blood Analysis",
    type: "Flutter mobile app",
    description:
      "A mobile app for recording and tracking blood test results over time. Data is stored offline in a local " +
      "SQLite database, with a calendar view, reminder notifications, sticky-header result tables and Excel export/sharing.",
    tags: ["Flutter", "Dart", "BLoC", "SQLite (sqflite)", "table_calendar", "Local notifications", "Excel export", "share_plus"],
    images: [],
    videos: [{ src: "BloodAnalysis/Screen_Recording_20261119_222632.mp4", caption: "App walkthrough", portrait: true }],
    links: [{ label: "Flutter dependencies used (DOCX)", href: "BloodAnalysis/Flutter dependencies used.docx" }]
  },
  {
    id: "astro",
    title: "Astrophotography Website",
    type: "Web application",
    description:
      "A responsive website for managing and showcasing astrophotography. Features include list views, adding and " +
      "updating entries, astronomy content, dynamically loaded data and a fully responsive layout.",
    tags: ["Web", "CRUD", "Dynamic data", "Responsive design"],
    images: [],
    videos: [
      { src: "Astrophotography website/1Home.mp4", caption: "1. Home page" },
      { src: "Astrophotography website/2Lists.mp4", caption: "2. Lists" },
      { src: "Astrophotography website/3Adding.mp4", caption: "3. Adding entries" },
      { src: "Astrophotography website/4Update.mp4", caption: "4. Updating entries" },
      { src: "Astrophotography website/5Astronomy.mp4", caption: "5. Astronomy section" },
      { src: "Astrophotography website/6Interesting.mp4", caption: "6. Interesting facts" },
      { src: "Astrophotography website/7DynamicData.mp4", caption: "7. Dynamic data" },
      { src: "Astrophotography website/8Responsivenes.mp4", caption: "8. Responsiveness" }
    ],
    links: []
  },
  {
    id: "python",
    title: "Truck Load Planning — Python Scripts",
    type: "Python automation & data visualization",
    description:
      "Python scripts that compute how pallets (Euro/TK, roll, half pallets, thermo containers) fit into a truck's " +
      "cargo space for a delivery route, and render a labelled 3D load plan with space utilisation, per-store " +
      "pallet summary and a report of what did and didn't fit.",
    tags: ["Python", "Matplotlib 3D", "Bin packing", "Automation", "Reporting"],
    images: [
      { src: "Python scripts/SF_RUTE_25209212_08_01_2026_BG-3005-AA.png", caption: "3D load plan — 91.41% space utilisation" },
      { src: "Python scripts/SF_RUTE_25209212_08_01_2026_BG-3005-AA (2).png", caption: "3D load plan — alternative layout" }
    ],
    videos: [],
    links: []
  }
];
