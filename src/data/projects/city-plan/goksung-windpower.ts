import { ProjectItem } from '../../../types';

export const goksungWindpower: ProjectItem = {
    id: 'goksung-windpower',
    category: 'city-plan',
    title: '곡성 풍력 발전단지',
    description: '곡성 풍력 발전단지',
    content: `
    사업개요: 전라남도 곡성군 오곡면 봉조리 일원
    계획 : 총 7개 호기 설치
    
    
    Qgis와 AutoCAD로 Terrain제작 후
    Sketchup으로 Modeling, UnrealEngine에서 PCG설계를 추가하여
    자연스러운 3D View & Analysis 구축
    `,
    image: 'goksung01.png',
    tags: ['City Plan', 'UnrealEngine', 'Sketchup', 'AutoCAD', 'QGIS'],
    
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
        description: `Unreal Engine의 BluePrint를 활용하여 PCG설계를 실시하였음
        기존 개별적 Asset이나 Scatter계열의 플러그인을 사용하면 끊김,튕김 등의 작업에 어려운 현상이 생기지만
        PCG 기반 배치는 저용량과 더불어 High Quality Asset의 특성을 그대로 사용할 수 있어 많은 장점이 있음`,
        image: 'goksungPCG.png'
      },
      
      {
        category: 'Final Output',
        title: 'PCG설계를 활용하여 사실에 기반한 3D Analysis',
        description: `PCG 설계를 통하여 넓은 환경에 고퀄리티 나무 Asset을 효율적으로 배치하였음`,
        image: 'goksung02.png'
      },
      
      {
        category: 'Final Output',
        title: 'PCG설계를 활용하여 사실에 기반한 3D Analysis',
        description: `PCG 설계를 통하여 넓은 환경에 고퀄리티 나무 Asset을 효율적으로 배치하였음`,
        image: 'goksung03.png'
      }  
    ]

    
}