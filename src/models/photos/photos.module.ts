import { Module } from '@nestjs/common';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService],
  imports: [CloudinaryModule],
})
export class PhotosModule {}
