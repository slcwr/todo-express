var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as TypeGraphQL from "type-graphql";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
let DeleteManyUserArgs = class DeleteManyUserArgs {
};
__decorate([
    TypeGraphQL.Field(_type => UserWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], DeleteManyUserArgs.prototype, "where", void 0);
DeleteManyUserArgs = __decorate([
    TypeGraphQL.ArgsType()
], DeleteManyUserArgs);
export { DeleteManyUserArgs };
//# sourceMappingURL=DeleteManyUserArgs.js.map