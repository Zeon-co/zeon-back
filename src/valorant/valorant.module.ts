import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { ValorantController } from './valorant.controller';

@Module({
  imports: [CharacterModule],
  controllers: [ValorantController],
})
export class ValorantModule {}
