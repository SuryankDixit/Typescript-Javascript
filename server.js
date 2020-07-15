"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
http_1.default
    .createServer((request, response) => {
    response.end("Hello Typescript!");
})
    .listen(4000, () => console.log("server started"));
