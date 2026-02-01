import { Card, CardContent, CardHeader } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Check, Sparkles, Crown, Zap } from 'lucide-react';
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
      price: 4999,
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
      price: 7999,
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <AnimatedCard key={index} delay={index * 0.2}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card
                      hover
                      className={`relative bg-card/40 backdrop-blur-sm border ${
                        plan.popular 
                          ? 'border-accent border-2 shadow-2xl shadow-accent/20 bg-gradient-to-b from-accent/5 to-transparent' 
                          : 'border-white/10'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                          <span className="bg-gradient-to-r from-accent to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                            ⭐ MOST POPULAR
                          </span>
                        </div>
                      )}
                      
                      <CardHeader className="text-center pt-12 pb-6">
                        <div className="mb-6 flex justify-center">
                          <div className={`p-5 rounded-2xl ${
                            plan.popular 
                              ? 'bg-gradient-to-br from-accent/20 to-orange-600/20 border-2 border-accent shadow-lg shadow-accent/20' 
                              : 'bg-white/5 border border-white/10'
                          }`}>
                            <IconComponent className={`h-12 w-12 ${plan.popular ? 'text-accent' : 'text-white'}`} />
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold mb-3 text-white">{plan.name}</h3>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">{plan.description}</p>
                        <div className="mb-6">
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-2xl text-gray-400">₹</span>
                            <span className={`text-6xl font-bold ${plan.popular ? 'text-accent' : 'text-white'}`}>
                              {plan.price.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <span className="text-muted-foreground text-base mt-2 block">per {plan.period}</span>
                          <div className="text-xs text-gray-500 mt-3">
                            + GST (18% as applicable)
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="px-8 pb-8">
                        <div className="space-y-4 mb-8 flex-1">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="mt-1 flex-shrink-0">
                                <Check className="h-5 w-5 text-accent" />
                              </div>
                              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                            </div>
                          ))}
                          {plan.notIncluded && plan.notIncluded.length > 0 && (
                            <>
                              <div className="border-t border-white/5 my-6" />
                              {plan.notIncluded.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 opacity-40">
                                  <div className="mt-1 flex-shrink-0">
                                    <Check className="h-5 w-5 text-muted-foreground" />
                                  </div>
                                  <span className="text-muted-foreground text-sm line-through">{feature}</span>
                                </div>
                              ))}
                            </>
                          )}
                        </div>

                        <Link to="/contact" className="block">
                          <Button
                            variant={plan.popular ? 'primary' : 'outline'}
                            className={`w-full font-bold text-base ${
                              plan.popular 
                                ? 'bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 shadow-lg shadow-accent/30' 
                                : 'border-white/20 hover:bg-white/5 text-white'
                            }`}
                            size="lg"
                          >
                            {plan.popular ? 'Get Started Now →' : 'Choose Plan'}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedCard>
              );
            })}
          </div>

          {/* Payment Info */}
          <AnimatedCard delay={0.6}>
            <div className="mt-20 text-center">
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
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Gym Floor Access', basic: true, pro: true, elite: true },
                    { name: 'Cardio & Strength Equipment', basic: true, pro: true, elite: true },
                    { name: 'Group Fitness Classes', basic: false, pro: 'Unlimited', elite: 'Unlimited' },
                    { name: 'Personal Training', basic: false, pro: '2/month', elite: '4/month' },
                    { name: 'Nutrition Coaching', basic: false, pro: 'Basic', elite: 'Advanced' },
                    { name: 'Steam & Sauna', basic: false, pro: true, elite: true },
                    { name: 'Body Composition Analysis', basic: false, pro: false, elite: true },
                    { name: '24/7 Access', basic: false, pro: false, elite: true },
                    { name: 'Guest Passes', basic: false, pro: '2/month', elite: 'Unlimited' },
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