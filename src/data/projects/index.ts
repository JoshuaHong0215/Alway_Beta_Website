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
import { smallWarehouseControl } from './robotics/smallWarehouseControl';
import { opencvIbvsArm } from './robotics/opencv-ibvs-arm';
import { yoloIbvsArm } from './robotics/yolo-ibvs-arm';
import { gaussianSplattingIsaacSim } from './robotics/gaussian-splatting-isaac-sim';

// Software 프로젝트들
import { libraryManagementSystem } from './software/library-management-system';

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
  smallWarehouseControl,
  opencvIbvsArm,
  yoloIbvsArm,
  gaussianSplattingIsaacSim,
];

export const softwareProjects: ProjectItem[] = [
  libraryManagementSystem,
];

// CMS(관리자 페이지)로 추가된 프로젝트들 (content/projects/*.json)
const cmsModules = import.meta.glob('../../../content/projects/*.json', { eager: true }) as Record<string, { default: ProjectItem }>;
export const cmsProjects: ProjectItem[] = Object.values(cmsModules).map((mod) => mod.default);

// 디버깅
console.log('✅ [프로젝트 로딩 성공]');
console.log('Architecture:', architectureProjects.length, 'projects');
console.log('City Plan:', cityPlanProjects.length, 'projects');
console.log('Robotics:', roboticsProjects.length, 'projects');
console.log('Software:', softwareProjects.length, 'projects');
console.log('CMS:', cmsProjects.length, 'projects');

// 모든 프로젝트 통합 (코드로 등록한 것 + CMS로 추가한 것, id 중복 시 CMS 쪽 우선)
const hardcodedProjects: ProjectItem[] = [
  ...roboticsProjects,
  ...softwareProjects,
  ...cityPlanProjects,
  ...architectureProjects,
];

export const projects: ProjectItem[] = [
  ...hardcodedProjects.filter(p => !cmsProjects.some(cp => cp.id === p.id)),
  ...cmsProjects,
];