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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_1 = require("../services/movies");
const router = express_1.default.Router();
router.get('/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const db = req.db;
    const response = yield (0, movies_1.getMovies)(db);
    if (!((_a = response === null || response === void 0 ? void 0 : response.moviesList) === null || _a === void 0 ? void 0 : _a.length))
        return res.status(404).json({ error: `No movies found` });
    return res.status(200).json({ moviesList: response.moviesList });
}));
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = req.body.movie;
    const db = req.db;
    movie.id = Date.now().toString();
    const response = (0, movies_1.addMovie)(movie, db);
    if (response.status === 200)
        return res.status(200).json({ message: `Movie added successfully` });
    return res.status(400).json({ error: `Error adding movie` });
}));
exports.default = router;
