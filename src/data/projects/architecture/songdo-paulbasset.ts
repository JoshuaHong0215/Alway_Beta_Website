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
        description: `공사 평면도기반 3D Modeling을 실시하였습니다.`,
        image: 'songdo_Paulbasset.jpeg'  
      },

      {
        category: '',
        title: '공사 전',
        description: ``,
        image: 'songdoBefore.png'  
      },

      {
        category: '',
        title: '공사 후',
        description: ``,
        image: 'songdoAfter.png'
      },
    ]
}