import { ProjectItem } from '../../../types';

export const opencvIbvsArm: ProjectItem = {
  id: 'opencv-ibvs-arm',
  category: 'robotics',
  title: 'OpenCV와 IBVS를 활용한 로봇팔 제어',
  description: '',
  intro: `Jetcobot을 활용하여 IBVS(Image-Based Visual Servoing) 기반 물체 피킹 시스템을 구현하였습니다.
  카메라로 물체를 감지하면 OpenCV Contour를 추출하고 그 중점을 계산합니다.
  IBVS를 통해 카메라 중점과 물체 중점을 정렬한 후 TCP를 align하여 하강 및 피킹을 수행합니다.
`,
  image: '',
  tags: ['ROS2', 'OpenCV', 'IBVS'],
  date: '2026. 05 ~ 06',
  sections: [],
};
