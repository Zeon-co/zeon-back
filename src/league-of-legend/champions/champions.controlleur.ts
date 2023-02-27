import { Controller } from '@nestjs/common';
import { ChampionsService } from './champions.service';
import { Get, Param, NotFoundException } from '@nestjs/common';

@Controller('champions')
export class ChampionsController {
  constructor(private readonly championsService: ChampionsService) {}

  @Get()
  async getAllChampionss(): Promise<any> {
    const championss = await this.championsService.getAllChampions();
    if (!championss) {
      throw new NotFoundException(`No customers found`);
    }
    return { status: true, data: championss };
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
