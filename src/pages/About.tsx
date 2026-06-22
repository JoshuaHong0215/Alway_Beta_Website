import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full bg-dark-bg text-white flex flex-col font-sans">

      {/* 1. Header Section */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 pt-16">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 uppercase">
          Always Beta
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-16">
          <span className="border-b-[4px] md:border-b-[6px] border-white pb-2 lg:pb-4 inline-block">
            The Logic of Growth
          </span>
        </h1>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-12 mb-4 break-keep text-gray-300">
          완성에 머무르지 않고
        </h2>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight break-keep text-white">
          <span className="border-b-[4px] md:border-b-[6px] border-white pb-2 lg:pb-4 inline-block">
            언제나 혁신하며 진화합니다
          </span>
        </h2>
      </section>

      {/* 2. Manifesto Section */}
      <section
        className="relative w-full flex flex-col items-center justify-center text-center border-y border-white/5 px-4 md:px-6 py-40 md:py-56 overflow-hidden"
        style={{
          backgroundImage: 'url(/about_image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center calc(50% - 1px)',
        }}
      >
        {/* 어둡게 + 텍스트 가독성 오버레이 */}
        <div className="absolute inset-0 bg-black/55" />


        <div className="relative z-10 text-lg md:text-2xl lg:text-3xl text-gray-300 leading-[2.0] md:leading-[2.2] max-w-4xl font-normal break-keep space-y-12 md:space-y-16">
          <p>
            건축디자인과 도시계획을 하며 물리적인 환경을 다루는 법을 배웠습니다.<br className="hidden md:block"/>
            그러다 우연히 접한 디지털트윈과 스마트시티의 세계는 저를 로보틱스라는 새로운 도전으로 이끌었습니다.
          </p>
          <p>
            공간을 채우는 것을 넘어, 그 안에서 스스로 움직이며 가치를 창출하는 로봇의 가능성에 매료되었고<br className="hidden md:block"/>
            그 분야의 <span className="text-white font-semibold">"일원"</span>이 되고 싶었습니다.
          </p>
          <p>
            익숙한 <span className="text-white font-semibold">"과거"</span>를 내려놓고 로보틱스 엔지니어로의 길을 걷고 있는 지금,<br className="hidden md:block"/>
            저는 어느 때보다 빠르게 성장하고 있습니다.<br className="hidden md:block"/>
            시대의 흐름에 뒤쳐지지 않고, 기술로 일상을 개선하는 실질적인 결과물을 만드는 개발자가 되고자 합니다.
          </p>
        </div>
      </section>

      {/* 3. Skills Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center tracking-tight">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full">
            <div className="flex flex-col">
              <h3 className="text-[22px] font-semibold mb-4 uppercase tracking-widest text-neon-blue font-mono">
                Development
              </h3>
              <div className="w-full h-px bg-white/20 mb-6"></div>
              <ul className="text-gray-400 text-lg md:text-xl space-y-3">
                <li>Python</li>
                <li>C++</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[22px] font-semibold mb-4 uppercase tracking-widest text-neon-blue font-mono">
                Robotics
              </h3>
              <div className="w-full h-px bg-white/20 mb-6"></div>
              <ul className="text-gray-400 text-lg md:text-xl space-y-3">
                <li>ROS2</li>
                <li>Isaac Sim</li>
                <li>MoveIt2</li>
                <li>Nav2</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[22px] font-semibold mb-4 uppercase tracking-widest text-neon-blue font-mono">
                AI & Computer Vision
              </h3>
              <div className="w-full h-px bg-white/20 mb-6"></div>
              <ul className="text-gray-400 text-lg md:text-xl space-y-3">
                <li>YOLO</li>
                <li>OpenCV</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[22px] font-semibold mb-4 uppercase tracking-widest text-neon-blue font-mono">
                3D Modeling & Planning
              </h3>
              <div className="w-full h-px bg-white/20 mb-6"></div>
              <ul className="text-gray-400 text-lg md:text-xl space-y-3">
                <li>SketchUp</li>
                <li>Blender</li>
                <li>AutoCAD</li>
                <li>QGIS</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[22px] font-semibold mb-4 uppercase tracking-widest text-neon-blue font-mono">
                Graphic Design
              </h3>
              <div className="w-full h-px bg-white/20 mb-6"></div>
              <ul className="text-gray-400 text-lg md:text-xl space-y-3">
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
