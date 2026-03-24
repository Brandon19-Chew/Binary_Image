import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

export type AnimationType = 'matrix' | 'pulse' | 'scroll' | 'glitch' | 'rotate';

interface BinaryCanvasProps {
  id: string;
  pattern: number[][]; // 2D array of 0 or 1
  animationType: AnimationType;
  className?: string;
  size?: number; // width/height in cells
  colorScheme?: {
    one: string; // Tailwind color class for 1s
    zero: string; // Tailwind color class for 0s
    glowOne: string; // CSS color for glow
    glowZero: string; // CSS color for glow
  };
}

const BinaryCanvas: React.FC<BinaryCanvasProps> = ({ 
  id, 
  pattern, 
  animationType, 
  className, 
  size = 15,
  colorScheme = {
    one: 'text-chart-2',
    zero: 'text-chart-4/80',
    glowOne: 'hsl(var(--chart-2) / 0.6)',
    glowZero: 'hsl(var(--chart-4) / 0.4)'
  }
}) => {
  const [frame, setFrame] = useState(0);
  const [glitchIndices, setGlitchIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % 100);
      
      if (animationType === 'glitch' && Math.random() > 0.5) {
        const count = Math.floor(Math.random() * 10);
        const newGlitch = new Set<number>();
        for (let i = 0; i < count; i++) {
          newGlitch.add(Math.floor(Math.random() * size * size));
        }
        setGlitchIndices(newGlitch);
      }
    }, 40); // Faster frame rate (was 70ms)
    return () => clearInterval(interval);
  }, [animationType, size]);

  const renderCell = (rowIndex: number, colIndex: number, originalValue: number) => {
    const cellIndex = rowIndex * size + colIndex;
    let value = originalValue;
    let opacity = 1;
    let isPrimary = originalValue === 1;

    // Apply animation logic
    switch (animationType) {
      case 'matrix':
        // Vertical shift: both 0s and 1s participate in the "rain"
        const mOffset = (rowIndex + frame) % size;
        if (isPrimary) {
          opacity = mOffset < 6 ? 1 : 0.4;
        } else {
          opacity = mOffset < 4 ? 0.35 : 0.1;
        }
        break;
      case 'pulse':
        const pulseVal = 0.5 + Math.sin(frame / 2) * 0.5;
        if (isPrimary) {
          opacity = pulseVal;
        } else {
          opacity = pulseVal * 0.2 + 0.05;
        }
        break;
      case 'scroll':
        // Horizontal shift visual effect
        const sOffset = (colIndex + frame) % size;
        if (isPrimary) {
          opacity = sOffset < 6 ? 1 : 0.3;
        } else {
          opacity = sOffset < 4 ? 0.3 : 0.1;
        }
        break;
      case 'glitch':
        if (glitchIndices.has(cellIndex)) {
          value = originalValue === 0 ? 1 : 0;
          isPrimary = value === 1;
          opacity = 1;
        } else {
          opacity = isPrimary ? 0.9 : 0.15;
        }
        break;
      case 'rotate':
        const centerX = size / 2;
        const centerY = size / 2;
        const dist = Math.sqrt(Math.pow(colIndex - centerX, 2) + Math.pow(rowIndex - centerY, 2));
        const wave = Math.sin(dist - frame / 1.5);
        if (isPrimary) {
          opacity = 0.6 + wave * 0.4;
        } else {
          opacity = 0.1 + wave * 0.05 + 0.05;
        }
        break;
    }

    return (
      <span
        key={cellIndex}
        className={cn(
          "inline-flex h-4 w-4 items-center justify-center text-[10px] transition-all duration-50",
          isPrimary ? `${colorScheme.one} font-bold` : colorScheme.zero
        )}
        style={{ 
          opacity,
          textShadow: isPrimary 
            ? `0 0 10px ${colorScheme.glowOne}` 
            : `0 0 8px ${colorScheme.glowZero}`
        }}
      >
        {value}
      </span>
    );
  };

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <div 
        className="binary-grid p-4 bg-secondary/30 rounded-lg border border-primary/20 backdrop-blur-sm"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          gap: '2px'
        }}
      >
        {pattern.map((row, r) => 
          row.map((val, c) => renderCell(r, c, val))
        )}
      </div>
      <div className="mt-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-mono text-primary uppercase tracking-widest">
        {id}
      </div>
    </div>
  );
};

export default BinaryCanvas;
