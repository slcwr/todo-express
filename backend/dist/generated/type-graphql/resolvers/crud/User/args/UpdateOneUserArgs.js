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
import { UserUpdateInput } from "../../../inputs/UserUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
let UpdateOneUserArgs = class UpdateOneUserArgs {
};
__decorate([
    TypeGraphQL.Field(_type => UserUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", UserUpdateInput)
], UpdateOneUserArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", UserWhereUniqueInput)
], UpdateOneUserArgs.prototype, "where", void 0);
UpdateOneUserArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateOneUserArgs);
export { UpdateOneUserArgs };
//# sourceMappingURL=UpdateOneUserArgs.js.map