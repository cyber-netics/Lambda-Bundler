import { Command, Option, OptionValues } from 'commander';

export { OptionValues } from 'commander';

export class Commander extends Command {
   constructor() {
      super();
      this.initialize();
   }

   public get configOpts(): OptionValues {
      return this.parse().opts();
   }

   private initialize(): void {
      this.addOption(new Option('-t, --target <string>', 'target directory'))
         .addOption(new Option('-o, --outFile <string>', 'output file'))
         .addOption(new Option('-h, --help [letters...]', 'help'));
   }
}
