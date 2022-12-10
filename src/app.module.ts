import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.BBDD_USER}:${process.env.BBDD_PASS}@mybbdd.c3unr1n.mongodb.net/${process.env.BBDD_SCHEMA}?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
