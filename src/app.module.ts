import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValorantModule } from './valorant/valorant.module';
import { LeagueOfLegendsModule } from './leagueOfLegends/leagueOfLegends.module';

@Module({
  imports: [ValorantModule, LeagueOfLegendsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
