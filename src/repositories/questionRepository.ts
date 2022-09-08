import { prisma } from '../config/database';
import { QuestionData } from '../types/questionTypes';

export async function insert(question: QuestionData){
    const result = await prisma.questions.create({data: question});
    return result
}
export async function findAll(){
    const result = await prisma.questions.findMany();
    return result
}
export async function findById(id: number){
    const result = await prisma.questions.findUnique({where: {id}});
    return result
}