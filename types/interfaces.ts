export interface Wod {
  id: string;
  name: string;
  dateDone?: Date;
  userId?: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  completed: boolean;
  weight: string;
  wodId: string;
}
