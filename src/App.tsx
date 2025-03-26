import React, { useState, useEffect } from 'react';
import { Heart, Stars, Cloud, Gift, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import BirthdayCard from './components/BirthdayCard';
import PhotoGallery from './components/PhotoGallery';
import WishesPage from './components/WishesPage';
import { pages } from './data/pages';
import LoginPage from './components/LoginPage.tsx';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay && isAuthenticated) {
      interval = setInterval(() => {
        handleNextPage();
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, currentPage, isAuthenticated]);

  const handlePrevPage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handleNextPage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
      setIsTransitioning(false);
    }, 500);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-200 overflow-hidden relative">
      {/* Floating clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <Cloud
            key={i}
            className={`absolute text-white/30 w-${Math.random() * 20 + 10} h-${
              Math.random() * 20 + 10
            } animate-float-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-red-400/20 w-6 h-6 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation controls */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50">
        <button
          onClick={handlePrevPage}
          className="bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <ChevronLeft className="w-6 h-6 text-red-500" />
        </button>
      </div>
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <button
          onClick={handleNextPage}
          className="bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <ChevronRight className="w-6 h-6 text-red-500" />
        </button>
      </div>

      {/* Main content */}
      <div
        className={`transition-all duration-500 ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            {pages[currentPage]}
          </div>
        </div>
      </div>

      {/* Page indicators */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentPage(i);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentPage === i
                ? 'bg-red-500 scale-125'
                : 'bg-red-300 hover:bg-red-400'
            }`}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;