import { Controller, Get } from '@nestjs/common';

@Controller('healthz')
export class HealthzController {
    @Get('ready')
    getHello(): string {
        return "healtcheck";
    }
}
