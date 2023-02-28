import { Cliente } from 'src/models/cliente.identity';

export const clienteProviders = [
  {
    provide: 'CLIENTE_REPOSITORY',
    useValue: Cliente,
  },
];
