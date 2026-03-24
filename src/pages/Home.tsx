import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Algorithmic Art Meets Binary Code</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">Digital Binary</span>
              <br />
              <span className="text-foreground">Artistry</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Explore the intersection of code and creativity. Watch as simple binary digits (0s and 1s) 
              transform into mesmerizing animated patterns, each with its own unique algorithmic behavior.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2 text-base px-8">
                <Link to="/gallery">
                  View Gallery
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 text-base px-8 border-primary/30 hover:bg-primary/10">
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-20 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              What Makes It <span className="gradient-text">Special</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">12 Unique Patterns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From simple hearts to complex gears, each pattern is meticulously crafted using 
                  binary arrays. View the source code and ASCII art for every design.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className="h-12 w-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-3">5 Animation Styles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience Matrix Rain, Pulsing Waves, Horizontal Scroll, Digital Glitch, and 
                  Radial Rotation—each bringing patterns to life in unique ways.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-chart-4" />
                </div>
                <h3 className="text-xl font-bold mb-3">Open Source Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every pattern includes full source code access. Copy binary flows, ASCII art, 
                  or JavaScript arrays directly from the viewer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container py-20 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How It <span className="gradient-text">Works</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Binary Grid Foundation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Each pattern starts as a 15×15 grid of 0s and 1s. The arrangement of these 
                    digits creates recognizable shapes—hearts, stars, skulls, and more.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-chart-2/20 flex items-center justify-center text-chart-2 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Animation Algorithms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Each pattern is assigned one of five animation types. These algorithms control 
                    how the binary digits move, pulse, glitch, or rotate in real-time.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-chart-4/20 flex items-center justify-center text-chart-4 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Continuous Rendering</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The animations run continuously and independently, creating a dynamic visual 
                    experience. Each frame updates at 70ms intervals for smooth motion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Explore the <span className="gradient-text">Gallery</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Discover all 12 animated patterns, view their source code, and experience 
              the beauty of algorithmic art.
            </p>
            <Button asChild size="lg" className="gap-2 text-base px-8">
              <Link to="/gallery">
                View All Patterns
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
