import type { TrainerProfile } from "./trainerProfile.type";

export interface Course {
  courseId: number;
  trainerName: string;
  trainerId: number;
  title: string;
  description: string;
  courseDate: string;
  startTime: string;
  endTime: string;
  category: string;
  room: string;
  createdAt: string;
  updatedAt?: string;
}
