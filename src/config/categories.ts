import { Layout, Map, Cpu, LucideIcon } from 'lucide-react';
import { ProjectCategory } from '../types';

export interface CategoryConfig {
  id: Exclude<ProjectCategory, 'all'>;
  label: string;
  icon: LucideIcon;
}

export const CATEGORIES: CategoryConfig[] = [
  {
    id: 'architecture',
    label: 'Architecture',
    icon: Layout,
  },
  {
    id: 'city-plan',
    label: 'City Plan',
    icon: Map,
  },
  {
    id: 'robotics',
    label: 'Robotics',
    icon: Cpu,
  },
];

// 아이콘 매핑 객체
export const categoryIcons = CATEGORIES.reduce((acc, cat) => {
  acc[cat.id] = cat.icon;
  return acc;
}, {} as Record<Exclude<ProjectCategory, 'all'>, LucideIcon>);

// 필터용 카테고리 목록
export const filterCategories = [
  { label: 'All Works', value: 'all' as ProjectCategory },
  ...CATEGORIES.map(cat => ({ label: cat.label, value: cat.id as ProjectCategory })),
];

// 네비게이션용 카테고리 목록
export const navCategories = [
  { label: 'All Projects', category: 'all' as ProjectCategory },
  ...CATEGORIES.map(cat => ({ 
    label: `${cat.label} Design`, 
    category: cat.id as ProjectCategory 
  })),
];
