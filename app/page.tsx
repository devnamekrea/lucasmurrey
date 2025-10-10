'use client';

import { useState } from 'react';

export default function Home() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f5f1e8]">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-serif text-[#3d2817] mb-4 text-center">
          Dr. Lucas Murrey
        </h1>
        <p className="text-xl md:text-2xl text-[#5c4a36] mb-12 text-center">
          Ph.D Yale University and author of scholarly and critical books, articles and letters
        </p>
        
        {/* Centered Images Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl w-full">
          {/* Author Photo 1 - Expandable */}
          <button
            onClick={() => setExpandedImage('/images/author/photo1.jpg')}
            className="w-full aspect-[3/4] bg-[#d9d0c1] rounded-sm overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
          >
            <img 
              src="/images/author/photo1.jpg" 
              alt="Dr. Lucas Murrey" 
              className="w-full h-full object-cover"
            />
          </button>

          {/* Author Photo 2 - Expandable */}
          <button
            onClick={() => setExpandedImage('/images/author/photo2.jpg')}
            className="w-full aspect-[3/4] bg-[#d9d0c1] rounded-sm overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
          >
            <img 
              src="/images/author/photo2.jpg" 
              alt="Dr. Lucas Murrey" 
              className="w-full h-full object-cover"
            />
          </button>

          {/* Book 1 - Hölderlin */}
          <a 
            href="https://link.springer.com/book/10.1007/978-3-319-10205-4" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-[3/4] bg-[#d9d0c1] rounded-sm overflow-hidden hover:opacity-90 transition-opacity"
          >
            <img 
              src="/images/books/holderlin.jpg" 
              alt="Hölderlin's Dionysiac Poetry" 
              className="w-full h-full object-cover"
            />
          </a>

          {/* Book 2 - Nietzsche */}
          <a 
            href="https://www.bloomsbury.com/us/nietzsche-9781611461558/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-[3/4] bg-[#d9d0c1] rounded-sm overflow-hidden hover:opacity-90 transition-opacity"
          >
            <img 
              src="/images/books/nietzsche.jpg" 
              alt="Nietzsche: The Meaning of Earth" 
              className="w-full h-full object-cover"
            />
          </a>

          {/* Book 3 - Harvard */}
          <a 
            href="/documents/open-letter-harvard.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-[3/4] bg-[#d9d0c1] rounded-sm overflow-hidden hover:opacity-90 transition-opacity"
          >
            <img 
              src="/images/books/harvard.jpg" 
              alt="Harvard's Program for Dynamic Paralysis" 
              className="w-full h-full object-cover"
            />
          </a>
        </div>
        </div>

        {/* Email - Centered */}
        <div className="mt-8 text-center">
          <a 
            href="mailto:lucas@namekreator.com"
            className="text-lg md:text-xl text-[#3d2817] hover:text-[#8b6914] transition-colors"
          >
            lucas@namekreator.com
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setExpandedImage(null)}
          >
            ×
          </button>
          <img 
            src={expandedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}