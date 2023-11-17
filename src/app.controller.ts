import { Controller, Res, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/chat')
  @Render('index')
  Home() {
    return;
  }

  @Get('api/chat')
  async chat(@Res() res) {
    const messages = await this.appService.getMessages();
    res.json(messages);
  }
}
