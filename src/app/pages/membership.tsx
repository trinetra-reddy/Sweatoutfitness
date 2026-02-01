import { Card, CardContent, CardHeader } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEOHead } from '@/app/components/seo-head';
import { Check, Sparkles, Crown, Zap, User } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

export function MembershipPage() {
  const plans = [
    {
      name: 'Starter',
      icon: Sparkles,
      price: 2499,
      period: 'month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Access to gym floor (6 AM - 10 PM)',
        'All cardio & strength equipment',
        'Basic fitness assessment',
        'Locker & shower facilities',
        'Free WiFi',
        'Mobile app access',
      ],
      notIncluded: [
        'Group fitness classes',
        'Personal training',
        'Nutrition coaching',
        'Steam & sauna',
      ],
    },
    {
      name: 'Pro',
      icon: Zap,
      price: 3999,
      period: 'month',
      popular: true,
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'Everything in Starter',
        'Unlimited group fitness classes',
        '2 personal training sessions/month',
        'Steam room & sauna access',
        'Basic nutrition consultation',
        'Guest passes (2/month)',
        'Priority support',
        'Access: 5 AM - 11 PM',
      ],
      notIncluded: [
        'Advanced body composition analysis',
        '24/7 access',
      ],
    },
    {
      name: 'Elite',
      icon: Crown,
      price: 4999,
      period: 'month',
      description: 'Premium experience with unlimited benefits',
      features: [
        'Everything in Pro',
        '4 personal training sessions/month',
        'Advanced body composition analysis',
        'Customized nutrition & meal plans',
        'Private training room access',
        'Priority class booking',
        'Unlimited guest passes',
        'Free supplement consultation',
        'Complimentary health drinks',
        '24/7 gym access with key card',
        'Exclusive members lounge',
        'Free workout gear (quarterly)',
      ],
      notIncluded: [],
    },
    {
      name: 'Personal Training',
      icon: User,
      price: 10000,
      period: 'month',
      premium: true,
      description: 'Daily one-on-one training with dedicated expert trainer',
      features: [
        'Everything in Elite',
        'Dedicated personal trainer daily',
        'Customized workout programs',
        'One-on-one training sessions every day',
        'Advanced nutrition & meal planning',
        'Weekly progress assessments',
        'Body composition tracking',
        'Personalized supplement guidance',
        '24/7 trainer support via WhatsApp',
        'Flexible training schedule',
        'Priority equipment access',
        'Exclusive transformation support',
      ],
      notIncluded: [],
    },
  ];

  const specialOffers = [
    {
      title: 'Annual Membership',
      subtitle: 'Save ₹6,000 - ₹12,000 yearly',
      description: 'Get 2 months FREE when you pay annually. Best value for committed members.',
      price: 'Starting ₹24,999/year',
      badge: '20% OFF',
      bgColor: 'from-accent to-orange-600',
    },
    {
      title: 'Student Discount',
      subtitle: 'Special rates for students',
      description: 'Valid student ID required. Perfect for college students and young professionals.',
      price: '25% OFF all plans',
      badge: 'STUDENT',
      bgColor: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Corporate Wellness',
      subtitle: 'For companies & teams',
      description: 'Special corporate rates for teams of 10+. Boost employee health and productivity.',
      price: 'Custom pricing',
      badge: 'BULK',
      bgColor: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Membership Plans – Sweatout Health & Fitness Anantapur | Affordable Gym Memberships"
        description="Affordable gym membership in Srinagar Colony, Anantapur. Choose from Starter, Pro, Elite plans or premium personal training packages starting at ₹2,499/month."
        keywords="affordable gym membership Anantapur, gym plans Srinagar Colony, personal training packages Anantapur, fitness membership Anantapur, gym rates Andhra Pradesh"
      />
      
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758957646695-ec8bce3df462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBneW0lMjBpbnRlcmlvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njk3ODczODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Membership"
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
              <span className="text-accent font-semibold">FLEXIBLE PLANS FOR EVERY GOAL</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Choose Your</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                Membership Plan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Cancel anytime. Your fitness journey starts here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gradient-to-b from-black via-muted to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Plans - 3 Column Layout with Featured Pro */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Starter Plan */}
            <AnimatedCard delay={0}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card
                  hover
                  className="relative bg-card/40 backdrop-blur-sm border border-white/10 h-full"
                >
                  <CardHeader className="text-center pt-8 pb-6">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <Sparkles className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Starter</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      Perfect for beginners starting their fitness journey
                    </p>
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-xl text-gray-400">₹</span>
                        <span className="text-5xl font-bold text-white">
                          {plans[0].price.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-sm mt-2 block">per month</span>
                      <div className="text-xs text-gray-500 mt-2">+ GST (18%)</div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <div className="space-y-3 mb-6">
                      {plans[0].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-white/20 hover:bg-white/5 text-white"
                        size="lg"
                      >
                        Choose Plan
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedCard>

            {/* Pro Plan - Featured */}
            <AnimatedCard delay={0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card
                  hover
                  className="relative bg-gradient-to-b from-accent/10 via-card/40 to-card/40 backdrop-blur-sm border-2 border-accent shadow-2xl shadow-accent/30 h-full transform md:scale-105"
                >
                  {/* Popular Badge */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-accent via-orange-500 to-accent bg-[length:200%_100%] animate-gradient text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-accent/50">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                  
                  <CardHeader className="text-center pt-12 pb-6">
                    <div className="mb-6 flex justify-center">
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-accent/30 to-orange-600/30 border-2 border-accent shadow-lg shadow-accent/30">
                        <Zap className="h-12 w-12 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-3 text-white">Pro</h3>
                    <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                      Most popular choice for serious fitness enthusiasts
                    </p>
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl text-accent">₹</span>
                        <span className="text-6xl font-bold text-accent">
                          {plans[1].price.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-gray-300 text-base mt-2 block font-semibold">per month</span>
                      <div className="text-xs text-gray-400 mt-2">+ GST (18%)</div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <div className="space-y-4 mb-8">
                      {plans[1].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <Check className="h-5 w-5 text-accent" />
                          </div>
                          <span className="text-gray-200 text-sm font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="block">
                      <Button
                        variant="primary"
                        className="w-full bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 shadow-xl shadow-accent/40 font-bold text-base"
                        size="lg"
                      >
                        Get Started Now →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedCard>

            {/* Elite Plan */}
            <AnimatedCard delay={0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card
                  hover
                  className="relative bg-card/40 backdrop-blur-sm border border-white/10 h-full"
                >
                  <CardHeader className="text-center pt-8 pb-6">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <Crown className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Elite</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      Premium experience with unlimited benefits
                    </p>
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-xl text-gray-400">₹</span>
                        <span className="text-5xl font-bold text-white">
                          {plans[2].price.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-sm mt-2 block">per month</span>
                      <div className="text-xs text-gray-500 mt-2">+ GST (18%)</div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <div className="space-y-3 mb-6">
                      {plans[2].features.slice(0, 8).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                      {plans[2].features.length > 8 && (
                        <div className="text-accent text-sm font-semibold pt-2">
                          + {plans[2].features.length - 8} more features
                        </div>
                      )}
                    </div>

                    <Link to="/contact" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-white/20 hover:bg-white/5 text-white"
                        size="lg"
                      >
                        Choose Plan
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedCard>
          </div>

          {/* Personal Training - Premium Showcase Section */}
          <AnimatedCard delay={0.4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.01 }}
              className="relative pt-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 blur-3xl" />
              
              {/* Premium Badge - Outside Card */}
              <div className="relative z-20 flex justify-center mb-4">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_100%] animate-gradient text-white px-10 py-3 rounded-full text-base font-bold shadow-xl shadow-purple-500/50">
                  👑 PREMIUM EXCLUSIVE
                </span>
              </div>
              
              <Card className="relative overflow-hidden bg-gradient-to-br from-purple-900/30 via-card/40 to-pink-900/30 backdrop-blur-xl border-2 border-purple-500/50 shadow-2xl shadow-purple-500/30">
                <div className="grid md:grid-cols-2 gap-12 p-12">
                  {/* Left: Info */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400 shadow-lg shadow-purple-500/30">
                      <User className="h-16 w-16 text-purple-300" />
                    </div>
                    
                    <div>
                      <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Personal Training
                      </h3>
                      <p className="text-xl text-gray-300 leading-relaxed">
                        Daily one-on-one training with your dedicated expert trainer
                      </p>
                    </div>

                    <div className="pt-4">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl text-purple-400">₹</span>
                        <span className="text-7xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                          {plans[3].price.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-gray-300 text-lg font-semibold">per month</span>
                      <div className="text-sm text-gray-400 mt-1">+ GST (18%)</div>
                    </div>

                    <div className="pt-4">
                      <Link to="/contact" className="block">
                        <Button
                          variant="primary"
                          className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-2xl shadow-purple-500/50 font-bold text-lg px-12 py-7"
                          size="lg"
                        >
                          Start Your Transformation →
                        </Button>
                      </Link>
                      <p className="text-sm text-gray-400 mt-4">
                        ⚡ Limited slots available - Book your consultation today
                      </p>
                    </div>
                  </div>

                  {/* Right: Features */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                      Everything in Elite, plus:
                    </h4>
                    
                    <div className="grid gap-4">
                      {[
                        'Dedicated personal trainer - Daily sessions',
                        'Customized workout programs tailored to you',
                        'One-on-one training every single day',
                        'Advanced nutrition & meal planning',
                        'Weekly progress assessments & tracking',
                        'Body composition analysis & monitoring',
                        'Personalized supplement guidance',
                        '24/7 trainer support via WhatsApp',
                      ].map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
                        >
                          <div className="mt-0.5">
                            <Check className="h-5 w-5 text-purple-400" />
                          </div>
                          <span className="text-gray-200 text-sm font-medium leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="pt-4 px-4">
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4">
                        <p className="text-sm text-purple-200 font-semibold">
                          💎 Perfect for serious athletes and professionals who want guaranteed results with expert daily guidance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatedCard>

          {/* Payment Info */}
          <AnimatedCard delay={0.6}>
            <div className="mt-16 text-center">
              <p className="text-gray-400 mb-4 text-base">
                💳 We accept all major payment methods including UPI, Cards, and Net Banking
              </p>
              <p className="text-sm text-gray-500">
                EMI options available for annual plans | No joining fee for first-time members
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-white">Special </span>
                <span className="text-accent">Offers</span>
              </h2>
              <p className="text-xl text-gray-400">
                Exclusive deals and packages designed for maximum value
              </p>
            </div>
          </AnimatedCard>

          <div className="grid md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`relative overflow-hidden bg-gradient-to-br ${offer.bgColor} border-0 h-full`}>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white">
                        {offer.badge}
                      </span>
                    </div>
                    <CardContent className="pt-8 p-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                      <p className="text-white/90 font-semibold mb-4">{offer.subtitle}</p>
                      <p className="text-white/80 mb-6 leading-relaxed">{offer.description}</p>
                      <div className="text-2xl font-bold mb-6">{offer.price}</div>
                      <Link to="/contact">
                        <Button 
                          variant="secondary" 
                          size="lg" 
                          className="w-full bg-white text-black hover:bg-white/90"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-muted to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <h2 className="text-5xl font-bold text-center mb-16">
              <span className="text-white">Compare </span>
              <span className="text-accent">All Plans</span>
            </h2>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <div className="overflow-x-auto bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-white/10">
                    <th className="text-left p-6 text-white font-bold text-lg">Features</th>
                    <th className="text-center p-6 text-white font-bold text-lg">Starter</th>
                    <th className="text-center p-6 text-accent font-bold text-lg">Pro ⭐</th>
                    <th className="text-center p-6 text-white font-bold text-lg">Elite</th>
                    <th className="text-center p-6 text-purple-400 font-bold text-lg">Personal 👑</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Gym Floor Access', basic: true, pro: true, elite: true, personal: true },
                    { name: 'Cardio & Strength Equipment', basic: true, pro: true, elite: true, personal: true },
                    { name: 'Group Fitness Classes', basic: false, pro: 'Unlimited', elite: 'Unlimited', personal: 'Unlimited' },
                    { name: 'Personal Training', basic: false, pro: '2/month', elite: '4/month', personal: 'Daily' },
                    { name: 'Nutrition Coaching', basic: false, pro: 'Basic', elite: 'Advanced', personal: 'Premium' },
                    { name: 'Steam & Sauna', basic: false, pro: true, elite: true, personal: true },
                    { name: 'Body Composition Analysis', basic: false, pro: false, elite: true, personal: 'Weekly' },
                    { name: '24/7 Access', basic: false, pro: false, elite: true, personal: true },
                    { name: 'Guest Passes', basic: false, pro: '2/month', elite: 'Unlimited', personal: 'Unlimited' },
                    { name: 'Dedicated Trainer', basic: false, pro: false, elite: false, personal: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-gray-300">{row.name}</td>
                      <td className="text-center p-6">
                        {row.basic === true ? (
                          <Check className="h-5 w-5 text-accent mx-auto" />
                        ) : row.basic === false ? (
                          <span className="text-gray-600">—</span>
                        ) : (
                          <span className="text-gray-300">{row.basic}</span>
                        )}
                      </td>
                      <td className="text-center p-6 bg-accent/5">
                        {row.pro === true ? (
                          <Check className="h-5 w-5 text-accent mx-auto" />
                        ) : row.pro === false ? (
                          <span className="text-gray-600">—</span>
                        ) : (
                          <span className="text-accent font-semibold">{row.pro}</span>
                        )}
                      </td>
                      <td className="text-center p-6">
                        {row.elite === true ? (
                          <Check className="h-5 w-5 text-accent mx-auto" />
                        ) : row.elite === false ? (
                          <span className="text-gray-600">—</span>
                        ) : (
                          <span className="text-gray-300">{row.elite}</span>
                        )}
                      </td>
                      <td className="text-center p-6 bg-purple-500/5">
                        {row.personal === true ? (
                          <Check className="h-5 w-5 text-purple-400 mx-auto" />
                        ) : row.personal === false ? (
                          <span className="text-gray-600">—</span>
                        ) : (
                          <span className="text-purple-400 font-semibold">{row.personal}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1583500178689-665d1f77e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGluZGlhbiUyMG1hbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5Nzg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Join Now"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Start Your Free Trial Today
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Experience SweatOut for 3 days absolutely FREE. No credit card required. 
              Visit us in Anantapur and see why we're the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="text-lg px-10 py-6">
                  Book Free Trial →
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