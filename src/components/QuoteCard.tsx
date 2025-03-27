import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuoteCardProps {
  quote: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-center gap-12">
        <motion.div
          className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl transform transition-all duration-300 hover:scale-105"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-4 -left-4">
            <Quote className="w-8 h-8 text-red-400 transform -scale-x-100" />
          </div>
          <div className="absolute -bottom-4 -right-4">
            <Quote className="w-8 h-8 text-red-400" />
          </div>

          <div className="text-center max-w-xl">
            <p className="text-2xl text-gray-800 leading-relaxed mb-4 romantic-text">{quote}</p>
            <p className="text-red-500 font-medium romantic-text text-xl">- {author}</p>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-20 h-20 bg-red-100/50 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.7}s`,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-96 h-96 rounded-full overflow-hidden shadow-2xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        >
          <img
            src="../src/images/29151.jpg"
            alt="Friendship"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-red-500/50 to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default QuoteCard;