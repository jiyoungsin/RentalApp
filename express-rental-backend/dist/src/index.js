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
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const users_model_1 = __importDefault(require("../models/users.model"));
const app = express_1.default();
const PORT = 5000 || process.env.PORT;
app.use(cors_1.default());
app.use(express_1.default.urlencoded({
    extended: true,
}));
mongoose_1.default.connect("mongodb+srv://admin:admin@cluster0.icaj7.mongodb.net/rentalapp?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log("connected to Mongo database");
}).catch((error) => {
    console.log(error);
    console.log("Error occurred connecting to Database");
});
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Home routeeeeeeee");
    //res.sendFile(path.join(__dirname + "/test.html"));
    const payload = yield users_model_1.default.findOne({ firstName: "paul" });
    console.log("$$$$$$");
    console.log(payload);
    res.status(200).json(payload);
}));
app.listen(PORT, () => {
    console.log("backend is running");
});
//# sourceMappingURL=index.js.map