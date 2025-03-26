import React from 'react';
import { motion } from 'framer-motion';

const PhotoGallery: React.FC = () => {
  const photos = [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1516474076198-6f3c164c6088?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1516474076198-6f3c164c6088?auto=format&fit=crop&w=300",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=300",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, rotateY: 0 }}
          animate={{ opacity: 1, y: 0, rotateY: 360 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 180,
            transition: { duration: 0.6 }
          }}
          className="relative group perspective-1000"
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform-style-preserve-3d">
            <img
              src={photo}
              alt={`Memory ${index + 1}`}
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xl font-bold">Beautiful Memory #{index + 1}</p>
                <p className="text-sm opacity-80">A moment to cherish forever</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGallery;