import { Card, CardContent } from '@/components/ui/card';

const ColorSection = () => {
  const colorGroups = [
    {
      title: 'Deep Space Violets',
      description: 'Create cosmic depth and otherworldly atmosphere',
      colors: [
        { name: 'Deep Indigo', hex: '#4b0082' },
        { name: 'Dark Violet', hex: '#1a0933' },
        { name: 'Cosmic Purple', hex: '#8a2be2' }
      ]
    },
    {
      title: 'Molten Golds',
      description: 'Highlight divine light from the Dyson swarm',
      colors: [
        { name: 'Gold', hex: '#ffd700' },
        { name: 'Golden Rod', hex: '#daa520' }
      ]
    },
    {
      title: 'Quantum Blues',
      description: 'Represent alien technology and otherworldly elements',
      colors: [
        { name: 'Deep Sky Blue', hex: '#00bfff' },
        { name: 'Ocean Blue', hex: '#0077be' },
        { name: 'Deep Blue', hex: '#00416a' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="cosmic-title text-3xl md:text-4xl mb-4">Color Strategy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The color palette combines deep space violets, molten golds, and quantum blues to create an otherworldly experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {colorGroups.map((group, index) => (
            <Card key={index} className="cosmic-card border-border/30 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{group.title}</h3>
                <p className="text-muted-foreground mb-6">{group.description}</p>
                
                <div className="space-y-4">
                  {group.colors.map((color, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div 
                        className="w-12 h-12 rounded-md border border-border/30" 
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <p className="font-medium text-foreground">{color.name}</p>
                        <p className="text-sm text-muted-foreground">{color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorSection;
