import { Link } from 'react-router';
import { Card, CardContent } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEOHead } from '@/app/components/seo-head';
import { Activity, Heart, Zap, Target, Clock, CheckCircle, Award, TrendingUp, Flame, Timer } from 'lucide-react';
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

export function HIITPage() {
  const benefits = [
    {
      icon: Flame,
      title: 'Maximum Calorie Burn',
      description: 'Burn more calories in less time with high-intensity intervals that keep your metabolism elevated for hours after your workout.'
    },
    {
      icon: Timer,
      title: 'Time-Efficient',
      description: 'Get incredible results in just 20-30 minutes. Perfect for busy schedules without compromising effectiveness.'
    },
    {
      icon: Heart,
      title: 'Cardiovascular Health',
      description: 'Improve heart health, increase VO2 max, and build exceptional cardiovascular endurance through intense intervals.'
    },
    {
      icon: TrendingUp,
      title: 'Fat Loss & Muscle Retention',
      description: 'Burn fat while preserving lean muscle mass. HIIT is scientifically proven to be superior for body composition.'
    },
    {
      icon: Zap,
      title: 'Metabolic Boost',
      description: 'Experience the "afterburn effect" (EPOC) where your body continues burning calories at an elevated rate for up to 24 hours.'
    },
    {
      icon: Activity,
      title: 'Athletic Performance',
      description: 'Enhance speed, power, agility, and overall athletic performance with explosive, high-intensity training.'
    }
  ];

  const workoutTypes = [
    {
      title: 'Tabata Training',
      level: 'Intermediate-Advanced',
      duration: '20-30 min',
      description: '20 seconds of all-out effort followed by 10 seconds of rest, repeated for 8 rounds. The ultimate fat-burning protocol.',
      benefits: ['Maximum intensity', 'Rapid fat loss', 'Improved anaerobic capacity', 'Time-efficient'],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGludGVuc2V8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'EMOM (Every Minute On the Minute)',
      level: 'All Levels',
      duration: '20-40 min',
      description: 'Complete a set number of reps at the start of every minute, rest for the remainder. Builds work capacity and mental toughness.',
      benefits: ['Structured intervals', 'Scalable intensity', 'Strength + cardio', 'Accountability'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWl0JTIwd29ya291dCUyMGd5bXxlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Circuit Training',
      level: 'Beginner-Intermediate',
      duration: '30-45 min',
      description: 'Move through multiple exercises with minimal rest. Combines strength and cardio for total-body conditioning.',
      benefits: ['Full-body workout', 'Variety', 'Beginner-friendly', 'Functional fitness'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBiZWdpbm5lciUyMHdvcmtvdXR8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Sprint Intervals',
      level: 'Intermediate-Advanced',
      duration: '15-25 min',
      description: 'Alternate between maximum-effort sprints and active recovery. The most effective method for rapid fat loss.',
      benefits: ['Explosive power', 'Maximum fat burn', 'Speed development', 'Athletic conditioning'],
      image: 'https://images.unsplash.com/photo-1583500178689-665d1f77e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGluZGlhbiUyMG1hbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5Nzg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const faqs = [
    {
      question: 'Is HIIT suitable for beginners?',
      answer: 'Yes! HIIT can be modified for any fitness level. Beginners start with lower intensity intervals and longer rest periods, gradually building up as fitness improves. Our trainers will customize the intensity to match your current abilities.'
    },
    {
      question: 'How often should I do HIIT workouts?',
      answer: 'For optimal results and recovery, we recommend 2-4 HIIT sessions per week. HIIT is intense, so adequate recovery is crucial. Combine with strength training and active recovery days for a balanced program.'
    },
    {
      question: 'Can HIIT help me lose weight?',
      answer: 'Absolutely! HIIT is one of the most effective training methods for fat loss. It burns maximum calories in minimal time and keeps your metabolism elevated for hours after your workout (afterburn effect). Combined with proper nutrition, HIIT delivers rapid fat loss results.'
    },
    {
      question: 'What should I eat before a HIIT workout?',
      answer: 'Eat a light meal with carbs and protein 1-2 hours before training (e.g., banana with peanut butter, oatmeal). Avoid heavy meals right before HIIT. Stay well-hydrated and consider a small pre-workout snack if training early morning.'
    },
    {
      question: 'Will HIIT make me lose muscle?',
      answer: 'No! When done correctly with adequate protein intake and combined with strength training, HIIT preserves muscle while burning fat. Our programs are designed to optimize body composition - lose fat, keep muscle.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="HIIT & Fat Loss Training in Anantapur – SweatOut Health & Fitness | High-Intensity Workouts"
        description="Burn fat fast with HIIT training in Anantapur! High-intensity interval training, Tabata, circuit training. Expert coaching, maximum results. Join SweatOut today!"
        keywords="HIIT Anantapur, fat loss training, high intensity workout, Tabata training, circuit training, weight loss gym, best gym Anantapur"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGludGVuc2V8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="HIIT & Fat Loss Training at SweatOut Health & Fitness Anantapur"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <span className="text-accent font-semibold">INTENSE • EFFICIENT • TRANSFORMATIVE</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">HIIT & </span>
              <span className="text-accent">FAT LOSS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Burn maximum fat in minimum time. High-intensity interval training that delivers rapid, sustainable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="text-lg px-8">
                  Start Your Transformation
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

      {/* What is HIIT Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">What is </span>
                  <span className="text-accent">HIIT?</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  High-Intensity Interval Training (HIIT) alternates between short bursts of maximum-effort exercise and
                  brief recovery periods. This scientifically-proven method burns more fat in less time than traditional cardio,
                  while preserving muscle and boosting metabolism.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  At SweatOut, our HIIT programs are designed by certified trainers to maximize fat loss, improve cardiovascular
                  fitness, and build athletic conditioning. Whether you're a beginner or advanced athlete, we'll customize the
                  intensity to match your fitness level and goals.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">EFFICIENT</div>
                    <div className="text-white text-xs">20-30 Min Workouts</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">EFFECTIVE</div>
                    <div className="text-white text-xs">Maximum Fat Burn</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">SCIENCE-BASED</div>
                    <div className="text-white text-xs">Proven Results</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-accent font-bold text-sm mb-1">SCALABLE</div>
                    <div className="text-white text-xs">All Fitness Levels</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWl0JTIwd29ya291dCUyMGd5bXxlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="HIIT Training at SweatOut"
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
                <span className="text-accent">HIIT Training</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your body and fitness in record time
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

      {/* Workout Types Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">HIIT </span>
                <span className="text-accent">Workout Styles</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Multiple training methods to keep you challenged and progressing
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {workoutTypes.map((workout, index) => (
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
                        src={workout.image}
                        alt={workout.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${workout.color} opacity-60`} />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{workout.title}</h3>
                        <div className="flex gap-4 text-sm text-white/90">
                          <span className="flex items-center gap-1">
                            <Target className="h-4 w-4" /> {workout.level}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {workout.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-300 mb-4 leading-relaxed">{workout.description}</p>
                      <div className="space-y-2">
                        {workout.benefits.map((benefit, idx) => (
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

      {/* Trainer Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Section Heading - Shows on mobile */}
            <div className="text-center mb-12 md:hidden">
              <h2 className="hero-title text-4xl font-bold mb-2">
                <span className="text-white">Meet Your </span>
                <span className="text-accent">HIIT Coach</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <ImageWithFallback
                  src="/images/trainers/deepak.jpg"
                  alt="Dasari Deepak - HIIT & Conditioning Specialist"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 md:-bottom-6 md:-right-6 md:top-auto bg-accent text-black p-4 md:p-6 rounded-xl shadow-xl">
                  <div className="text-2xl md:text-3xl font-bold">8+</div>
                  <div className="text-xs md:text-sm font-semibold">Years Experience</div>
                </div>

                {/* Name and Title - Shows directly under image on mobile */}
                <div className="mt-8 md:hidden text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">Dasari Deepak</h3>
                  <p className="text-lg text-accent">Fitness Trainer • HIIT & Conditioning Specialist</p>
                </div>
              </div>

              <div>
                {/* Section Heading - Shows on desktop only */}
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6 hidden md:block">
                  <span className="text-white">Meet Your </span>
                  <span className="text-accent">HIIT Coach</span>
                </h2>

                {/* Name and Title - Shows on desktop only */}
                <div className="hidden md:block">
                  <h3 className="text-2xl font-semibold text-white mb-4">Dasari Deepak</h3>
                  <p className="text-lg text-accent mb-6">Fitness Trainer • HIIT & Conditioning Specialist</p>
                </div>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Certified fitness trainer with 8+ years of hands-on experience in high-intensity training and conditioning programs.
                  Deepak specializes in HIIT, fat loss training, and building athletic conditioning through intense, results-driven workouts.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Known for his focus on correct form and injury prevention, Deepak creates challenging yet safe HIIT programs that
                  deliver rapid fat loss and improved fitness. His energetic coaching style keeps you motivated and pushing your limits.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Certified Fitness Trainer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Flame className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">HIIT & Conditioning Specialist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Expert in Form & Injury Prevention</span>
                  </div>
                </div>
                <Link to="/trainers">
                  <Button variant="outline" size="lg">
                    Meet All Our Trainers
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Why Choose </span>
                <span className="text-accent">SweatOut for HIIT?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, title: 'Expert Coaching', description: 'Certified trainers who push you safely' },
                { icon: Flame, title: 'Proven Protocols', description: 'Science-based HIIT methods that work' },
                { icon: TrendingUp, title: 'Rapid Results', description: 'See visible changes in weeks, not months' },
                { icon: Heart, title: 'Supportive Environment', description: 'Motivating atmosphere that drives success' }
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
      <section className="py-24 bg-muted/30">
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
      <section className="py-24 bg-gradient-to-b from-background to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl p-12 border border-accent/20">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Burn </span>
                <span className="text-accent">Maximum Fat?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Start your HIIT journey today and experience the most effective fat loss training available. Get results in weeks, not months!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="primary" className="text-lg px-8">
                    Start Your Transformation →
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

