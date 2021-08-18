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
    initialize() {
        this.addOption(new commander_1.Option('-t, --target <string>', 'target directory'))
            .addOption(new commander_1.Option('-o, --outFile <string>', 'output file'))
            .addOption(new commander_1.Option('-h, --help [letters...]', 'help'));
    }
}
exports.Commander = Commander;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY29tbWFuZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUEwRDtBQUkxRCxNQUFhLFNBQVUsU0FBUSxtQkFBTztJQUNuQztRQUNHLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLFVBQVU7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksa0JBQU0sQ0FBQyx1QkFBdUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2FBQ25FLFNBQVMsQ0FBQyxJQUFJLGtCQUFNLENBQUMsd0JBQXdCLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDOUQsU0FBUyxDQUFDLElBQUksa0JBQU0sQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDSDtBQWZELDhCQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCwgT3B0aW9uLCBPcHRpb25WYWx1ZXMgfSBmcm9tICdjb21tYW5kZXInO1xuXG5leHBvcnQgeyBPcHRpb25WYWx1ZXMgfSBmcm9tICdjb21tYW5kZXInO1xuXG5leHBvcnQgY2xhc3MgQ29tbWFuZGVyIGV4dGVuZHMgQ29tbWFuZCB7XG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgIH1cblxuICAgcHVibGljIGdldCBjb25maWdPcHRzKCk6IE9wdGlvblZhbHVlcyB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZSgpLm9wdHMoKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgICAgdGhpcy5hZGRPcHRpb24obmV3IE9wdGlvbignLXQsIC0tdGFyZ2V0IDxzdHJpbmc+JywgJ3RhcmdldCBkaXJlY3RvcnknKSlcbiAgICAgICAgIC5hZGRPcHRpb24obmV3IE9wdGlvbignLW8sIC0tb3V0RmlsZSA8c3RyaW5nPicsICdvdXRwdXQgZmlsZScpKVxuICAgICAgICAgLmFkZE9wdGlvbihuZXcgT3B0aW9uKCctaCwgLS1oZWxwIFtsZXR0ZXJzLi4uXScsICdoZWxwJykpO1xuICAgfVxufVxuIl19