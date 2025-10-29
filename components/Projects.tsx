'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: '3D Product Visualizer',
      description: 'Interactive 3D product showcase with real-time rendering and customization',
      tech: ['Three.js', 'React', 'WebGL'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Immersive Portfolio',
      description: 'Award-winning portfolio with physics-based animations and particle effects',
      tech: ['Next.js', 'React Three Fiber', 'Framer Motion'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Virtual Gallery',
      description: 'Web-based virtual art gallery with spatial audio and realistic lighting',
      tech: ['WebGL', 'TypeScript', 'GLSL'],
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      title: 'AI Design Tool',
      description: 'Machine learning-powered design assistant with 3D preview capabilities',
      tech: ['React', 'TensorFlow.js', 'Three.js'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Interactive Dashboard',
      description: 'Real-time data visualization with 3D charts and smooth transitions',
      tech: ['D3.js', 'React', 'WebGL'],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Metaverse Platform',
      description: 'Social VR platform with multiplayer capabilities and custom avatars',
      tech: ['WebXR', 'Socket.io', 'Three.js'],
      gradient: 'from-amber-500 to-red-500',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-purple-500 transition-all">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white/20 rounded-full" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
