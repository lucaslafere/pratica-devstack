import { Request, Response } from 'express';
import {questionSchema} from '../schemas/questionSchema'
import { answerSchema } from '../schemas/answerSchema';
import * as questionService from "../services/questionService"
import * as answerService from '../services/answerService'

export async function createQuestion(req: Request, res: Response) {
  const body = req.body;
  const error = questionSchema.validate(req.body);
  if (!error) return res.status(400).send(error)
  await questionService.insert(body)
  return res.status(200).send("Created")
}

export async function createAnswer(req: Request, res: Response) {
  const {answeredBy, answer} = req.body;
  const id = Number(req.params.id)
  const error = answerSchema.validate(req.body);
  if (!error) return res.status(400).send(error)

  const insert = await answerService.insert({answeredBy, answer, questionId: id})

  return res.status(200).send("Created")
}

export async function get(req: Request, res: Response) {
  const result = await questionService.findAll();
  
  return res.send(result);
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params);
  const result = await questionService.findById(id);
  res.send(result)
}
