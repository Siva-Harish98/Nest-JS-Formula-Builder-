import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { prismaServiceService } from './prismaService';
import { get } from 'http';
import { tableCreation } from './prisma.dto';




@Controller('prisma')
export class PrismaController {
constructor(private prismaService:prismaServiceService){}
    @Get('/prismaValid')
  prismavalidation(){
    return this.prismaService.queryTable()
  }

  @Post('/createTable')
  async prismaCrtTbl(@Body() data : tableCreation, @Res() res){
    let responseData = await this.prismaService.createTable(data)
    res.send(responseData)
  }
}
