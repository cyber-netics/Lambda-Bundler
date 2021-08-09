import { Commander, OptionValues } from '../../util/commander';

export abstract class Config {
   public active: boolean;
   public name: string;
}

/**
 *
 * CLI
 *
 */
export class CLI extends Config {
   public name = 'CLI';
   public active = false;

   public target: string;
   public outFile: string;

   constructor() {
      super();
   }
}

/**
 *
 * ARG
 *
 */

export class ARG extends Config {
   public name = 'CLI';
   public active = true;
   public target: string;
   public outFile: string;
   private _options: OptionValues;

   private set setOptions(commander: Commander) {
      this._options = commander.configOpts;
   }

   public get options(): OptionValues {
      return this._options;
   }

   constructor() {
      super();
      this.initialize();
   }

   private initialize() {
      this.setOptions = new Commander();
   }
}

/**
 *
 * Client
 *
 */
interface IClient {
   config: Config;
}

export class Client implements IClient {
   private _config: Config;

   public get config(): Config {
      return this._config;
   }

   private set _setConfig(config: Config) {
      this._config = config;
   }

   constructor() {
      this._setConfig = this._createConfig();
   }

   private _createConfig(): Config {
      const arg = new ARG();
      if (arg.active) return arg;

      const cli = new CLI();
      if (cli.active) return cli;

      throw Error('No target was selected');
   }
}
