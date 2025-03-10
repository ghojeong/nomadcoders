import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return '<h1>Welcome To My Movie API</h1>';
  }
}
