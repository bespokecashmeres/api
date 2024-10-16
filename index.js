const express = require("express");
const app = express();
const { config } = require("./config/config");
const { port } = config;
const cors = require("cors");
const bodyParser = require("body-parser");
const { logger } = require("./utils/logger");
const connectToDatabase = require("./database/db");
const i18n = require('./utils/i18n');
const path = require("path");
const axios = require('axios');

app.use(i18n.init);

connectToDatabase()
  .then((data) => {
    console.log("Connected to MongoDB");
    logger.info("Connected to MongoDB ", {
      meta: {
        port: config.port,
        // time: moment(new Date()).format(timeFormat),
        envoirment: config.environment,
      },
    });
  })
  .catch((err) => {
    logger.warn("Could Not Connect to db ", {
      meta: {
        error: err,
        // time: moment(new Date()).format(timeFormat),
      },
    });
  });

app.use(express.json());
app.use(cors());
app.use("/public", express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const lang = req.headers['accept-language'];
  if (lang) {
    const preferredLang = lang.split(',')[0]; // Get the preferred language
    res.setLocale(preferredLang);
  } else res.setLocale("en")
  next();
});

app.get('/', (req, res) => {
  res.send({
    code: 200,
    message: res.__('Hello')
  }); // Using i18n to localize the response
});

// bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Modules

app.use(express.static(path.join(__dirname, 'public')));

app.get('/proxy-image', async (req, res) => {
  const imageUrl = req.query.url;

  try {
    const response = await axios({
      url: imageUrl,
      method: 'GET',
      responseType: 'stream', // Important to handle image streaming
    });

    // Set the content type from the response headers
    res.set('Content-Type', response.headers['content-type']);

    // Pipe the image stream to the response
    response.data.pipe(res);
  } catch (error) {
    res.status(500).send('Error fetching image');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
