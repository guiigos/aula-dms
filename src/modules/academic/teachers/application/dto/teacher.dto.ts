import { Teacher } from "@academic/teachers/domain/models/teacher.entity";

export class TeacherDto {
  id?: string;
  name: string;
  email: string;
  document: string;
  registration: string;
  createdAt?: Date;
  updatedAt?: Date;

  static fromTeacher(teacher: Teacher | null): TeacherDto | null {
    if (!teacher) return null;
    
    return {
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      document: teacher.document,
      registration: teacher.registration,
      createdAt: teacher.createdAt,
      updatedAt: teacher.updatedAt,
    };
  }
}