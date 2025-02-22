import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

/* router.post('/auth/token', AuthController.signInValidation, AuthController.signIn); */

router.get('/teste-api', (req, res) => res.status(StatusCodes.OK).json('API TESTADA!.'));

export { router };
