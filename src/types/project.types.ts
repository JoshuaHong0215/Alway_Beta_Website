export type ProjectCategory = 'all' | 'architecture' | 'city-plan' | 'robotics';

// Tesla 스타일 섹션 타입 추가
export interface ProjectSection {
  category: string;
  title: string;
  description: string;
  image?: string | string[];
  video?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  content?: string;
  image: string;
  gallery?: string[];
  tags: string[];
  date: string;
  category: ProjectCategory;
  sections?: ProjectSection[];  // 추가
}

export interface ProjectDetailProps {
  project: ProjectItem;
  onBack: () => void;
}