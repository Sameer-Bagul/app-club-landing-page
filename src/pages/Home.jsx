import React from 'react';
import { Calendar, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-purple-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="max-w-5xl flex flex-col items-center justify-center">
            <p className="text-2xl mb-8 text-ellipsis ">“ Innovate  Create  Inspire ”.</p>
            <h1 className="text-8xl text-center font-bold mb-6">{`<TRANSFORM IDEAS 
INTO APPS />`}</h1>
           <div className='flex gap-6'>
           <Link
              to="/events"
              className="bg-purple-400 hover:bg-purple-700 border-violet-700 border-2 opacity-80  text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              Explore Events
            </Link> <Link
              to="/project"
              className="bg-pink-600 hover:bg-pink-800 text-white px-8 py-3 border-2 opacity-60 border-pink-400 rounded-full  font-bold transition-colors"
            >
              Explore Projects
            </Link>
           </div>
          </div>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">UPCOMING EVENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {/* Large Event Card */}
            <div className="md:col-span-2 lg:col-span-2 group">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                  alt="UI/UX Competition"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-purple-400 text-sm mb-2 block">March 25, 2024</span>
                  <h3 className="text-2xl font-bold mb-2">UI/UX Competition - Design. Innovate. Inspire.</h3>
                  <p className="text-gray-300 mb-4">Join us for an exciting UI/UX competition where creativity meets functionality!</p>
                  <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/* Medium Event Card */}
            <div className="group">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
                  alt="Gen AI BootCamp"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-purple-400 text-sm mb-2 block">April 2, 2024</span>
                  <h3 className="text-xl font-bold mb-2">Gen AI BootCamp</h3>
                  <p className="text-gray-300 mb-4">Dive deep into the world of Generative AI!</p>
                  <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Two Half-Height Cards */}
            <div className="space-y-6">
              <div className="group">
                <div className="relative h-[190px] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
                    alt="Mentor Session"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-purple-400 text-sm block">April 15, 2024</span>
                    <h3 className="text-lg font-bold">Mentor Session</h3>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="relative h-[190px] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                    alt="Hackathon"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-purple-400 text-sm block">April 20, 2024</span>
                    <h3 className="text-lg font-bold">24hr Hackathon</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">WHAT WE DO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">Events & Workshops</h3>
              <p className="text-gray-400">We organize a variety of events and workshops throughout the year</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">Industry Collaboration</h3>
              <p className="text-gray-400">We collaborate with industry experts to bring real-world opportunities</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
              <p className="text-gray-400">Our goal is to help you learn and advance your skills</p>
            </div>
          </div>
        </div>
      </div>

      {/* Student Section */}
      <div className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center">STUDENT SECTION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                alt="Students"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">We want to hear from you!</h3>
              <p className="text-gray-300 mb-6">
                Share your thoughts and suggestions for App Club events, let us know how events or workshops went, or just drop us a line! Your feedback helps us improve and create better experiences for future events.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/feedback"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Feedback Form
                </Link>
                <Link
                  to="/events"
                  className="border border-purple-600 hover:bg-purple-600/10 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  View Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;