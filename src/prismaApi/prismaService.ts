import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { raw } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

@Injectable()
export class prismaServiceService {
  async queryTable() {
    const allEmployees = await prisma.employee.findMany();
    console.log('All Employees:', allEmployees);
    return allEmployees;
  }

  async createTable(params) {
   const tableCreation = await prisma.$queryRaw(raw(`create table \`${params.tableName.toLowerCase()}\` (serial_no INT AUTO_INCREMENT PRIMARY KEY,capture_date DATE)`))
   return tableCreation
  }
}
