import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './valorant/character/character.module';
import { ValorantModule } from './valorant/valorant.module';
import { LeagueOfLegendModule } from './league-of-legend/league-of-legend.module';

@Module({
  imports: [CharacterModule, ValorantModule, LeagueOfLegendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
