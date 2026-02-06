import { Link } from 'react-router';
import { Card, CardContent } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEOHead } from '@/app/components/seo-head';
import { Activity, Heart, Users, Zap, Target, Clock, CheckCircle, Award, Shield, TrendingUp, Music, Smile } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export function GroupFitnessPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Group Motivation',
      description: 'Train with others who share your goals. Group energy pushes you to work harder and stay consistent.'
    },
    {
      icon: Music,
      title: 'Fun & Engaging',
      description: 'Energetic music, dynamic movements, and variety keep workouts exciting and enjoyable.'
    },
    {
      icon: Heart,
      title: 'Cardiovascular Health',
      description: 'Improve heart health, endurance, and stamina through high-energy aerobic workouts.'
    },
    {
      icon: Zap,
      title: 'Calorie Burning',
      description: 'Burn significant calories in every session with high-intensity group classes.'
    },
    {
      icon: Smile,
      title: 'Social Connection',
      description: 'Build friendships, find accountability partners, and be part of a supportive fitness community.'
    },
    {
      icon: Target,
      title: 'Professional Instruction',
      description: 'Expert trainers guide every class, ensuring proper form, safety, and maximum results.'
    }
  ];

  const classTypes = [
    {
      title: 'Zumba',
      level: 'All Levels',
      duration: '60 min',
      description: 'Latin-inspired dance fitness party! Burn calories while dancing to energetic music. No dance experience needed.',
      benefits: ['Cardio workout', 'Full-body toning', 'Stress relief', 'Dance skills'],
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6dW1iYSUyMGNsYXNzJTIwZGFuY2V8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-pink-600 to-rose-600'
    },
    {
      title: 'Spinning / Cycling',
      level: 'All Levels',
      duration: '45 min',
      description: 'High-intensity indoor cycling classes with motivating music and instructor-led intervals.',
      benefits: ['Lower body strength', 'Cardio endurance', 'Low-impact', 'Calorie burn'],
      image: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlubmluZyUyMGN5Y2xpbmclMjBjbGFzc3xlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Boot Camp',
      level: 'Intermediate-Advanced',
      duration: '50 min',
      description: 'Military-style training combining cardio, strength, and agility drills for total-body conditioning.',
      benefits: ['Full-body workout', 'Strength & cardio', 'Team spirit', 'Mental toughness'],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGludGVuc2V8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-orange-600 to-red-600'
    },
    {
      title: 'Dance Fitness',
      level: 'All Levels',
      duration: '55 min',
      description: 'Bollywood, hip-hop, and contemporary dance styles combined into a fun, high-energy workout.',
      benefits: ['Cardio fitness', 'Coordination', 'Creativity', 'Confidence'],
      image: 'https://images.unsplash.com/photo-1695795634692-567cec15ad95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMGZpdG5lc3MlMjBjbGFzc3xlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const faqs = [
    {
      question: 'Do I need to be fit to join group fitness classes?',
      answer: 'Not at all! Our group fitness classes are designed for all fitness levels. Instructors provide modifications for beginners and progressions for advanced participants. Start where you are and progress at your own pace.'
    },
    {
      question: 'What should I bring to a group fitness class?',
      answer: 'Bring a water bottle, towel, and wear comfortable workout clothes and athletic shoes. For cycling classes, cycling shoes are optional (we have regular pedals too). Everything else is provided.'
    },
    {
      question: 'How do I sign up for classes?',
      answer: 'Classes are included in your Pro and Elite memberships. Check the class schedule at the front desk or on our mobile app, and simply show up! Some popular classes may require advance booking.'
    },
    {
      question: "What if I can't keep up with the class?",
      answer: "That's completely normal, especially when starting! Take breaks when needed, modify movements, and go at your own pace. Our instructors are there to support you, and you\\'ll build stamina over time."
    },
    {
      question: 'Can I try a class before committing to a membership?',
      answer: 'Yes! We offer free trial classes for new members. Contact us to schedule your complimentary group fitness class and experience the energy firsthand.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Group Fitness Classes in Anantapur – SweatOut Health & Fitness | Zumba, Spinning & More"
        description="Join energetic group fitness classes in Anantapur! Zumba, Spinning, Boot Camp, Dance Fitness. Expert instructors, motivating community. Try a free class at SweatOut!"
        keywords="group fitness Anantapur, Zumba classes, spinning classes, boot camp, dance fitness, gym classes, fitness community, best gym Anantapur"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1536922246289-88c42f957773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzc3xlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Group Fitness Classes at SweatOut Health & Fitness Anantapur"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <span className="text-accent font-semibold">MOVE • GROOVE • THRIVE</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">GROUP FITNESS </span>
              <span className="text-accent">CLASSES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the energy! Zumba, Spinning, Boot Camp, and Dance Fitness classes that make working out fun and effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="text-lg px-8">
                  Try a Free Class
                </Button>
              </Link>
              <Link to="/membership">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Membership Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Group Fitness Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Why </span>
                  <span className="text-accent">Group Fitness?</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Group fitness classes combine the expertise of professional instructors with the motivating energy of
                  working out alongside others. Whether you're dancing to Latin beats in Zumba, pushing through intervals
                  on a spin bike, or tackling boot camp drills, group classes make fitness fun and effective.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  At SweatOut, our group fitness classes are designed for all fitness levels. Our certified instructors
                  create energetic, safe, and results-driven workouts that keep you coming back for more. Plus, you'll
                  build friendships and find accountability in our supportive fitness community.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">ENERGETIC</div>
                    <div className="text-white text-xs">High-Energy Workouts</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">VARIETY</div>
                    <div className="text-white text-xs">Multiple Class Types</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">COMMUNITY</div>
                    <div className="text-white text-xs">Supportive Environment</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">FUN</div>
                    <div className="text-white text-xs">Enjoyable Fitness</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzc3xlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Group Fitness at SweatOut"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Benefits of </span>
                <span className="text-accent">Group Fitness</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                More than just a workout – it's a community experience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card hover className="h-full bg-card/40 backdrop-blur-sm border-white/10">
                      <CardContent className="p-8">
                        <div className="mb-4 p-3 bg-accent/10 rounded-xl w-fit">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Our </span>
                <span className="text-accent">Class Offerings</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find your favorite way to move and groove
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {classTypes.map((classType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="h-full bg-card/40 backdrop-blur-sm border-white/10 overflow-hidden">
                    <div className="relative h-64">
                      <ImageWithFallback
                        src={classType.image}
                        alt={classType.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${classType.color} opacity-60`} />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{classType.title}</h3>
                        <div className="flex gap-4 text-sm text-white/90">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" /> {classType.level}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {classType.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-300 mb-4 leading-relaxed">{classType.description}</p>
                      <div className="space-y-2">
                        {classType.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Why Choose </span>
                <span className="text-accent">SweatOut Group Classes?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, title: 'Certified Instructors', description: 'Expert trainers who motivate and inspire' },
                { icon: Music, title: 'Energetic Atmosphere', description: 'Upbeat music and positive vibes' },
                { icon: Users, title: 'Supportive Community', description: 'Make friends and stay accountable' },
                { icon: Target, title: 'Results-Driven', description: 'Effective workouts that deliver results' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mb-4 inline-block p-4 bg-accent/10 rounded-2xl">
                      <Icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Frequently Asked </span>
                <span className="text-accent">Questions</span>
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/40 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                        <span className="text-accent flex-shrink-0">Q:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-gray-300 leading-relaxed pl-8">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl p-12 border border-accent/20">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Join </span>
                <span className="text-accent">the Party?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the energy of group fitness with a free trial class. Find your favorite class and join our community today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="primary" className="text-lg px-8">
                    Try a Free Class →
                  </Button>
                </Link>
                <Link to="/membership">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    View Membership Plans
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

