import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Controladores } from '../controladores';

const router = Router();

/* router.post('/auth/token', AuthController.signInValidation, AuthController.signIn); */

router.get('/teste-api', (req, res) => res.status(StatusCodes.OK).json('API TESTADA!.'));

router.post('/usuario', Controladores.Usuario.cadastrarValidacao, Controladores.Usuario.cadastrar);

export { router };
