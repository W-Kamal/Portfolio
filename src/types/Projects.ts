export interface Projects {
  id: number;
  created_at: Date;
  started_date: Date;
  ended_date: Date;
  title: string;
  name:string;
  description: string;
  type: ["Openclassrooms" | "Training" | "Client Project" | "Tuto"];
  status: "Completed" | "Wip" | "Standby"|"Abandonned";
  purpose: string;
  stack: ["React.js"| "Vite.js"| "Node.js"|"Js"|"Html"|"Css"|"Express"|"Figma"|"Storybook"|"Redux"|"Redux Toolkit"|"Firebase"|"Supabase"|"Lighthouse"|"Jest"|"Zustand"|"ReCharts"|"Axios"|"Next.js"];
  is_published: boolean;
  click_score:number;
  paths : {
    thumbnail_path: string;
    repository_path: string;
    demo_path: string;
  }
}