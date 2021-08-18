import * as fs from 'fs';

export class FS {
   public static readJsonFile(file: string): string[] {
      const fileContent = fs.readFileSync(file, {
         flag: 'r',
         encoding: 'utf8',
      });

      return JSON.parse(fileContent);
   }
}
