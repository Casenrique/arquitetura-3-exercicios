import { BadRequestError } from "../errors/BadRequestError"
import { Course } from "../models/Course"

export interface CreateCourseInputDTO {
    id: string,
    name: string,
    lessons: number
}

export interface CreateCourseOutputDTO {
    message: string,
    course: {
        id: string,
        name: string,
        lessons: number
    }
}

export class CourseDTO {
    public createCourseInput(
        id: unknown,
        name: unknown,
        lessons: unknown
    ): CreateCourseInputDTO {
        if (typeof id !== "string") {
            throw new BadRequestError("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof lessons !== "number") {
            throw new BadRequestError("'lessons' deve ser number")
        }

        const dto: CreateCourseInputDTO = {
            id,
            name,
            lessons
        }         
        return dto
    }

    public createCourseOutput(newCourse: Course): CreateCourseOutputDTO {
        const dto: CreateCourseOutputDTO = {
            message: "Curso registrado com sucesso",
            course: {
                id: newCourse.getId(),
                name: newCourse.getName(),
                lessons: newCourse.getLessons()
            }
        }
        return dto

    }
}