import { Injectable, Inject } from '@nestjs/common';
import { Response } from 'express';
import { IClienteDto } from 'src/models/cliente.dto';
import { Cliente } from 'src/models/cliente.identity';

@Injectable()
export class ClienteService {
  constructor(
    @Inject('CLIENTE_REPOSITORY')
    private clienteRepository: typeof Cliente,
  ) {}

  async findAll(res: Response): Promise<Cliente[]> {
    const result = await this.clienteRepository.findAndCountAll<Cliente>();

    const { rows, count } = result;

    res.set('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set('X-Total-Count', count.toString());

    return rows;
  }

  async createOne(cliente: IClienteDto): Promise<Cliente> {
    const { name, lastName, phoneNumber, dni, address, zipCode } = cliente;

    return this.clienteRepository.create({
      name,
      lastName,
      phoneNumber,
      dni,
      address,
      zipCode,
    });
  }
}
