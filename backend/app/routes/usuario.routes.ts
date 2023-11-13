
import express from 'express';
import { Request, Response } from 'express';
import { create } from '../controllers/usuario.controller';

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  create(req, res);
});


