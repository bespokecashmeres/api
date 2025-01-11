const express = require("express");
const app = express();
const { config } = require("./config/config");
const { port } = config;
const cors = require("cors");
const bodyParser = require("body-parser");
const authModule = require("./src/Modules/Admin/Authentication/routes");
const countryModule = require("./src/Modules/Admin/Country/routes");
const genderModule = require("./src/Modules/Admin/Gender/routes");
const mainCategoryModule = require("./src/Modules/Admin/MainCategory/routes");
const subCategoryModule = require("./src/Modules/Admin/SubCategory/routes");
const childCategoryModule = require("./src/Modules/Admin/ChildCategory/routes");
const subChildCategoryModule = require("./src/Modules/Admin/SubChildCategory/routes");
const adminUserModule = require("./src/Modules/Admin/Users/routes");
const wholeSalerAuthModule = require("./src/Modules/WholeSaler/Authentication/routes");
const measurementTypeModule = require("./src/Modules/Admin/MeasurementType/routes");
const lookbookModule = require("./src/Modules/Admin/LookBook/routes");
const yarnModule = require("./src/Modules/Admin/Yarn/routes");
const productTypeModule = require("./src/Modules/Admin/ProductType/routes");
const sizeModule = require("./src/Modules/Admin/Size/routes");
const colorModule = require("./src/Modules/Admin/Color/routes");
const productModule = require("./src/Modules/Admin/Product/routes");
const moduleInfoModule = require("./src/Modules/Admin/YarnModules/ModuleInfo/routes");
const colourModule = require("./src/Modules/Admin/YarnModules/Colour/routes");
const patternModule = require("./src/Modules/Admin/YarnModules/Pattern/routes");
const occassionModule = require("./src/Modules/Admin/YarnModules/Occassion/routes");
const perceivedWeightsModule = require("./src/Modules/Admin/YarnModules/PerceivedWeight/routes");
const seasonalityModule = require("./src/Modules/Admin/YarnModules/Seasonality/routes");
const fittingModule = require("./src/Modules/Admin/YarnModules/Fitting/routes");
const materialModule = require("./src/Modules/Admin/YarnModules/Material/routes");
const priceRangesModule = require("./src/Modules/Admin/YarnModules/PriceRanges/routes");
const preRegistrationModule = require("./src/Modules/User/PreRegistration/routes");
const stepTypeModule = require("./src/Modules/Admin/StepModules/StepType/routes");
const stepCardModule = require("./src/Modules/Admin/StepModules/StepCard/routes");
const fittingSizesModule = require("./src/Modules/Admin/FittingModule/FittingSizes/routes");
const sizeMeasurementFields = require("./src/Modules/Admin/SizeMeasurementFields/routes");
const sizeMeasurement = require("./src/Modules/Admin/FittingModule/SizeMeasurement/routes");

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
authModule(app);
adminUserModule(app);
wholeSalerAuthModule(app);
countryModule(app);
measurementTypeModule(app);
lookbookModule(app);
genderModule(app);
mainCategoryModule(app);
subCategoryModule(app);
childCategoryModule(app);
subChildCategoryModule(app);
yarnModule(app);
productTypeModule(app);
sizeModule(app);
colorModule(app);
productModule(app);
moduleInfoModule(app);
colourModule(app);
patternModule(app);
occassionModule(app);
perceivedWeightsModule(app);
seasonalityModule(app);
fittingModule(app);
materialModule(app);
priceRangesModule(app);
preRegistrationModule(app);
stepTypeModule(app);
stepCardModule(app);
fittingSizesModule(app);
sizeMeasurementFields(app);
sizeMeasurement(app);

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
