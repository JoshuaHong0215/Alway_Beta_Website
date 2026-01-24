import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen overflow-hidden bg-dark-bg">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-J8uP5EKK0TIjSaKBDQZy357i/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="Spline 3D Robot"
        ></iframe>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center px-6 md:px-20 container mx-auto">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block px-3 py-1 border border-neon-blue/30 rounded-full bg-neon-blue/10 backdrop-blur-sm animate-fade-in">
            <span className="text-neon-blue text-xs font-mono tracking-widest uppercase">
              System Online
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white animate-slide-up">
            WELCOME TO <br />
            <span className="text-black bg-gradient-to-r from-neon-blue to-purple-500 px-3 rounded-lg inline-block mt-2">
              MY WORK
            </span>
          </h1>
          
          <p className="text-gray-100 text-lg md:text-xl max-w-lg leading-relaxed animate-slide-up [animation-delay:200ms]">
            끊임없이 배우고 갈망하는 예비 개발자입니다
            <br/>
            수도권 4년제 대학에서 환경디자인을 전공하였고 경관 및 건축디자인과 
            <br/>
            도시계획회사에서 재직하다가
            <br/>
            현재는 로보틱스 개발자를 꿈꾸며 성장하고 있습니다.
          </p>

          <div className="pt-4 animate-slide-up [animation-delay:400ms] pointer-events-auto">
            <button 
              onClick={() => navigate('/projects')}
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neon-blue hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Explore Works
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce pointer-events-none opacity-50">
        <ArrowDown className="text-white" size={32} />
      </div>

      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-0 pointer-events-none"></div>
    </section>
  );
};

export default Home;
