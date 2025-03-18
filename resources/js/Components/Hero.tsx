import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight, MousePointer, ArrowDown } from 'lucide-react';
import Hls from 'hls.js';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Entrance animation with a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hls = new Hls();
    
    if (Hls.isSupported()) {
      hls.loadSource('https://customer-xm4jzlqrmgzuuvek.cloudflarestream.com/6e26e29c8316af65f1315c032ecb154f/manifest/video.m3u8');
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(error => {
          console.log("Auto-play was prevented:", error);
        });
      });
    }
    // For browsers that natively support HLS
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = 'https://customer-xm4jzlqrmgzuuvek.cloudflarestream.com/79b95c85b81b8b8367adda3df88568f7/manifest/video.m3u8';
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-10">
        <div className="container-custom h-full relative">
          <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full border border-secondary/30 opacity-60"></div>
          <div className="absolute bottom-1/4 right-10 w-20 h-20 rounded-full border border-secondary/20 opacity-40"></div>
          <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-secondary/20 blur-sm"></div>
        </div>
      </div>
      
      <div className="hero-content relative z-20">
        <div className="container-custom">
          <div className={`max-w-3xl transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-[1px] w-10 bg-secondary"></div>
              <span className="text-secondary uppercase tracking-widest text-sm font-medium">
                Premier Custom Joinery
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading text-white mb-6 sm:mb-8 leading-tight">
              <span className="block">Crafting Excellence</span>
              <span className="block text-secondary">in Every Detail</span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-gray-200 max-w-2xl">
              Bespoke joinery and custom woodwork that transforms your space into a masterpiece,
              with precision craftsmanship and timeless design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#contact" 
                className="btn btn-secondary group flex items-center justify-center"
              >
                Request Free Quote
                <ChevronRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#portfolio" 
                className="btn btn-white-outline flex items-center justify-center"
              >
                View Our Work
                <MousePointer className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center transition-all duration-1000 cursor-pointer ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={scrollToNextSection}
      >
        <span className="text-white/80 text-sm uppercase tracking-widest mb-2">Scroll</span>
        <ArrowDown className="text-secondary animate-bounce w-6 h-6" />
      </div>
    </div>
  );
};

export default Hero;