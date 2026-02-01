import { useState } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import * as Tabs from '@radix-ui/react-tabs';

export function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');

  const images = [
    { category: 'classes', src: '/images/gallery/image1.webp', alt: 'Fitness Classes at SweatOut' },
    { category: 'equipment', src: '/images/gallery/image2.webp', alt: 'SweatOut Gym Equipment' },
    { category: 'equipment', src: '/images/gallery/image3.webp', alt: 'Modern Gym Equipment' },
    { category: 'training', src: '/images/gallery/image4.webp', alt: 'Personal Training at SweatOut' },
    { category: 'equipment', src: '/images/gallery/image5.webp', alt: 'Strength Training Equipment' },
    { category: 'classes', src: '/images/gallery/image6.webp', alt: 'Group Training Session' },
  ];

  const filteredImages = activeTab === 'all' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl">Explore our state-of-the-art facility and vibrant community</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
            <Tabs.List className="flex justify-center gap-4 mb-12 flex-wrap">
              <Tabs.Trigger 
                value="all"
                className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'all' ? 'bg-accent text-accent-foreground' : 'bg-muted hover:bg-muted/80'}`}
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="equipment"
                className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'equipment' ? 'bg-accent text-accent-foreground' : 'bg-muted hover:bg-muted/80'}`}
              >
                Equipment
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="classes"
                className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'classes' ? 'bg-accent text-accent-foreground' : 'bg-muted hover:bg-muted/80'}`}
              >
                Classes
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="training"
                className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'training' ? 'bg-accent text-accent-foreground' : 'bg-muted hover:bg-muted/80'}`}
              >
                Training
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
