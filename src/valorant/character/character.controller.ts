import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  async getAllCharacters(): Promise<any> {
    const characters = await this.characterService.getAllCharacters();
    if (!characters) {
      throw new NotFoundException(`No customers found`);
    }
    return { status: true, data: characters };
  }

  @Get(':name')
  async getCharacterByName(@Param('name') name: string): Promise<any> {
    const character = await this.characterService.getCharacterByName(name);
    if (!character) {
      throw new NotFoundException(`character with ID "${name}" not found`);
    }
    return { status: true, data: character };
  }
}
