import { Injectable } from '@nestjs/common';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { generate, GenerateProps, Template } from '@pdfme/generator';

@Injectable()
export class AppService {
  static async generatePDF(
    template: Template,
    inputs: Array<Record<string, string>>,
  ): Promise<Uint8Array> {
    const pdf = await generate({ template, inputs });
    console.log(pdf);
    writeFileSync(join(__dirname, `file.pdf`), pdf);
    return pdf;
  }
}
