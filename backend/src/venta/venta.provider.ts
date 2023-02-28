import { Venta } from 'src/models/venta.identity';

export const ventaProviders = [
  {
    provide: 'VENTA_REPOSITORY',
    useValue: Venta,
  },
];
