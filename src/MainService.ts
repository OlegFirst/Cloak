import { Injectable } from '@nestjs/common';

@Injectable()
export class MainService {
  getUsers() {
    return [{ id: 1, name: 'Ivan' }];
  }
}
