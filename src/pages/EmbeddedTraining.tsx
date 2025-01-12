import React from 'react';
import { Cpu, Code, Terminal, CircuitBoard } from 'lucide-react';

interface TutorialCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  icon: React.ReactNode;
}

function TutorialCard({ title, description, level, duration, icon }: TutorialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
      <div className="text-blue-600 w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{level}</span>
        <span>{duration}</span>
      </div>
    </div>
  );
}

export function EmbeddedTraining() {
  const embeddedTutorials = [
    {
      title: "Microcontroller Programming",
      description: "Learn programming with Arduino and basic electronics",
      level: "Beginner",
      duration: "6 weeks",
      icon: <CircuitBoard className="w-full h-full" />
    },
    {
      title: "Advanced Arduino",
      description: "Create complex projects with sensors and actuators",
      level: "Intermediate",
      duration: "8 weeks",
      icon: <Cpu className="w-full h-full" />
    },
    {
      title: "Raspberry Pi Development",
      description: "Build IoT projects with Raspberry Pi",
      level: "Advanced",
      duration: "10 weeks",
      icon: <Terminal className="w-full h-full" />
    }
  ];

  const programmingTutorials = [
    {
      title: "C Programming for Embedded",
      description: "Master C programming for microcontrollers",
      level: "Intermediate",
      duration: "8 weeks",
      icon: <Code className="w-full h-full" />
    },
    {
      title: "Python for IoT",
      description: "Learn Python programming for IoT applications",
      level: "Intermediate",
      duration: "6 weeks",
      icon: <Terminal className="w-full h-full" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-16">Embedded Systems & Programming Training</h1>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Embedded Systems</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {embeddedTutorials.map((tutorial, index) => (
              <TutorialCard key={index} {...tutorial} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-8">Programming</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmingTutorials.map((tutorial, index) => (
              <TutorialCard key={index} {...tutorial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}