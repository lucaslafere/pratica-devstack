import { prisma } from '../config/database'
import { AnswerData } from "../types/answerTypes";

export async function insert(answer: AnswerData){
    const result = await prisma.answers.create({data: answer})
    return result
}