export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'building-muscle-mass-tips',
    title: '10 Essential Tips for Building Muscle Mass',
    excerpt: 'Discover the proven strategies to maximize your muscle growth and achieve your strength goals faster.',
    content: `
      <h2>Building Muscle Mass: A Comprehensive Guide</h2>
      <p>Building muscle mass requires dedication, proper technique, and the right knowledge. At SweatOut Gym in Anantapur, we've helped hundreds of members achieve their muscle-building goals. Here are the 10 essential tips that work.</p>

      <h3>1. Progressive Overload is Key</h3>
      <p>To build muscle, you must consistently challenge your body. Increase weight, reps, or sets gradually each week. This progressive overload forces your muscles to adapt and grow stronger.</p>

      <h3>2. Prioritize Compound Movements</h3>
      <p>Focus on exercises like squats, deadlifts, bench press, and rows. These compound movements recruit multiple muscle groups, leading to greater hormone release and muscle growth.</p>

      <h3>3. Protein is Your Foundation</h3>
      <p>Aim for 1.6-2.2 grams of protein per kilogram of body weight daily. Quality sources include chicken, fish, eggs, dal, paneer, and whey protein supplements.</p>

      <h3>4. Don't Neglect Recovery</h3>
      <p>Muscles grow during rest, not during workouts. Ensure you get 7-9 hours of quality sleep and allow 48 hours between training the same muscle groups.</p>

      <h3>5. Consistency Beats Perfection</h3>
      <p>Missing a workout occasionally is fine, but consistency over months and years is what builds impressive physiques. Show up even on days you don't feel like it.</p>

      <h3>6. Track Your Progress</h3>
      <p>Keep a workout log noting weights, reps, and sets. This helps you ensure progressive overload and stay motivated by seeing your improvement.</p>

      <h3>7. Fuel Your Workouts Properly</h3>
      <p>Eat a balanced meal with carbs and protein 2-3 hours before training. Post-workout, consume protein within 2 hours to optimize recovery.</p>

      <h3>8. Master Your Form First</h3>
      <p>Poor form leads to injuries and ineffective workouts. Work with our expert trainers at SweatOut to perfect your technique before adding heavy weights.</p>

      <h3>9. Stay Hydrated</h3>
      <p>Dehydration impairs performance and recovery. Drink at least 3-4 liters of water daily, especially in Anantapur's climate.</p>

      <h3>10. Be Patient and Trust the Process</h3>
      <p>Building significant muscle mass takes months to years. Stay consistent, trust your program, and results will come.</p>

      <p><strong>Ready to start your muscle-building journey?</strong> Visit SweatOut Gym in Anantapur and work with our certified trainers who'll create a personalized program for your goals. Call us at +91 9885873976 today!</p>
    `,
    author: 'Rajesh',
    authorRole: 'Head Strength Coach',
    date: 'January 25, 2026',
    category: 'Strength Training',
    image: 'https://images.unsplash.com/photo-1676109829011-a9f0f3e40f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2OTY5NTQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: 2,
    slug: 'cardio-weight-loss-guide',
    title: 'The Ultimate Guide to Cardio for Weight Loss',
    excerpt: 'Learn how to optimize your cardio workouts to burn fat effectively and maintain muscle mass.',
    content: `
      <h2>Cardio for Weight Loss: Science-Backed Strategies</h2>
      <p>Cardiovascular exercise is a powerful tool for weight loss when done correctly. At SweatOut Gym, we combine smart cardio strategies with strength training to help members lose fat while preserving muscle.</p>

      <h3>Understanding Cardio and Fat Loss</h3>
      <p>Cardio creates a calorie deficit, which is essential for weight loss. However, not all cardio is equal. The key is finding the right balance and intensity for your goals.</p>

      <h3>HIIT vs. Steady-State Cardio</h3>
      <p>High-Intensity Interval Training (HIIT) burns more calories in less time and boosts metabolism for hours after your workout. Steady-state cardio is easier to recover from and can be done more frequently.</p>

      <h3>Optimal Cardio Duration</h3>
      <p>For weight loss, aim for 150-300 minutes of moderate-intensity cardio weekly, or 75-150 minutes of vigorous cardio. This can be split into 30-60 minute sessions.</p>

      <h3>Preserve Your Muscle Mass</h3>
      <p>Excessive cardio can lead to muscle loss. Keep cardio sessions moderate, continue strength training, and ensure adequate protein intake (1.6-2.2g per kg body weight).</p>

      <h3>Best Cardio Exercises</h3>
      <ul>
        <li>Treadmill running or incline walking</li>
        <li>Stationary cycling</li>
        <li>Rowing machine</li>
        <li>Battle ropes</li>
        <li>Jumping rope</li>
      </ul>

      <h3>Timing Your Cardio</h3>
      <p>Morning fasted cardio can enhance fat burning, but any time you can consistently workout is the best time. At SweatOut, our members see results training at all times of day.</p>

      <h3>Diet is Still King</h3>
      <p>You cannot out-cardio a bad diet. Focus on creating a calorie deficit through both exercise and nutrition. Track your food intake and ensure you're in a moderate deficit.</p>

      <p><strong>Need guidance on your weight loss journey?</strong> Our trainers at SweatOut Gym in Anantapur will create a customized cardio and nutrition plan. Contact us at +91 9885873976!</p>
    `,
    author: 'Rajesh',
    authorRole: 'Head Strength Coach',
    date: 'January 22, 2026',
    category: 'Weight Loss',
    image: 'https://images.unsplash.com/photo-1583500178450-e59e4309b57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBleGVyY2lzZXxlbnwxfHx8fDE3Njk3ODY1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    slug: 'benefits-of-yoga',
    title: 'Benefits of Yoga: Mind, Body, and Soul',
    excerpt: 'Explore how yoga can improve your flexibility, mental clarity, and overall well-being.',
    content: `
      <h2>The Transformative Power of Yoga</h2>
      <p>Yoga is more than just stretching—it's a holistic practice that strengthens your body, calms your mind, and nourishes your spirit. At SweatOut Gym, our yoga classes help members find balance in their fitness journey.</p>

      <h3>Physical Benefits of Yoga</h3>
      <p>Regular yoga practice improves flexibility, builds strength, enhances balance, and increases body awareness. It's an excellent complement to weight training and cardio workouts.</p>

      <h3>Mental Health Benefits</h3>
      <p>Yoga reduces stress and anxiety through controlled breathing and meditation. It improves focus, mental clarity, and emotional regulation—essential for success in all areas of life.</p>

      <h3>Improved Flexibility and Mobility</h3>
      <p>Many gym-goers struggle with tight muscles and limited range of motion. Yoga addresses these issues, reducing injury risk and improving performance in other exercises.</p>

      <h3>Better Sleep Quality</h3>
      <p>The relaxation techniques in yoga activate your parasympathetic nervous system, promoting better sleep. Evening yoga sessions can significantly improve sleep quality.</p>

      <h3>Enhanced Breathing and Lung Capacity</h3>
      <p>Pranayama (breathing exercises) increases lung capacity and oxygen uptake, benefiting cardiovascular health and endurance during workouts.</p>

      <h3>Yoga Styles for Different Goals</h3>
      <ul>
        <li><strong>Hatha Yoga:</strong> Great for beginners, focuses on basic poses</li>
        <li><strong>Vinyasa Yoga:</strong> Flowing movements, builds strength and endurance</li>
        <li><strong>Yin Yoga:</strong> Deep stretching, perfect for recovery days</li>
        <li><strong>Power Yoga:</strong> Athletic and challenging, complements strength training</li>
      </ul>

      <h3>Starting Your Yoga Journey</h3>
      <p>Begin with 2-3 sessions weekly, focusing on proper form and breathing. At SweatOut, our instructors guide beginners through foundational poses safely.</p>

      <p><strong>Join our yoga classes at SweatOut Gym Anantapur</strong> and experience the benefits firsthand. Call +91 9885873976 to book your first class!</p>
    `,
    author: 'Rajesh',
    authorRole: 'Head Strength Coach',
    date: 'January 20, 2026',
    category: 'Yoga',
    image: 'https://images.unsplash.com/photo-1625865020971-581242d0ead6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc2OTc4NjU4MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    slug: 'nutrition-fueling-workouts',
    title: 'Nutrition 101: Fueling Your Workouts',
    excerpt: 'Understanding the right nutrition to support your fitness goals and maximize recovery.',
    content: `
      <h2>Nutrition: The Foundation of Fitness Success</h2>
      <p>You can't out-train a bad diet. Proper nutrition is 70% of your results. At SweatOut Gym, we emphasize nutrition education alongside training to help members achieve their goals.</p>

      <h3>The Macronutrients: Your Building Blocks</h3>
      <p><strong>Protein:</strong> Essential for muscle repair and growth. Aim for 1.6-2.2g per kg body weight. Sources: chicken, fish, eggs, dal, paneer, whey protein.</p>
      <p><strong>Carbohydrates:</strong> Your body's primary energy source. Choose complex carbs like brown rice, oats, whole wheat chapati, and sweet potatoes.</p>
      <p><strong>Fats:</strong> Crucial for hormone production. Include healthy fats from nuts, seeds, ghee, and olive oil.</p>

      <h3>Pre-Workout Nutrition</h3>
      <p>Eat a balanced meal 2-3 hours before training: complex carbs for energy, moderate protein, and minimal fat. Example: 2 chapatis with chicken curry and vegetables.</p>

      <h3>Post-Workout Nutrition</h3>
      <p>The 'anabolic window' is 2 hours post-workout. Consume fast-digesting protein (whey) and simple carbs to replenish glycogen and start muscle repair.</p>

      <h3>Hydration: The Forgotten Nutrient</h3>
      <p>Dehydration impairs performance and recovery. Drink 3-4 liters of water daily, more during intense training. In Anantapur's heat, this is especially critical.</p>

      <h3>Meal Timing and Frequency</h3>
      <p>Eat 4-6 smaller meals throughout the day to maintain energy levels and support muscle growth. This keeps metabolism active and prevents overeating.</p>

      <h3>Indian Diet for Fitness</h3>
      <ul>
        <li>Breakfast: Oats with nuts and banana, or egg bhurji with whole wheat toast</li>
        <li>Lunch: Brown rice, dal, chicken/fish curry, vegetable sabzi</li>
        <li>Snack: Fruit with handful of almonds, or protein shake</li>
        <li>Dinner: Grilled chicken/paneer with vegetable salad and chapati</li>
      </ul>

      <h3>Supplements: Are They Necessary?</h3>
      <p>Whole foods should be your priority. However, whey protein, creatine, and omega-3s can be beneficial supplements when diet alone isn't sufficient.</p>

      <p><strong>Get personalized nutrition guidance</strong> from our experts at SweatOut Gym Anantapur. Call +91 9885873976 for a consultation!</p>
    `,
    author: 'Rajya Lakshmi',
    authorRole: 'Nutrition & Wellness Coach',
    date: 'January 18, 2026',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3Njk3NzcyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    slug: 'staying-motivated-fitness',
    title: 'How to Stay Motivated: Long-Term Fitness Success',
    excerpt: 'Practical tips and mindset strategies to maintain consistency and achieve lasting results.',
    content: `
      <h2>The Psychology of Fitness Motivation</h2>
      <p>Starting a fitness journey is exciting, but maintaining motivation long-term is challenging. At SweatOut Gym, we've helped thousands stay consistent. Here's how you can too.</p>

      <h3>Set SMART Goals</h3>
      <p>Specific, Measurable, Achievable, Relevant, Time-bound goals work. Instead of "get fit," try "lose 10kg in 4 months through 5 workouts weekly and proper nutrition."</p>

      <h3>Find Your 'Why'</h3>
      <p>Your motivation must be deeper than aesthetics. Health, energy, confidence, being a role model for your children—find what truly drives you.</p>

      <h3>Track Your Progress</h3>
      <p>Take photos, measurements, and note how you feel. When motivation dips, looking back at your progress reignites the fire.</p>

      <h3>Build a Routine, Not Rely on Motivation</h3>
      <p>Motivation is unreliable. Discipline and routine are what create results. Schedule workouts like important meetings—non-negotiable.</p>

      <h3>Find a Workout Buddy or Community</h3>
      <p>Training with others creates accountability. The SweatOut community in Anantapur supports each other, making workouts more enjoyable and consistent.</p>

      <h3>Vary Your Workouts</h3>
      <p>Boredom kills motivation. Mix strength training, cardio, yoga, and group classes. Keep your body and mind engaged with variety.</p>

      <h3>Celebrate Small Wins</h3>
      <p>Every workout completed, every healthy meal chosen, every personal record broken—celebrate it. Small wins compound into major transformations.</p>

      <h3>Overcome Plateaus</h3>
      <p>Progress isn't linear. When you hit a plateau, adjust your program, try new exercises, or take a deload week. Don't quit—adapt.</p>

      <h3>Rest When Needed</h3>
      <p>Overtraining leads to burnout. Listen to your body. Rest days are productive days that allow your body to recover and grow stronger.</p>

      <h3>Visual Reminders</h3>
      <p>Put up motivational quotes, progress photos, or your goal outfit where you'll see them daily. Visual cues reinforce your commitment.</p>

      <p><strong>Need motivation and accountability?</strong> Join the SweatOut family in Anantapur. Our trainers and community will keep you on track. Call +91 9885873976!</p>
    `,
    author: 'Rajesh',
    authorRole: 'Head Strength Coach',
    date: 'January 15, 2026',
    category: 'Motivation',
    image: 'https://images.unsplash.com/photo-1639504031765-ca21aecb7252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHRyYWluaW5nfGVufDF8fHx8MTc2OTc4NjU4MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    slug: 'recovery-rest-days-matter',
    title: 'Recovery Essentials: Rest Days Matter',
    excerpt: 'Why rest and recovery are just as important as your workouts for optimal performance.',
    content: `
      <h2>The Science of Recovery</h2>
      <p>Many believe more training equals better results. The truth? Muscles grow during recovery, not during workouts. At SweatOut Gym, we teach members that rest is a crucial part of any program.</p>

      <h3>What Happens During Recovery?</h3>
      <p>When you train, you create micro-tears in muscle fibers. During rest, your body repairs these tears, making muscles stronger and larger. Without adequate recovery, you're just breaking down tissue without rebuilding it.</p>

      <h3>Signs You Need Rest</h3>
      <ul>
        <li>Persistent muscle soreness beyond 48-72 hours</li>
        <li>Decreased performance and strength</li>
        <li>Constant fatigue and low energy</li>
        <li>Increased irritability and poor mood</li>
        <li>Elevated resting heart rate</li>
        <li>Difficulty sleeping</li>
        <li>Increased susceptibility to illness</li>
      </ul>

      <h3>Active vs. Passive Recovery</h3>
      <p><strong>Passive Recovery:</strong> Complete rest, doing nothing physical. Necessary sometimes, especially after intense training weeks.</p>
      <p><strong>Active Recovery:</strong> Light activity like walking, yoga, or swimming. Promotes blood flow without stressing muscles, speeding up recovery.</p>

      <h3>Sleep: Your Recovery Superpower</h3>
      <p>During deep sleep, your body releases growth hormone, essential for muscle repair. Aim for 7-9 hours nightly. Poor sleep sabotages all your hard work.</p>

      <h3>Nutrition for Recovery</h3>
      <p>Post-workout nutrition is critical. Consume protein (20-40g) and carbs within 2 hours. Throughout the day, maintain adequate protein intake (1.6-2.2g per kg body weight).</p>

      <h3>Hydration and Recovery</h3>
      <p>Dehydration slows recovery. Water transports nutrients to muscles and removes waste products. Drink consistently throughout the day.</p>

      <h3>Recovery Techniques</h3>
      <ul>
        <li><strong>Foam Rolling:</strong> Self-myofascial release reduces muscle tightness</li>
        <li><strong>Stretching:</strong> Improves flexibility and blood flow</li>
        <li><strong>Massage:</strong> Professional massage accelerates recovery</li>
        <li><strong>Ice Baths:</strong> Reduces inflammation (though controversial)</li>
        <li><strong>Steam and Sauna:</strong> Promotes relaxation and circulation</li>
      </ul>

      <h3>Deload Weeks</h3>
      <p>Every 4-6 weeks, take a deload week where you reduce training volume and intensity by 40-50%. This allows full recovery and prevents overtraining.</p>

      <h3>Mental Recovery</h3>
      <p>Mental fatigue is real. Take breaks from strict dieting, try new activities, and remember why you started. Mental recovery is as important as physical.</p>

      <p><strong>Optimize your recovery</strong> with SweatOut Gym's steam room, sauna, and expert guidance. Visit us in Anantapur or call +91 9885873976!</p>
    `,
    author: 'Rajesh',
    authorRole: 'Head Strength Coach',
    date: 'January 12, 2026',
    category: 'Recovery',
    image: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3Njk2ODgyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostById(id: number): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}