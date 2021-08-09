export abstract class Config {
   public active: boolean;
   public name: string;
}

export class CLI extends Config {
   public name = 'CLI';
   public active = false;

   constructor() {
      super();
   }
}

export class ARG extends Config {
   public name = 'ARG';
   public active = true;

   constructor() {
      super();
   }
}
