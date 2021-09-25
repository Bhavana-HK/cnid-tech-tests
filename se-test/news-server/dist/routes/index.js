"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const latestRoute_1 = require("./latestRoute");
const searchRoute_1 = require("./searchRoute");
var router = express_1.default.Router();
router.use(body_parser_1.default.json());
router.get('/latest', latestRoute_1.latestRoute);
router.get('/search/:key', searchRoute_1.searchRoute);
exports.default = router;
//# sourceMappingURL=index.js.map