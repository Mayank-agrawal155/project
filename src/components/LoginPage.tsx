import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars, Lock, User, Sparkles, Gift, Music } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'bestiesbirthday' && password === '2915') {
      onLogin();
    } else {
      setError('Incorrect username or password');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-200 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating hearts */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute pointer-events-none"
            initial={{ y: Math.random() * window.innerHeight }}
            animate={{
              y: [-20, window.innerHeight + 20],
              x: [Math.random() * 20 - 10, Math.random() * 20 - 10],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            <Heart className="text-red-200 w-8 h-8" />
          </motion.div>
        ))}

        {/* Floating sparkles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute pointer-events-none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="text-yellow-300 w-6 h-6" />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl w-96 relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {/* Decorative corner elements */}
        <motion.div
          className="absolute -top-6 -right-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Stars className="w-12 h-12 text-yellow-400" />
        </motion.div>

        <motion.div
          className="absolute -top-6 -left-6"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Gift className="w-12 h-12 text-red-400" />
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <motion.div
            className="text-center space-y-2"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h2
              className="text-3xl font-bold text-red-500 romantic-text"
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 8px rgba(239, 68, 68, 0.2)",
                  "0 0 16px rgba(239, 68, 68, 0.4)",
                  "0 0 8px rgba(239, 68, 68, 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
             A little something just for you! 🎉
            </motion.h2>
            <motion.p
              className="text-gray-600 italic"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Enter the your magical celebration...
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-5 h-5" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-red-200 focus:border-red-400 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="Username"
              />
            </motion.div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-red-200 focus:border-red-400 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="Password"
              />
            </motion.div>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-center font-medium"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-xl font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <span className="relative z-10">Enter the Celebration </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [0, (Math.random() - 0.5) * 100],
                        y: [0, (Math.random() - 0.5) * 100],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: '50%',
                      }}
                    >
                      <Music className="w-4 h-4 text-white" />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </form>

        <motion.div
          className="absolute -bottom-6 -left-6"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Heart className="w-12 h-12 text-red-400" />
        </motion.div>

        <motion.div
          className="absolute -bottom-6 -right-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Music className="w-12 h-12 text-pink-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;