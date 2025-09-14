import { ChevronRight, Home, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PageHeader() {
  return (
    <section className="bg-background border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link
              href="/"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Home className="size-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-4" />
            <Link href="/products" className="hover:text-foreground transition-colors">
              Shop
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Premium Leather Collection</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Handcrafted Leather Bags Collection
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore 24 meticulously crafted leather bags from Artisan Bag Co. From executive
                briefcases to weekend totes, each piece tells a story of traditional craftsmanship.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="size-4" />
                Filter Styles
              </Button>
              <Button className="gap-2">
                <Search className="size-4" />
                Find Bags
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">24</span> Bags In Stock
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">$180-$650</span> price range
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9★</span> Customer rating
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Free</span> Shipping available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
