import React from "react";
import { Code, Cpu, Layers, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h1>
          <p className="text-xl text-gray-400">
            급변하는 세상속에서 끊임없이 배우고 도전하는 개발자 입니다
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-semibold mb-6">Who I Am</h2>
          
          <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-wrap">       
            건축디자인과 도시계획을 하며 물리적인 환경을 다루는 법을 배웠습니다.
            <br/>
            그러다 우연이 접한 디지털 트윈과 스마트 시티의 세계는 저를 로보틱스라는 새로운 도전으로 이끌었습니다.
            <br/>
            공간을 채우는 것을 넘어, 그 안에서 스스로 움직이며 가치를 창출하는 로봇의 가능성에 매료되었고
            <br/>
            그 분야의 "일원"이 되고싶었습니다.
          </p>

          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            익숙한 "과거"를 내려놓고 로보틱스 엔지니어로서의 길을 걷고 있는 지금, 
            <br/>
            저는 어느 때보다 빠르게 성장하고 있습니다.
            <br/>
            시대의 흐름에 뒤쳐지지 않고, 기술로 일상을 개선하는 실질적인 결과물을 만드는 개발자가 되고자 합니다.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-blue-400" size={32} />
              <h3 className="text-2xl font-semibold">Development</h3>
            </div>
            <p className="text-gray-300">
              Python
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-blue-400" size={32} />
              <h3 className="text-2xl font-semibold">Robotics</h3>
            </div>
            <p className="text-gray-300">
              ROS2, NVIDIA Isaac Sim
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-blue-400" size={32} />
              <h3 className="text-2xl font-semibold">3D Modeling & Planning</h3>
            </div>
            <p className="text-gray-300">
              Sketchup / Blender / Unreal Engine  <br />
              Auto CAD / QGIS
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-blue-400" size={32} />
              <h3 className="text-2xl font-semibold">Graphic Design</h3>
            </div>
            <p className="text-gray-300">
              Photoshop / Illustrator
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-semibold mb-2">
                City Planner
              </h3>
              <p className="text-gray-400 mb-2">Taein L&D • 2023 - 2024</p>
              <p className="text-gray-300">
                광역 도시 설계도 기반의 3D Modeling 및 도시계획 시뮬레이션을 수행하였으며, <br />
                외부 협력사와의 원활한 조율과 공정관리를 통해 대규모 프로젝트를 성공적으로 수행했습니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-semibold mb-2">Architecture & CityScape Designer</h3>
              <p className="text-gray-400 mb-2">Wangsan Planners • 2022 - 2023</p>
              <p className="text-gray-300">
                사업 대상지 분석 및 건축 설계도 기반 3D Modeling작업을 수행하였으며, <br />
                그 기반으로 준공 후 영향분석, 평가 업무를 담당했습니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-semibold mb-2">Architecture & CityScape Designer</h3>
              <p className="text-gray-400 mb-2">Design Moon • 2021</p>
              <p className="text-gray-300">
                사업 대상지 분석 및 건축 설계도 기반 3D Modeling작업을 수행하였으며, <br />
                아파트 외벽 디자인을 진행하며 아파트단지 개발사업에 참여한 경험이 있습니다. <br />
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-semibold mb-2">Incheon Catholic University</h3>
              <p className="text-gray-400 mb-2">환경디자인학과</p>
              <p className="text-gray-300">
                환경디자인 전공으로서 다양한 공간, 도시, 외부공공 공간 등 다양한 공간기획과 설계이론을 수학하였으며, <br />
                다양한 툴을 활용한 3D 시각화 및 시뮬레이션 역량을 쌓았습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;