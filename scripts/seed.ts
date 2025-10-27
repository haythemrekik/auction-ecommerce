import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed Users
    const user1 = await prisma.user.create({
        data: {
            username: 'user1',
            email: 'user1@example.com',
            password: 'password123',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            username: 'user2',
            email: 'user2@example.com',
            password: 'password123',
        },
    });

    // Seed Products
    const product1 = await prisma.product.create({
        data: {
            name: 'Product 1',
            description: 'Description for Product 1',
            marketValue: 3000,
            cogs: 2700,
            reservePrice: 2100,
        },
    });

    const product2 = await prisma.product.create({
        data: {
            name: 'Product 2',
            description: 'Description for Product 2',
            marketValue: 1500,
            cogs: 1200,
            reservePrice: 1050,
        },
    });

    // Seed Auctions
    const auction1 = await prisma.auction.create({
        data: {
            productId: product1.id,
            startTime: new Date(),
            endTime: new Date(Date.now() + 20 * 60 * 1000), // 20 minutes from now
            currentPrice: 0,
            status: 'ACTIVE',
        },
    });

    const auction2 = await prisma.auction.create({
        data: {
            productId: product2.id,
            startTime: new Date(),
            endTime: new Date(Date.now() + 20 * 60 * 1000), // 20 minutes from now
            currentPrice: 0,
            status: 'ACTIVE',
        },
    });

    console.log({ user1, user2, product1, product2, auction1, auction2 });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });