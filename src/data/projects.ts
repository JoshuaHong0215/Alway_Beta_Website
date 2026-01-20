import { ProjectItem } from '../types';

/**
 * [프로젝트 관리 가이드]
 * 1. public/projects/[카테고리]/[프로젝트ID]/ 폴더를 만듭니다.
 * 2. 그 안에 이미지 파일(예: main.jpg)을 넣습니다.
 * 3. 아래 리스트에 프로젝트 정보를 추가합니다. 
 *    image 필드에는 파일명('main.jpg')만 적으면 됩니다.
 */

export const projects: ProjectItem[] = [
  // --- Architecture Projects ---
  {
    id: 'local-demo-arch',
    category: 'architecture',
    title: 'Architecture Folder Demo',
    description: 'Folder structure demo. Put images in /projects/architecture/local-demo-arch/',
    content: `
      This shows the new efficient folder structure.
      Instead of complex imports, just place your file in:
      /projects/architecture/local-demo-arch/demo.svg
    `,
    image: 'demo.svg', // 자동으로 /projects/architecture/local-demo-arch/demo.svg 로 변환됨
    tags: ['Guide', 'Architecture', 'Structure'],
    date: '2024. Today',
  },
  {
    id: 'eco-pavilion',
    category: 'architecture',
    title: 'Eco-Friendly Pavilion',
    description: 'A sustainable pavilion design focusing on natural light integration and recycled materials.',
    content: `
      This project represents a paradigm shift in sustainable architecture. 
      The Eco-Friendly Pavilion was designed for the 2024 International Expo with a focus on zero-carbon footprint construction.
    `,
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop',
    tags: ['Architecture', 'Sustainable', 'Concept'],
    date: '2023. 11. 10',
  },
  {
    id: 'cliff-house',
    category: 'architecture',
    title: 'Minimalist Cliff House',
    description: 'Residential design concept suspended on a cliffside, maximizing ocean views.',
    image: 'https://images.unsplash.com/photo-1493307502123-28c0db1b9201?q=80&w=2070&auto=format&fit=crop',
    tags: ['Residential', 'Concept', 'Luxury'],
    date: '2024. 01. 05',
  },

  // --- City Plan Projects ---
  {
    id: 'goksung-windpower',
    category: 'city-plan',
    title: '곡성 풍력 발전단지',
    description: '곡성 풍력 발전단지',
    content: `
    Qgis와 AutoCAD로 Terrain제작 후
    Sketchup으로 Modeling, UnrealEngine에서 PCG설계를 추가하여
    자연스러운 3D Analysis 구축
    `,
    image: 'goksung01.png',
    tags: ['City Plan', 'UnrealEngine', 'Sketchup', 'AutoCAD', 'QGIS'],
    gallery: [
      'goksungCAD.png',
      'goksungPCG.png',
      'goksung02.png',
      'goksung03.png',
    ],
    date: '2024. Today',

    sections: [
      {
        category: 'Convenience',
        title: '공사도면 및 지형정보 확인',
        description: `공사평면도와 국토지리정보원도면과 더블체크 이후 QGIS로 지형정보 정제`,
        image: 'goksungCAD.png'  
      },

      {
        category: 'PCG Design',
        title: 'PCG 디자인',
        description: `PCG 설계를 통하여 넓은 환경에 고퀄리티 Asset을 효율적으로 배치하였음
        PCG 설계를 통하여 저용량, 고효율의 작업성을 확보하였음`,
        image: 'goksungPCG.png'
      },
      
      {
        category: 'Final Output',
        title: 'PCG설계를 활용하여 사실에 기반한 3D Analysis',
        description: `PCG 설계를 통하여 넓은 환경에 고퀄리티 Asset을 효율적으로 배치하였음
        PCG 설계를 통하여 저용량, 고효율의 작업성을 확보하였음`,
        image: 'goksung02.png'
      }  
    ]
  }, 

  {
    id: 'PoHang-Hakjeon-District',
    category: 'city-plan',
    title: '포항 학전지구 도시개발 사업',
    description: '포항 학전지구 도시개발 사업',
    content: `위치: 경상북도 포항시 남구 연일읍 학전리 일원
    대지면적: 1,655,959㎡
    세대수 : 11,910세대`,
    image: 'Hakjeon01.jpeg',
    tags: ['Urban Planning', 'Sketchup', 'AutoCAD', 'QGIS'],
    date: '2024. 02. 15',
  },
  {
    id: 'neo-tokyo',
    category: 'city-plan',
    title: 'Neo-Tokyo District 9',
    description: 'Revitalization of industrial zones into mixed-use cultural hubs.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop',
    tags: ['Regeneration', 'Public Space'],
    date: '2024. 03. 22',
  },

  // --- Robotics Projects ---
  {
    id: 'local-demo-robo',
    category: 'robotics',
    title: 'Robotics Folder Demo',
    description: 'Images located in /projects/robotics/local-demo-robo/',
    image: 'demo.svg',
    tags: ['Guide', 'Robotics'],
    date: '2024. Today',
  },
  {
    id: 'nexbot-unit',
    category: 'robotics',
    title: 'NexBot: Autonomous Unit',
    description: 'Development of a quadruped robot capable of traversing rough terrain for rescue missions.',
    content: `
      NexBot is designed for disaster relief in environments too dangerous for humans.
      Using LiDAR and depth cameras, it creates real-time 3D maps of its surroundings.
    `,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    tags: ['Robotics', 'ROS2', 'Engineering'],
    date: '2024. 05. 21',
    gallery: [
       'https://images.unsplash.com/photo-1535378437323-9555f3e7f5bb?q=80&w=2000&auto=format&fit=crop',
       'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'Spot-ATS-System',
    category: 'robotics',
    title: 'Spot + ATS System을 결합한\n자율주행 정찰 로봇',
    description: 'ROS2 기반으로 정찰하는 드론입니다.',
    content: `
      Isaac Sim을 활용하여 Spot과 ATS System을 결합한 후
      Isaac Lab을 활용하여 강화학습을 진행하였습니다

      기존 Navigation을 사용하여 자율주행 및 정찰임무를 수행하는것에 그치지 않고
      자연어로 명령하면 수행할 수 있도록 LLM설계를 진행하여 폭넓은 운용환경을 구축하였습니다
    `,
    // 원래대로 복구 완료. public 폴더에 drone.jpeg 없으면 에러 화면 뜸.
    image: 'spotResize.png', 
    gallery: [                  
      'drone02.jpg', 
      'view2.png'
    ],
    tags: ['ROS2', 'SPOT', 'ATS', 'Isaac Sim', 'Isaac Lab', 'LLM'], 
    date: '2025. Today',
  },

  {
    id: 'smart-arm',
    category: 'robotics',
    title: 'Smart Arm Manipulator',
    description: '6-DOF robotic arm with computer vision for precise assembly tasks.',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1974&auto=format&fit=crop',
    tags: ['Automation', 'Python', 'OpenCV'],
    date: '2024. 06. 10',
  }
];