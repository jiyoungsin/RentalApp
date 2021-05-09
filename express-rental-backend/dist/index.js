"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
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
app.get('/', (req, res) => {
    console.log("Home route");
    res.sendFile(path_1.default.join(__dirname + "/test.html"));
    res.status(200);
});
app.listen(PORT, () => {
    console.log("backend is running");
});
//# sourceMappingURL=index.js.map