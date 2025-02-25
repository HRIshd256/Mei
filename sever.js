require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000" })); // Allow frontend requests
app.use(express.json());

const CLIENT_ID = "f5ddf938-a900-4013-be99-0f2757cc2336";
const CLIENT_SECRET = "9jUfrrij38XHSEqM7NHVz_OOqk7O9ECV4_5wg94u1aE";
const AUTH_URL = "https://login.usw2.pure.cloud/oauth/token";

// Route to get OAuth token
app.get("/get-token", async (req, res) => {
    try {
        const response = await fetch(AUTH_URL, {
            method: "POST",
            headers: {
                "Authorization": "Basic " + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=client_credentials"
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error_description || "Failed to get token");
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Token fetch error:", error);
    }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
