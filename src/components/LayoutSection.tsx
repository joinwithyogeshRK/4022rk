import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LayoutSection = () => {
  const layouts = [
    {
      id: 'cinematic',
      title: 'Cinematic Panorama',
      description: 'Wide-angle panoramic format maximizes impact of the reality-bending scene. Allows proper scale contrast between cosmic elements and miniature humans.',
      image: '/images/cinematic-layout.jpg',
      aspectRatio: '16:9'
    },
    {
      id: 'vertical',
      title: 'Vertical Poster',
      description: 'Emphasizes the scale of the peanut shell against the cosmic backdrop, creating a sense of grandeur and otherworldliness.',
      image: '/images/vertical-layout.jpg',
      aspectRatio: '9:16'
    },
    {
      id: 'triptych',
      title: 'Triptych Display',
      description: 'Three-panel display allows for detailed exploration of different aspects of the world within the peanut shell.',
      image: '/images/triptych-layout.jpg',
      aspectRatio: '3 × (1:1)'
    },
    {
      id: 'immersive',
      title: 'Immersive 360° Concept',
      description: 'Fully immersive experience that places the viewer inside the peanut shell world, surrounded by cosmic elements.',
      image: '/images/immersive-layout.jpg',
      aspectRatio: '360°'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="cosmic-title text-3xl md:text-4xl mb-4">Layout Options</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Different layout approaches for presenting the Sophon visual concept.
          </p>
        </div>

        <Tabs defaultValue="cinematic" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-surface-muted/30 p-1">
              {layouts.map((layout) => (
                <TabsTrigger 
                  key={layout.id} 
                  value={layout.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {layout.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {layouts.map((layout) => (
            <TabsContent key={layout.id} value={layout.id} className="mt-0">
              <Card className="cosmic-card border-border/30 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <div className="lg:col-span-3 overflow-hidden">
                      <img 
                        src={layout.image} 
                        alt={layout.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                      <div className="mb-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary-300">
                        {layout.aspectRatio}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">{layout.title}</h3>
                      <p className="text-muted-foreground">{layout.description}</p>
                      
                      {layout.id === 'cinematic' && (
                        <div className="mt-6 p-3 bg-accent/10 border border-accent/20 rounded-md">
                          <p className="text-sm text-accent-foreground font-medium">Recommended Layout</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            This layout maximizes the impact of the reality-bending scene and allows for proper scale contrast.
                          </p>
                        </div>
                      )}
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

export default LayoutSection;
