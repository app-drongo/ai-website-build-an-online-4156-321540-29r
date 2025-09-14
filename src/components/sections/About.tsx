import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Artisan Excellence',
      description:
        'Every bag is meticulously handcrafted by skilled artisans using time-honored techniques passed down through generations.',
    },
    {
      icon: Lightbulb,
      title: 'Sustainable Craft',
      description:
        'We source premium materials ethically and create timeless pieces that reduce fashion waste through quality and durability.',
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description:
        'Each bag tells a story. We work closely with our customers to create pieces that reflect their unique style and personality.',
    },
    {
      icon: Globe,
      title: 'Global Artistry',
      description:
        'Supporting traditional craftspeople worldwide while bringing authentic, handmade luxury to fashion-conscious women everywhere.',
    },
  ];

  const stats = [
    { value: '2018', label: 'Founded', icon: Award },
    { value: '3,200+', label: 'Happy Customers', icon: Users },
    { value: '98%', label: 'Customer Satisfaction', icon: TrendingUp },
    { value: '12', label: 'Countries Served', icon: Globe },
  ];

  const team = [
    {
      name: 'Isabella Martinez',
      role: 'Founder & Creative Director',
      image: 'IM',
      bio: 'Former luxury fashion buyer with 20+ years curating exceptional handcrafted accessories.',
    },
    {
      name: 'Elena Rossi',
      role: 'Master Artisan',
      image: 'ER',
      bio: 'Third-generation leather craftsperson specializing in Italian traditional techniques.',
    },
    {
      name: 'Sophia Chen',
      role: 'Design Curator',
      image: 'SC',
      bio: 'Fashion design graduate from Parsons, passionate about sustainable luxury accessories.',
    },
    {
      name: 'Maria Santos',
      role: 'Quality Director',
      image: 'MS',
      bio: 'Expert in premium materials sourcing and artisan quality standards worldwide.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Timeless Beauty
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              One Bag at a Time
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're passionate artisans and designers dedicated to creating exceptional handmade bags
            that celebrate individuality, craftsmanship, and sustainable luxury.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">The Artisan Bag Co. Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 by Isabella Martinez, a former luxury fashion buyer, Artisan Bag Co.
                was born from a simple belief: every woman deserves a bag as unique as she is.
              </p>
              <p>
                Frustrated by mass-produced accessories lacking soul and character, Isabella
                partnered with master craftspeople worldwide to revive traditional bag-making
                techniques and create truly exceptional pieces.
              </p>
              <p>
                Today, we're proud to have crafted over 8,000 unique bags for discerning women who
                value authenticity, quality, and the irreplaceable beauty of handmade artistry.
              </p>
            </div>
            <Button className="group">
              Explore Our Craftsmanship
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "True luxury isn't about logos—it's about the hands that craft your story."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Isabella Martinez, Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Crafting Philosophy</h3>
            <p className="text-muted-foreground">
              The principles that guide every stitch, every design decision, and every customer
              relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Artisan Team</h3>
            <p className="text-muted-foreground">
              The talented craftspeople and designers who bring each unique bag to life with passion
              and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet All Our Artisans
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "My Artisan Bag Co. tote isn't just an accessory—it's a conversation starter, a
                confidence booster, and a daily reminder that I deserve beautiful things made with
                love."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  CW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Charlotte Williams</div>
                  <div className="text-sm text-muted-foreground">
                    Creative Director, Design Studio
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
