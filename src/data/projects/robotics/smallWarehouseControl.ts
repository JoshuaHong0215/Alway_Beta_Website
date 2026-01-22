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

      {
        category: 'Sim & Real',
        title: 'Cmd_vel차이',
        description: `같은 환경을 구성해놓고 현실과 시뮬레이션은 어떤 차이가 있는지 테스트해 보았음
        테스트는 가로세로1m의 박스형 주행패턴을 적용하여 주행그래프를 추출하였음
        그래프는 ROS2 bag을 macp파일로 변환하여 녹화하였고 Plotjuggler를 사용해서 Visualization하였음
        좌측이 시뮬레이션이고 우측이 현실`,
        image: ['simCmd_vel.png', 'Cmd_vel.png']
      },

      {
        category: 'Sim & Real',
        title: 'Odom차이',
        description: `데이터에서 twist값이 비정상적으로 요동치는 것을 확인하였고 해당 데이터를 AI를 활용하여 분석한 결과 하드웨어적 결함이 의심된다는 결과를 확보하였음
        실제 확인결과 왼쪽 바퀴 축이 휘어있음을 확인하였음
        이걸 기반으로 하드웨어의 물리적 결함을 데이터로 검증하는 의의를 다졌음`,
        image: ['simOdom.png', 'Odom.png']
      },

      {
        category: 'SLAM',
        title: 'Cartographer SLAM실시',
        description: `Cartographer와 SLAM ToolBox 두가지를 운용해보았고 긴 경로 탐색 시 누적오차 수정이 비효율적인 SLAM ToolBox보다 대규모 환경에서 누적오차를 강력하게 보정하며 정확도가 높은 Cartographer가 
        물류창고에 더 적합하다 판단하여 Cartographer를 사용하였음
        하지만 지금 생각해보니 Slam ToolBox가 더 현명한 선택이 아니었을까 하는 생각이 듬`,
        image: '일반SLAM.gif'
      },

      {
        category: 'comparison',
        title: 'Slamtoolbox',
        description: `Slam ToolBox는 지도를 대규모공간 혹은 실시간으로 확장하거나 이미 저장된 지도를 불러와 이어서 그리는 기능이 막강함
        또, CPU사양이 낮아도 데이터가 밀리지 않도록 비동기 모드를 지원함
        
        단점으로 2D 전용이며 여러개의 센서 결합시 Cartographer보다 세밀한 튜닝이 어려울 수도 있음
    `,
        image: ''
      },

       {
        category: 'comparison',
        title: 'Cartographer',
        description: `구글의 최적화 알고리즘을 사용해 위치 오차를 억지로 끼워맞추는 
        루프클로징 (이전에 왔던 곳을 다시 방문했을 때 위치오차를 바로잡는 능력) 
        기능이 압도적이지만, 설정이 매우 까다롭고 컴퓨터 자원을 많이 잡아먹는 고성능 도구`,
        image: ''
      },
    ]
}