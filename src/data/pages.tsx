import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars, Gift, Sparkles, Music, Cake } from 'lucide-react';
import BirthdayCard from '../components/BirthdayCard';
import WishesPage from '../components/WishesPage';
import PhotoGallery from '../components/PhotoGallery';
import MemoryTimeline from '../components/MemoryTimeline';
import ShayariCard from '../components/ShayariCard';
import QuoteCard from '../components/QuoteCard';

const WelcomePage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Sparkles className="w-8 h-8 text-yellow-400" />
        </motion.div>
      ))}
    </motion.div>

    <div className="flex flex-col items-center justify-center z-10 space-y-12">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-8xl font-bold text-red-500 romantic-text"
          animate={{
            scale: [1, 1.05, 1],
            textShadow: [
              "0 0 8px rgba(239, 68, 68, 0.2)",
              "0 0 16px rgba(239, 68, 68, 0.4)",
              "0 0 8px rgba(239, 68, 68, 0.2)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Happy Birthday Bestie! 🎉
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mt-4 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          "A true friend is the greatest of all blessings"
        </motion.p>
      </motion.div>

      <motion.div
        className="relative w-96 h-96 rounded-full overflow-hidden shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1.5
        }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        <img
          src="../src/images/1713267773513.jpg"
          alt="Celebration"
          className="w-full h-full object-cover transform transition-transform duration-300"
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
  </motion.div>
);

const BirthdayPhotosPage = () => (
  <motion.div
    className="min-h-screen flex items-center justify-center p-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="flex flex-col items-center space-y-8">
      <div className="flex items-center space-x-12">
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: -5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800"
              alt="Birthday Memory 1"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.p
            className="text-2xl text-red-500 romantic-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            From
          </motion.p>
        </div>

        <motion.h2
          className="text-6xl font-bold text-red-500 romantic-text"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Happy<br/>Birthday!
        </motion.h2>

        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1523438097201-512ae7d59c44?auto=format&fit=crop&w=800"
              alt="Birthday Memory 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.p
            className="text-2xl text-red-500 romantic-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            To
          </motion.p>
        </div>
      </div>
    </div>
  </motion.div>
);

const EnhancedShayariPage = () => (
  <motion.div
    className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.div
      className="max-w-3xl w-full bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl relative"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute -top-6 -right-6"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Stars className="w-12 h-12 text-yellow-400" />
      </motion.div>
      
      <motion.div
        className="text-center space-y-6"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="space-y-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-2xl text-gray-800 leading-relaxed">
            तेरी दोस्ती है मेरी ज़िंदगी का सहारा,<br/>
            हर खुशी में तू है, हर गम में तू है प्यारा।<br/>
            जन्मदिन पर तेरे, बस यही दुआ है मेरी,<br/>
            खुशियाँ तेरी हों बेशुमार, ज़िंदगी तेरी हो गुलज़ार।<br/><br/>

            हर सपना तेरा हो पूरा, हर राह तेरी हो रोशन,<br/>
            तेरी मुस्कान से ही तो है, मेरी दुनिया का यह गुलशन।<br/>
            दोस्ती हमारी रहे युँ ही सदा,<br/>
            जैसे चाँद के साथ है तारों का मेला।<br/><br/>

            मुबारक हो तुझे यह खास दिन,<br/>
            तेरी खुशी में है मेरी खुशी का चिन्ह।<br/>
            रहे तू हमेशा खुश ऐसे ही यार,<br/>
            Happy Birthday to you, मेरे प्यारे यार! ✨
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Heart className="w-12 h-12 text-red-400" />
      </motion.div>
    </motion.div>
  </motion.div>
);

const FinalPage = () => (
  <motion.div 
    className="text-center transform transition-all min-h-screen flex items-center justify-center"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div>
      <motion.h1 
        className="text-9xl font-bold text-red-500 mb-8"
        style={{ fontFamily: "'Playfair Display', serif" }}
        animate={{
          scale: [1, 1.1, 1],
          textShadow: [
            "0 0 20px rgba(239, 68, 68, 0.3)",
            "0 0 40px rgba(239, 68, 68, 0.5)",
            "0 0 20px rgba(239, 68, 68, 0.3)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Happy Birthday<br/>
        <motion.span
          className="text-8xl italic"
          animate={{
            color: ["#ef4444", "#f87171", "#ef4444"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Soniya
        </motion.span>
        <span className="ml-4">🎂</span>
      </motion.h1>
      <motion.p 
        className="text-3xl text-gray-700 mb-12 romantic-text"
        animate={{
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        May your day be filled with joy, laughter, and endless blessings!
      </motion.p>
      <motion.div 
        className="flex justify-center space-x-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.span 
            key={i} 
            className="text-7xl"
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2 
            }}
          >
            {['🎉', '🎈', '🎁', '✨', '🎊'][i]}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

export const pages = [
  <WelcomePage key="welcome" />,
  <BirthdayPhotosPage key="birthday-photos" />,
  <MemoryTimeline key="timeline" memories={[
    {
      date: "First Day We Met",
      title: "The Beginning of Something Special",
      description: "Remember how we couldn't stop talking? That's when I knew we'd be best friends forever.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=300"
    },
    {
      date: "Our First Adventure",
      title: "Road Trip Memories",
      description: "That spontaneous road trip where we got lost but found the best memories!",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=300"
    },
    {
      date: "Coffee Shop Days",
      title: "Late Night Conversations",
      description: "Those endless conversations over coffee that made time stand still.",
      image: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?auto=format&fit=crop&w=300"
    }
  ]} />,
  <div key="photos" className="w-full">
    <h2 className="text-3xl font-bold text-red-500 text-center mb-8 animate-float">Our Beautiful Memories</h2>
    <PhotoGallery />
  </div>,
  <EnhancedShayariPage key="shayari" />,
  <QuoteCard
    key="quote1"
    quote="Some people arrive and make such a beautiful impact on your life, you can barely remember what life was like without them."
    author="Anna Taylor"
  />,
  <FinalPage key="final" />
];