export type ProjectCategory = 'all' | 'robotics' | 'software' | 'city-plan' | 'architecture';

// Tesla 스타일 섹션 타입 추가
export interface ProjectSection {
  category: string;
  title: string;
  description: string;
  image?: string | string[];
  video?: string;
  youtubeId?: string;
  wide?: boolean;
  wideText?: boolean;
  vertical?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  intro?: string;
  image: string;
  gallery?: string[];
  tags: string[];
  date: string;
  category: ProjectCategory;
  sections?: ProjectSection[];  // 추가
  githubUrl?: string;
  locked?: boolean;
  lockedReason?: string;
}

export interface ProjectDetailProps {
  project: ProjectItem;
  onBack: () => void;
}