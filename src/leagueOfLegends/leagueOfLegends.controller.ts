import { Controller, Get } from '@nestjs/common';

@Controller('leagueOfLegends')
export class LeagueOfLegendsController {
  @Get()
  findAll(): string {
    return 'This is the LeagueOfLegends module.';
  }
}
