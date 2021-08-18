"use strict";
// import { Commander, OptionValues } from '../../util/commander';
// export abstract class Config {
//    public active: boolean;
//    public name: string;
// }
// /**
//  *
//  * CLI
//  *
//  */
// export class CLI extends Config {
//    public name = 'CLI';
//    public active = false;
//    public target: string;
//    public outFile: string;
//    constructor() {
//       super();
//    }
// }
// /**
//  *
//  * ARG
//  *
//  */
// export class ARG extends Config {
//    public active = true;
//    private _options: OptionValues;
//    private set setOptions(commander: Commander) {
//       this._options = commander.configOpts;
//    }
//    public get options(): OptionValues {
//       return this._options;
//    }
//    constructor() {
//       super();
//       this.initialize();
//    }
//    private initialize() {
//       this.setOptions = new Commander();
//    }
// }
// /**
//  *
//  * Client
//  *
//  */
// interface IClient {
//    config: OptionValues;
// }
// export class Client implements IClient {
//    private _config: OptionValues;
//    public get config(): OptionValues {
//       return this._config;
//    }
//    private set _setConfig(config: OptionValues) {
//       this._config = config;
//    }
//    constructor() {
//       this._setConfig = this._createConfig();
//    }
//    private _createConfig(): OptionValues {
//       const arg = new ARG();
//       if (arg.active) return arg.options;
//       const cli = new CLI();
//       if (cli.active) return cli;
//       throw Error('No target was selected');
//    }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NsaWVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0VBQWtFO0FBRWxFLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLElBQUk7QUFFSixNQUFNO0FBQ04sS0FBSztBQUNMLFNBQVM7QUFDVCxLQUFLO0FBQ0wsTUFBTTtBQUNOLG9DQUFvQztBQUNwQywwQkFBMEI7QUFDMUIsNEJBQTRCO0FBRTVCLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFFN0IscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixPQUFPO0FBQ1AsSUFBSTtBQUVKLE1BQU07QUFDTixLQUFLO0FBQ0wsU0FBUztBQUNULEtBQUs7QUFDTCxNQUFNO0FBQ04sb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQixxQ0FBcUM7QUFFckMsb0RBQW9EO0FBQ3BELDhDQUE4QztBQUM5QyxPQUFPO0FBRVAsMENBQTBDO0FBQzFDLDhCQUE4QjtBQUM5QixPQUFPO0FBRVAscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQiwyQkFBMkI7QUFDM0IsT0FBTztBQUVQLDRCQUE0QjtBQUM1QiwyQ0FBMkM7QUFDM0MsT0FBTztBQUNQLElBQUk7QUFFSixNQUFNO0FBQ04sS0FBSztBQUNMLFlBQVk7QUFDWixLQUFLO0FBQ0wsTUFBTTtBQUNOLHNCQUFzQjtBQUN0QiwyQkFBMkI7QUFDM0IsSUFBSTtBQUVKLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFFcEMseUNBQXlDO0FBQ3pDLDZCQUE2QjtBQUM3QixPQUFPO0FBRVAsb0RBQW9EO0FBQ3BELCtCQUErQjtBQUMvQixPQUFPO0FBRVAscUJBQXFCO0FBQ3JCLGdEQUFnRDtBQUNoRCxPQUFPO0FBRVAsNkNBQTZDO0FBQzdDLCtCQUErQjtBQUMvQiw0Q0FBNEM7QUFFNUMsK0JBQStCO0FBQy9CLG9DQUFvQztBQUVwQywrQ0FBK0M7QUFDL0MsT0FBTztBQUNQLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBDb21tYW5kZXIsIE9wdGlvblZhbHVlcyB9IGZyb20gJy4uLy4uL3V0aWwvY29tbWFuZGVyJztcblxuLy8gZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbmZpZyB7XG4vLyAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuLy8gICAgcHVibGljIG5hbWU6IHN0cmluZztcbi8vIH1cblxuLy8gLyoqXG4vLyAgKlxuLy8gICogQ0xJXG4vLyAgKlxuLy8gICovXG4vLyBleHBvcnQgY2xhc3MgQ0xJIGV4dGVuZHMgQ29uZmlnIHtcbi8vICAgIHB1YmxpYyBuYW1lID0gJ0NMSSc7XG4vLyAgICBwdWJsaWMgYWN0aXZlID0gZmFsc2U7XG5cbi8vICAgIHB1YmxpYyB0YXJnZXQ6IHN0cmluZztcbi8vICAgIHB1YmxpYyBvdXRGaWxlOiBzdHJpbmc7XG5cbi8vICAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgICAgc3VwZXIoKTtcbi8vICAgIH1cbi8vIH1cblxuLy8gLyoqXG4vLyAgKlxuLy8gICogQVJHXG4vLyAgKlxuLy8gICovXG4vLyBleHBvcnQgY2xhc3MgQVJHIGV4dGVuZHMgQ29uZmlnIHtcbi8vICAgIHB1YmxpYyBhY3RpdmUgPSB0cnVlO1xuLy8gICAgcHJpdmF0ZSBfb3B0aW9uczogT3B0aW9uVmFsdWVzO1xuXG4vLyAgICBwcml2YXRlIHNldCBzZXRPcHRpb25zKGNvbW1hbmRlcjogQ29tbWFuZGVyKSB7XG4vLyAgICAgICB0aGlzLl9vcHRpb25zID0gY29tbWFuZGVyLmNvbmZpZ09wdHM7XG4vLyAgICB9XG5cbi8vICAgIHB1YmxpYyBnZXQgb3B0aW9ucygpOiBPcHRpb25WYWx1ZXMge1xuLy8gICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4vLyAgICB9XG5cbi8vICAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgICAgc3VwZXIoKTtcbi8vICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuLy8gICAgfVxuXG4vLyAgICBwcml2YXRlIGluaXRpYWxpemUoKSB7XG4vLyAgICAgICB0aGlzLnNldE9wdGlvbnMgPSBuZXcgQ29tbWFuZGVyKCk7XG4vLyAgICB9XG4vLyB9XG5cbi8vIC8qKlxuLy8gICpcbi8vICAqIENsaWVudFxuLy8gICpcbi8vICAqL1xuLy8gaW50ZXJmYWNlIElDbGllbnQge1xuLy8gICAgY29uZmlnOiBPcHRpb25WYWx1ZXM7XG4vLyB9XG5cbi8vIGV4cG9ydCBjbGFzcyBDbGllbnQgaW1wbGVtZW50cyBJQ2xpZW50IHtcbi8vICAgIHByaXZhdGUgX2NvbmZpZzogT3B0aW9uVmFsdWVzO1xuXG4vLyAgICBwdWJsaWMgZ2V0IGNvbmZpZygpOiBPcHRpb25WYWx1ZXMge1xuLy8gICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbi8vICAgIH1cblxuLy8gICAgcHJpdmF0ZSBzZXQgX3NldENvbmZpZyhjb25maWc6IE9wdGlvblZhbHVlcykge1xuLy8gICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuLy8gICAgfVxuXG4vLyAgICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICAgIHRoaXMuX3NldENvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZygpO1xuLy8gICAgfVxuXG4vLyAgICBwcml2YXRlIF9jcmVhdGVDb25maWcoKTogT3B0aW9uVmFsdWVzIHtcbi8vICAgICAgIGNvbnN0IGFyZyA9IG5ldyBBUkcoKTtcbi8vICAgICAgIGlmIChhcmcuYWN0aXZlKSByZXR1cm4gYXJnLm9wdGlvbnM7XG5cbi8vICAgICAgIGNvbnN0IGNsaSA9IG5ldyBDTEkoKTtcbi8vICAgICAgIGlmIChjbGkuYWN0aXZlKSByZXR1cm4gY2xpO1xuXG4vLyAgICAgICB0aHJvdyBFcnJvcignTm8gdGFyZ2V0IHdhcyBzZWxlY3RlZCcpO1xuLy8gICAgfVxuLy8gfVxuIl19