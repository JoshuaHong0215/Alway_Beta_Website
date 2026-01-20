import { ProjectItem } from '../types';

/**
 * 프로젝트 이미지 경로 생성 헬퍼
 * 클라우드 환경의 경로 문제를 해결하기 위해 상대 경로를 기본으로 사용합니다.
 * ProjectDetail 컴포넌트의 RobustImage가 이 경로를 받아 다양한 변형(절대경로 등)을 시도합니다.
 */
export const getProjectImage = (project: ProjectItem, filename?: string): string => {
  if (!filename) return '';

  const cleanFilename = filename.trim();

  // 외부 링크 처리
  if (cleanFilename.startsWith('http') || cleanFilename.startsWith('https')) {
    return cleanFilename;
  }

  // 사용자 지정 절대/상대 경로 처리
  if (cleanFilename.startsWith('/') || cleanFilename.startsWith('./')) {
    return cleanFilename;
  }

  // 기본 경로 생성 (맨 앞 슬래시 없음 -> 상대 경로)
  // 예: projects/robotics/super-drone/drone.jpeg
  return `projects/${project.category}/${project.id}/${cleanFilename}`;
};