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

  goal: [
    'IBVS를 활용한 픽셀 단위 정밀 정렬 및 자동 Pick & Place성능 향상',
    '단일 액션 서버에서 taskid, mode분기로 입,출고 통합 처리 시스템 구축', 
    'Tailscale을 활용하여 AI Server, Robot간 Network Structure 구현'
  ],

  image: 'yolo-ibvs-banner.png',
  
  tags: ['ROS2', 'YOLO', 'IBVS', 'Roboflow', 'jetcobot', 'Tailscale'],
  
  date: '2026. 05 ~ 06',
  
  githubUrl: 'https://github.com/JoshuaHong0215/beep_jetcobot_ros2_yolo',
  
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
        category: 'Project Process',
        title: 'task_id & mode 분기',
        description: `/pick_place 단일 액션에서 task_id * mode = 6가지의 동작을 통합처리합니다.`,
        image: 'taskid_mode.png',
        wide: false,
        wideText: true
      },

      {
        category: 'Work',
        title: '입고 동작',
        description: `yellow box입고 영상입니다
        task_id: 2, mode: 0`,
        video: 'mode0_입고.mp4'
      },

      {
        category: 'Work',
        title: '출고 동작',
        description: `red box출고 영상입니다
        task_id: 1, mode: 1`,
        video: 'mode1_출고.mp4'
      },

    
      {
        category: 'Visual Servoing',
        title: 'Servoing Graph를 통한 수렴성 확인',
        description: `본 데이터는 mode 0 입고에서의 실측 데이터로서 초기 +280px이던 e_y 오차가 8회 보정을 거쳐 수렴 범위 내로 진입한 것을 확인할 수 있었습니다. `,
        image: 'servo_convergence.png'
      },

      {
        category: 'AI Model',
        title: 'Roboflow를 활용한 YOLO 학습 모델 생성',
        description: `학습 데이터셋은 영상 촬영 후 프레임 단위로 쪼개 Labeling을 진행하였습니다.
        초기 모델에서 빛의 변화에 따른 **채도 변화로 인한 인식률 저하가 발생**하여,
        **Augmentation** 기능을 활용해 학습데이터를 증강시켜 모델을 재학습 시킨 결과
        빛으로 인한 채도의 변화에도 유연한 대응이 가능했습니다.
        mAP50-95의 수치가 0.995라는 높은 수치를 보였으나 통제 된 환경과 단순한 형태, 뚜렷한 색상대비등 완벽한 여건에서의 학습인 점을 감안해야했습니다. `,
        image: 'detect_object.png'
      },

      {
        category: 'Network',
        title: 'Network Structure',
        description: `AI Server Computer와 Laptop, Robot들을 **Tailscale**로 묶어 Mesh VPN Network를 
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
        category: 'Troubleshooting',
        title: '조명 변화에 따른 물체 인식률 저하 문제 해결',
        description: '',
        problem: `초기 학습된 Yolo모델에서 빛의 변화에 따른 **채도 변화로 인해 오브젝트 디텍팅 능력이 저하**되는 문제가 발생했습니다.`,
        solution: `**Augmentation** 기능을 적용해 학습 데이터를 증강시키고 모델을 다시 학습시켰습니다.`,
        result: `조명 변화로 인한 채도 변화에도 안정적으로 대응 가능한 모델을 확보했습니다.`,
      },

      {
        category: 'Troubleshooting',
        title: '팀원 감소에 따른 기능 분담 문제',
        description: '',
        problem: `로봇팔의 입고, 출고의 기능을 분담하였으나 팀원 감소로 인해 혼자서 해야하는 문제가 발생했습니다.`,
        solution: `Action server에서 task_id 분기로 다중 물체 식별, mode 분기로 입,출고 기능을 통합하였습니다.`,
        result: `명령어에 task_id, mode 파라미터 조절을 통해 다양한 명령이 가능해졌습니다.`,
      },

      {
        category: 'Troubleshooting',
        title: 'Hand-Eye Calibration 실패',
        description: '',
        problem: `Depth Camera가 없어 정확한 Hand-Eye Calibration Data습득에 실패했습니다.`,
        solution: `Ready pose에서 지면까지의 높이는 고정되어 있음으로 Descending 시 TCP_to_Z값에 Limit를 부여하였습니다.`,
        result: `Gripper가 지면에 부딪히지 않고 안전한 Descending이 가능해졌습니다.`,
      },

      {
        category: 'Troubleshooting',
        title: '좌표제어에서의 모션플래닝 오류',
        description: '',
        problem: `좌표제어에서의 모션이 일정하지 않은 부분을 확인하였습니다. 
        일정한 좌표로 명령을 반복했을 때 위치의 불일치, 모션의 해를 못찾아 뒤틀리는 현상등을 확인했습니다.`,
        solution: `로봇팔의 좌표를 0,0,0,0,0,0으로 보냈을 때 일직선으로 위치해있는게 아닌 휘어있는 것을 확인했고 그에 따라 해를 이상하게 찾는다는 것을 확인했습니다. `,
        result: `수동으로 모든 joint를 영점에 맞춰가며 수동 Calibration진행하여 해결하였습니다.`,
      },

      {
        category: 'Troubleshooting',
        title: 'Visual Servoing 정렬 오차 발생',
        description: '',
        problem: `Visual Servoing 시 객체를 카메라 중앙(320.240)에 맞춰도 카메라 중심과 실제로 매우 어긋나는 정렬 오차가 발생했습니다.`,
        solution: `Camera Calibration file을 다시 확인하여 principal point를 확인했고 실제 중심은 356.7, 195.2에 있음을 확인했습니다.
        따라서, 기준 십자선과 IBVS오차 계산 기준점을 Calibration된 Principal point로 수정했습니다.`,
        result: `정렬 오차의 근본 원인을 제거해 Pickup 정확도를 개선했습니다.`,
      },

    ]
};
