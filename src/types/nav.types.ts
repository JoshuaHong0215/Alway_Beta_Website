import { ProjectCategory } from './project.types';

export type Page = 'home' | 'about' | 'projects' | 'project-detail';

export interface NavItem {
  label: string;
  value: Page | 'contact';
  children?: { label: string; value: ProjectCategory }[];
}
