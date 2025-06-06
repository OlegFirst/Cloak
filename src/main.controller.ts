import { Controller, Get, Req } from '@nestjs/common';
import { MainService_old } from './main.service_old';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { getProviderData, getUaParserData } from './utils';

@Controller('/')
export class MainController {
    constructor(private mainService: MainService_old) {}

    @ApiOperation({ summary: 'Getting request from an outer application' })
    @ApiResponse({ status: 200, type: Object })
    @Get('/')
    home(@Req() request: Request) {
        const uaParserRes = getUaParserData(request);
        const providerData = getProviderData(request);

        console.log({ uaParserRes, providerData});
        return JSON.stringify({ uaParserRes, providerData });
    }
}
