import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";

const navItems = {
  "/": { name: "Home" },
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/#contact": { name: "Contact" }
};

export function Navbar() {
  return (
    <header className="mb-8">
      <div className="hero-bar">
        <Link href="/">
          <img src="/del-icon.svg" alt={metaData.name} className="h-30 w-auto" />
        </Link>
        <div className="hero-text">
          <h1 className="hero-title">MADELINE MATONTI</h1>
          <p className="hero-subtitle">Curiosity Drives Progress</p>
        </div>
      </div>

      <nav className="navbar">
        <div className="flex gap-[10px]">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="nav-button"
          >
            {name}
          </Link>
        ))}
        </div>
        <span style={{ marginLeft: "auto" }}>
          <ThemeSwitch />
        </span>
      </nav>
    </header>
  );
}
