import React, { useState, useEffect } from 'react';
import BinaryCanvas, { AnimationType } from '@/components/BinaryCanvas';
import CodeViewer from '@/components/CodeViewer';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  HEART_PATTERN, 
  STAR_PATTERN, 
  ARROW_PATTERN, 
  SMILEY_PATTERN, 
  LETTER_C_PATTERN,
  SKULL_PATTERN,
  ROCKET_PATTERN,
  GEAR_PATTERN,
  LIGHTNING_PATTERN,
  INFINITY_PATTERN,
  DIAMOND_PATTERN,
  HOURGLASS_PATTERN
} from '@/lib/patterns';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

interface ImageConfig {
  id: string;
  pattern: number[][];
  animation: AnimationType;
  title: string;
  complexity: 'Simple' | 'Medium' | 'Complex';
  colorScheme: {
    one: string;
    zero: string;
    glowOne: string;
    glowZero: string;
  };
}

const IMAGES: ImageConfig[] = [
  { 
    id: 'IMG-001', 
    pattern: HEART_PATTERN, 
    animation: 'matrix', 
    title: 'Binary Heart Pulse', 
    complexity: 'Simple',
    colorScheme: {
      one: 'text-[hsl(var(--color-pink))]',
      zero: 'text-[hsl(var(--color-red))]/60',
      glowOne: 'hsl(var(--color-pink) / 0.7)',
      glowZero: 'hsl(var(--color-red) / 0.4)'
    }
  },
  { 
    id: 'IMG-002', 
    pattern: STAR_PATTERN, 
    animation: 'pulse', 
    title: 'Starlight Radiance', 
    complexity: 'Simple',
    colorScheme: {
      one: 'text-[hsl(var(--color-yellow))]',
      zero: 'text-[hsl(var(--color-orange))]/60',
      glowOne: 'hsl(var(--color-yellow) / 0.7)',
      glowZero: 'hsl(var(--color-orange) / 0.4)'
    }
  },
  { 
    id: 'IMG-003', 
    pattern: ARROW_PATTERN, 
    animation: 'scroll', 
    title: 'Stream Data Vector', 
    complexity: 'Simple',
    colorScheme: {
      one: 'text-[hsl(var(--color-cyan))]',
      zero: 'text-[hsl(var(--color-blue))]/60',
      glowOne: 'hsl(var(--color-cyan) / 0.7)',
      glowZero: 'hsl(var(--color-blue) / 0.4)'
    }
  },
  { 
    id: 'IMG-004', 
    pattern: SMILEY_PATTERN, 
    animation: 'glitch', 
    title: 'Neural Smile', 
    complexity: 'Medium',
    colorScheme: {
      one: 'text-[hsl(var(--color-yellow))]',
      zero: 'text-[hsl(var(--color-orange))]/60',
      glowOne: 'hsl(var(--color-yellow) / 0.7)',
      glowZero: 'hsl(var(--color-orange) / 0.4)'
    }
  },
  { 
    id: 'IMG-005', 
    pattern: LETTER_C_PATTERN, 
    animation: 'rotate', 
    title: 'Cipher Loop', 
    complexity: 'Simple',
    colorScheme: {
      one: 'text-[hsl(var(--color-purple))]',
      zero: 'text-[hsl(var(--color-blue))]/60',
      glowOne: 'hsl(var(--color-purple) / 0.7)',
      glowZero: 'hsl(var(--color-blue) / 0.4)'
    }
  },
  { 
    id: 'IMG-006', 
    pattern: SKULL_PATTERN, 
    animation: 'glitch', 
    title: 'Digital Skull', 
    complexity: 'Complex',
    colorScheme: {
      one: 'text-[hsl(var(--color-red))]',
      zero: 'text-[hsl(var(--color-orange))]/60',
      glowOne: 'hsl(var(--color-red) / 0.7)',
      glowZero: 'hsl(var(--color-orange) / 0.4)'
    }
  },
  { 
    id: 'IMG-007', 
    pattern: ROCKET_PATTERN, 
    animation: 'matrix', 
    title: 'Launch Sequence', 
    complexity: 'Complex',
    colorScheme: {
      one: 'text-[hsl(var(--color-orange))]',
      zero: 'text-[hsl(var(--color-red))]/60',
      glowOne: 'hsl(var(--color-orange) / 0.7)',
      glowZero: 'hsl(var(--color-red) / 0.4)'
    }
  },
  { 
    id: 'IMG-008', 
    pattern: GEAR_PATTERN, 
    animation: 'rotate', 
    title: 'Mechanical Core', 
    complexity: 'Complex',
    colorScheme: {
      one: 'text-[hsl(var(--color-cyan))]',
      zero: 'text-[hsl(var(--color-blue))]/60',
      glowOne: 'hsl(var(--color-cyan) / 0.7)',
      glowZero: 'hsl(var(--color-blue) / 0.4)'
    }
  },
  { 
    id: 'IMG-009', 
    pattern: LIGHTNING_PATTERN, 
    animation: 'pulse', 
    title: 'Electric Surge', 
    complexity: 'Medium',
    colorScheme: {
      one: 'text-[hsl(var(--color-yellow))]',
      zero: 'text-[hsl(var(--color-cyan))]/60',
      glowOne: 'hsl(var(--color-yellow) / 0.7)',
      glowZero: 'hsl(var(--color-cyan) / 0.4)'
    }
  },
  { 
    id: 'IMG-010', 
    pattern: INFINITY_PATTERN, 
    animation: 'scroll', 
    title: 'Eternal Loop', 
    complexity: 'Complex',
    colorScheme: {
      one: 'text-[hsl(var(--color-purple))]',
      zero: 'text-[hsl(var(--color-pink))]/60',
      glowOne: 'hsl(var(--color-purple) / 0.7)',
      glowZero: 'hsl(var(--color-pink) / 0.4)'
    }
  },
  { 
    id: 'IMG-011', 
    pattern: DIAMOND_PATTERN, 
    animation: 'pulse', 
    title: 'Crystal Matrix', 
    complexity: 'Medium',
    colorScheme: {
      one: 'text-[hsl(var(--color-cyan))]',
      zero: 'text-[hsl(var(--color-blue))]/60',
      glowOne: 'hsl(var(--color-cyan) / 0.7)',
      glowZero: 'hsl(var(--color-blue) / 0.4)'
    }
  },
  { 
    id: 'IMG-012', 
    pattern: HOURGLASS_PATTERN, 
    animation: 'rotate', 
    title: 'Time Flux', 
    complexity: 'Medium',
    colorScheme: {
      one: 'text-[hsl(var(--color-orange))]',
      zero: 'text-[hsl(var(--color-yellow))]/60',
      glowOne: 'hsl(var(--color-orange) / 0.7)',
      glowZero: 'hsl(var(--color-yellow) / 0.4)'
    }
  },
];

