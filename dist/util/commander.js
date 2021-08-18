"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commander = void 0;
const commander_1 = require("commander");
class Commander extends commander_1.Command {
    constructor() {
        super();
        this.initialize();
    }
    get configOpts() {
        return this.parse().opts();
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    initialize() {
        this._createOptions();
        this._setStatus();
    }
    _setStatus() {
        if (this.configOpts.target) {
            this.status = true;
        }
        else {
            this.status = false;
        }
    }
    _createOptions() {
        this.addOption(new commander_1.Option('-t, --target <string>', 'target directory'))
            .addOption(new commander_1.Option('-o, --outFile <string>', 'output file'))
            .addOption(new commander_1.Option('-h, --help [letters...]', 'help'));
    }
}
exports.Commander = Commander;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3V0aWwvY29tbWFuZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUEwRDtBQUUxRCxNQUFhLFNBQVUsU0FBUSxtQkFBTztJQWVuQztRQUNHLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFmRCxJQUFXLFVBQVU7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBWSxNQUFNLENBQUMsTUFBZTtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBT08sVUFBVTtRQUNmLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLFVBQVU7UUFDZixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO2FBQU07WUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN0QjtJQUNKLENBQUM7SUFFTyxjQUFjO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxrQkFBTSxDQUFDLHVCQUF1QixFQUFFLGtCQUFrQixDQUFDLENBQUM7YUFDbkUsU0FBUyxDQUFDLElBQUksa0JBQU0sQ0FBQyx3QkFBd0IsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUM5RCxTQUFTLENBQUMsSUFBSSxrQkFBTSxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNIO0FBdENELDhCQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQsIE9wdGlvbiwgT3B0aW9uVmFsdWVzIH0gZnJvbSAnY29tbWFuZGVyJztcblxuZXhwb3J0IGNsYXNzIENvbW1hbmRlciBleHRlbmRzIENvbW1hbmQge1xuICAgcHJpdmF0ZSBfc3RhdHVzOiBib29sZWFuO1xuXG4gICBwdWJsaWMgZ2V0IGNvbmZpZ09wdHMoKTogT3B0aW9uVmFsdWVzIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlKCkub3B0cygpO1xuICAgfVxuXG4gICBwdWJsaWMgZ2V0IHN0YXR1cygpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICB9XG5cbiAgIHByaXZhdGUgc2V0IHN0YXR1cyhzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgIH1cblxuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICB9XG5cbiAgIHByaXZhdGUgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuX2NyZWF0ZU9wdGlvbnMoKTtcbiAgICAgIHRoaXMuX3NldFN0YXR1cygpO1xuICAgfVxuXG4gICBwcml2YXRlIF9zZXRTdGF0dXMoKSB7XG4gICAgICBpZiAodGhpcy5jb25maWdPcHRzLnRhcmdldCkge1xuICAgICAgICAgdGhpcy5zdGF0dXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgX2NyZWF0ZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgICB0aGlzLmFkZE9wdGlvbihuZXcgT3B0aW9uKCctdCwgLS10YXJnZXQgPHN0cmluZz4nLCAndGFyZ2V0IGRpcmVjdG9yeScpKVxuICAgICAgICAgLmFkZE9wdGlvbihuZXcgT3B0aW9uKCctbywgLS1vdXRGaWxlIDxzdHJpbmc+JywgJ291dHB1dCBmaWxlJykpXG4gICAgICAgICAuYWRkT3B0aW9uKG5ldyBPcHRpb24oJy1oLCAtLWhlbHAgW2xldHRlcnMuLi5dJywgJ2hlbHAnKSk7XG4gICB9XG59XG4iXX0=