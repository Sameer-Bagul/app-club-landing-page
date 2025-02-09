import React from 'react';
import { Calendar, Users, Code2 } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "UI/UX Competition - Design. Innovate. Inspire.",
      description: "Join us for an exciting UI/UX competition where creativity meets functionality! Showcase your design skills, learn from industry experts, and win exciting prizes. Whether you're a beginner or an expert, this event has something for everyone.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
      date: "March 25, 2024",
      icon: Code2
    },
    {
      title: "Gen AI BootCamp: Unlock the Power of AI",
      description: "Dive deep into the world of Generative AI and explore how AI can create text, images, code, and more! Learn from industry experts about the latest AI technologies, hands-on workshops, and real-world applications.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
      date: "April 2, 2024",
      icon: Users
    },
    {
      title: "Mentor Session: Learn from the Experts!",
      description: "Connect with industry professionals and gain insights into the latest tech trends, career opportunities, and professional development. Get your questions answered and network with experts.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
      date: "April 15, 2024",
      icon: Calendar
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">ALL EVENTS</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400">
              Search
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-900/20 to-black border border-purple-500/20 rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-bold">{event.title}</h2>
                    <event.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-gray-300 mb-6">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400">{event.date}</span>
                    <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;