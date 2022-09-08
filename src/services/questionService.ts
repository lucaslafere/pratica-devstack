import * as questionRepository from '../repositories/questionRepository';
import { QuestionData } from '../types/questionTypes';

export async function insert (question: QuestionData){
    await questionRepository.insert(question);
}
export async function findAll() {
    const questions = await questionRepository.findAll();
    return questions;
}
export async function findById(id: number) {
    const result = await questionRepository.findById(id);
    return result
}