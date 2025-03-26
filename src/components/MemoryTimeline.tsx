import React from 'react';
import { Calendar } from 'lucide-react';

interface Memory {
  date: string;
  title: string;
  description: string;
  image: string;
}

interface MemoryTimelineProps {
  memories: Memory[];
}

const MemoryTimeline: React.FC<MemoryTimelineProps> = ({ memories }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>

        {memories.map((memory, index) => (
          <div
            key={index}
            className={`flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Content */}
            <div className="w-1/2 px-8 group">
              <div className="bg-white rounded-xl p-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-red-400 font-medium">{memory.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{memory.title}</h3>
                <p className="text-gray-600">{memory.description}</p>
              </div>
            </div>

            {/* Timeline point */}
            <div className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 bg-red-400 rounded-full transform transition-transform duration-300 hover:scale-150"></div>
            </div>

            {/* Image */}
            <div className="w-1/2 px-8">
              <div className="overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryTimeline;