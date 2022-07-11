export interface Projects {
  id: string;
  created_at: Date;
  started_date: Date;
  ended_date: Date;
  title: string;
  description: string;
  thumbnail_path: string;
  type: string;
  status: string;
  purpose: string;
  is_published: boolean;
  
}
export interface Paths {
  repository_path: string;
  demo_path: string;
  devGarden_path: string;
}
export interface Stacks {
  id: string;
  name: string;
  url: string;
  type: string;
  icon: string;
  description:string;
}
ssasas