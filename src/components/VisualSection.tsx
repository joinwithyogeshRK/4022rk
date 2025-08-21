import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const VisualSection = () => {
  const [activeTab, setActiveTab] = useState('peanut');

  const visuals = [
    {
      id: 'peanut',
      title: 'Cracked Giant Peanut Shell',
      description: 'The central composition features a giant cracked peanut shell floating in deep space, serving as the container for an entire world.',
      image: '/images/peanut-shell-concept.jpg'
    },
    {
      id: 'planet',
      title: 'Interior Living Planet',
      description: 'Inside the shell exists a miniature planet with fractal oceans, glass forests, and crystal cities, all rendered in hyperrealistic detail.',
      image: '/images/interior-planet-concept.jpg'
    },
    {
      id: 'dyson',
      title: 'Alien Dyson Swarm',
      description: 'Above the miniature world, a sophisticated Dyson swarm orbits and projects golden light beams through the cosmic dust.',
      image: '/images/dyson-swarm-concept.jpg'
    },
    {
      id: 'sophon',
      title: 'Sophon Constructs',
      description: 'Massive sophon constructs with holographic properties orbit the world, creating a stark contrast with the tiny human observers.',
      image: '/images/sophon-constructs-concept.jpg'
    },
    {
      id: 'easter',
      title: 'Hidden Easter Eggs',
      description: 'Throughout the composition, hidden elements like a shattered hourglass, floating door, and underwater eye create additional layers of meaning.',
      image: '/images/easter-eggs-concept.jpg'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="cosmic-title text-3xl md:text-4xl mb-4">Visual Elements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the key visual components that create the surreal cosmic hyperrealism of Sophon.
          </p>
        </div>

        <Tabs defaultValue="peanut" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-surface-muted/30 p-1">
              {visuals.map((visual) => (
                <TabsTrigger 
                  key={visual.id} 
                  value={visual.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {visual.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {visuals.map((visual) => (
            <TabsContent key={visual.id} value={visual.id} className="mt-0">
              <Card className="cosmic-card border-border/30 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="aspect-square md:aspect-auto overflow-hidden">
                      <img 
                        src={visual.image} 
                        alt={visual.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">{visual.title}</h3>
                      <p className="text-muted-foreground mb-6">{visual.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {['Hyperrealism', 'Surreal', 'Cosmic', 'Detailed'].map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-surface-muted/30 text-xs rounded-full text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default VisualSection;
