import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "You've been added to our newsletter. Stay tuned for cosmic updates.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-cosmic-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="cosmic-title text-3xl md:text-4xl mb-4">Join Our Cosmic Journey</h2>
          <p className="text-surface-foreground mb-8 text-lg">
            Subscribe to our newsletter to receive updates about Sophon and be the first to know about release dates, behind-the-scenes content, and exclusive events.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="quantum-input bg-surface/30 border-border/30 text-surface-foreground placeholder:text-muted-foreground/70 focus:border-accent"
            />
            <Button 
              type="submit" 
              className="sophon-button bg-accent hover:bg-accent-600 text-accent-foreground"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground/70 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Sophon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
