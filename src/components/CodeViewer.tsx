import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Code2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CodeViewerProps {
  pattern: number[][];
  id: string;
  title: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ pattern, id, title }) => {
  const [copied, setCopied] = useState(false);

  const generateCodeString = () => {
    const rows = pattern.map(row => `  [${row.join(', ')}]`).join(',\n');
    return `// ${title} (${id})\nconst pattern = [\n${rows}\n];`;
  };

  const generateAsciiArt = () => {
    const header = `${title} (${id})\n${'='.repeat(title.length + id.length + 3)}\n\n`;
    const art = pattern.map(row => 
      row.map(cell => cell === 1 ? '█' : '░').join('')
    ).join('\n');
    return header + art;
  };

  const generateBinaryFlow = () => {
    const header = `${title} (${id})\n${'='.repeat(title.length + id.length + 3)}\n\n`;
    const flow = pattern.map(row => row.join('')).join('\n');
    return header + flow;
  };

  const codeString = generateCodeString();
  const asciiArt = generateAsciiArt();
  const binaryFlow = generateBinaryFlow();

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary"
        >
          <Code2 className="h-4 w-4" />
          View Code
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="gradient-text">{title} - Pattern Data</span>
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="binary" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="binary">Binary Flow</TabsTrigger>
            <TabsTrigger value="ascii">ASCII Art</TabsTrigger>
            <TabsTrigger value="array">Array Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="binary" className="mt-4">
            <div className="flex justify-end mb-2">
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={() => handleCopy(binaryFlow)}
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </Button>
            </div>
            <ScrollArea className="h-[400px] w-full rounded-md border border-border p-4 bg-secondary/30">
              <pre className="text-sm font-mono text-foreground leading-tight">
                <code>{binaryFlow}</code>
              </pre>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="ascii" className="mt-4">
            <div className="flex justify-end mb-2">
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={() => handleCopy(asciiArt)}
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </Button>
            </div>
            <ScrollArea className="h-[400px] w-full rounded-md border border-border p-4 bg-secondary/30">
              <pre className="text-sm font-mono text-primary leading-tight">
                <code>{asciiArt}</code>
              </pre>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="array" className="mt-4">
            <div className="flex justify-end mb-2">
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={() => handleCopy(codeString)}
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </Button>
            </div>
            <ScrollArea className="h-[400px] w-full rounded-md border border-border p-4 bg-secondary/30">
              <pre className="text-xs font-mono text-foreground">
                <code>{codeString}</code>
              </pre>
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Pattern Info:</strong> {pattern.length}x{pattern[0]?.length || 0} grid | 
            <strong className="text-foreground ml-2">Active Pixels:</strong> {pattern.flat().filter(v => v === 1).length} | 
            <strong className="text-foreground ml-2">ID:</strong> {id}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CodeViewer;
