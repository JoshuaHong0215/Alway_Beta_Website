// 이제 projects.ts 하나만 관리하면 됩니다.
import { projects } from './projects';

// 하위 호환성을 위해 기존 변수명으로 export (필요시 사용)
export const allProjects = projects;
export const architectureProjects = projects.filter(p => p.category === 'architecture');
export const cityProjects = projects.filter(p => p.category === 'city-plan');
export const roboticsProjects = projects.filter(p => p.category === 'robotics');
