import * as fs from 'fs';
import * as fse from 'fs-extra';
import { OptionValues } from '../types';

export class FS {
   public static readJsonFile(file: string): OptionValues {
      const fileContent = fs.readFileSync(file, {
         flag: 'r',
         encoding: 'utf8',
      });
      return JSON.parse(fileContent);
   }

   public static deleteFile(file: string): void {
      fs.unlinkSync(file);
   }

   public static copyFile(source: string, destination: string, overwrite = true): void {
      fse.copySync(source, destination, { overwrite });
   }
}
