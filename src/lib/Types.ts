// How to specify that i want to get an array of string options ?
export type Project = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  type: string; // 'Openclassrooms' | 'Training' | 'Client Project' | 'Tuto'
  status: string; // 'Completed' | 'Wip' | 'Standby' | 'Abandonned' | 'Rework Needed'
  objective: string; // mettre les informations du goal dans la description
  stack: string;
  stackArr: string[];
  is_published: boolean; // à replace par l'information donnée par le status
  click_score: number; // *
  thumbnail_path: URL;
};
export type ExternalLink = {
  repository_path: URL;
  demo_path: URL;
};
export type Comments = {
  id: number;
  is_validate: boolean;
  created_at: Date;
  type: ['feedback' | 'testimonial' | 'inquiries'];
  score: number;
  name: string;
  content: string;
};
export type LinkProps = {
  title: string;
  href: URL;
  iconRef: string;
};
