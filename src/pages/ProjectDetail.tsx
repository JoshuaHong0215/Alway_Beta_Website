import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Layers, RefreshCw, FileText, Github, AlertTriangle, Wrench, CheckCircle2 } from 'lucide-react';
import { projects as allProjects } from '../data/projects';
import { getProjectImage } from '../utils/imageHelper';
import { RobustImage } from '../components/ui/RobustImage';

const formatText = (text: string) => {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const ProblemSolutionCard: React.FC<{ problem?: string; solution?: string; result?: string }> = ({ problem, solution, result }) => (
  <div className="space-y-4">
    {problem && (
      <div className="flex gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
        <AlertTriangle size={18} className="text-red-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-red-400 mb-1">Problem</p>
          <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{formatText(problem)}</p>
        </div>
      </div>
    )}
    {solution && (
      <div className="flex gap-3 p-4 rounded-xl bg-neon-blue/5 border border-neon-blue/20">
        <Wrench size={18} className="text-neon-blue shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-neon-blue mb-1">Solution</p>
          <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{formatText(solution)}</p>
        </div>
      </div>
    )}
    {result && (
      <div className="flex gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
        <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-green-400 mb-1">Result</p>
          <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{formatText(result)}</p>
        </div>
      </div>
    )}
  </div>
);

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [debugInfo, setDebugInfo] = useState<string>('');
  const [isError, setIsError] = useState(false);
  const [activeTocId, setActiveTocId] = useState<string>('');

  const project = allProjects.find(p => p.id === id);

  const regularSections = project?.sections?.filter(s => !(s.problem || s.solution || s.result)) ?? [];
  const troubleshootingSections = project?.sections?.filter(s => s.problem || s.solution || s.result) ?? [];

  const tocItems = [
    ...regularSections.map((s, i) => ({ id: `section-${i}`, label: s.title })),
    ...(troubleshootingSections.length > 0 ? [{ id: 'troubleshooting', label: '문제 해결 과정' }] : []),
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setDebugInfo('');
    setIsError(false);
  }, [project]);

  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTocId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project?.id]);

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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
        <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-bold mb-8 tracking-tight leading-none">
          {project.title}
        </h1>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mb-12 px-7 py-3.5 border border-white/70 rounded-full text-white hover:border-neon-blue hover:text-neon-blue transition-all duration-300 text-[18px] font-semibold tracking-widest"
          >
            <Github size={20} />
            View on GitHub
          </a>
        )}

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
            {formatText((project.intro || project.description).trim())}
          </div>

          {project.goal && project.goal.length > 0 && (
            <>
              <div className="text-neon-blue font-mono font-semibold tracking-widest text-sm uppercase align-top pt-1">
                GOAL
              </div>
              <ul className="text-gray-300 text-lg leading-relaxed list-disc list-inside space-y-1 font-normal">
                {project.goal.map((g, i) => (
                  <li key={i}>{formatText(g)}</li>
                ))}
              </ul>
            </>
          )}
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

      {project.sections && (
        <>
          {regularSections.map((section, index) => (
        <section key={index} id={`section-${index}`} className="mt-20 lg:mt-28">
          <div className="container mx-auto px-6">

            {section.wide ? (
              /* wide 섹션: 텍스트 위 / 이미지 아래 풀width */
              <div className="flex flex-col gap-6">
                <div className={section.wideText ? '' : 'max-w-3xl'}>
                  <p className="text-neon-blue font-mono text-sm font-semibold mb-3 uppercase tracking-widest">
                    {section.category}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    {section.title}
                  </h2>
                  {section.description.trim() && (
                    <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
                      {formatText(section.description.trim())}
                    </p>
                  )}
                </div>
                <div className="rounded-2xl overflow-hidden w-full">
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
                  {formatText(section.description)}
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
                  <div className={`rounded-2xl overflow-hidden ${
                    section.vertical ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video'
                  }`}>
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

          {troubleshootingSections.length > 0 && (
            <section id="troubleshooting" className="mt-20 lg:mt-28">
              <div className="container mx-auto px-6">
                <p className="text-neon-blue font-mono text-sm font-semibold mb-3 uppercase tracking-widest">
                  Troubleshooting
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
                  문제 해결 과정
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {troubleshootingSections.map((section, i) => (
                    <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                      <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                      <ProblemSolutionCard problem={section.problem} solution={section.solution} result={section.result} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* TOC Sidebar */}
      {tocItems.length > 0 && (
        <nav className="hidden xl:flex flex-col gap-1 fixed right-6 top-1/2 -translate-y-1/2 z-40 max-h-[70vh] overflow-y-auto max-w-[220px]">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left text-sm leading-snug px-3 py-2 rounded-lg truncate transition-colors ${
                activeTocId === item.id
                  ? 'text-neon-blue bg-neon-blue/10 font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
              title={item.label}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}

      {/* Bottom Spacing */}
      <div className="h-32"></div>
    </div>
  );
};

export default ProjectDetail;
