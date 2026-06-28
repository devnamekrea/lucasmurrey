'use client';

import { useState } from 'react';

const ODYSEE_EMBED = 'https://odysee.com/$/embed/@lucasmurrey:9/1-Lucas+Moe:2';
const ODYSEE_THUMB =
  'https://thumbnails.odycdn.com/card/s:1280:720/quality:85/plain/https://thumbs.odycdn.com/c3fa63d8657fd74de4c46ac879aa3758.webp';

export default function Home() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

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

          {/* Video - Expandable (wraps to second row) */}
          <button
            onClick={() => setVideoOpen(true)}
            className="relative w-full aspect-[3/4] bg-[#d9d0c1] rounded-sm overflow-hidden hover:opacity-90 transition-opacity cursor-pointer group"
            aria-label="Play video: 1 Lucas + Moe"
          >
            <img
              src={ODYSEE_THUMB}
              alt="1: Lucas + Moe"
              className="w-full h-full object-cover"
            />
            {/* Play button overlay */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 text-black" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
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

      {/* Lightbox Modal - Images */}
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

      {/* Lightbox Modal - Video */}
      {videoOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setVideoOpen(false)}
          >
            ×
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={ODYSEE_EMBED}
              className="absolute inset-0 h-full w-full rounded-lg"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="1: Lucas + Moe"
            />
          </div>
        </div>
      )}
    </main>
  );
}