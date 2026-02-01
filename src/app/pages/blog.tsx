import { Link } from 'react-router';
import { Card, CardContent, CardHeader } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/app/data/blog-data';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-muted to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <span className="text-accent font-semibold">FITNESS KNOWLEDGE & TIPS</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">SweatOut Gym</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                Fitness Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Expert advice, tips, and inspiration from our certified trainers in Anantapur
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gradient-to-b from-black via-muted to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <Link to={`/blog/${featuredPost.slug}`}>
              <Card hover className="overflow-hidden bg-card/40 backdrop-blur-sm border border-white/10 group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full min-h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-4 py-2 bg-accent text-white text-sm rounded-full font-bold shadow-lg">
                        ⭐ FEATURED
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full w-fit mb-4 border border-accent/50">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                      <span className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <div>
                          <span className="text-white font-semibold block">{featuredPost.author}</span>
                          <span className="text-xs text-gray-500">{featuredPost.authorRole}</span>
                        </div>
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                    </div>
                    <Button variant="primary" className="w-fit bg-gradient-to-r from-accent to-orange-600 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </AnimatedCard>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="text-white">Latest </span>
              <span className="text-accent">Articles</span>
            </h2>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <AnimatedCard key={post.id} delay={index * 0.1}>
                <Link to={`/blog/${post.slug}`}>
                  <Card hover className="h-full bg-card/40 backdrop-blur-sm border border-white/10 overflow-hidden group">
                    <CardHeader className="p-0 relative overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-xs rounded-full font-semibold shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-white/5">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date.split(',')[0]}
                        </span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-white/20 hover:bg-white/5 text-white group-hover:border-accent group-hover:text-accent transition-all"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBtb3RpdmF0aW9ufGVufDF8fHx8MTc2OTc4NzM4MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Join SweatOut"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get Expert Fitness Guidance
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Work directly with the trainers behind these articles. Join SweatOut Gym in Anantapur today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="text-lg px-10 py-6 bg-gradient-to-r from-accent to-orange-600">
                  Start Your Journey →
                </Button>
              </Link>
              <a href="tel:+919885873976">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10">
                  Call +91 9885873976
                </Button>
              </a>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}