import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-mono font-bold text-xs">
            01
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2">
            Code Visual Image
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-primary">Home</Link>
          <Link to="/gallery" className="transition-colors hover:text-primary">Gallery</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
