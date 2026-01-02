import React from 'react';

interface VisualSnapshot {
  alt: string;
  placeholder: string;
  offset: boolean;
}

interface VisualSnapshotsProps {
  heading: string;
  description: string;
  images: VisualSnapshot[];
}

export function VisualSnapshots({ heading, description, images }: VisualSnapshotsProps) {
  return (
    <section className="mb-40">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-syne font-bold mb-4">{heading}</h3>
        <p className="text-gray-500 max-w-2xl mx-auto font-light">{description}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`glass-card aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 ${
              image.offset ? 'mt-8' : ''
            }`}
          >
            <img
              src={`https://placehold.co/400x400/111/444?text=${image.placeholder}`}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
