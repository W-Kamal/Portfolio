import { Url } from "url";

export type Project = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  type: ProjectType;
  status: Status;
  objective: string | null;
  stack: string;
  stackArr: string[]; // Not used
  is_released: boolean;
  thumbnail_url: string;
  repository_url?: Url;
  live_url?: Url;
};

enum ProjectType {
  ClassProject = 'ClassProject',
  Training = 'Training',
  Commission = 'Commission',
}
enum Status {
  Completed = 'Completed',
  Wip = 'Wip',
  Standby = 'Standby',
  Cancelled = 'Cancelled',
  ReworkNeeded = 'Rework Needed',
}

// Not implemented yet
export type Comments = {
  id: number;
  is_validate: boolean;
  created_at: Date;
  type: CommentType;
  score: number;
  name: string;
  content: string;
};

enum CommentType {
  Feedback = 'Feedback',
  Testimonial = 'Testimonial',
  Inquiries = 'Inquiries',
}
