"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundler = void 0;
const interface_1 = require("./interface");
const fs = require("fs");
const path = require("path");
class Client {
    constructor() {
        this._setConfig = this._createConfig();
    }
    get config() {
        return this._config;
    }
    set _setConfig(config) {
        this._config = config;
    }
    _createConfig() {
        const cli = new interface_1.CLI();
        if (cli.active)
            return cli.options;
        const arg = new interface_1.JRC();
        if (arg.active)
            return arg.options;
        throw Error('No target was selected');
    }
}
class Bundler extends Client {
    constructor() {
        super();
        this._bundler();
    }
    get files() {
        const filePath = this.config.target;
        return fs.readdirSync(path.resolve(filePath));
    }
    _bundler() {
        this.files.map((files) => {
            console.log('files', files);
        });
    }
}
exports.Bundler = Bundler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1QztBQUd2Qyx5QkFBeUI7QUFDekIsNkJBQTZCO0FBRTdCLE1BQU0sTUFBTTtJQVdUO1FBQ0csSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQVZELElBQWMsTUFBTTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQVksVUFBVSxDQUFDLE1BQW9CO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFNTyxhQUFhO1FBQ2xCLE1BQU0sR0FBRyxHQUFHLElBQUksZUFBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxHQUFHLENBQUMsTUFBTTtZQUFFLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUVuQyxNQUFNLEdBQUcsR0FBRyxJQUFJLGVBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksR0FBRyxDQUFDLE1BQU07WUFBRSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFFbkMsTUFBTSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0g7QUFFRCxNQUFhLE9BQVEsU0FBUSxNQUFNO0lBQ2hDO1FBQ0csS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQVksS0FBSztRQUNkLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVPLFFBQVE7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNIO0FBaEJELDBCQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpSQywgQ0xJIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT3B0aW9uVmFsdWVzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jbGFzcyBDbGllbnQge1xuICAgcHJpdmF0ZSBfY29uZmlnOiBPcHRpb25WYWx1ZXM7XG5cbiAgIHByb3RlY3RlZCBnZXQgY29uZmlnKCk6IE9wdGlvblZhbHVlcyB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgfVxuXG4gICBwcml2YXRlIHNldCBfc2V0Q29uZmlnKGNvbmZpZzogT3B0aW9uVmFsdWVzKSB7XG4gICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICB9XG5cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5fc2V0Q29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKCk7XG4gICB9XG5cbiAgIHByaXZhdGUgX2NyZWF0ZUNvbmZpZygpOiBPcHRpb25WYWx1ZXMge1xuICAgICAgY29uc3QgY2xpID0gbmV3IENMSSgpO1xuICAgICAgaWYgKGNsaS5hY3RpdmUpIHJldHVybiBjbGkub3B0aW9ucztcblxuICAgICAgY29uc3QgYXJnID0gbmV3IEpSQygpO1xuICAgICAgaWYgKGFyZy5hY3RpdmUpIHJldHVybiBhcmcub3B0aW9ucztcblxuICAgICAgdGhyb3cgRXJyb3IoJ05vIHRhcmdldCB3YXMgc2VsZWN0ZWQnKTtcbiAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJ1bmRsZXIgZXh0ZW5kcyBDbGllbnQge1xuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fYnVuZGxlcigpO1xuICAgfVxuXG4gICBwcml2YXRlIGdldCBmaWxlcygpIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5jb25maWcudGFyZ2V0O1xuICAgICAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHBhdGgucmVzb2x2ZShmaWxlUGF0aCkpO1xuICAgfVxuXG4gICBwcml2YXRlIF9idW5kbGVyKCkge1xuICAgICAgdGhpcy5maWxlcy5tYXAoKGZpbGVzKSA9PiB7XG4gICAgICAgICBjb25zb2xlLmxvZygnZmlsZXMnLCBmaWxlcyk7XG4gICAgICB9KTtcbiAgIH1cbn1cbiJdfQ==