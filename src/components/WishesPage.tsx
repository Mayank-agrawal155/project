import React from 'react';
import { Stars } from 'lucide-react';

interface WishesPageProps {
  wish: string;
  author: string;
}

const WishesPage: React.FC<WishesPageProps> = ({ wish, author }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <Stars className="w-12 h-12 text-yellow-400 animate-spin-slow" />
        </div>
        <p className="mt-8 text-xl text-gray-800 italic">{wish}</p>
        <p className="mt-4 text-lg text-red-500 font-medium">- {author}</p>
      </div>
    </div>
  );
};

export default WishesPage;