"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_1 = __importDefault(require("./routes/movies"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccount = require("../auth-test-skapple-firebase-adminsdk-rogb1-0188a28fd8");
const PORT = 4002;
const app = (0, express_1.default)();
app.use(express_1.default.json());
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
});
var dataBaseFire = firebase_admin_1.default.firestore();
app.use((req, _res, next) => {
    req.db = dataBaseFire; // Tu instancia de Firestore
    req.admin = firebase_admin_1.default; // Tu instancia de Firebase Admin
    next();
});
app.use('/movies', movies_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
