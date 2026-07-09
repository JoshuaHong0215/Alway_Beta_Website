import { ProjectItem } from '../../../types';

export const opencvIbvsArm: ProjectItem = {
  id: 'opencv-ibvs-arm',
  
  category: 'robotics',
  
  title: 'OpenCV와 IBVS를 활용한 로봇팔 제어',
  
  description: 'Addinedu, PinkLAB 팀프로젝트에서 로봇팔 피킹 파이프라인을 담당',
  
  intro: `Addinedu · PinkLAB 팀프로젝트에서 개발된 Silver Town Robot Assistant의 일부입니다.

  전체 시스템은 Open-RMF 기반 로봇 통합 제어, 
  AMR 자율주행 및 Hand-Gesture 제어, 
  Robot Arm Pick & Place 세 영역으로 구성되어있습니다.

  담당 파트에서는 Jetcobot에 IBVS 기반 물체 피킹 시스템을 구현했습니다.
  비교적 단순한 객체를 대상으로 진행하기에 개발속도, 조건등을 고려할 때 PBVS보다 IBVS가 적합하다고 판단하여 IBVS를 선택하였습니다
  카메라로 물체를 감지하면 OpenCV Contour를 추출해 중점을 계산하고, IBVS 폐루프 제어로 카메라 중점과 물체 중점을 픽셀 단위로 정렬합니다.
  정렬 완료 후 TCP align, 하강, 그립까지 이어지는 자동 피킹 시퀀스를 완성했습니다.

  개발 영역: Open-RMF를 활용한 로봇 통합 제어 시스템, AMR을 활용한 자율주행 및 Hand-Gesture제어, Robot Arm을 활용한 Pick & Place

  **담당 영역: Robot Arm을 활용한 Pick & Place**`,

  goal: [
    'OpenCV Contour 기반 물체 인식과 IBVS 폐루프 제어를 결합한 자동 피킹 시스템 구현',
    '픽셀 오차를 로봇 좌표로 변환하는 IBVS 알고리즘 설계 및 구현', 
    'ROS2 기반 카메라-로봇 통신 구조 설계 및 실시간 제어 시스템 경험 습득'
  ],

  image: '',
  
  tags: ['ROS2', 'OpenCV', 'IBVS', 'Jetcobot'],
  
  date: '2026. 04 ~ 05',
  
  githubUrl: 'https://github.com/JoshuaHong0215/beep_jetcobot_ros2_opencv',
  
  sections: [
    {
        category: 'Work',
        title: 'Picking동작_01',
        description: `OpenCV Contour로 물체 중점을 추출하고 IBVS로 정렬 후 하강하여 피킹하는 동작입니다.
        모션 제어는 **Elephant Robotics에서 제공하는 API를 활용**했습니다.`,
        video: 'opencv_ibvs_01.mp4',
        vertical: true
      },

      {
        category: 'Work',
        title: 'Picking동작_02',
        description: `다른 각도/위치에서의 피킹 동작입니다.`,
        video: 'opencv_ibvs_02.mp4',
        vertical: true
      },



      {
        category: 'Troubleshooting',
        title: 'Visual Servoing 정렬 오차 발생',
        image: 'crossline.png',
        description: '',
        problem: `Visual Servoing 시 객체를 카메라 중앙(320.240)에 맞춰도 카메라 중심과 실제로 매우 어긋나는 정렬 오차가 발생했습니다.`,
        solution: `Camera Calibration file을 다시 확인하여 principal point를 확인했고 실제 중심은 356.7, 195.2에 있음을 확인했습니다.
        따라서, 기준 십자선과 IBVS오차 계산 기준점을 Calibration된 Principal point로 수정했습니다.`,
        result: `정렬 오차의 근본 원인을 제거해 Pickup 정확도를 개선했습니다.`,
      },

      {
        category: 'Troubleshooting',
        title: 'Object Detecting능력 저하',
        description: '',
        problem: `Object가 감지됐다 안됐다하는 증상이 반복적으로 발생했습니다.`,
        solution: `실습실 불을 끄고 동작 시킨 결과 증상이 완화된걸로 봐서 실제 환경 조명변화에 
        취약하다고 판단하였고 기존 단조로운 Detecting에서 나아가 다양한 조건의 Detecting을 위해 YOLO Detecting으로 전환하였습니다.`,
        result: `OpenCV대비 Detecting능력 대폭 상승하였습니다. 
        자세한 내용은 YOLO와 IBVS를 활용한 로봇팔 제어에서 확인할 수 있습니다.`,
      },




  ],
};
