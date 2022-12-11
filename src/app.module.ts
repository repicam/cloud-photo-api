import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from './models/cloudinary/cloudinary.module';
import { PhotosModule } from './models/photos/photos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.BBDD_USER}:${process.env.BBDD_PASS}@mybbdd.c3unr1n.mongodb.net/${process.env.BBDD_SCHEMA}?retryWrites=true&w=majority`,
    ),
    CloudinaryModule,
    PhotosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
