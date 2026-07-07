import { ProjectItem } from '../../../types';

export const libraryManagementSystem: ProjectItem = {
  id: 'library-management-system',
  category: 'software',
  title: 'C++을 활용한 도서관 관리 시스템',
  description: 'C++로 구현한 콘솔 기반 도서관 관리 시스템',
  intro: `본 프로젝트는 C++로 구현한 콘솔 기반 도서관 관리 시스템입니다.
  도서 등록·검색·대출·반납 등 도서관 운영에 필요한 핵심 기능을 객체지향 설계 원칙에 따라 구현하며, 3인이 기능 단위로 역할을 분담하여 
  협업 개발합니다.

  영역: 도서 관리 + 카테고리 분류 / 회원 관리 + 벌금 계산 / 대출·반납 + 검색·통계

  **담당 영역: 회원 관리 + 벌금 계산**`,
  image: 'main.png',
  tags: ['C++', 'OOP', 'File I/O', 'Git', 'Team Project'],
  date: '2026. 07.',
  githubUrl: 'https://github.com/ddaammss/library-management-system',

  sections: [

    {
      category: 'Architecture',
      title: '.h / .cpp 협업 구조',
      description: `C++의 헤더(.h)-구현부(.cpp) 분리 구조를 팀원 간 **계약서**로 활용했습니다.
      담당자의 .cpp 구현이 끝나지 않아도 .h 파일의 함수 시그니처만으로 다른 모듈에서 미리 코드를 작성할 수 있어,
      1) 각자 .h 작성 → 함수명/매개변수 합의, 2) .h 기준 병렬 .cpp 구현, 3) main.cpp 통합 테스트 순서로 개발을 진행해 병목 없이 협업할 수 있었습니다.`,
      image: 'header-structure.png',
      wide: true
    },

  ]
  
};
