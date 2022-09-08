import * as answerRepository from '../repositories/answerRepository';
import { AnswerData } from '../types/answerTypes';

export async function insert(answer: AnswerData){
    await answerRepository.insert(answer)
}
