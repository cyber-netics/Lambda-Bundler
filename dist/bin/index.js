'use strict';
class Test {
    constructor() {
        this.testname = 'tesing';
    }
    display() {
        console.log('this', this.testname);
    }
    run() {
        this.display();
    }
}
const data = new Test();
console.log('----', data);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmluL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLE1BQU0sSUFBSTtJQUFWO1FBQ1csYUFBUSxHQUFHLFFBQVEsQ0FBQztJQVMvQixDQUFDO0lBUFMsT0FBTztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sR0FBRztRQUNQLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0g7QUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBRXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUZXN0IHtcbiAgIHByaXZhdGUgdGVzdG5hbWUgPSAndGVzaW5nJztcblxuICAgcHVibGljIGRpc3BsYXkoKSB7XG4gICAgICBjb25zb2xlLmxvZygndGhpcycsIHRoaXMudGVzdG5hbWUpO1xuICAgfVxuXG4gICBwdWJsaWMgcnVuKCkge1xuICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICB9XG59XG5cbmNvbnN0IGRhdGEgPSBuZXcgVGVzdCgpO1xuXG5jb25zb2xlLmxvZygnLS0tLScsIGRhdGEpO1xuIl19