import { Module } from '@nestjs/common';
import { ChampionsModule } from './champions/champions.module';
import { LeagueOfLegendsController } from './leagueOfLegends.controller';

@Module({
  imports: [ChampionsModule],
  controllers: [LeagueOfLegendsController],
})
export class LeagueOfLegendsModule {}
