import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

// Allow requests from local dev server. In production, restrict this to your frontend origin.
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (eg. curl, server-to-server)
      if (!origin) return callback(null, true);
      const allowed = ["http://localhost:3000", "http://127.0.0.1:3000"];
      if (allowed.indexOf(origin) !== -1) return callback(null, true);
      callback(new Error("Not allowed by CORS"));
    },
  })
);

const TARGET = process.env.COUNTRIES_API_URL || "https://www.apicountries.com/countries";

app.get("/countries", async (req, res) => {
  try {
    const response = await axios.get(TARGET, {
      // forward query params if any
      params: req.query,
      // timeout to avoid hanging
      timeout: 10000,
    });
    // Return the API response body directly
    res.json(response.data);
  } catch (err) {
    console.error("Proxy fetch error:", err && err.message ? err.message : err);
    res.status(502).json({ error: "Failed to fetch countries" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Countries proxy running on http://localhost:${PORT}`));
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

// Allow requests from local dev server. In production, restrict this to your frontend origin.
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (eg. curl, server-to-server)
      if (!origin) return callback(null, true);
      const allowed = ["http://localhost:3000", "http://127.0.0.1:3000"];
      if (allowed.indexOf(origin) !== -1) return callback(null, true);
      callback(new Error("Not allowed by CORS"));
    },
  })
);

const TARGET = process.env.COUNTRIES_API_URL || "https://www.apicountries.com/countries";

app.get("/countries", async (req, res) => {
  try {
    const response = await axios.get(TARGET, {
      // forward query params if any
      params: req.query,
      // timeout to avoid hanging
      timeout: 10000,
    });
    // Return the API response body directly
    res.json(response.data);
  } catch (err) {
    console.error("Proxy fetch error:", err && err.message ? err.message : err);
    res.status(502).json({ error: "Failed to fetch countries" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Countries proxy running on http://localhost:${PORT}`));
const express = require("express");
import express from "express";
import axios from "axios";
const express = require("express");
const axios = require("axios");
const cors = require("cors");

import cors from "cors";

const app = express();

// Allow requests from local dev server. In production, restrict this to your frontend origin.
app.use(
  cors({
    origin: (origin, callback) => {
// Allow requests from local dev server. In production, restrict this to your frontend origin.
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (eg. curl, server-to-server)
      if (!origin) return callback(null, true);
      const allowed = ["http://localhost:3000", "http://127.0.0.1:3000"];
      if (allowed.indexOf(origin) !== -1) return callback(null, true);
      callback(new Error("Not allowed by CORS"));
    },
  })
);

const TARGET =
  process.env.COUNTRIES_API_URL || "https://www.apicountries.com/countries";

app.get("/countries", async (req, res) => {
  try {
    const response = await axios.get(TARGET, {
      // forward query params if any
      params: req.query,
      // timeout to avoid hanging
      timeout: 10000,
    });
    // Return the API response body directly
    res.json(response.data);
  } catch (err) {
    console.error("Proxy fetch error:", err && err.message ? err.message : err);
    res.status(502).json({ error: "Failed to fetch countries" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Countries proxy running on http://localhost:${PORT}`)
);
