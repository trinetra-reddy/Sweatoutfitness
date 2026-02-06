import { Link } from 'react-router';
import { Card, CardContent, CardHeader } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEOHead } from '@/app/components/seo-head';
import { Dumbbell, Heart, Users, Zap, Activity, Target, Clock, CheckCircle, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ProgramsPage() {
  const programs = [
    {
      id: 1,
      title: 'Strength & Bodybuilding',
      description: 'Transform your physique with scientifically-designed muscle building programs. From beginners to advanced lifters.',
      benefits: ['Muscle hypertrophy', 'Progressive overload training', 'Supplement guidance', 'Body composition tracking'],
      duration: '12 weeks',
      level: 'All Levels',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1661439193765-392d81462003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3ZWlnaHRzJTIwZXF1aXBtZW50JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2OTc4NzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-600 to-orange-600',
      link: '/strength'
    },
     {
      id: 2,
      title: 'Yoga & Mindfulness',
      description: 'Traditional Indian yoga practices combined with modern wellness techniques. Achieve balance in body and mind.',
      benefits: ['Enhanced flexibility', 'Stress relief', 'Better posture', 'Improved breathing', 'Mental clarity'],
      duration: '6 weeks',
      level: 'All Levels',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1767611120077-3697335ec748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwcGVhY2VmdWwlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2OTc4NzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-600 to-pink-600',
      link: '/yoga'
    },
    {
      id: 3,
      title: 'Pilates',
      description: 'Low-impact, high-results training focused on core strength, flexibility, and body awareness. Perfect for all fitness levels.',
      benefits: ['Core strength', 'Improved posture', 'Flexibility', 'Injury prevention', 'Mind-body connection'],
      duration: '8 weeks',
      level: 'All Levels',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwY2xhc3N8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-accent to-orange-600',
      link: '/pilates'
    },
    
    {
      id: 4,
      title: 'HIIT & Fat Loss',
      description: 'High-intensity interval training designed for maximum calorie burn and metabolism boost. Perfect for busy professionals.',
      benefits: ['Rapid fat loss', 'Improved cardiovascular health', 'Metabolic conditioning', 'Time-efficient workouts'],
      duration: '8 weeks',
      level: 'Intermediate',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1583500178689-665d1f77e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGluZGlhbiUyMG1hbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5Nzg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-yellow-600 to-red-600',
      link: '/hiit'
    },
   
    {
      id: 5,
      title: 'Functional Training',
      description: 'Real-world movement patterns that improve daily life performance. Includes CrossFit, TRX, and kettlebell training.',
      benefits: ['Full-body conditioning', 'Injury prevention', 'Athletic performance', 'Core strength', 'Mobility'],
      duration: '10 weeks',
      level: 'Intermediate-Advanced',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1734188341701-5a0b7575efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHRyYWluaW5nJTIwaW50ZW5zZSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5NzgwMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-cyan-600',
      link: '/functional'
    },
    {
      id: 6,
      title: 'Group Fitness Classes',
      description: 'High-energy classes including Zumba, Spinning, Boot Camp, and Dance Fitness. Great for motivation and community.',
      benefits: ['Group motivation', 'Variety of workouts', 'Professional instruction', 'Social fitness experience'],
      duration: 'Ongoing',
      level: 'All Levels',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGZpdG5lc3N8ZW58MXx8fHwxNzY5Njk0NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-600 to-emerald-600',
      link: '/group-fitness'
    },
    {
      id: 7,
      title: '1-on-1 Personal Training',
      description: 'Completely customized training with dedicated personal attention. Fastest path to your goals with accountability.',
      benefits: ['Customized programming', 'Form correction', 'Nutrition planning', 'Goal tracking', 'Maximum results'],
      duration: 'Flexible',
      level: 'All Levels',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1727848480902-beb1959c06f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGd5bXxlbnwxfHx8fDE3Njk3ODc2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-pink-600 to-rose-600',
      link: '/personal-training'
    },
  ];

  const features = [
    { icon: Trophy, title: 'Expert Trainers', description: 'Certified professionals with proven track records' },
    { icon: Target, title: 'Goal-Oriented', description: 'Programs designed around your specific objectives' },
    { icon: CheckCircle, title: 'Progress Tracking', description: 'Regular assessments and performance metrics' },
    { icon: Users, title: 'Community Support', description: 'Train alongside motivated individuals' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fitness Programs – Sweatout Health & Fitness Anantapur | Personal Training, HIIT, Yoga"
        description="Explore fitness services at Sweatout Health & Fitness, Anantapur including personal training, strength & conditioning, yoga, Pilates, HIIT, and nutrition coaching."
        keywords="strength training Anantapur, yoga classes Anantapur, personal training Anantapur, HIIT workouts Anantapur, fitness programs Srinagar Colony, bodybuilding gym Anantapur, functional training Anantapur"
      />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758957646695-ec8bce3df462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBneW0lMjBpbnRlcmlvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njk3ODczODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <span className="text-accent font-semibold">TRANSFORM YOUR BODY</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Scientifically designed fitness programs tailored for Indian body types and lifestyles. 
              Find the perfect program for your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-16 bg-gradient-to-b from-black to-muted -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <Card className="bg-card/40 backdrop-blur-sm border-white/10 text-center p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3 border border-accent/20">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </Card>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted via-black to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Choose Your </span>
                <span className="text-accent">Path</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Each program is crafted by our expert trainers to deliver maximum results
              </p>
            </div>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <AnimatedCard key={program.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card className="overflow-hidden bg-card/40 backdrop-blur-sm border-white/10 hover:border-accent/50 transition-all group">
                      <div className="relative h-72 overflow-hidden">
                        <ImageWithFallback
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 left-4">
                          <div className={`p-3 bg-gradient-to-br ${program.color} rounded-xl shadow-lg`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>

                        {/* Level Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                            {program.level}
                          </span>
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-3xl font-bold text-white mb-2">{program.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Clock className="w-4 h-4" />
                            <span>{program.duration} Program</span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-8 space-y-6">
                        <p className="text-gray-300 leading-relaxed">{program.description}</p>
                        
                        <div className="flex-1">
                          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-accent" />
                            What You'll Gain:
                          </h4>
                          <ul className="space-y-3">
                            {program.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link to={program.link} className="block pt-4">
                          <Button
                            variant="outline"
                            className="w-full border-accent/30 hover:bg-accent hover:text-white font-semibold"
                            size="lg"
                          >
                            Get Started →
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Programs Work */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Why Our Programs </span>
                <span className="text-accent">Work</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Results-driven methodology backed by science and proven through thousands of transformations
              </p>
            </div>
          </AnimatedCard>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Personalized Assessment',
                description: 'Every journey starts with a comprehensive fitness evaluation, goal setting, and customized program design.'
              },
              {
                number: '02',
                title: 'Progressive Training',
                description: 'Structured progression that challenges you at the right pace, ensuring continuous improvement and preventing plateaus.'
              },
              {
                number: '03',
                title: 'Nutrition Integration',
                description: 'Indian diet-friendly meal plans that complement your training and fuel your transformation effectively.'
              },
            ].map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <Card className="bg-card/30 backdrop-blur-sm border-white/10 p-8 hover:border-accent/50 transition-all h-full">
                  <div className="text-6xl font-bold text-accent/20 mb-4">{item.number}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1583500178689-665d1f77e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGluZGlhbiUyMG1hbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5Nzg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Start Today"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Ready to Transform?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Book a free consultation with our trainers. We'll assess your goals, 
              recommend the best program, and get you started on your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="text-lg px-10 py-6">
                  Book Free Consultation →
                </Button>
              </Link>
              <Link to="/trainers">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10">
                  Meet Our Trainers
                </Button>
              </Link>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}