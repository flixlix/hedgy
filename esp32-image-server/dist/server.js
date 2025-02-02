"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const tmImage = __importStar(require("@teachablemachine/image"));
const express_1 = __importDefault(require("express"));
const mqtt_1 = __importDefault(require("mqtt"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000; // You can change the port if necessary
const DOOR_TOPIC = "door-add2eaa7-0d32-46f4-8afb-eb16edc5fd97/open";
// Set up MQTT client
const mqttClient = mqtt_1.default.connect("wss://test.mosquitto.org:8081");
mqttClient.on("connect", () => {
    console.log("MQTT connected");
});
// Configure Multer to handle image uploads
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
// Load your model
function loadModel() {
    return __awaiter(this, void 0, void 0, function* () {
        const modelPath = path_1.default.resolve(__dirname, "..", "tm-my-image-model", "model.json");
        const metadataPath = path_1.default.resolve(__dirname, "..", "tm-my-image-model", "metadata.json");
        const model = yield tmImage.load(modelPath, metadataPath);
        console.log("Model loaded");
        return model;
    });
}
let model;
loadModel().then((m) => {
    model = m;
});
// Function to preprocess image for model prediction
function preprocessImage(imageBuffer) {
    return __awaiter(this, void 0, void 0, function* () {
        const image = new Image();
        image.src = imageBuffer.toString("base64");
        return image;
    });
}
// Route to receive the image
app.post("/upload", upload.single("image"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        res.status(400).send("No file uploaded");
        return void 0;
    }
    try {
        // Preprocess the image
        const inputTensor = yield preprocessImage(req.file.buffer);
        // Run prediction
        const prediction = yield model.predict(inputTensor);
        // Log probabilities to the console
        console.log("Prediction probabilities:", prediction);
        // Send the result via MQTT
        const mqttMessage = JSON.stringify({
            class_probabilities: prediction,
        });
        mqttClient.publish("your/mqtt/topic", mqttMessage);
        // Send response to the client
        res.status(200).json({ prediction });
    }
    catch (error) {
        console.error("Error processing image:", error);
        res.status(500).send("Error processing image");
    }
}));
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
