import { APIGatewayProxyHandler } from 'aws-lambda';
import { ServerlessNestjsApplicationFactory } from 'serverless-lambda-nestjs';
// YOUR Nestjs application root module
import { AppModule } from './app.module';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  const app = new ServerlessNestjsApplicationFactory<AppModule>(
    AppModule,
    {
        // NestFactory.create's option object
        cors: true,
    },
    app => {
      // Call additional API from NestFactory.create result
      app.enableCors();
      return app;
    },
  );
  const result = await app.run(event, context);
  return result;
};