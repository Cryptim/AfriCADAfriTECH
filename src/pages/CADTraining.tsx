import React from 'react';
import { BookOpen, Monitor, Box, PenTool } from 'lucide-react';

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

export function CADTraining() {
  const solidworksTutorials = [
    {
      title: "SolidWorks Basics",
      description: "Learn the fundamentals of SolidWorks interface and basic part modeling",
      level: "Beginner",
      duration: "4 weeks",
      icon: <BookOpen className="w-full h-full" />
    },
    {
      title: "Advanced Part Modeling",
      description: "Master complex features and advanced modeling techniques",
      level: "Intermediate",
      duration: "6 weeks",
      icon: <Box className="w-full h-full" />
    },
    {
      title: "Assembly Design",
      description: "Create complex assemblies and learn motion studies",
      level: "Advanced",
      duration: "8 weeks",
      icon: <PenTool className="w-full h-full" />
    }
  ];

  const autocadTutorials = [
    {
      title: "AutoCAD Fundamentals",
      description: "Master the basics of 2D drafting and annotation",
      level: "Beginner",
      duration: "4 weeks",
      icon: <Monitor className="w-full h-full" />
    },
    {
      title: "2D Advanced Techniques",
      description: "Learn advanced 2D drafting tools and automation",
      level: "Intermediate",
      duration: "6 weeks",
      icon: <PenTool className="w-full h-full" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-16">CAD Training Programs</h1>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">SolidWorks Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solidworksTutorials.map((tutorial, index) => (
              <TutorialCard key={index} {...tutorial} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-8">AutoCAD Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autocadTutorials.map((tutorial, index) => (
              <TutorialCard key={index} {...tutorial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}