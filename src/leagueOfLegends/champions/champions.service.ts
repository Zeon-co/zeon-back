import { Injectable } from '@nestjs/common';
import data from '@data/league-of-legends/champions/championsClean.json';
@Injectable()
export class ChampionsService {
  async getAllChampions(): Promise<any> {
    return data ? data : null;
  }

  async getChampionByName(name: string): Promise<any> {
    return data
      ? data.find((e) => e.name.toLowerCase() === name.toLowerCase())
      : null;
  }
}
