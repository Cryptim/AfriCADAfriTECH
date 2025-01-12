import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { BookOpen, Monitor, Box, PenTool, Cpu, Code, Terminal, CircuitBoard } from 'lucide-react';

interface TrainingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

function TrainingCard({ title, description, icon, link }: TrainingCardProps) {
  return (
    <Link to={link} className="block">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
        <div className="text-blue-600 w-12 h-12 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </Link>
  );
}

export function Training() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-16">Training Programs</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrainingCard 
              title="SolidWorks Training"
              description="Master 3D modeling and design with SolidWorks"
              icon={<Box className="w-full h-full" />}
              link="/training/cad"
            />
            <TrainingCard 
              title="AutoCAD Training"
              description="Learn professional 2D and 3D drafting"
              icon={<PenTool className="w-full h-full" />}
              link="/training/cad"
            />
            <TrainingCard 
              title="Embedded Systems"
              description="Build IoT and embedded solutions"
              icon={<CircuitBoard className="w-full h-full" />}
              link="/training/embedded"
            />
            <TrainingCard 
              title="Programming"
              description="Learn C, Python, and embedded programming"
              icon={<Code className="w-full h-full" />}
              link="/training/embedded"
            />
            <TrainingCard 
              title="Raspberry Pi"
              description="Create projects with Raspberry Pi"
              icon={<Cpu className="w-full h-full" />}
              link="/training/embedded"
            />
            <TrainingCard 
              title="Arduino Development"
              description="Build electronic projects with Arduino"
              icon={<Terminal className="w-full h-full" />}
              link="/training/embedded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}