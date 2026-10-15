export interface AcademicCard {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface Facility {
  id: string;
  title: string;
  tag: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  imageUrl: string;
}

export interface Notice {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  fullContent: string;
  author: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  pillar: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}
