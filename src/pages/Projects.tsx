import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Lock, X } from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types';
import { projects as allProjects } from '../data/projects';
import ProjectCard from '../features/project/ProjectCard';
import { filterCategories } from '../config/categories';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [lockedProject, setLockedProject] = useState<ProjectItem | null>(null);

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
    if (project.locked) {
      setLockedProject(project);
    } else {
      navigate(`/projects/${project.id}`);
    }
  };

  return (
    <>
    {/* Access Restricted Modal */}
    {lockedProject && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={() => setLockedProject(null)}
      >
        <div
          className="relative bg-[#111111] border border-red-500/50 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-[0_0_60px_rgba(239,68,68,0.25)]"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={() => setLockedProject(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col items-center text-center gap-5">
            <div className="bg-red-500/20 border border-red-500/50 rounded-full p-5">
              <Lock size={32} className="text-red-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold text-xl">Access Restricted</h3>
              <p className="text-sm text-red-400 font-mono uppercase tracking-widest">
                {lockedProject.title.replace(/\n/g, ' ')}
              </p>
              <p className="text-gray-200 text-sm leading-relaxed pt-2">
                {lockedProject.lockedReason ?? 'This project is currently restricted from public access due to security or confidentiality requirements.'}
              </p>
            </div>
            <button
              onClick={() => setLockedProject(null)}
              className="mt-1 px-8 py-2.5 rounded-full bg-red-500/10 border border-red-500/40 text-sm text-red-300 hover:bg-red-500/20 hover:text-white hover:border-red-500/70 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}

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
    </>
  );
};

export default Projects;