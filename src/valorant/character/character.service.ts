import { Injectable } from '@nestjs/common';
import data from '@data/valorant/character.json';

@Injectable()
export class CharacterService {
  async getAllCharacters(): Promise<any> {
    return data ? data : null;
  }

  async getCharacterByName(name: string): Promise<any> {
    return data
      ? data.find((e) => e.displayName.toLowerCase() === name.toLowerCase())
      : null;
  }
}
