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
    get files() {
        const filePath = this.config.target;
        return fs.readdirSync(path.resolve(filePath));
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
    _bundler() {
        this.files.map((files) => {
            console.log('files', files);
        });
    }
}
exports.Bundler = Bundler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1QztBQUd2Qyx5QkFBeUI7QUFDekIsNkJBQTZCO0FBRTdCLE1BQU0sTUFBTTtJQVdUO1FBQ0csSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQVZELElBQWMsTUFBTTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQVksVUFBVSxDQUFDLE1BQW9CO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFNRCxJQUFjLEtBQUs7UUFDaEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDcEMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8sYUFBYTtRQUNsQixNQUFNLEdBQUcsR0FBRyxJQUFJLGVBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksR0FBRyxDQUFDLE1BQU07WUFBRSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFFbkMsTUFBTSxHQUFHLEdBQUcsSUFBSSxlQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLEdBQUcsQ0FBQyxNQUFNO1lBQUUsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBRW5DLE1BQU0sS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNIO0FBRUQsTUFBYSxPQUFRLFNBQVEsTUFBTTtJQUNoQztRQUNHLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxRQUFRO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSDtBQVhELDBCQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSlJDLCBDTEkgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBPcHRpb25WYWx1ZXMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmNsYXNzIENsaWVudCB7XG4gICBwcml2YXRlIF9jb25maWc6IE9wdGlvblZhbHVlcztcblxuICAgcHJvdGVjdGVkIGdldCBjb25maWcoKTogT3B0aW9uVmFsdWVzIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICB9XG5cbiAgIHByaXZhdGUgc2V0IF9zZXRDb25maWcoY29uZmlnOiBPcHRpb25WYWx1ZXMpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgIH1cblxuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLl9zZXRDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoKTtcbiAgIH1cblxuICAgcHJvdGVjdGVkIGdldCBmaWxlcygpIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5jb25maWcudGFyZ2V0O1xuICAgICAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHBhdGgucmVzb2x2ZShmaWxlUGF0aCkpO1xuICAgfVxuXG4gICBwcml2YXRlIF9jcmVhdGVDb25maWcoKTogT3B0aW9uVmFsdWVzIHtcbiAgICAgIGNvbnN0IGNsaSA9IG5ldyBDTEkoKTtcbiAgICAgIGlmIChjbGkuYWN0aXZlKSByZXR1cm4gY2xpLm9wdGlvbnM7XG5cbiAgICAgIGNvbnN0IGFyZyA9IG5ldyBKUkMoKTtcbiAgICAgIGlmIChhcmcuYWN0aXZlKSByZXR1cm4gYXJnLm9wdGlvbnM7XG5cbiAgICAgIHRocm93IEVycm9yKCdObyB0YXJnZXQgd2FzIHNlbGVjdGVkJyk7XG4gICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdW5kbGVyIGV4dGVuZHMgQ2xpZW50IHtcbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuX2J1bmRsZXIoKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBfYnVuZGxlcigpIHtcbiAgICAgIHRoaXMuZmlsZXMubWFwKChmaWxlcykgPT4ge1xuICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGVzJywgZmlsZXMpO1xuICAgICAgfSk7XG4gICB9XG59XG4iXX0=