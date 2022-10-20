import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { CryptoController } from '../crypto/crypto.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { CryptoService } from '../crypto/crypto.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CryptoController],
  providers: [AppService, CryptoService],
})
export class AppModule {}
