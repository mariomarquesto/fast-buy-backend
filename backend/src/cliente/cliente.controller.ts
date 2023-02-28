import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { IClienteDto } from 'src/models/cliente.dto';
import { Cliente } from 'src/models/cliente.identity';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  getClientes(@Res({ passthrough: true }) res: Response): Promise<Cliente[]> {
    return this.clienteService.findAll(res);
  }

  @Post()
  createCliente(@Body() cliente: IClienteDto): Promise<Cliente> {
    return this.clienteService.createOne(cliente);
  }
}
