import { Controller, Get } from '@nestjs/common';

@Controller('valorant')
export class ValorantController {
  @Get()
  findAll(): string {
    return 'This is the Valorant module.';
  }
}
