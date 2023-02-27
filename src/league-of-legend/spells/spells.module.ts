import { Module } from '@nestjs/common';
import { SpellsController } from './spells.controleur';
import { SpellsService } from './spells.service';

@Module({
  controllers: [SpellsController],
  providers: [SpellsService],
})
export class SpellsModule {}
