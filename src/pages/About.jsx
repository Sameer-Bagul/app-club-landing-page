import React from 'react';
import { Calendar, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className="mb-20">
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              alt="About Us"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                The App Club of PES Modern College of Engineering, Pune, is a vibrant community driven by innovation and technology. We're dedicated to helping students explore and excel in software development.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">WHAT WE DO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-900/20 p-8 rounded-xl">
              <Calendar className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Events and Workshops</h3>
              <p className="text-gray-300">
                We organize regular workshops, hackathons, and coding competitions to help students gain practical experience and showcase their skills.
              </p>
            </div>
            <div className="bg-purple-900/20 p-8 rounded-xl">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Industry Collaboration</h3>
              <p className="text-gray-300">
                We partner with industry experts to provide students with real-world insights, internship opportunities, and career guidance.
              </p>
            </div>
            <div className="bg-purple-900/20 p-8 rounded-xl">
              <Target className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Skill Development</h3>
              <p className="text-gray-300">
                Through hands-on projects and mentorship programs, we help students develop the skills needed for successful careers in tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;