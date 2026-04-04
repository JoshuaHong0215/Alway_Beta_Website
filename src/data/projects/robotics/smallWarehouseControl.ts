import { ProjectItem } from "../../../types";

export const smallWarehouseControl: ProjectItem = {
    id: 'smallWarehouseControl',
    category: 'robotics',
    title: '소규모 물류창고 관제시스템',
    description: 'IsaacSIM을 활용한 서버와의 관제시스템 구축 및 하드웨어 결함 분석',
    content: `
      본 프로젝트는 물리적 실습환경의 제약을 극복하고 확장성을 검증하기 위해 실제 환경 기반의 시뮬레이션 환경을 구축했습니다.
      3D modeling program으로 실물 turtlebot의 운용환경을 구현하였고 Isaacsim으로 실물 로봇과 시뮬레이션 로봇에서의 데이터 차이를 확인하였습니다.
     
      시뮬레이션의 장점이 극대화 되려면 비교적 간단한 Turtlebot이 아니라 더 크고 복잡한 로봇까지 다뤘어야 그 의미가 있었겠지만
      주어진 시간이 별로 없어 시도하지 못했던게 큰 아쉬움으로 남는 프로젝트입니다.
      
    `,
    // 원래대로 복구 완료. public 폴더에 drone.jpeg 없으면 에러 화면 뜸.
    image: 'warehouse.png', 
    gallery: [                  
      
    ],
    tags: ['ROS2', 'Burger', 'Isaac Sim', 'Isaac Lab', 'Skethcup'], 
    date: '2025. 11. 27',

    sections: [
      {
        category: 'FloorPlan',
        title: '실제 운용 환경',
        description: `실물 Turtlebot이 서버랑 관제역할을 수행했던 운용환경입니다.`,
        image: 'classroom.jpg'
      },

      {
        category: '',
        title: '평면도 제작',
        description: `실제 로봇의 운용환경을 실측하여 평면도를 만들고 그 기반으로 3D Modeling을 진행하여
        환경을 구성하였습니다.`,
        image: 'floorplan.png'  
      },

      
      {
        category: '3D Modeling',
        title: 'Isaacsim Import',
        description: `Sketchup을 이용해 모델링을 진행하고 fbx로 export 후 Isaacsim내에서 USD로 변환 후 Import하였습니다.
        후에 Physics특성을 활성화하여 물리적 특성을 부여하였습니다.  `,
        image: 'simclassroom.png'
      },
      
      {
        category: 'Structure',
        title: '세부 구현',
        description: `시뮬레이션 내부의 Turtlebot 셋팅을 위하여 실물 Turtlebot의 TF구조를 확인하면서 정적,동적TF관계 등의 특성을 이해하였고 
        그 특성을 토대로 실제 Turtlebot의 TF 구조를 구성하였습니다.
        
        뿐만 아니라, Burger에서 사용중인 LDS-01 LiDAR Spec과 동일한 HorizontalFOV, HorizontalResolution, Min,MaxRange등의 세부 특성도
        동일하게 셋팅하였습니다.`,
        image: 'simburgerTF.png'
      },

      {
        category: 'Sim & Real',
        title: 'Cmd_vel차이',
        description: `같은 환경을 구성해놓고 현실과 시뮬레이션은 어떤 차이가 있는지 테스트해 보았습니다.
        테스트는 가로세로1m의 박스형 주행패턴을 적용하여 주행그래프를 추출하였고
        그래프는 ROS2 bag을 macp파일로 변환하여 녹화하였고 Plotjuggler를 사용해서 Visualization하였습니다.
        좌측이 시뮬레이션 데이터이고 우측이 현실 데이터입니다.`,
        image: ['simCmd_vel.png', 'Cmd_vel.png']
      },

      {
        category: 'Sim & Real',
        title: 'Odom차이',
        description: `데이터에서 twist값이 비정상적으로 요동치는 것을 확인하였고 해당 데이터를 AI를 활용하여 분석한 결과 하드웨어적 결함이 의심된다는 결과를 확보하였습니다.
        실제 확인결과 왼쪽 바퀴 축이 휘어있음을 확인하였고
        이걸 기반으로 하드웨어의 물리적 결함을 데이터로 검증하는 의의를 다졌습니다.`,
        image: ['simOdom.png', 'Odom.png']
      },

      {
        category: 'SLAM',
        title: 'Cartographer SLAM실시',
        description: `Cartographer와 SLAM ToolBox 두가지를 운용해보았고 긴 경로 탐색 시 누적오차 수정이 비효율적인 SLAM ToolBox보다 대규모 환경에서 누적오차를 강력하게 보정하며 정확도가 높은 Cartographer가 
        물류창고에 더 적합하다 판단하여 Cartographer를 사용하였습니다.
        하지만 지금 생각해보니 아래 내용의 이유와 그로인한 범용성 측면에서 보면 Slam ToolBox가 더 현명한 선택이 아니었을까 하는 생각이 듭니다.`,
        image: '일반SLAM.gif'
      },

      {
        category: 'comparison',
        title: 'Slamtoolbox',
        description: `Slam ToolBox는 지도를 대규모공간 혹은 실시간으로 확장하거나 이미 저장된 지도를 불러와 이어서 그리는 기능이 막강합니다.
        또, CPU사양이 낮아도 데이터가 밀리지 않도록 비동기 모드를 지원하는 특징이 있습니다.
        
        단점으로 2D 전용이며 여러개의 센서 결합시 Cartographer보다 세밀한 튜닝이 어려울 수도 있습니다.
    `,
        image: ''
      },

      {
        category: 'comparison',
        title: 'Cartographer',
        description: `Cartographer는 구글의 최적화 알고리즘을 사용해 위치 오차를 억지로 끼워맞추는 
        루프클로징 (이전에 왔던 곳을 다시 방문했을 때 위치오차를 바로잡는 능력) 
        기능이 압도적이지만, 설정이 매우 까다롭고 컴퓨터 자원을 많이 잡아먹는 고성능 도구입니다.`,
        image: ''
      },

      {
        category: 'Drive',
        title: 'Navigation',
        description: `SLAM으로 Mapping 후 Map data를 얻을 수 있었습니다.
        추출된 Map data를 토대로 Navigation을 실시하였고 성공적으로 주행에 성공하였습니다.`,
        image: '일반Nav.gif'
      },

      {
        category: 'Server Control',
        title: '시뮬레이션 / 서버 관제',
        description: `하드웨어와 서버와의 연동테스트를 시뮬레이션에 연결하여 연동테스트를 진행하였고
        실물에서 보여주던 퍼포먼스를 그대로 보여주었습니다.
        아래에 하드웨어와 서버간의 동작시연 영상이 있습니다.
        `,
        image: '시뮬,서버연동.gif'
      },

      {
        category: 'Server Control',
        title: '하드웨어 / 서버 관제',
        description: `
        동작의 구현은 완벽하게 됐을지 몰라도 서로간의 주행 그래프, 데이터도 함께 검증했으면 하는 아쉬움이 남습니다.`,
        video: 'ROBOT_RACK_A.mp4'
      },

      {
        category: 'SLAM',
        title: 'Frontier기반 자율 SLAM',
        description: `실제 환경에선 TeleopKey를 활용하여 수동 SLAM은 비효율적일것이라 판단하여 Frontier기반 자율탐사 
        시스템을 적용하였습니다.
        Frontier기반 자율탐사 시스템이란 센서가 닿지 않은 미지의 영역(Frontier)을 로봇이 스스로 식별하고 
        찾아가며, 사람의 개입없이 공간 전체의 지도를 완성하는 기술을 뜻합니다.`,
        image: 'FrontierSLAM.png'
      },

      {
        category: 'SLAM',
        title: 'Frontier기반 자율 SLAM',
        description: `영상에서 보여지는 바와 같이 별도의 조작없이도 스스로의 판단하에 지도를 작성하는 것을 볼 수 있습니다.
        Frontier와 함께 Slam ToolBox나 Cartographer중 하나를 선택하여 조합해서 사용해야하지만 Cartographer의 경우 수정해야할 부분이 많아
        효율적인 프로젝트 진행을 위해 Slam ToolBox로 진행하였습니다.
        
        초반에 제자리에서 맴맴돌거나, 안움직이는 현상들이 생겼습니다. 혹시 몰라 Costmap의 설정을 기존보다 
        완화시켰고 Inflation Radius을 줄였습니다. 
        또한, Slam ToolBox에서 mapper_params_online_async.yaml파일에서 transform_timeout과 
        tf_bugger_duration파라미터 값을 높여 데이터 지연시간에 따른 문제를 해결하였고 동작을 구현하였습니다. `,
        video: 'test.mp4'
      },

      {
        category: 'Verification',
        title: 'Stress Test 1',
        description: `도입단계를 고려하여 동적장애물 회피주행 테스트를 실시하였습니다.
        Goal을 지정하고 주행을 시작하면 동적장애물을 투입하였고 Rviz상에서 Ghost현상이 남아있어 Local Costmap의 갱신주기를 담당하는
        update_frequency파라미터를 수정하였습니다.
        
        실제 Burger에 탑재하는 Raspberry PI4의 경우 CPU과부화 문제가 발생할 수 있어
        최대값인 10Hz까지만 올려서 튜닝하였고 Raytrace_range파라미터를 수정하여 잔상을 효율적으로 지울 수 있도록 수정했으나
        결론적으로 실패하였습니다.`,
        image: 'stresstest01.gif'
      },

      {
        category: 'Verification',
        title: 'Stress Test 2',
        description: `총 8번을 시행했으나 어느정도 진전이 있다고 판단한 것만 게시하였습니다.`,
        image: 'stresstest02.gif'
      },

      {
        category: 'Verification',
        title: 'Stress Test 3',
        description: ``,
        image: 'stresstest03.gif'
      },

      {
        category: 'Verification',
        title: 'Stress Test 4',
        description: ``,
        image: 'stresstest04.gif'
      },

      
    ]


    
}