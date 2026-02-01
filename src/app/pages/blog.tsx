import { Link } from 'react-router';
import { Card, CardContent, CardHeader } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Calendar, User } from 'lucide-react';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Tips for Building Muscle Mass',
      excerpt: 'Discover the proven strategies to maximize your muscle growth and achieve your strength goals faster.',
      author: 'Mike Johnson',
      date: 'January 25, 2026',
      category: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1676109829011-a9f0f3e40f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2OTY5NTQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Cardio for Weight Loss',
      excerpt: 'Learn how to optimize your cardio workouts to burn fat effectively and maintain muscle mass.',
      author: 'Sarah Williams',
      date: 'January 22, 2026',
      category: 'Weight Loss',
      image: 'https://images.unsplash.com/photo-1583500178450-e59e4309b57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBleGVyY2lzZXxlbnwxfHx8fDE3Njk3ODY1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Benefits of Yoga: Mind, Body, and Soul',
      excerpt: 'Explore how yoga can improve your flexibility, mental clarity, and overall well-being.',
      author: 'Lisa Martinez',
      date: 'January 20, 2026',
      category: 'Yoga',
      image: 'https://images.unsplash.com/photo-1625865020971-581242d0ead6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc2OTc4NjU4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Nutrition 101: Fueling Your Workouts',
      excerpt: 'Understanding the right nutrition to support your fitness goals and maximize recovery.',
      author: 'Emma Rodriguez',
      date: 'January 18, 2026',
      category: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3Njk3NzcyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'How to Stay Motivated: Long-Term Fitness Success',
      excerpt: 'Practical tips and mindset strategies to maintain consistency and achieve lasting results.',
      author: 'David Chen',
      date: 'January 15, 2026',
      category: 'Motivation',
      image: 'https://images.unsplash.com/photo-1639504031765-ca21aecb7252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHRyYWluaW5nfGVufDF8fHx8MTc2OTc4NjU4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Recovery Essentials: Rest Days Matter',
      excerpt: 'Why rest and recovery are just as important as your workouts for optimal performance.',
      author: 'Alex Thompson',
      date: 'January 12, 2026',
      category: 'Recovery',
      image: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3Njk2ODgyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Fitness Blog</h1>
          <p className="text-xl">Expert advice, tips, and inspiration for your fitness journey</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card hover className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <ImageWithFallback
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full min-h-[300px] object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full w-fit mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                </div>
                <Button variant="primary">Read More</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} hover>
                <CardHeader className="p-0">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}