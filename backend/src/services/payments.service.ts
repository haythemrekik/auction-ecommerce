import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/client';
import { PaymentDto } from '../modules/payments/dto/payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async processPayment(paymentDto: PaymentDto): Promise<any> {
    // Logic to process payment
    // This could include validating payment details, interacting with a payment gateway, etc.
    
    // Example: Save payment details to the database
    const payment = await this.prisma.payment.create({
      data: {
        amount: paymentDto.amount,
        userId: paymentDto.userId,
        status: 'PENDING', // or 'COMPLETED', based on the payment processing result
      },
    });

    return payment;
  }

  async refundPayment(paymentId: string): Promise<any> {
    // Logic to refund a payment
    // This could include interacting with a payment gateway to process the refund

    const payment = await this.prisma.payment.update({
      where: { id: paymentId },
      data: { status: 'REFUNDED' },
    });

    return payment;
  }

  async getPaymentHistory(userId: string): Promise<any[]> {
    // Logic to retrieve payment history for a user
    return this.prisma.payment.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}