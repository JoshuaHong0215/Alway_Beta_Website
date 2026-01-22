import { ProjectItem } from "../../../types";

export const smallWarehouseControl: ProjectItem = {
    id: 'smallWarehouseControl',
    category: 'robotics',
    title: '소규모 물류창고 관제시스템',
    description: 'IsaacSIM을 활용한 서버와의 관제시스템 구축 및 하드웨어 결함 분석',
    content: `
      본 프로젝트는 물리적 실습환경의 제약을 극복하고 확장성을 검증하기 위해 실제 환경 기반의 시뮬레이션 환경을 구축했습니다
      3D modeling program으로 실물 turtlebot의 운용환경을 구현하였고 Isaacsim으로 실물 로봇과 시뮬레이션 로봇에서의 데이터 차이를 확인하였습니다
     
      시뮬레이션의 장점이 극대화 되려면 비교적 간단한 Turtlebot이 아니라 더 크고 복잡한 로봇까지 다뤘어야 그 의미가 있었겠지만
      주어진 시간이 별로 없어 시도하지 못했던게 큰 아쉬움으로 남는 프로젝트입니다
      
    `,
    // 원래대로 복구 완료. public 폴더에 drone.jpeg 없으면 에러 화면 뜸.
    image: 'spotResize.png', 
    gallery: [                  
      
    ],
    tags: ['ROS2', 'Burger', 'Isaac Sim', 'Isaac Lab', 'Skethcup'], 
    date: '2025. 11. 27',

    sections: [
      {
        category: 'FloorPlan',
        title: '실제 운용 환경',
        description: `실물 Turtlebot이 서버랑 관제역할을 수행했던 운용환경임`,
        image: 'classroom.jpg'
      },

      {
        category: '',
        title: '평면도 제작',
        description: `실제 로봇의 운용환경을 실측하여 평면도를 만들고 그 기반으로 3D Modeling을 진행하여
        환경을 구성하였음`,
        image: 'floorplan.png'  
      },

      
      
      {
        category: '3D Modeling',
        title: 'Isaacsim Import',
        description: `Sketchup을 이용해 모델링을 진행하고 fbx로 export 후 Isaacsim내에서 USD로 변환 후 Import하였음
        후에 Physics특성을 활성화하여 물리적 특성을 부여하였음  `,
        image: 'simclassroom.png'
      },
      
      {
        category: 'Structure',
        title: '세부 구현',
        description: `시뮬레이션 내부의 Turtlebot 셋팅을 위하여 실물 Turtlebot의 TF구조를 확인하면서 정적,동적TF관계 등의 특성을 이해하였고 
        그 특성을 토대로 실제 Turtlebot의 TF 구조를 구성하였음.
        
        뿐만 아니라, Burger에서 사용중인 LDS-01 LiDAR Spec과 동일한 HorizontalFOV, HorizontalResolution, Min,MaxRange등의 세부 특성도
        동일하게 구성하였음`,
        image: 'simburgerTF.png'
      },
    ]
}