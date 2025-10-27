import { Module } from '@nestjs/common';
import { AuctionsController } from './controllers/auctions.controller';
import { ProductsController } from './controllers/products.controller';
import { UsersController } from './controllers/users.controller';
import { AuctionsService } from './services/auctions.service';
import { PaymentsService } from './services/payments.service';
import { CreditsService } from './services/credits.service';
import { AuctionsGateway } from './gateways/auctions.gateway';
import { AuthModule } from './modules/auth/auth.module';
import { AuctionsModule } from './modules/auctions/auctions.module';
import { ProductsModule } from './modules/products/products.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [
    AuthModule,
    AuctionsModule,
    ProductsModule,
    PaymentsModule,
  ],
  controllers: [
    AuctionsController,
    ProductsController,
    UsersController,
  ],
  providers: [
    AuctionsService,
    PaymentsService,
    CreditsService,
    AuctionsGateway,
  ],
})
export class AppModule {}