const Gallery: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case 'Simple': return 'bg-chart-2/20 text-chart-2 border-chart-2/40';
      case 'Medium': return 'bg-chart-4/20 text-chart-4 border-chart-4/40';
      case 'Complex': return 'bg-destructive/20 text-destructive border-destructive/40';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight gradient-text">
            Pattern Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Explore {IMAGES.length} unique binary visualizations. Each pattern includes full source code access 
            in multiple formats: Binary Flow, ASCII Art, and JavaScript Arrays.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="px-4 py-2 bg-primary/20 border border-primary/40 rounded-md text-primary font-mono text-sm">
              0x5F3759DF
            </div>
            <div className="px-4 py-2 bg-secondary/30 border border-border rounded-md text-muted-foreground font-mono text-sm">
              v2.0.0.extended
            </div>
            <div className="px-4 py-2 bg-chart-2/20 border border-chart-2/40 rounded-md text-chart-2 font-mono text-sm">
              {IMAGES.length} Patterns
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {IMAGES.map((img) => (
              <div key={img.id} className="group relative">
                {loading ? (
                  <div className="flex flex-col items-center gap-4">
                    <Skeleton className="h-[300px] w-full rounded-xl bg-muted" />
                    <Skeleton className="h-6 w-32 bg-muted" />
                  </div>
                ) : (
                  <div className="flex flex-col items-center p-6 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className={getComplexityColor(img.complexity)}>
                        {img.complexity}
                      </Badge>
                    </div>
                    <BinaryCanvas 
                      id={img.id} 
                      pattern={img.pattern} 
                      animationType={img.animation} 
                      className="w-full"
                      colorScheme={img.colorScheme}
                    />
                    <div className="mt-6 text-center w-full">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {img.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 opacity-70 mb-4">
                        {img.animation.toUpperCase()} ANIMATION LOOP
                      </p>
                      <CodeViewer 
                        pattern={img.pattern} 
                        id={img.id} 
                        title={img.title}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-20 py-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">{IMAGES.length}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Total Patterns</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-chart-2 mb-2">5</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Animation Types</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-chart-4 mb-2">225</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Binary Cells</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">∞</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Possibilities</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
