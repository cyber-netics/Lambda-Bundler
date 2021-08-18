"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLI = exports.JRC = exports.Config = void 0;
const commander_1 = require("../util/commander");
const fileSystem_1 = require("../util/fileSystem");
class Config {
}
exports.Config = Config;
/**
 *
 * CLI
 *
 */
class JRC extends Config {
    constructor() {
        super();
        this.initialize();
    }
    get options() {
        return this._options;
    }
    set options(fileSystem) {
        this.active = fileSystem.status;
        this._options = fileSystem.configOpts;
    }
    initialize() {
        this.options = new fileSystem_1.FileSystem();
    }
}
exports.JRC = JRC;
/**
 *
 * ARG
 *
 */
class CLI extends Config {
    constructor() {
        super();
        this.initialize();
    }
    get options() {
        return this._options;
    }
    set options(commander) {
        this.active = commander.status;
        this._options = commander.configOpts;
    }
    initialize() {
        this.options = new commander_1.Commander();
    }
}
exports.CLI = CLI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xpYi9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQThDO0FBQzlDLG1EQUFnRDtBQUdoRCxNQUFzQixNQUFNO0NBRzNCO0FBSEQsd0JBR0M7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxHQUFJLFNBQVEsTUFBTTtJQWE1QjtRQUNHLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFaRCxJQUFXLE9BQU87UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQVksT0FBTyxDQUFDLFVBQXdCO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDekMsQ0FBQztJQU9PLFVBQVU7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQ25DLENBQUM7Q0FDSDtBQXJCRCxrQkFxQkM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxHQUFJLFNBQVEsTUFBTTtJQWE1QjtRQUNHLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFaRCxJQUFXLE9BQU87UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQVksT0FBTyxDQUFDLFNBQXVCO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7SUFDeEMsQ0FBQztJQU9PLFVBQVU7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Q0FDSDtBQXJCRCxrQkFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kZXIgfSBmcm9tICcuLi91dGlsL2NvbW1hbmRlcic7XG5pbXBvcnQgeyBGaWxlU3lzdGVtIH0gZnJvbSAnLi4vdXRpbC9maWxlU3lzdGVtJztcbmltcG9ydCB7IE9wdGlvblZhbHVlcyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbmZpZyB7XG4gICBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuICAgcHVibGljIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKlxuICogQ0xJXG4gKlxuICovXG5leHBvcnQgY2xhc3MgSlJDIGV4dGVuZHMgQ29uZmlnIHtcbiAgIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG4gICBwcml2YXRlIF9vcHRpb25zOiBPcHRpb25WYWx1ZXM7XG5cbiAgIHB1YmxpYyBnZXQgb3B0aW9ucygpOiBPcHRpb25WYWx1ZXMge1xuICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICB9XG5cbiAgIHByaXZhdGUgc2V0IG9wdGlvbnMoZmlsZVN5c3RlbTogT3B0aW9uVmFsdWVzKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZpbGVTeXN0ZW0uc3RhdHVzO1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IGZpbGVTeXN0ZW0uY29uZmlnT3B0cztcbiAgIH1cblxuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICB9XG5cbiAgIHByaXZhdGUgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBGaWxlU3lzdGVtKCk7XG4gICB9XG59XG5cbi8qKlxuICpcbiAqIEFSR1xuICpcbiAqL1xuZXhwb3J0IGNsYXNzIENMSSBleHRlbmRzIENvbmZpZyB7XG4gICBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuICAgcHJpdmF0ZSBfb3B0aW9uczogT3B0aW9uVmFsdWVzO1xuXG4gICBwdWJsaWMgZ2V0IG9wdGlvbnMoKTogT3B0aW9uVmFsdWVzIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgfVxuXG4gICBwcml2YXRlIHNldCBvcHRpb25zKGNvbW1hbmRlcjogT3B0aW9uVmFsdWVzKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGNvbW1hbmRlci5zdGF0dXM7XG4gICAgICB0aGlzLl9vcHRpb25zID0gY29tbWFuZGVyLmNvbmZpZ09wdHM7XG4gICB9XG5cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgfVxuXG4gICBwcml2YXRlIGluaXRpYWxpemUoKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgQ29tbWFuZGVyKCk7XG4gICB9XG59XG4iXX0=