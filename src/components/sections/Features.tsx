import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scissors, Heart, Truck, Shield, Palette, Users, Award, Leaf, Star } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Scissors,
      title: 'Hand-Stitched Excellence',
      description:
        'Every bag is meticulously crafted by skilled artisans using traditional techniques passed down through generations.',
      badge: 'Craftsmanship',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description:
        'Each piece carries the passion and dedication of our artisans who pour their heart into every stitch.',
      badge: 'Quality',
    },
    {
      icon: Truck,
      title: 'Free Worldwide Shipping',
      description:
        'Complimentary shipping on all orders over $150. Your handcrafted bag delivered safely to your door.',
      badge: 'Shipping',
    },
    {
      icon: Shield,
      title: 'Lifetime Craftsmanship Guarantee',
      description:
        'We stand behind our work. Any craftsmanship issues will be repaired or replaced at no cost.',
      badge: 'Warranty',
    },
    {
      icon: Palette,
      title: 'Custom Color Options',
      description:
        'Choose from 20+ premium leather colors or request a custom shade to match your personal style.',
      badge: 'Personalization',
    },
    {
      icon: Users,
      title: 'Supporting Local Artisans',
      description:
        'Your purchase directly supports independent craftspeople and helps preserve traditional bag-making techniques.',
      badge: 'Community',
    },
    {
      icon: Award,
      title: 'Award-Winning Designs',
      description:
        "Our unique designs have been featured in Vogue, Harper's Bazaar, and won the 2023 Artisan Excellence Award.",
      badge: 'Recognition',
    },
    {
      icon: Leaf,
      title: 'Sustainable Materials',
      description:
        'Ethically sourced leather and eco-friendly dyes ensure your bag is as kind to the planet as it is beautiful.',
      badge: 'Sustainability',
    },
    {
      icon: Star,
      title: 'Exclusive Limited Collections',
      description:
        "Access to seasonal limited editions and one-of-a-kind pieces you won't find anywhere else.",
      badge: 'Exclusivity',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Artisan Bag Co.
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Handcrafted Excellence in
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Every Single Bag
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover what makes our handmade bags extraordinary. From traditional craftsmanship to
            modern sustainability, every detail is designed with you in mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to own a piece of artisan craftsmanship?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Shop Collection
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Meet Our Artisans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
