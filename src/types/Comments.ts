export type Comments = {
  id: number;
  is_validate: boolean;
  created_at: Date;
  type: ["feedback"|"testimonial"|"inquiries"];
  score:number;
  name: string;
  content: string;
}