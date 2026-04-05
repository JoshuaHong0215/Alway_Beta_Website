import { ProjectItem } from '../../../types';

export const spotATSSystem: ProjectItem = {
    id: 'Spot-ATS-System',
    category: 'robotics',
    title: '[업데이트 예정] Spot + ATS System을\n 결합한 자율주행 정찰 로봇',
    description: 'ROS2 기반으로 정찰하는 드론입니다.',
    content: `
      Isaac Sim을 활용하여 Spot과 ATS System을 결합한 후
      Isaac Lab을 활용하여 강화학습을 진행하였습니다

      기존 Navigation을 사용하여 자율주행 및 정찰임무를 수행하는것에 그치지 않고
      자연어로 명령하면 수행할 수 있도록 LLM설계를 진행하여 폭넓은 운용환경을 구축하였습니다.
    `,
    // 원래대로 복구 완료. public 폴더에 drone.jpeg 없으면 에러 화면 뜸.
    image: 'spotResize.png', 
    gallery: [                  
      'drone02.jpg', 
      'view2.png'
    ],
    tags: ['ROS2', 'SPOT', 'ATS', 'Isaac Sim', 'Isaac Lab', 'LLM'], 
    date: '2026. 02. 02',
}