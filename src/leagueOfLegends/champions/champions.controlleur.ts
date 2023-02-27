import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ChampionsService } from './champions.service';

@Controller('champions')
export class ChampionsController {
  constructor(private readonly championsService: ChampionsService) {}

  @Get()
  async getAllChampions(): Promise<any> {
    const champions = await this.championsService.getAllChampions();
    if (!champions) {
      throw new NotFoundException(`No customers found`);
    }
    return { status: true, data: champions };
  }

  @Get(':name')
  async getChampionsByName(@Param('name') name: string): Promise<any> {
    const champions = await this.championsService.getChampionByName(name);
    if (!champions) {
      throw new NotFoundException(`champions with ID "${name}" not found`);
    }
    return { status: true, data: champions };
  }
}
