import * as fs from 'fs';
import * as fse from 'fs-extra';
import * as cp from 'child_process';

export class Commands {
   public static npmInstall(prefix: string, opts?: any): void {
      cp.execSync(`npm install ${opts.prod ? '--only=prod' : ''} --prefix ${prefix}`);
   }

   public static cdToFile(filePath: string): string {
      return `cd ${filePath}`;
   }

   public static zipFile(file: string, opts?: any): void {
      // Zip specified file
      const cmd = `zip -r ${file}.zip ${file}`;

      // Cd into directory and run command
      `cd ${opts.inside} && ${cmd}`;
   }

   public static removeFiles(destFile: string, fileList: string[]): void {
      fileList.map((file) => fs.unlinkSync(`${destFile}/${file}`));
   }

   public static copyFile(source: string, destination: string, overwrite = true): void {
      fse.copySync(source, destination, { overwrite });
   }
}
