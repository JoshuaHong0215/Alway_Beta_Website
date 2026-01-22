import { ProjectItem } from '../../types';

/**
 * 자동화된 프로젝트 로딩 시스템
 * 
 * 새 프로젝트 추가 방법:
 * 1. src/data/projects/[카테고리]/[프로젝트명].ts 파일만 생성
 * 2. 끝! (이 파일 수정 불필요)
 * 
 * 각 프로젝트 파일은 반드시 export const 변수명 형태로 export 해야 함
 * 예: export const myProject: ProjectItem = { ... }
 */

// 각 카테고리 폴더의 모든 .ts 파일 자동 import
// Vite의 glob - 절대 경로 우선 사용
const architectureModulesRelative = import.meta.glob('./architecture/*.ts', { eager: true });
const architectureModulesAbsolute = import.meta.glob('/src/data/projects/architecture/*.ts', { eager: true });
const architectureModules = Object.keys(architectureModulesAbsolute).length > 0 
  ? architectureModulesAbsolute 
  : architectureModulesRelative;

const cityPlanModulesRelative = import.meta.glob('./city-plan/*.ts', { eager: true });
const cityPlanModulesAbsolute = import.meta.glob('/src/data/projects/city-plan/*.ts', { eager: true });
const cityPlanModules = Object.keys(cityPlanModulesAbsolute).length > 0 
  ? cityPlanModulesAbsolute 
  : cityPlanModulesRelative;

const roboticsModulesRelative = import.meta.glob('./robotics/*.ts', { eager: true });
const roboticsModulesAbsolute = import.meta.glob('/src/data/projects/robotics/*.ts', { eager: true });
const roboticsModules = Object.keys(roboticsModulesAbsolute).length > 0 
  ? roboticsModulesAbsolute 
  : roboticsModulesRelative;

// 디버깅: glob이 파일을 찾았는지 확인
console.log('🔍 [Glob 패턴 매칭 결과]');
console.log('Architecture - Relative:', Object.keys(architectureModulesRelative).length, 'Absolute:', Object.keys(architectureModulesAbsolute).length);
console.log('City Plan - Relative:', Object.keys(cityPlanModulesRelative).length, 'Absolute:', Object.keys(cityPlanModulesAbsolute).length);
console.log('Robotics - Relative:', Object.keys(roboticsModulesRelative).length, 'Absolute:', Object.keys(roboticsModulesAbsolute).length);
console.log('Final - Architecture:', Object.keys(architectureModules));
console.log('Final - City Plan:', Object.keys(cityPlanModules));
console.log('Final - Robotics:', Object.keys(roboticsModules));

/**
 * 모듈에서 export된 프로젝트 추출
 * 각 파일에서 export const로 내보낸 ProjectItem을 찾아서 배열로 변환
 */
function extractProjects(modules: Record<string, any>): ProjectItem[] {
  return Object.values(modules).flatMap(module => {
    // default export가 있으면 사용
    if (module.default) {
      return [module.default];
    }
    // named export 중에서 ProjectItem 타입인 것만 필터링
    return Object.values(module).filter(
      (value): value is ProjectItem => 
        value !== null && 
        typeof value === 'object' && 
        'id' in value && 
        'category' in value
    );
  });
}

// 카테고리별 프로젝트 배열 생성
export const architectureProjects = extractProjects(architectureModules);
export const cityPlanProjects = extractProjects(cityPlanModules);
export const roboticsProjects = extractProjects(roboticsModules);

// 디버깅: 로딩 상태 확인
console.log('🔍 [프로젝트 로딩]');
console.log('Architecture:', architectureProjects.length, 'projects');
console.log('City Plan:', cityPlanProjects.length, 'projects');
console.log('Robotics:', roboticsProjects.length, 'projects');
if (roboticsProjects.length > 0) {
  console.log('✅ Robotics 프로젝트:', roboticsProjects.map(p => p.title));
} else {
  console.log('❌ Robotics 프로젝트가 로드되지 않았습니다!');
  console.log('Robotics modules:', roboticsModules);
}

// 모든 프로젝트 통합
export const projects: ProjectItem[] = [
  ...architectureProjects,
  ...cityPlanProjects,
  ...roboticsProjects,
];