import { Card, CardContent } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Award, Users, Zap, Heart, Target } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function AnimatedTrainerCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export function TrainersPage() {
  const trainers = [
    {
      name: 'Arjun Reddy',
      role: 'Head Trainer & Director',
      specialization: 'Strength & Bodybuilding',
      experience: '12+ years',
      certifications: ['ACE-CPT', 'NASM-CPT', 'Sports Nutritionist'],
      bio: 'Former state-level powerlifter with expertise in muscle building and strength training for Indian body types.',
      image: 'https://images.unsplash.com/photo-1660463529569-17f8c4d16fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmaXRuZXNzJTIwY29hY2glMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5Nzg3NjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      achievements: ['Mr. Andhra Pradesh 2018', '500+ Client Transformations'],
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Yoga & Wellness Coach',
      specialization: 'Yoga, Meditation & Flexibility',
      experience: '10+ years',
      certifications: ['RYT-500', 'Ayurveda Practitioner', 'Mindfulness Coach'],
      bio: 'Trained in traditional Hatha and Ashtanga yoga, specializing in holistic wellness and stress management.',
      image: 'https://images.unsplash.com/photo-1695795634692-567cec15ad95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBpbnN0cnVjdG9yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzY5Nzg3NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      achievements: ['Certified from Rishikesh Yoga Institute', 'Published Wellness Author'],
    },
    {
      name: 'Vikram Singh',
      role: 'Functional Training Specialist',
      specialization: 'CrossFit & HIIT',
      experience: '8+ years',
      certifications: ['CrossFit Level-2', 'TRX Certified', 'Kettlebell Specialist'],
      bio: 'Former army fitness instructor specializing in functional movements and high-intensity training protocols.',
      image: 'https://images.unsplash.com/photo-1727848480902-beb1959c06f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGd5bXxlbnwxfHx8fDE3Njk3ODc2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      achievements: ['Indian Army Physical Training Instructor', 'National CrossFit Competitor'],
    },
    {
      name: 'Anjali Patel',
      role: 'Nutrition & Diet Consultant',
      specialization: 'Sports Nutrition & Weight Management',
      experience: '7+ years',
      certifications: ['MSc. Nutrition', 'ISSA Specialist', 'Indian Diet Planning'],
      bio: 'Expert in creating Indian meal plans that align with fitness goals while respecting cultural food preferences.',
      image: 'https://images.unsplash.com/photo-1583500178689-665d1f77e67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGluZGlhbiUyMG1hbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzY5Nzg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      achievements: ['300+ Successful Diet Plans', 'Featured in Fitness Magazines'],
    },
    {
      name: 'Karthik Menon',
      role: 'HIIT & Cardio Specialist',
      specialization: 'Fat Loss & Endurance',
      experience: '9+ years',
      certifications: ['ACE Group Fitness', 'Spinning Instructor', 'Zumba Certified'],
      bio: 'High-energy trainer known for transformative fat loss programs and motivational coaching style.',
      image: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGZpdG5lc3N8ZW58MXx8fHwxNzY5Njk0NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      achievements: ['Marathon Runner', '1000+ Group Classes Conducted'],
    },
    {
      name: 'Divya Krishnan',
      role: 'Women\'s Fitness Coach',
      specialization: 'Pre/Postnatal & Toning',
      experience: '6+ years',
      certifications: ['NASM-WFS', 'Pre-Postnatal Specialist', 'Pilates Instructor'],
      bio: 'Dedicated to empowering women through fitness with specialized programs for all life stages.',
      image: 'https://images.unsplash.com/photo-1625865020971-581242d0ead6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc2OTc4NjU4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      achievements: ['Certified Birth Doula', 'Women\'s Health Advocate'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758957646695-ec8bce3df462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBneW0lMjBpbnRlcmlvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njk3ODczODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Trainers"
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
              <span className="text-accent font-semibold">MEET YOUR FITNESS MENTORS</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Elite </span>
              <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                Training Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              World-class certified professionals dedicated to your transformation. 
              Experience, expertise, and passion combined.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '50+', label: 'Expert Trainers', icon: Users },
              { number: '15+', label: 'Years Combined Experience', icon: Award },
              { number: '5000+', label: 'Clients Trained', icon: Target },
              { number: '100+', label: 'Certifications', icon: Zap },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 border border-accent/20">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted via-black to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <AnimatedTrainerCard key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden bg-card/40 backdrop-blur-sm border-white/10 hover:border-accent/50 transition-all group">
                    <div className="relative h-80 overflow-hidden">
                      <ImageWithFallback
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      {/* Role Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-accent/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                          {trainer.role}
                        </span>
                      </div>

                      {/* Name Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-3xl font-bold text-white mb-1">{trainer.name}</h3>
                        <p className="text-accent font-semibold">{trainer.specialization}</p>
                      </div>
                    </div>

                    <CardContent className="p-8 space-y-5">
                      <p className="text-gray-300 text-sm leading-relaxed">{trainer.bio}</p>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-gray-400">{trainer.experience} Experience</span>
                      </div>

                      <div className="space-y-3">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Certifications:</p>
                        <div className="flex flex-wrap gap-2">
                          {trainer.certifications.map((cert, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-white/10">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Key Achievements:</p>
                        {trainer.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedTrainerCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">What Makes Our</span>
              <br />
              <span className="text-accent">Trainers Different</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              More than just fitness coaches - they're transformation partners committed to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Internationally Certified',
                description: 'All trainers hold multiple international certifications and undergo continuous education to stay updated with latest fitness science.',
              },
              {
                icon: Heart,
                title: 'Indian Fitness Expertise',
                description: 'Specialized knowledge in Indian body types, dietary habits, and cultural considerations for optimal results.',
              },
              {
                icon: Users,
                title: 'Personalized Approach',
                description: 'Every member gets individual attention with customized programs tailored to their unique goals and lifestyle.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/30 backdrop-blur-sm border-white/10 p-8 text-center h-full hover:border-accent/50 transition-all">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 border-2 border-accent/20">
                      <Icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1536922246289-88c42f957773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGZpdG5lc3N8ZW58MXx8fHwxNzY5Njk0NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Train with Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Train With The Best
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Book a free consultation with our trainers. Discuss your goals, 
              get a customized plan, and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="text-lg px-10 py-6">
                  Book Free Consultation →
                </Button>
              </Link>
              <Link to="/membership">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10">
                  View Memberships
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}