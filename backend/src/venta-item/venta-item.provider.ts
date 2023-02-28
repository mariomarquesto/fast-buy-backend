import { VentaItem } from 'src/models/venta-item.identity';

export const ventaItemProviders = [
  {
    provide: 'VENTA_ITEM_REPOSITORY',
    useValue: VentaItem,
  },
];
