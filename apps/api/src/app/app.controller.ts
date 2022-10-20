import { Body, Controller, Delete, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getData() {
    return this.appService.getData();
  }

  @Post('todos')
  addTodo(@Body() body) {
    const { title } = body;
    return this.appService.addTodo(title);
  }

  @Post('todos/delete')
  deleteTodo(@Body() body) {
    const { index } = body;
    return this.appService.deleteTodo(index);
  }
}
