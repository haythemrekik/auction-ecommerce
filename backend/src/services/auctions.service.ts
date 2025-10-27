import { Injectable } from '@nestjs/common';
import { Auction } from '../models/auction.model'; // Assuming there's a model for Auction
import { PrismaService } from '../prisma/client'; // Importing Prisma service for database interactions

@Injectable()
export class AuctionsService {
    constructor(private readonly prisma: PrismaService) {}

    async createAuction(data: CreateAuctionDto): Promise<Auction> {
        return this.prisma.auction.create({
            data,
        });
    }

    async getAuctionById(id: number): Promise<Auction> {
        return this.prisma.auction.findUnique({
            where: { id },
        });
    }

    async getAllAuctions(): Promise<Auction[]> {
        return this.prisma.auction.findMany();
    }

    async updateAuction(id: number, data: UpdateAuctionDto): Promise<Auction> {
        return this.prisma.auction.update({
            where: { id },
            data,
        });
    }

    async deleteAuction(id: number): Promise<Auction> {
        return this.prisma.auction.delete({
            where: { id },
        });
    }

    // Additional business logic methods can be added here
}