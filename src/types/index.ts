export interface PracticeArea {
  id: number;
  title: string;
  description: string;
}

export interface Attorney {
  id: number;
  name: string;
  role: string;
  imageUrl?: string;
}