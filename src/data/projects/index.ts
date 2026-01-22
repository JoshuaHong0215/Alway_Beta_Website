import { ProjectItem } from '../../types';

/**
 * 자동화된 프로젝트 로딩 시스템
 * 
 * 새 프로젝트 추가 방법:
 * 1. src/data/projects/[카테고리]/[프로젝트명].ts 파일 생성
 * 2. 아래 import 구문에 추가
 * 3. 해당 카테고리 배열에 추가
 */

// Architecture 프로젝트들
import { songdoPaulBasset } from './architecture/songdo-paulbasset';

// City Plan 프로젝트들  
import { goksungWindpower } from './city-plan/goksung-windpower';
import { pohangHakjeon } from './city-plan/pohang-hakjeon';

// Robotics 프로젝트들
import { spotATSSystem } from './robotics/spot-ats-system';



// 카테고리별 프로젝트 배열
export const architectureProjects: ProjectItem[] = [
  songdoPaulBasset,
];

export const cityPlanProjects: ProjectItem[] = [
  goksungWindpower,
  pohangHakjeon,
];

export const roboticsProjects: ProjectItem[] = [
  spotATSSystem,
];

// 디버깅
console.log('✅ [프로젝트 로딩 성공]');
console.log('Architecture:', architectureProjects.length, 'projects');
console.log('City Plan:', cityPlanProjects.length, 'projects');
console.log('Robotics:', roboticsProjects.length, 'projects');

// 모든 프로젝트 통합
export const projects: ProjectItem[] = [
  ...architectureProjects,
  ...cityPlanProjects,
  ...roboticsProjects,
];