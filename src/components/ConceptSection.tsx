import { Card, CardContent } from '@/components/ui/card';
import { Planet, Atom, Droplet, Brush } from 'lucide-react';

const ConceptSection = () => {
  const concepts = [
    {
      icon: <Planet className="h-10 w-10 text-accent" />,
      title: 'Interior Living Planet',
      description: 'A miniature planet with fractal oceans, glass forests, and crystal cities exists within the cracked peanut shell.'
    },
    {
      icon: <Atom className="h-10 w-10 text-secondary" />,
      title: 'Alien Dyson Swarm',
      description: 'Advanced alien technology creates a Dyson swarm that projects golden light beams throughout the cosmic environment.'
    },
    {
      icon: <Droplet className="h-10 w-10 text-primary-300" />,
      title: 'Scale Contrast',
      description: 'Tiny humans observe from the shell edge while massive sophon constructs orbit the miniature world.'
    },
    {
      icon: <Brush className="h-10 w-10 text-accent-300" />,
      title: 'Texture Fusion',
      description: 'Hyperrealistic peanut textures and landscapes contrast with holographic sophon technology.'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="cosmic-title text-3xl md:text-4xl mb-4">Core Concepts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the fundamental elements that make up the surreal cosmic hyperrealism of Sophon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {concepts.map((concept, index) => (
            <Card key={index} className="cosmic-card overflow-hidden border-border/30 bg-card/80 hover:bg-card/90 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-surface-muted/30 group-hover:bg-surface-muted/50 transition-colors">
                  {concept.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                  {concept.title}
                </h3>
                <p className="text-muted-foreground">
                  {concept.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
