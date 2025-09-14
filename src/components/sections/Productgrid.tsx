import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star, Filter, ChevronDown } from 'lucide-react';

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: 'Bohemian Crossbody Satchel',
      price: 189.0,
      originalPrice: 229.0,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 47,
      badge: 'Sale',
      category: 'Crossbody Bags',
    },
    {
      id: 2,
      name: 'Vintage Leather Tote',
      price: 295.0,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 63,
      badge: 'New',
      category: 'Tote Bags',
    },
    {
      id: 3,
      name: 'Woven Straw Market Bag',
      price: 125.0,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 34,
      category: 'Market Bags',
    },
    {
      id: 4,
      name: 'Embroidered Evening Clutch',
      price: 145.0,
      originalPrice: 175.0,
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc92c01d?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 28,
      badge: 'Sale',
      category: 'Evening Bags',
    },
    {
      id: 5,
      name: 'Canvas Weekender Duffel',
      price: 225.0,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 52,
      category: 'Travel Bags',
    },
    {
      id: 6,
      name: 'Handwoven Bucket Bag',
      price: 165.0,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 71,
      badge: 'Bestseller',
      category: 'Bucket Bags',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Handcrafted Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Each bag is lovingly crafted by skilled artisans using premium materials and
            time-honored techniques
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="size-4" />
              Filter by Style
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Bag Type
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Price Range
              <ChevronDown className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Showing 6 of 18 handcrafted bags</span>
            <Button variant="ghost" size="sm" className="gap-2">
              Sort by: Featured
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square bg-muted">
                {product.badge && (
                  <Badge
                    className="absolute top-4 left-4 z-10"
                    variant={product.badge === 'Sale' ? 'destructive' : 'default'}
                  >
                    {product.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                >
                  <Heart className="size-4" />
                </Button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-primary text-primary'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full group/btn" size="sm">
                  <ShoppingCart className="size-4 mr-2 transition-transform group-hover/btn:scale-110" />
                  Add to Collection
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Discover More Artisan Bags
          </Button>
        </div>
      </div>
    </section>
  );
}
