<<<<<<< HEAD
import React from 'react';

const Team = () => {
  const coreTeam = [
    {
      name: "Aayush Kulkarni",
      role: "President",
      image: "src/img/President_AayushKulkarni.png",
      url:"https://www.linkedin.com/in/kulkarniaayush"
    },
    {
      name: "Devika Jhawar",
      role: "Vice-President",
      image: "src/img/VicePresident_Devika.jpeg",
      url:"https://www.linkedin.com/in/devika-jhawar/"
    },
    {
      name: "Ritika Oswal",
      role: "Secretary",
      image: "src/img/Secretary_RitikaOswal.png",
      url:"https://www.linkedin.com/in/ritika-oswal-40b060309/"
    }
  ];

  const teamHeads = [
    {
      name: "Sameer Bagul",
      role: "Technical",
      image: "src/img/TechTeamHeadSameer.jpg",
      url:"https://www.linkedin.com/in/sameer-bagul/"
    },
    {
      name: "Anishka Pannalkar",
      role: "Logistics/Events",
      image: "src/img/Logistics_Head_Anishka Pannalkar.jpg",
      url:"     "
    },
    {
      name: "Ruchita Deodikar",
      role: "Marketing",
      image: "src/img/Marketing_Head_RuchitaDeodhar (1).png",
      url:"https://www.linkedin.com/in/ruchita-deodhar-8b498528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      name: "Ritika Mahajan",
      role: "Media",
      image: "src/img/Media_Tanishka_Narkhede.jpg",
      url:"https://www.linkedin.com/in/ritika-m-052934215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Akash Deshmukh",
      role: "Documentation",
      image: "src/img/Documentation_Head_Akash Deshmukh.jpg",
      url:"https://www.linkedin.com/in/akash-deshmukh410"
    },
    {
      name: "Vivek Gaikwad",
      role: "Treasurer",
      image: "src/img/Vivek Gaikwad_treasurer.JPG",
      url:"https://www.linkedin.com/in/vivek-gaikwad-6a533b284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
                <div className="relative overflow-hidden rounded-xl mb-4 cursor-pointer" onClick={() => member.url && window.open(member.url, "_blank", "noopener noreferrer")}>
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
                <div className="relative overflow-hidden rounded-xl mb-4 cursor-pointer" onClick={() => member.url && window.open(member.url, "_blank", "noopener noreferrer")}>
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

=======
import React from 'react';

const Team = () => {
  const coreTeam = [
    {
      name: "Aayush Kulkarni",
      role: "President",
      image: "src/img/President_AayushKulkarni.png",
      url:"https://www.linkedin.com/in/kulkarniaayush"
    },
    {
      name: "Devika Jhawar",
      role: "Vice-President",
      image: "src/img/VicePresident_Devika.jpeg",
      url:"https://www.linkedin.com/in/devika-jhawar/"
    },
    {
      name: "Ritika Oswal",
      role: "Secretary",
      image: "src/img/Secretary_RitikaOswal.png",
      url:"https://www.linkedin.com/in/ritika-oswal-40b060309/"
    }
  ];

  const teamHeads = [
    {
      name: "Sameer Bagul",
      role: "Technical",
      image: "src/img/TechTeamHeadSameer.jpg",
      url:"https://www.linkedin.com/in/sameer-bagul/"
    },
    {
      name: "Anishka Pannalkar",
      role: "Logistics/Events",
      image: "src/img/Logistics_Head_Anishka Pannalkar.jpg",
      url:"https://www.linkedin.com/in/anishka-pannalkar-994b64321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Ruchita Deodikar",
      role: "Marketing",
      image: "src/img/Marketing_Head_RuchitaDeodhar (1).png",
      url:"https://www.linkedin.com/in/ruchita-deodhar-8b498528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      name: "Ritika Mahajan",
      role: "Media",
      image: "src/img/Media_Tanishka_Narkhede.jpg",
      url:"https://www.linkedin.com/in/ritika-m-052934215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Akash Deshmukh",
      role: "Documentation",
      image: "src/img/Documentation_Head_Akash Deshmukh.jpg",
      url:"https://www.linkedin.com/in/akash-deshmukh410"
    },
    {
      name: "Vivek Gaikwad",
      role: "Treasurer",
      image: "src/img/Vivek Gaikwad_treasurer.JPG",
      url:"https://www.linkedin.com/in/vivek-gaikwad-6a533b284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
                <div className="relative overflow-hidden rounded-xl mb-4 cursor-pointer" onClick={() => member.url && window.open(member.url, "_blank", "noopener noreferrer")}>
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
                <div className="relative overflow-hidden rounded-xl mb-4 cursor-pointer" onClick={() => member.url && window.open(member.url, "_blank", "noopener noreferrer")}>
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

>>>>>>> 1130c8e2cba469cc4c3f474bc5104e01e79f8e61
export default Team;