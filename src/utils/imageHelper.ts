import { ProjectItem } from '../types';

/**
 * 프로젝트 이미지 경로 생성 헬퍼
 * 
 * 이미지 저장 위치: public/projects/[category]/[projectId]/
 * 
 * 사용 예시:
 * - 로컬 이미지: 'main.jpg' → 'projects/architecture/songdo-paulbasset/main.jpg'
 * - 외부 URL: 'https://...' → 그대로 반환
 * - 절대 경로: '/images/logo.png' → 그대로 반환
 * 
 * ProjectDetail 컴포넌트의 RobustImage가 이 경로를 받아 다양한 변형을 시도합니다.
 */
export const getProjectImage = (project: ProjectItem, filename?: string): string => {
  if (!filename) return '';

  const cleanFilename = filename.trim();

  // 외부 링크 처리 (Unsplash, Cloudinary 등)
  if (cleanFilename.startsWith('http') || cleanFilename.startsWith('https')) {
    return cleanFilename;
  }

  // 사용자 지정 절대/상대 경로 처리
  if (cleanFilename.startsWith('/') || cleanFilename.startsWith('./')) {
    return cleanFilename;
  }

  // 기본 경로 생성: public/projects/[category]/[projectId]/[filename]
  // 상대 경로로 반환 (맨 앞 슬래시 없음)
  return `/projects/${project.category}/${project.id}/${cleanFilename}`;
};

/**
 * 이미지 경로를 직접 생성하는 유틸리티 함수
 * 프로젝트 객체 없이 카테고리와 ID로 경로 생성
 * 
 * @example
 * getImagePath('architecture', 'songdo-paulbasset', 'main.jpg')
 * // → 'projects/architecture/songdo-paulbasset/main.jpg'
 */
export const getImagePath = (
  category: string,
  projectId: string,
  filename: string
): string => {
  // 외부 URL은 그대로 반환
  if (filename.startsWith('http')) {
    return filename;
  }
  
  return `projects/${category}/${projectId}/${filename}`;
};