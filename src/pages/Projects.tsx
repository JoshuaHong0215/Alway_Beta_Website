import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ProjectItem, ProjectCategory } from '../types';
import { projects as allProjects } from '../data/projects';
import ProjectCard from '../features/project/ProjectCard';
import { filterCategories } from '../config/categories';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  useEffect(() => {
    const category = (searchParams.get('category') as ProjectCategory) || 'all';
    setSelectedCategory(category);
  }, [searchParams]);

  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (category: ProjectCategory) => {
    setSelectedCategory(category);
    navigate(`/projects?category=${category}`);
  };

  const handleProjectClick = (project: ProjectItem) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <section id="projects" className="py-24 bg-dark-bg relative min-h-screen">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[1px] bg-neon-blue"></div>
            <span className="text-neon-blue font-mono text-sm tracking-widest uppercase">My Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Selected <span className="text-gray-500">Projects</span>
          </h2>

          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`text-sm md:text-base px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-neon-blue text-black font-bold shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
            <p className="text-gray-500 text-lg">No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;