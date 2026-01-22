import { ProjectItem } from '../../../types';

export const songdoPaulBasset: ProjectItem = {
    id: 'songdo-paulbasset',
    category: 'architecture',
    title: '송도동 근린생활시설 신축공사',
    description: '송도동 건축경관디자인',
    content: `
      위치: 인천광역시 연수구 송도동 8-11
      대지면적: 1,072,00㎡
    `,
    image: 'songdo_Paulbasset.jpeg',
    tags: ['Architecture', 'Sketchup', 'AutoCAD', 'Lumion', 'Photoshop'],
    date: '2023. 11. 10',
    
    sections: [
      {
        category: 'Rendering',
        title: '투시도',
        description: `공사평면도와 국토지리정보원도면과 더블체크 이후 QGIS로 지형정보 정제`,
        image: 'songdo_Paulbasset.jpeg'  
      },

      {
        category: '',
        title: '공사 전',
        description: `공사평면도와 국토지리정보원도면과 더블체크 이후 QGIS로 지형정보 정제`,
        image: 'songdoBefore.png'  
      },

      {
        category: '',
        title: '공사 후',
        description: `PCG 설계를 통하여 넓은 환경에 고퀄리티 Asset을 효율적으로 배치하였음
        PCG 설계를 통하여 저용량, 고효율의 작업성을 확보하였음`,
        image: 'songdoAfter.png'
      },
    ]
}