import { ProjectItem } from '../../../types';

export const gaussianSplattingIsaacSim: ProjectItem = {
  id: 'gaussian-splatting-isaac-sim',

  category: 'robotics',

  title: 'Gaussian Splatting to Isaac Sim',

  description: 'jpg기반 3D환경 구성',

  intro: `Jpg기반 3D 재구성 기술을 활용해 실제 공간을 사실적인 3D Scene으로 재현하고, 이를 Isaac Sim환경에 셋팅,
  향후 직접 영상촬영 및 학습을 진행하여 3D환경 복원을 목표로 합니다`,

  goal: [
    'Dataset 수집 및 전처리 경험 습득',
    'Jpg기반 3D 재구성 및 Isaac Sim 통합 파이프라인 핵심 개념 실습',
  ],

  image: 'gaussian_banner.png',

  tags: ['Isaac Sim', 'Colmap', '3Dgrut'],

  date: '2026.07.11',

  githubUrl: '',

  sections: [
    {
      category: 'Demo',
      title: '3D 복원결과',
      description: `Gaussian Splatting으로 복원한 Garden Scene을 Isaac Sim으로 Import한 후 
      Camera View로 이동하며 촬영한 영상입니다.`,
      video: 'recording.mp4',
      wide: true
    },










    // {
    //   category: 'Troubleshooting',
    //   title: 'colmap 학습 시간의 장기화',
    //   description: '',
    //   problem: `5시간이 넘게 학습을 진행함에도 끝나지 않는 학습`,
    //   solution: `학습 이미지가 불필요하게 많다는 판단하에 overfitting의 가능성을 두고 기존 1106장의 학습이미지에서 4프레임당 한 장으로 축약하여 276장으로 줄여서 학습을 진행하였습니다.`,
    //   result: `총 학습시간 8.281분 소요, Final cost: 0.660232[px](1px 미만이면 양호한 수준)으로 안정적인 모델을 습득하였습니다.`,
    // },
  ]




};
