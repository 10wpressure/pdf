import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

import * as template from './input/template_new.json';
import { basicLogo } from './input/base64';
console.log(template.schemas[0].amount);

export const inputs = [
  {
    accountHolderHeader: 'TokenTrade Corporation',
    accountHolderLogo: basicLogo,
    accountHolderAddress1: '30 N Gould St., Ste 24459, Sheridan',
    userName: 'DANIIL DENISOVICH BARANETS',
    accountHolderWiring: '322221004383',
    accountNumberWiring: '1',
    accountHolderAddress2: 'Wyoming 82801, USA',
    accountHolderAddress3: 'Registration Number: 87-4700822',
    userAddress: '15 avenue de Wagram, Paris 75017, France',
    userEmail: 'bardants@gmail.com',
    amount: '133,00',
    amountTotal: '133,00',
    fiatCurrencyWiring: 'USD',
    bankNameWiring: 'KEYBANK NATIONAL ASSOCIATION',
    swiftBicWiring: 'KEYBUS33',
    bankAddressWiring: '7350 Niagara Falls Blvd, Niagara Falls, NY 14304',
    invoiceRef: 'INV-00002',
    invoiceDate: '07/22/2022',
    amountDue: '133',
    fiatCurrencyDue: 'USD',
    paymentDueDate: '08/02/2022',
  },
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap()
  // .then(() => AppService.generatePDF(template, inputs))
  .catch((err) => console.error(err));
