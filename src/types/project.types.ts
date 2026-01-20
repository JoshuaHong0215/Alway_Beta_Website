export type ProjectCategory = 'all' | 'architecture' | 'city-plan' | 'robotics';

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
}

export interface ProjectDetailProps {
  project: ProjectItem;
  onBack: () => void;
}
