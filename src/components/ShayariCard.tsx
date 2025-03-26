import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface ShayariCardProps {
  shayari: string;
  translation: string;
}

const ShayariCard: React.FC<ShayariCardProps> = ({ shayari, translation }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="relative bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105">
        {/* Decorative elements */}
        <div className="absolute -top-3 -right-3">
          <Sparkles className="w-8 h-8 text-red-400 animate-spin-slow" />
        </div>
        <div className="absolute -bottom-3 -left-3">
          <Heart className="w-8 h-8 text-red-400 animate-pulse" />
        </div>

        {/* Content */}
        <div className="text-center">
          <div className="mb-6">
            <p className="text-xl font-medium text-gray-800 leading-relaxed whitespace-pre-line">
              {shayari}
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-red-100">
            <p className="text-lg text-gray-600 italic leading-relaxed whitespace-pre-line">
              {translation}
            </p>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-red-100 w-12 h-12 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShayariCard;