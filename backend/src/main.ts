import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import { eventContext } from '@vendia/serverless-express/lib/provider';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import * as express from 'express';

let cachedServer: INestApplication;

async function bootstrapServer(): Promise<INestApplication> {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  app.enableCors();
  await app.init();
  return app;
}

export const handler = async (event: any, context: any, callback: any) => {
  if (!cachedServer) {
    cachedServer = await bootstrapServer();
  }
  return serverlessExpress({ 
    app: cachedServer.getHttpAdapter().getInstance(),
    event,
    context,
    callback,
  })(event, context, callback);
};