import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-12 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by <span className="font-medium underline underline-offset-4 decoration-primary">Code Visual Image</span>. 2026 Code Visual Image.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
