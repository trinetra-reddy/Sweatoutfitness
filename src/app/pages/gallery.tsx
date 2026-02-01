import { useState } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import * as Tabs from '@radix-ui/react-tabs';

export function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');

  const images = [
    { category: 'equipment', src: 'https://images.unsplash.com/photo-1676109829011-a9f0f3e40f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2OTY5NTQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { category: 'classes', src: 'https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3Njk3NzcyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { category: 'classes', src: 'https://images.unsplash.com/photo-1625865020971-581242d0ead6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc2OTc4NjU4MHww&ixlib=rb-4.1.0&q=80&w=1080' },
    { category: 'training', src: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3Njk2ODgyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { category: 'training', src: 'https://images.unsplash.com/photo-1639504031765-ca21aecb7252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHRyYWluaW5nfGVufDF8fHx8MTc2OTc4NjU4MHww&ixlib=rb-4.1.0&q=80&w=1080' },
    { category: 'equipment', src: 'https://images.unsplash.com/photo-1583500178450-e59e4309b57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBleGVyY2lzZXxlbnwxfHx8fDE3Njk3ODY1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
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
                  alt={`Gallery image ${index + 1}`}
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
