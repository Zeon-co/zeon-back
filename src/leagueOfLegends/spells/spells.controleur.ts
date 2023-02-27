import { Controller } from '@nestjs/common';
import { SpellsService } from './spells.service';

@Controller('spells')
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  //   @Get()
  //   async getAllSpellss(): Promise<any> {
  //     const spellss = await this.spellsService.getAllSpellss();
  //     if (!spellss) {
  //       throw new NotFoundException(`No customers found`);
  //     }
  //     return { status: true, data: spellss };
  //   }

  //   @Get(':name')
  //   async getSpellsByName(@Param('name') name: string): Promise<any> {
  //     const spells = await this.spellsService.getSpellsByName(name);
  //     if (!spells) {
  //       throw new NotFoundException(`spells with ID "${name}" not found`);
  //     }
  //     return { status: true, data: spells }
}
