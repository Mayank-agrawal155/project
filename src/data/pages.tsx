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
          Arpita you are my greatest treasure, my forever person, and the most beautiful part of my journey
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
          src="../src/images/29153.jpg"
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
              src="../src/images/phase4.jpg"
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
              src="../src/images/phase20.jpg"
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
          suno janmdin mubarak ho ,suno.. janmdin mubarak ho,<br/>
          bhot khubsurat ho tum bhot khubsurat tum raho,<br/>
          harr kamyabi par pohocho, harr manjil par pohocho,<br/>
          jaha logon ko saalon lage pohochne me,<br/>
          tum jald waha pohocho, <br/><br/>

          me accha hu yeah bura hu nhi janta,<br/>
          me accha hu yeah bura hu nhi janta,<br/>
          dil ki ek baat batadu,<br/>
          dil tumhare alawa kisi ko apna nhi manta,<br/><br/>

          tum sath raho tum khaas raho,<br/>
          tum sath raho tum khaas raho,<br/>
          ek saal or badh gayi hai umar tumhari,<br/>
          harr badhti umar me tum mere paas raho,<br/><br/>

          koi khaas toh nhi hai jo tohfa me tumhe de paunga, <br/>
          par wada hai harr mushkil me yeah sath nibhaunga,<br/>
          ek or saal tumhare kadmo me mubarak,<br/>
          ACCHA SUNOO... JANMDIN MUBARAK ✨
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
      date: "Day I Wrote",
      title: "The Beginning of Writing Special",
      description: "The day I started writing about you, my notes turned into a love story—one where every word holds your smile, every page echoes your laughter, and every line is filled with the magic of you. You are my favorite chapter",
      image: "../src/images/290.jpg"
    },
    {
      date: "Unforgettable Chat",
      title: "Loved Theme by You",
      description: "Even though it was in the past, this theme will always be a part of my story, a silent yet beautiful memory I’ll never forget!",
      image: "../src/images/293.jpg"
    },
    {
      date: "Day with You",
      title: "Visit I can't forget ",
      description: "Some moments in life don’t just pass by—they stay. That trip is one of them. It’s a part of me now, a chapter of my heart that will never close.",
      image: "../src/images/295.jpg"
    }
  ]} />,
  <div key="photos" className="w-full">
    <h2 className="text-3xl font-bold text-red-500 text-center mb-8 animate-float">Captured Forever</h2>
    <PhotoGallery />
  </div>,
  <EnhancedShayariPage key="shayari" />,
  <QuoteCard
    key="quote1"
    quote="💖Arpita your smile is the most precious thing in my world. Every time I see it, my heart feels lighter, my worries disappear, and everything suddenly makes sense. It’s like a ray of sunshine that warms my soul and fills my life with happiness. I could spend forever just watching you smile, because in that moment, I know that everything is right."
    author="Arpita Smile Please😊"
  />,
  <FinalPage key="final" />
];