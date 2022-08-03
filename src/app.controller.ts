import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const template = require('./input/template_new.json');
import { basicLogo } from './input/base64';
import { inputs } from './main';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/pdf')
  async getPdf() {
    const pdf = await AppService.generatePDF(template, inputs);
    console.log(pdf);
    return pdf;
  }
}
