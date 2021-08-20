import { execSync } from 'child_process';

export interface NpmProps {
   prod: boolean;
}

export class NpmCommand {
   private opts: NpmProps;

   constructor(opts: NpmProps) {
      this.opts = opts;
   }

   public install(prefix?: string): void {
      execSync(`npm install ${this.opts.prod ? '--only=prod' : ''} --prefix ${prefix}`);
   }
}
