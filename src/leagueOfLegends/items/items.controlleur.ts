import { Controller } from '@nestjs/common';
import { ItemsService } from 'leagueOfLegends/items/items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  //   @Get()
  //   async getAllItemss(): Promise<any> {
  //     const itemss = await this.itemsService.getAllItemss();
  //     if (!itemss) {
  //       throw new NotFoundException(`No customers found`);
  //     }
  //     return { status: true, data: itemss };
  //   }

  //   @Get(':name')
  //   async getItemsByName(@Param('name') name: string): Promise<any> {
  //     const items = await this.itemsService.getItemsByName(name);
  //     if (!items) {
  //       throw new NotFoundException(`items with ID "${name}" not found`);
  //     }
  //     return { status: true, data: items }
}
