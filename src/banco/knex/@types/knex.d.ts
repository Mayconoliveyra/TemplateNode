import { IUsuario } from '../../models/usuario';

declare module 'knex/types/tables' {
  interface Tables {
    usuarios: IUsuario;
  }
}
