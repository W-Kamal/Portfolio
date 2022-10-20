import React, { ReactElement, ReactNode } from 'react';
import { Url } from "url";

export interface BaseProps {
  /** the content of the component */
  children: ReactNode;
  /** The time it takes (milliseconds) before next transition starts */
  duration?: number;
  /** Determines how long the transition takes */
  transitionDuration?: number;
  /** Specifies the first slide to display */
  defaultIndex?: number;
  /** For specifying if there should be dots below the slideshow. If function; it will render the returned element */
  indicators?: boolean | ((index?: number) => ReactNode);
  /** A custom element to serve as previous arrow */
  prevArrow?: ReactElement;
  /** A custom element to serve as next arrow */
  nextArrow?: ReactElement;
  /** Determines if there should be a navigational arrow for going to the next or previous slide */
  arrows?: boolean;
  /** Responsible for determining if the slideshow should start automatically */
  autoplay?: boolean;
  /** Specifies if the transition should loop infinitely */
  infinite?: boolean;
  /** Determines whether the transition effect applies when the mouse hovers the slider */
  pauseOnHover?: boolean;
  /** Determines whether the user can go to next or previous slide by the mouse or by touching */
  canSwipe?: boolean;
  /** The timing transition function to use. You can use one of linear, ease, ease-in, ease-out, cubic, cubic-in, cubic-out */
  easing?: string;
  /** Use this prop to add your custom css to the wrapper containing the sliders. Pass your css className as value for the cssClass prop */
  cssClass?: string;
  /** Callback that gets triggered at the end of every transition. The oldIndex and newIndex are passed as arguments */
  ref?: any;
}
export type Projects = {
  projects : Array<ProjectProps>
}
export type ProjectProps = {
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
export type SlideshowRef = {
  goNext: () => void;
  goBack: () => void;
  goTo: (index: number) => void;
};

export type ButtonClick = (event: React.SyntheticEvent<HTMLButtonElement>) => void;

export type IndicatorPropsType = {
  'data-key': number;
  'aria-label': string;
  onClick: ButtonClick;
};
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
};

// export type SlideshowRef = {
//   goNext: () => void;
//   goBack: () => void;
//   goTo: (index: number) => void;
// };