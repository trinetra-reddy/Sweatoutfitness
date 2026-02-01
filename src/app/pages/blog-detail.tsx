import { useParams, Link, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Card, CardContent } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '@/app/data/blog-data';
import { motion } from 'motion/react';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPostBySlug(slug) : null;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const handleShare = async () => {
    const url = window.location.href;
    
    try {
      // Try native share API first
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        });
        return;
      }
    } catch (error) {
      // If user cancels, just return silently
      if (error instanceof Error && error.name === 'AbortError') {
        return;
      }
    }

    // Fallback: Try clipboard API
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
      return;
    } catch (clipboardError) {
      // Clipboard API failed, use manual copy method
    }

    // Manual copy fallback (works in most browsers)
    try {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      
      if (successful) {
        alert('Link copied to clipboard!');
      } else {
        // Last resort: show URL in prompt for manual copy
        prompt('Copy this link:', url);
      }
    } catch (error) {
      // Absolute last resort: show URL in alert
      prompt('Copy this link:', url);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-muted to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>

            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold border border-accent/50">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <div>
                  <span className="text-white font-semibold">{post.author}</span>
                  <span className="text-sm text-gray-500 block">{post.authorRole}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-10 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card/40 backdrop-blur-sm border border-white/10">
              <CardContent className="p-8 md:p-12">
                <div 
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:text-white prose-headings:font-bold
                    prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:first:mt-0
                    prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-accent
                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:text-gray-300 prose-ul:mb-6
                    prose-li:mb-2
                    prose-strong:text-white prose-strong:font-semibold"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share Button */}
                <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={handleShare}
                    className="border-white/20 hover:bg-white/5 text-white"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Article
                  </Button>

                  <Link to="/contact">
                    <Button variant="primary" className="bg-gradient-to-r from-accent to-orange-600">
                      Join SweatOut Gym →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-black via-muted to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <Card hover className="h-full bg-card/40 backdrop-blur-sm border border-white/10 overflow-hidden group">
                      <div className="relative overflow-hidden">
                        <ImageWithFallback
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-accent text-white text-xs rounded-full font-semibold">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {relatedPost.author}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/blog">
                <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/5 text-white">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBtb3RpdmF0aW9ufGVufDF8fHx8MTc2OTc4NzM4MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Join SweatOut"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join SweatOut Gym in Anantapur and get expert guidance from our certified trainers. Your fitness journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="primary" className="text-lg px-10 py-6 bg-gradient-to-r from-accent to-orange-600">
                Get Started Today →
              </Button>
            </Link>
            <a href="tel:+919885873976">
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10">
                Call +91 9885873976
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}