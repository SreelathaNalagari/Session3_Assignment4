/** abstract class Department that is extended by below two classes
 *
 *  @Class AccountingDepartment
 *  @Class PhysicsDepartment
 * */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name) {
    }
    Department.prototype.printName = function () { console.log(this.name + " and message goes here..."); };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    ;
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("Meeting scheduled for " + this.name);
    };
    return AccountingDepartment;
}(Department));
var PhysicsDepartment = /** @class */ (function (_super) {
    __extends(PhysicsDepartment, _super);
    function PhysicsDepartment(name) {
        return _super.call(this, name) || this;
    }
    ;
    PhysicsDepartment.prototype.printMeeting = function () {
        console.log("Meeting scheduled for " + this.name);
    };
    return PhysicsDepartment;
}(Department));
var accounts = new AccountingDepartment("Accounting Department");
accounts.printName();
accounts.printMeeting();
//console.log(accounts);
var physics = new AccountingDepartment("Physics Department");
physics.printName();
physics.printMeeting();
//console.log(physics);
