import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { GuardGuard } from './guard.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('authentication')
  @UseGuards(GuardGuard)
  authTo(@Body('status') status: string) {
    console.log('inside authentication')
    return `Auth ok with status ${status}`;
  }
}
