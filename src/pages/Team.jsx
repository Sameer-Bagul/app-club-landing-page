import React from 'react';

const Team = () => {
  const coreTeam = [
    {
      name: "Aayush Kulkarni",
      role: "President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Devika Jhanwar",
      role: "Vice-President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Ritika Oswal",
      role: "Secretary",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    }
  ];

  const teamHeads = [
    {
      name: "Sameer Bagul",
      role: "Technical",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
    },
    {
      name: "Anshika Pansurkar",
      role: "Logistics/Events",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    },
    {
      name: "Ruchika Deodikar",
      role: "Marketing",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">MEET OUR <span className="text-purple-500">TEAM</span></h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">The passionate individuals behind App Club</p>

        {/* Core Leadership */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">CORE LEADERSHIP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover transition-transform group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-white/10 dark:from-black/80 dark:to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white dark:text-gray-200">{member.name}</h3>
                    <p className="text-purple-300 dark:text-purple-400">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Heads */}
        <div>
          <h2 className="text-2xl font-bold mb-8">TEAM HEADS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamHeads.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-white/10 dark:from-black/80 dark:to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white dark:text-gray-200">{member.name}</h3>
                    <p className="text-purple-300 dark:text-purple-400">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;