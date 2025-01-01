import { LucideIcon } from 'lucide-react';

export interface NavItem {
  icon: LucideIcon;
  text: string;
  path: string;
  children?: Omit<NavItem, 'children'>[];
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}