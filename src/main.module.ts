import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService_old } from './main.service_old';

@Module({
    controllers: [MainController],
    providers: [MainService_old],
})
export class MainModule {}
