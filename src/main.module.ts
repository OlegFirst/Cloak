import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './MainService';

@Module({
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule {}
