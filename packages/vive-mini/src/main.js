"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./download/index");
const index_2 = require("./handleTemplate/index");
const index_3 = require("./deleteFlie/index");
const cas_1 = require("../utils/cas");
const cas = new cas_1.default();
console.log(cas.parse);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const downloadCentral = yield (0, index_1.default)();
        const handleTemplateCentral = yield (0, index_2.default)(downloadCentral);
        (0, index_3.default)(handleTemplateCentral);
    });
}
main();
