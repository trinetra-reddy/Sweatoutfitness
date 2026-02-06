import { Link } from 'react-router';
import { Card, CardContent } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEOHead } from '@/app/components/seo-head';
import { Activity, Heart, Users, Zap, Target, Clock, CheckCircle, Award, Shield, TrendingUp } from 'lucide-react';
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

export function PilatesPage() {
  const benefits = [
    {
      icon: Target,
      title: 'Core Strength',
      description: 'Build a powerful, stable core that supports all movement patterns and improves overall athletic performance.'
    },
    {
      icon: Activity,
      title: 'Flexibility & Mobility',
      description: 'Increase range of motion, reduce stiffness, and move with greater ease in daily activities and sports.'
    },
    {
      icon: Shield,
      title: 'Injury Prevention',
      description: 'Strengthen stabilizer muscles, improve body awareness, and correct imbalances to prevent injuries.'
    },
    {
      icon: TrendingUp,
      title: 'Posture Correction',
      description: 'Counteract the effects of desk work and poor habits with exercises that align and strengthen your spine.'
    },
    {
      icon: Heart,
      title: 'Mind-Body Connection',
      description: 'Develop greater body awareness, reduce stress, and improve mental focus through controlled movements.'
    },
    {
      icon: Zap,
      title: 'Functional Fitness',
      description: 'Build strength that translates to real-world activities, from lifting groceries to playing with your kids.'
    }
  ];

  const classTypes = [
    {
      title: 'Mat Pilates',
      level: 'All Levels',
      duration: '50-60 min',
      description: 'Classical Pilates exercises performed on a mat using body weight and small props like resistance bands and Pilates balls.',
      benefits: ['Perfect for beginners', 'No equipment needed', 'Focus on fundamental movements', 'Builds foundational strength'],
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwbWF0JTIwY2xhc3MlMjBncm91cHxlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Reformer Pilates',
      level: 'Intermediate-Advanced',
      duration: '50-60 min',
      description: 'Advanced Pilates using the reformer machine with springs for resistance, allowing for more challenging and varied exercises.',
      benefits: ['Increased resistance training', 'Greater exercise variety', 'Enhanced muscle engagement', 'Faster results'],
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwcmVmb3JtZXIlMjBtYWNoaW5lfGVufDB8fHx8MTczODg1MjgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Beginner Pilates',
      level: 'Beginner',
      duration: '45 min',
      description: 'Introduction to Pilates fundamentals with focus on proper form, breathing techniques, and basic movement patterns.',
      benefits: ['Learn proper technique', 'Build confidence', 'Gentle introduction', 'Personalized attention'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwYmVnaW5uZXIlMjBjbGFzc3xlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Advanced Pilates',
      level: 'Advanced',
      duration: '60 min',
      description: 'Challenging sequences for experienced practitioners, incorporating complex movements and advanced variations.',
      benefits: ['Maximum challenge', 'Advanced progressions', 'Peak performance', 'Expert guidance'],
      image: 'https://images.unsplash.com/photo-1518310952931-b1de897abd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwYWR2YW5jZWQlMjBleGVyY2lzZXxlbnwwfHx8fDE3Mzg4NTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-600 to-orange-600'
    }
  ];

  const faqs = [
    {
      question: 'What is Pilates?',
      answer: 'Pilates is a low-impact exercise method that focuses on strengthening the core, improving flexibility, and enhancing body awareness through controlled movements. Developed by Joseph Pilates in the early 20th century, it emphasizes proper breathing, spinal alignment, and concentration.'
    },
    {
      question: 'Is Pilates suitable for beginners?',
      answer: 'Absolutely! Pilates is excellent for beginners. Our beginner classes focus on fundamental movements and proper form. Exercises can be modified to match your fitness level, and our certified instructor provides personalized attention to ensure you learn safely and effectively.'
    },
    {
      question: 'What should I wear to a Pilates class?',
      answer: 'Wear comfortable, fitted athletic clothing that allows you to move freely. Avoid loose clothing that might get caught in equipment. Pilates is typically done barefoot or in grip socks. Bring a water bottle and towel.'
    },
    {
      question: 'How is Pilates different from Yoga?',
      answer: 'While both emphasize mind-body connection, Pilates focuses more on core strength, controlled movements, and muscle toning. Yoga emphasizes flexibility, balance, and spiritual elements. Pilates uses specialized equipment like reformers, while yoga primarily uses a mat. Both complement each other beautifully!'
    },
    {
      question: 'How often should I do Pilates?',
      answer: 'For best results, we recommend 2-3 Pilates sessions per week. This frequency allows your body to adapt and strengthen while providing adequate recovery time. Consistency is key – you\'ll typically notice improvements in posture and core strength within 4-6 weeks.'
    },
    {
      question: 'Can Pilates help with back pain?',
      answer: 'Yes! Pilates is highly effective for back pain relief and prevention. It strengthens core muscles that support the spine, improves posture, and increases flexibility. Many physical therapists recommend Pilates for rehabilitation. However, consult your doctor before starting if you have chronic back issues.'
    },
    {
      question: 'Do I need any equipment for Pilates?',
      answer: 'For Mat Pilates, we provide all necessary equipment including mats, resistance bands, and Pilates balls. For Reformer Pilates, we have professional-grade reformer machines. Just bring yourself, water, and a positive attitude!'
    },
    {
      question: 'Will Pilates help me lose weight?',
      answer: 'Pilates burns calories and builds lean muscle, which boosts metabolism. While it\'s not primarily a cardio workout, regular Pilates combined with a healthy diet can support weight loss. It\'s especially effective for toning and creating a leaner, more defined physique.'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Pilates Classes in Anantapur – SweatOut Health & Fitness | Mat & Reformer Pilates"
        description="Join Pilates classes in Anantapur at SweatOut Health & Fitness. Expert instruction in Mat Pilates, Reformer Pilates, core strength, flexibility, and injury prevention. Beginner to advanced levels. Book your trial class today!"
        keywords="Pilates classes Anantapur, Pilates training Anantapur, Mat Pilates Anantapur, Reformer Pilates Anantapur, core strength training, flexibility exercises, Pilates instructor Anantapur, Pilates studio Srinagar Colony, best Pilates gym Anantapur, Pilates for beginners, Pilates for back pain"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwc3R1ZGlvJTIwY2xhc3N8ZW58MHx8fHwxNzM4ODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Pilates Studio at SweatOut Health & Fitness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <span className="text-accent font-semibold">CORE STRENGTH • FLEXIBILITY • BALANCE</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">TRANSFORM WITH </span>
              <span className="text-accent">PILATES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build core strength, improve flexibility, and enhance your posture with expert Pilates instruction in Anantapur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="primary">
                  Book Free Trial Class
                </Button>
              </Link>
              <Link to="/membership">
                <Button size="lg" variant="outline">
                  View Membership Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Pilates Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">What is </span>
                  <span className="text-accent">Pilates?</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Pilates is a transformative exercise method that strengthens your body from the inside out. Developed by Joseph Pilates, this low-impact workout focuses on controlled movements, proper breathing, and core engagement to build a strong, flexible, and balanced body.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Unlike traditional workouts that focus on isolated muscle groups, Pilates works your entire body as an integrated system. Every exercise emphasizes quality over quantity, precision over speed, and control over momentum.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Whether you're recovering from an injury, looking to improve athletic performance, or simply want to feel stronger and more confident in your body, Pilates offers a sustainable path to lasting results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Low-Impact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">All Fitness Levels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Proven Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Expert Instruction</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwZXhlcmNpc2UlMjBjb3JlfGVufDB8fHx8MTczODg1MjgwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Pilates Core Exercise"
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
                <span className="text-accent">Pilates</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how Pilates can transform your body, mind, and overall well-being
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <Card className="h-full bg-card/50 backdrop-blur border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                        <benefit.icon className="h-7 w-7 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Our </span>
                <span className="text-accent">Pilates Classes</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From beginner-friendly mat classes to advanced reformer sessions, we have the perfect class for your fitness level
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {classTypes.map((classType, index) => (
              <AnimatedSection key={classType.title} delay={index * 0.1}>
                <Card className="overflow-hidden bg-card/50 backdrop-blur border-white/10 hover:border-accent/50 transition-all duration-300">
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
                          <Target className="h-4 w-4" />
                          {classType.level}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {classType.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4 leading-relaxed">{classType.description}</p>
                    <div className="space-y-2">
                      {classType.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <ImageWithFallback
                  src="/images/trainers/rajesh.jpg"
                  alt="Konanki Rajesh - Pilates Instructor"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-black p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm font-semibold">Years Experience</div>
                </div>
              </div>
              <div>
                <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Expert </span>
                  <span className="text-accent">Pilates Instruction</span>
                </h2>
                <h3 className="text-2xl font-semibold text-white mb-4">Konanki Rajesh</h3>
                <p className="text-lg text-accent mb-6">Head Fitness Trainer • Pilates Trained</p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  ISSA-certified fitness trainer and INFS-certified nutritionist with 15+ years of industry experience. Trained in Pilates methodology, Rajesh specializes in helping clients improve core strength, posture, flexibility, and injury prevention.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  His unique approach combines traditional Pilates principles with modern fitness science, creating personalized programs that deliver real, sustainable results for clients of all fitness levels.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">ISSA Certified Fitness Trainer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">INFS Certified Nutritionist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">Pilates Trained Professional</span>
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

      {/* Why Choose SweatOut Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Why Choose </span>
                <span className="text-accent">SweatOut for Pilates?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the difference of professional Pilates instruction in Anantapur's premier fitness facility
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="h-full bg-card/50 backdrop-blur border-white/10 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Certified Instruction</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Learn from Pilates-trained professionals with years of experience and proven track records in transforming bodies and lives.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="h-full bg-card/50 backdrop-blur border-white/10 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Small Class Sizes</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Enjoy personalized attention with limited class sizes, ensuring proper form correction and individualized modifications.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="h-full bg-card/50 backdrop-blur border-white/10 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Results-Driven Approach</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Structured programs designed to deliver measurable improvements in strength, flexibility, and overall fitness within weeks.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
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
              <p className="text-xl text-gray-400">
                Everything you need to know about Pilates at SweatOut
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.05}>
                <Card className="bg-card/50 backdrop-blur border-white/10 hover:border-accent/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                      <span className="text-accent flex-shrink-0">Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-gray-400 leading-relaxed pl-8">{faq.answer}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl p-12 border border-accent/20">
              <h2 className="hero-title text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Start Your </span>
                <span className="text-accent">Pilates Journey?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join us for a free trial class and experience the transformative power of Pilates. No experience necessary – all fitness levels welcome!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to="/contact">
                  <Button size="lg" variant="primary">
                    Book Your Free Trial Class
                  </Button>
                </Link>
                <Link to="/membership">
                  <Button size="lg" variant="outline">
                    View Membership Options
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>No Long-Term Commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Expert Instruction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>All Equipment Provided</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
