import { config } from './servicios.config';

export class Base {
  public static get integracionRest(): string { return config.sigsIntg.dominio; }
}
