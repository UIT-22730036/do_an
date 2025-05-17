import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import { Readable } from 'stream';

@Injectable()
export class CsvService {
  async processCsvFile(filePath: string): Promise<any[]> {
    const results: any[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async processCsvBuffer(buffer: Buffer): Promise<any[]> {
    const results: any[] = [];
    const readable = Readable.from(buffer);

    return new Promise((resolve, reject) => {
      readable
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  // Example of processing the parsed data
  async analyzeCsvData(data: any[]): Promise<any> {
    // Your custom data processing logic here
    return { rowCount: data.length };
  }
}
