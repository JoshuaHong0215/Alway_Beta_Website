import { ProjectItem } from '../../../types';

export const yoloIbvsArm: ProjectItem = {
  id: 'yolo-ibvs-arm',
  category: 'robotics',
  title: 'YOLO와 IBVS를 활용한 로봇팔 제어',
  description: '',
  intro: `Detecting성능의 향상과 Network Structure을 구현해보고 싶어 기존 OpenCV의 방식에서 더 나아가 YOLO를 활용한 
  Detecting + IBVS Picking System을 구현하였습니다. 
  비교적 단순한 객체를 대상으로 진행하기에 개발속도, 조건등을 고려할 때 PBVS보다 IBVS가 적합하다고 판단하여 IBVS를 선택하였습니다.
  Roboflow로 커스텀 데이터셋을 구축하고 YOLOv8 모델을 학습시켜 물체를 탐지합니다.
  탐지된 바운딩박스의 중점을 추출하고, IBVS를 통해 카메라 중점과 정렬한 후 TCP를 align하여 하강 및 피킹을 수행합니다.`
  ,

  image: '',
  tags: ['ROS2', 'YOLO', 'IBVS', 'Roboflow'],
  date: '2026. 05 ~ 06',
  
  sections: [
      {
        category: 'Project Process',
        title: 'Pick & Place Process',
        description: `YOLO인식과 Visual Servoing을 Closed Loop로 결합해 픽셀단위 정밀 정렬 기능 구현, 
        하나의 action server에서 task id와 mode분기로 물품별 적재 및 출고 통합처리 시스템을 구현하였습니다.`,
        image: 'yolo_ibvs_process.png',
        wide: true,
        wideText: true
      },

      {
        category: 'Work',
        title: 'task_id, mode 동작영상',
        description: `task id 1 red box, mode 1의 출고 동작 영상입니다`,
        video: 'mode1_출고.mp4'
      },

      {
        category: 'AI Model',
        title: 'Roboflow를 활용한 YOLO 학습 모델 생성',
        description: `학습 데이터셋은 영상 촬영 후 프레임 단위로 쪼개 Labeling을 진행하였습니다.
        또한, Augmentation적용을 통해 빛으로 인한 채도의 변화에도 유연한 대응이 가능했습니다.
        mAP50-95의 수치가 0.995라는 높은 수치를 보였으나 통제 된 환경과 단순한 형태, 뚜렷한 색상대비등 완벽한 여건에서의 학습인 점을 감안해야했습니다. `,
        image: 'detect_object.png'
      },

      {
        category: 'Network',
        title: 'Network Structure',
        description: `AI Server Computer와 Laptop, Robot들을 Tailscale로 묶어 Mesh VPN Network를 
        형성하였습니다`,
        image: 'network_structure.png'
      },

      {
        category: 'Network',
        title: 'Ping Test',
        description: `Jitter가 존재했지만 평균 57ms로 실시간 제어가 가능한 수준이며 패킷손실은 0%로 안정적인 네트워크 환경임을 확인했습니다.`,
        image: 'ping_test.png'
      },

      {
        category: 'Visual Servoing',
        title: 'Servoing Graph를 통한 수렴성 확인',
        description: `본 데이터는 mode 0 입고에서의 실측 데이터로서 초기 +280px이던 e_y 오차가 8회 보정을 거쳐 수렴 범위 내로 진입한 것을 확인할 수 있었습니다. `,
        image: 'servo_convergence.png'
      },
      
      

    ]
};
