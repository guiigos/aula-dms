import { Teacher } from "../models/teacher.entity";

export const TEACHER_REPOSITORY = Symbol("TEACHER_REPOSITORY");

export interface TeacherRepository {
  create(teacher: Teacher): Promise<void>;
  findByEmail(email: string): Promise<Teacher | null>;
  findById(id: string): Promise<Teacher | null>;
  findAll(): Promise<Teacher[]>;
  update(id: string, teacher: Teacher): Promise<void>;
  delete(id: string): Promise<void>;
}
