import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { MediaService } from './media.service';  
  @Controller()
  export class MediaController {
    constructor(private readonly mediaSerice: MediaService) {}
  
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      return this.mediaSerice.uploadFile(file);
    }
  }