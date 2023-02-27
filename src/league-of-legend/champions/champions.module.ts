import { Module } from '@nestjs/common';
import { ChampionsController } from './champions.controlleur';
import { ChampionsService } from './champions.service';

@Module({
  controllers: [ChampionsController],
  providers: [ChampionsService],
})
export class ChampionsModule {}
