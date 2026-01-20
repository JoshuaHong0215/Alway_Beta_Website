import React from 'react';
import { ExternalLink, ImageOff } from 'lucide-react';
import { ProjectItem } from '../../types';
import { getProjectImage } from '../../utils/imageHelper';
import { RobustImage } from '../../components/ui/RobustImage';
import { categoryIcons } from '../../config/categories';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const imageUrl = getProjectImage(project, project.image);
  const Icon = project.category !== 'all' ? categoryIcons[project.category] : null;

  // 리스트용 커스텀 에러 화면
  const ListErrorDisplay = () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 border-2 border-dashed border-gray-800 p-4 text-center">
      <ImageOff size={24} className="mb-2 opacity-50" />
      <span className="text-xs font-mono text-red-400 font-bold">Image Not Found</span>
      <span className="text-[10px] text-gray-500 mt-1">Check: public{imageUrl}</span>
    </div>
  );

  return (
    <div 
      onClick={() => onClick(project)}
      className="group relative bg-card-bg border border-white/10 rounded-xl overflow-hidden hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] flex flex-col animate-slide-up cursor-pointer"
    >
      {/* Cover Image */}
      <div className="h-48 overflow-hidden relative bg-black/40">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        
        <RobustImage 
          src={imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          onErrorDisplay={<ListErrorDisplay />}
        />

        {/* Date badge */}
        <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-300 font-mono border border-white/10">
          {project.date}
        </div>
        {/* Category Badge */}
        <div className="absolute bottom-3 left-3 z-20 bg-neon-blue/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-neon-blue font-bold border border-neon-blue/30 uppercase tracking-wider">
          {project.category.replace('-', ' ')}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title Row with Icon */}
        <div className="flex items-center gap-2 mb-3">
          {Icon && <Icon size={18} className="text-neon-blue" />}
          
          <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors whitespace-pre-line">
            {project.title}
          </h3>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Footer / Link */}
        <div className="mt-auto border-t border-white/5 pt-4 flex justify-between items-center">
          <span className="text-xs text-gray-500 font-mono group-hover:text-neon-blue transition-colors">View Project Details</span>
          <ExternalLink size={16} className="text-gray-500 group-hover:text-neon-blue transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
