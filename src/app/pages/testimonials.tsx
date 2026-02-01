import { Card, CardContent } from '@/app/components/card';

export function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Member since 2022',
      content: 'SweatOut has completely transformed my life. I\'ve lost 30 pounds and gained so much confidence. The trainers are amazing and the community is incredibly supportive!',
      rating: 5,
      beforeAfter: true,
    },
    {
      name: 'Mike Rodriguez',
      role: 'Member since 2021',
      content: 'Best gym I\'ve ever been to. The equipment is top-notch, the facility is always clean, and the atmosphere keeps me motivated every single day.',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      role: 'Member since 2023',
      content: 'I love the variety of classes and programs. There\'s something for everyone, no matter your fitness level. The yoga classes are my favorite!',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Member since 2020',
      content: 'The personal training program helped me achieve goals I never thought possible. Down 40 pounds and feeling stronger than ever!',
      rating: 5,
      beforeAfter: true,
    },
    {
      name: 'Lisa Martinez',
      role: 'Member since 2023',
      content: 'As a beginner, I was nervous about joining a gym. The staff made me feel so welcome and helped me build a routine that works for my lifestyle.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Member since 2019',
      content: 'The 24/7 access is perfect for my schedule. I can work out at 5 AM before work or late at night. The flexibility is unmatched.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Member Testimonials</h1>
          <p className="text-xl">Real stories from real members who transformed their lives</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-xl">★</span>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    {testimonial.beforeAfter && (
                      <span className="inline-block mt-2 px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                        Transformation Story
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our community and start your transformation today
          </p>
        </div>
      </section>
    </div>
  );
}
