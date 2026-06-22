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

      {/* Custom Header (Matching Image) */}
      <div className="container mx-auto px-6 pt-12 pb-24 border-b border-white/5">
        <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-bold mb-12 tracking-tight leading-none">
          {project.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-y-10 lg:gap-y-12">
          <div className="text-neon-blue font-mono font-semibold tracking-widest text-sm uppercase align-top pt-1">
            CATEGORY
          </div>
          <div className="text-gray-300 text-lg font-normal tracking-wide uppercase">
            {project.category.replace('-', ' ')}
          </div>

          {project.date && (
            <>
              <div className="text-neon-blue font-mono font-semibold tracking-widest text-sm uppercase align-top pt-1">
                DATE
              </div>
              <div className="text-gray-300 text-lg font-normal tracking-wide uppercase">
                {project.date}
              </div>
            </>
          )}

          <div className="text-neon-blue font-mono font-semibold tracking-widest text-sm uppercase align-top pt-2">
            TAG
          </div>
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="border border-neon-blue/50 text-neon-blue px-4 py-1.5 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="text-neon-blue font-mono font-semibold tracking-widest text-sm uppercase align-top pt-1">
            INTRO
          </div>
          <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line max-w-5xl font-normal">
            {(project.intro || project.description).trim()}
          </div>
        </div>
      </div>

      {/* Main Image Banner (if no sections provided, show it here) */}
      {!project.sections && (
        <div className="w-full h-auto mt-12 bg-black/40">
          <RobustImage
            src={mainImageUrl}
            alt={project.title}
            className="w-full h-auto object-cover"
            onFinalError={(path) => {
              setDebugInfo(path);
              setIsError(true);
            }}
            onErrorDisplay={<DetailErrorDisplay />}
          />
        </div>
      )}

      {/* Gallery (Fallback if plain project) */}
      {!project.sections && project.gallery && project.gallery.length > 0 && (
        <div className="container mx-auto px-6 mt-24">
          <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-2 border-b border-white/10 pb-6">
            <Layers size={24} className="text-[#00ff66]" />
            Project Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((img, idx) => {
              const galleryUrl = getProjectImage(project, img);
              return (
                <div key={idx} className="rounded-2xl overflow-hidden bg-black/30 group">
                  <RobustImage 
                    src={galleryUrl} 
                    alt={`Gallery ${idx}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {project.sections && project.sections.map((section, index) => (
        <section key={index} className="mt-20 lg:mt-28">
          <div className="container mx-auto px-6">

            {section.wide ? (
              /* wide 섹션: 텍스트 위 / 이미지 아래 풀width */
              <div className="flex flex-col gap-6">
                <div className="max-w-3xl">
                  <p className="text-neon-blue font-mono text-sm font-semibold mb-3 uppercase tracking-widest">
                    {section.category}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    {section.title}
                  </h2>
                  {section.description.trim() && (
                    <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
                      {section.description.trim()}
                    </p>
                  )}
                </div>
                <div className="rounded-2xl overflow-hidden w-4/5 mr-auto" style={{aspectRatio: '720/203'}}>
                  <RobustImage
                    src={getProjectImage(project, section.image as string)}
                    alt={section.title}
                    className="w-full h-full object-cover"
                    style={{objectPosition: 'center 49.9%'}}
                  />
                </div>
              </div>
            ) : (
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>

              {/* 텍스트 영역 */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <p className="text-neon-blue font-mono text-sm font-semibold mb-3 uppercase tracking-widest">
                  {section.category}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  {section.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
                  {section.description}
                </p>
              </div>

              {/* 미디어 영역 */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                {section.youtubeId ? (
                  <div className="rounded-2xl overflow-hidden aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${section.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${section.youtubeId}&controls=0&rel=0`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      style={{ pointerEvents: 'none' }}
                      title={section.title}
                    />
                  </div>
                ) : section.video ? (
                  <div className="rounded-2xl overflow-hidden aspect-video">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      src={getProjectImage(project, section.video)}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : Array.isArray(section.image) ? (
                  <div className={`grid gap-3 ${
                    section.image.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                  }`}>
                    {(section.image as string[]).map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`rounded-xl overflow-hidden aspect-[4/3] bg-[#111] ${
                          (section.image as string[]).length === 3 && imgIndex === 2 ? 'col-span-2' : ''
                        }`}
                      >
                        <RobustImage
                          src={getProjectImage(project, img)}
                          alt={`${section.title} ${imgIndex + 1}`}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                ) : section.image ? (
                  <div className="rounded-2xl overflow-hidden aspect-video bg-[#111]">
                    <RobustImage
                      src={getProjectImage(project, section.image)}
                      alt={section.title}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ) : null}
              </div>
            </div>
            )}
          </div>
        </section>
      ))}

      {/* Bottom Spacing */}
      <div className="h-32"></div>
    </div>
  );
};

export default ProjectDetail;
