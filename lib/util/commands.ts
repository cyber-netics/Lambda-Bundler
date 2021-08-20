import { FS } from './fileSystem';
import { Compress, ZipProps } from './compress';
import { NpmCommand, NpmProps } from './npmCommand';

export class Commands {
   public static npmInstall(prefix: string, opts: NpmProps): void {
      const npm = new NpmCommand(opts);
      npm.install(prefix);
   }

   public static cdToFile(filePath: string): string {
      return `cd ${filePath}`;
   }

   public static zipFile(file: string, opts: ZipProps): void {
      const zip = new Compress(opts);
      zip.compress(file);
   }

   public static removeFiles(destFile: string, fileList: string[]): void {
      fileList.map((file) => FS.deleteFile(`${destFile}/${file}`));
   }

   public static copyFile(source: string, destination: string): void {
      FS.copyFile(source, destination);
   }
}
