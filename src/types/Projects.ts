export type Projects = {
  id: number;
  created_at: Date;
  started_date: Date;
  ended_date: Date;
  title: string;
  name:string;
  description: string;
  type: string[];
  status: string[];
  purpose: string;
  stack: string[];
  is_published: boolean;
  click_score:number;
  paths : {
    thumbnail_path: string;
    repository_path: string;
    demo_path: string;
  }
}