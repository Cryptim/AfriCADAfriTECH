import React from 'react';
import { useParams } from 'react-router-dom';

const projects = {
  'smart-agriculture': {
    title: 'Smart Agriculture System',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    description: 'Advanced IoT-based irrigation and crop monitoring system designed for African agriculture.',
    features: [
      'Automated irrigation control',
      'Soil moisture monitoring',
      'Weather data integration',
      'Mobile app control',
      'Real-time analytics'
    ],
    technologies: ['Arduino', 'Raspberry Pi', 'Python', 'React Native', 'IoT Sensors'],
    results: 'Increased crop yield by 40% and reduced water usage by 30%'
  },
  'engineering-design': {
    title: 'Engineering Design Solutions',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
    description: 'Comprehensive CAD/CAM solutions for manufacturing industries.',
    features: [
      '3D modeling and prototyping',
      'Manufacturing process optimization',
      'Quality control integration',
      'Automated toolpath generation',
      'Design for manufacturing'
    ],
    technologies: ['SolidWorks', 'AutoCAD', 'CNC Programming', 'CAM Software'],
    results: 'Reduced production time by 50% and improved product quality by 35%'
  },
  'smart-city': {
    title: 'Smart City Solutions',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26',
    description: 'Innovative urban monitoring and management systems for African cities.',
    features: [
      'Traffic management',
      'Environmental monitoring',
      'Public safety systems',
      'Energy management',
      'Waste management'
    ],
    technologies: ['IoT Sensors', 'Cloud Computing', 'AI/ML', 'Mobile Apps'],
    results: 'Improved urban service delivery by 60% and reduced energy consumption by 25%'
  }
};

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects[id as keyof typeof projects] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Project Not Found</h1>
          <p className="mt-4 text-gray-600">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {project.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
            <p className="text-gray-600">{project.results}</p>
          </div>
        </div>
      </div>
    </div>
  );
}