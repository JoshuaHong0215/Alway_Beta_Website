import React from 'react';
import { ExternalLink, ImageOff, Lock } from 'lucide-react';
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

  const isLocked = project.locked === true;

  return (
    <div
      onClick={() => onClick(project)}
      className={`group relative bg-card-bg border rounded-xl overflow-hidden transition-all duration-300 flex flex-col animate-slide-up cursor-pointer ${
        isLocked
          ? 'border-white/5 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.08)] opacity-75 hover:opacity-90'
          : 'border-white/10 hover:border-neon-blue/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)]'
      }`}
    >
      {/* Cover Image */}
      <div className="h-48 overflow-hidden relative bg-black/40">
        <div className={`absolute inset-0 transition-colors z-10 ${isLocked ? 'bg-black/50' : 'bg-black/20 group-hover:bg-transparent'}`} />

        <RobustImage
          src={imageUrl}
          alt={project.title}
          className={`w-full h-full object-cover transform transition-transform duration-500 ${isLocked ? 'grayscale' : 'group-hover:scale-105'}`}
          onErrorDisplay={<ListErrorDisplay />}
        />

        {/* Lock overlay */}
        {isLocked && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2">
            <div className="bg-black/70 backdrop-blur-sm rounded-full p-3 border border-red-500/40">
              <Lock size={22} className="text-red-400" />
            </div>
            <span className="text-[10px] font-mono text-red-400/80 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded">
              Restricted
            </span>
          </div>
        )}

        {/* Date badge */}
        <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-300 font-mono border border-white/10">
          {project.date}
        </div>
        {/* Category Badge */}
        <div className={`absolute bottom-3 left-3 z-20 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold border uppercase tracking-wider ${
          isLocked
            ? 'bg-red-500/10 text-red-400/70 border-red-500/20'
            : 'bg-neon-blue/20 text-neon-blue border-neon-blue/30'
        }`}>
          {project.category.replace('-', ' ')}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title Row with Icon */}
        <div className="flex items-center gap-2 mb-3">
          {Icon && <Icon size={18} className={isLocked ? 'text-gray-500' : 'text-neon-blue'} />}

          <h3 className={`text-xl font-bold whitespace-pre-line transition-colors ${
            isLocked ? 'text-gray-400 group-hover:text-gray-300' : 'text-white group-hover:text-neon-blue'
          }`}>
            {project.title}
          </h3>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(project.tags ?? []).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-neon-blue/20 border border-neon-blue/40 text-xs text-neon-blue font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 flex-1 line-clamp-3 ${isLocked ? 'text-gray-600' : 'text-gray-400'}`}>
          {isLocked ? project.lockedReason ?? 'This project is currently restricted from public access.' : project.description}
        </p>

        {/* Footer / Link */}
        <div className="mt-auto border-t border-white/5 pt-4 flex justify-between items-center">
          {isLocked ? (
            <>
              <span className="text-xs text-red-500/60 font-mono flex items-center gap-1.5">
                <Lock size={11} /> Access Restricted
              </span>
              <Lock size={14} className="text-red-500/40" />
            </>
          ) : (
            <>
              <span className="text-xs text-gray-500 font-mono group-hover:text-neon-blue transition-colors">View Project Details</span>
              <ExternalLink size={16} className="text-gray-500 group-hover:text-neon-blue transition-colors" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
