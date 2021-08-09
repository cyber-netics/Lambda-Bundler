import { CLI, ARG, Config } from './config';

interface IClient {
   config: Config;
}

export class Client implements IClient {
   private _config: Config;

   constructor() {
      this._setConfig = this._createConfig();
   }

   public get config(): Config {
      return this._config;
   }

   private set _setConfig(config: Config) {
      this._config = config;
   }

   private _createConfig(): Config {
      const arg = new ARG();
      if (arg.active) return arg;

      const cli = new CLI();
      if (cli.active) return cli;
   }
}
