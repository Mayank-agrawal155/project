import React, { useState } from 'react';
import { Heart, Stars, Gift, Sparkles, PartyPopper } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BirthdayCardProps {
  message: string;
  from?: string;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ message, from }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
    setTimeout(() => setShowSurprise(true), 1000);
  };

  return (
    <div className="relative w-[350px] h-[450px] perspective-1000">
      <motion.div
        className="card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isOpen ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        {/* Front of card */}
        <motion.div 
          className="front bg-white rounded-2xl shadow-xl p-8"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCardClick}
        >
          <motion.div 
            className="absolute -top-4 -right-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Gift className="w-12 h-12 text-red-500" />
          </motion.div>
          
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Stars className="w-16 h-16 text-yellow-400" />
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold text-red-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Click to Open Your Surprise!
            </motion.h3>
            
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
            </motion.div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div className="back bg-gradient-to-br from-red-100 to-pink-200 rounded-2xl shadow-xl p-8">
          <div className="flex flex-col items-center justify-center h-full text-center relative">
            <AnimatePresence>
              {showSurprise && (
                <>
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <PartyPopper className="w-16 h-16 text-yellow-400 animate-float-rotate" />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      >
                        <Heart 
                          className="w-4 h-4 text-red-400 animate-float" 
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="z-10"
            >
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-6 animate-pulse" />
              <motion.p 
                className="text-xl text-gray-800 font-medium leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {message}
              </motion.p>
              {from && (
                <motion.p 
                  className="text-lg text-red-500 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  - {from}
                </motion.p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <AnimatePresence>
        {showSurprise && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 200],
                  y: [0, (Math.random() - 0.5) * 200]
                }}
                transition={{ 
                  duration: 2,
                  delay: 1 + i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                style={{
                  left: '50%',
                  top: '50%'
                }}
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BirthdayCard;