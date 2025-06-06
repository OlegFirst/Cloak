import { Injectable, Inject, Scope, Req } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { request, Request } from 'express';
import { getUaParserData } from './utils';

@Injectable({ scope: Scope.REQUEST })
export class MainService_old {
  // constructor(@Inject(REQUEST) private request: Request) {}
  constructor() {}

  home(@Req() request: Request) {
    console.log(request);

    // const uaParserRes = getUaParserData(request);
    // console.log(uaParserRes);
    //
    // return JSON.stringify(uaParserRes);
  }
}
