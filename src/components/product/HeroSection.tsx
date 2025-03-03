import React from 'react';
import Image from 'next/image';
import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/ui/Container';

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
  overlayColor?: string;
}

export default function HeroSection({
  title,
  description,
  image,
  overlayColor = 'rgba(0, 0, 0, 0.4)'
}: HeroSectionProps) {
  return (
    <div className="relative h-[60vh] min-h-[400px] max-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: overlayColor }}
        />
      </div>
      
      {/* Content */}
      <Container className="relative h-full">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          <Heading level={1} className="text-white mb-4">
            {title}
          </Heading>
          <Text variant="lead" className="text-white opacity-90">
            {description}
          </Text>
        </div>
      </Container>
    </div>
  );
} 