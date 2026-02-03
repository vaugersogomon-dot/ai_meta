
export interface Lesson {
  title: string;
  details: string[];
}

export interface ModuleBlock {
  id: number;
  title: string;
  theory: string[];
  practice: string[];
  homework: {
    title: string;
    description: string;
  }[];
}

export interface Guide {
  title: string;
  content: string;
}
