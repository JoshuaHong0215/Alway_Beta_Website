import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Layers, RefreshCw, FileText } from 'lucide-react';
import { projects as allProjects } from '../data/projects';
import { getProjectImage } from '../utils/imageHelper';
import { RobustImage } from '../components/ui/RobustImage';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [debugInfo, setDebugInfo] = useState<string>('');
  const [isError, setIsError] = useState(false);

  const project = allProjects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setDebugInfo('');
    setIsError(false);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-bg pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
          <button 
            onClick={() => navigate('/projects')}
            className="bg-neon-blue text-black px-6 py-3 rounded-lg font-bold hover:bg-cyan-400 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const mainImageUrl = getProjectImage(project, project.image);
  
  const DetailErrorDisplay = () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-white/5 border border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black pointer-events-none"></div>
      
      <div className="z-10 flex flex-col items-center max-w-lg text-center p-8 bg-black/80 backdrop-blur-md rounded-xl border border-red-500/30 shadow-2xl">
        <FileText size={48} className="mb-4 text-neon-blue animate-pulse" />
        <h3 className="text-xl font-bold text-white mb-2">Image Load Failed</h3>
        <p className="text-sm text-gray-300 mb-6">
          Tried multiple path combinations but could not find the file.
        </p>
        
        <div className="text-left text-xs bg-black p-4 rounded border border-white/10 mb-6 font-mono text-gray-400 w-full overflow-x-auto">
            <p className="mb-2 border-b border-gray-700 pb-2">Debug Info:</p>
            <p>Target: <span className="text-green-400">{project.image}</span></p>
            <p>Path: <span className="text-yellow-400">{mainImageUrl}</span></p>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="mt-2 flex items-center justify-center gap-2 px-6 py-3 bg-neon-blue text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors text-sm w-full"
        >
          <RefreshCw size={14} />
          Force Reload
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-dark-bg pt-20 pb-20 animate-fade-in">
      {/* Back Button Area */}
      <div className="container mx-auto px-6 py-6">
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm uppercase tracking-widest">Back to Projects</span>
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
        
        <RobustImage
          src={mainImageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          onFinalError={(path) => {
            setDebugInfo(path);
            setIsError(true);
          }}
          onErrorDisplay={<DetailErrorDisplay />}
        />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full z-20 container mx-auto px-6 pb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-neon-blue/20 text-neon-blue border border-neon-blue/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {project.category.replace('-', ' ')}
              </span>
              <span className="flex items-center gap-1 text-gray-300 text-sm font-mono bg-black/50 px-3 py-1 rounded-full border border-white/10">
                <Calendar size={14} />
                {project.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight shadow-black drop-shadow-lg whitespace-pre-line">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4">Project Overview</h2>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 whitespace-pre-line leading-relaxed">
             {project.content || project.description}
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers size={20} className="text-neon-blue" />
                Project Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => {
                  const galleryUrl = getProjectImage(project, img);
                  
                  return (
                    <div key={idx} className="rounded-xl overflow-hidden border border-white/10 group h-64 bg-black/30 relative">
                      <RobustImage 
                        src={galleryUrl} 
                        alt={`Gallery ${idx}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1">
          <div className="bg-card-bg border border-white/10 rounded-xl p-6 sticky top-24 backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-6">Technical Sheet</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-white/5 hover:bg-neon-blue/10 border border-white/10 hover:border-neon-blue/30 px-3 py-1 rounded text-sm text-gray-300 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Project ID</h4>
                <p className="text-white font-mono">{project.id}</p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <button 
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-neon-blue transition-colors flex items-center justify-center gap-2"
                >
                  Contact about this project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ✅ grid 여기서 닫힘 */}

      {/* 🆕 Tesla Style Sections - grid 밖에 배치 */}
      {project.sections && project.sections.map((section, index) => (
        <div key={index} className="container mx-auto px-6 mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 텍스트 영역 */}
            <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">{section.category}</p>
              <h2 className="text-4xl font-bold text-white mb-6">{section.title}</h2>
              <button className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-black transition-all mb-8">
                Learn More
              </button>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">{section.description}</p>
            </div>

            {/* 이미지 영역 */}
            <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
              <div className="rounded-2xl overflow-hidden">
                <RobustImage
                  src={getProjectImage(project, section.image)}
                  alt={section.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default ProjectDetail;