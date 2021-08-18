import * as fs from 'fs';
import * as path from 'path';

export class FileSystem {
   private fileName = 'bundless.json';
   private _status: boolean;
   public _configOpts: any;

   public get status(): boolean {
      return this._status;
   }

   private set status(status: boolean) {
      this._status = status;
   }

   public get configOpts(): any {
      return this._configOpts;
   }

   private set configOpts(opts: any) {
      this._configOpts = opts;
   }

   constructor() {
      this.initialize();
   }

   private initialize() {
      this._createOptions();
      this._setStatus();
   }

   private _setStatus() {
      if (this.exists() && this.configOpts.target) {
         this.status = true;
      } else {
         this.status = false;
      }
   }

   private _createOptions() {
      this.configOpts = this.readFile();
   }

   private exists(): boolean {
      return fs.existsSync(path.resolve(this.fileName));
   }

   private readFile() {
      const fileContetn = fs.readFileSync(path.resolve(this.fileName), {
         flag: 'r',
         encoding: 'utf8',
      });

      return JSON.parse(fileContetn);
   }
}
