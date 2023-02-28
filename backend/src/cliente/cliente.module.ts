import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ClienteController } from './cliente.controller';
import { clienteProviders } from './cliente.provider';
import { ClienteService } from './cliente.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ClienteController],
  providers: [ClienteService, ...clienteProviders],
})
export class ClienteModule {}
