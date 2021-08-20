import * as cp from 'child_process';
import * as path from 'path';

export interface ZipProps {
   inside: string;
}

abstract class CompressOS {
   /**
    *
    * @param innerDir
    */
   constructor(innerDir: string) {
      this.innerDirCommand(innerDir);
   }

   /**
    *
    * @param innerDir / Directory where packages
    */
   protected abstract innerDirCommand(innerDir: string): void;

   /**
    *
    * @param pkg / Package/Directory to compress
    */
   protected abstract compressCommand(pkg: string): void;

   /**
    *
    * @param pkg / Package Path
    * @returns {String}
    */
   protected abstract createCommand(pkg: string): void;
}

export class Compress extends CompressOS {
   private command: string;

   constructor(opts: ZipProps) {
      super(opts.inside);
   }

   protected innerDirCommand(innerDir: string): void {
      if (innerDir && innerDir.length) {
         this.command = `cd ${path.resolve(innerDir)} && `;
      }
   }

   protected compressCommand(pkg: string): void {
      this.command += `zip -r ${pkg}.zip ${pkg}`;
   }

   protected createCommand(pkg: string): string {
      this.compressCommand(pkg);
      return this.command;
   }

   public compress(file: string): void {
      cp.execSync(this.createCommand(file));
   }
}
