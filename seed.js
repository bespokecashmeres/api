const fs = require("fs");
const {
    bulkCreate,
} = require("./src/Modules/Admin/Country/dbQuery");
const {
    bulkCreate: measurementBulkCreate,
} = require("./src/Modules/Admin/MeasurementType/dbQuery");
const {
    bulkCreate: genderBulkCreate,
} = require("./src/Modules/Admin/Gender/dbQuery");

const countryJSON = "seederJSON/country.json";
const measurementTypeJSON = "seederJSON/measurement-type.json";
const genderJSON = "seederJSON/gender.json";
const countryData = JSON.parse(fs.readFileSync(countryJSON, "utf-8"));
const measurementTypeData = JSON.parse(fs.readFileSync(measurementTypeJSON, "utf-8"));
const genderData = JSON.parse(fs.readFileSync(genderJSON, "utf-8"));
const connectToDatabase = require("./database/db");
const { logger } = require("./utils/logger");
const seedData = async () => {
    try {
        await connectToDatabase();
        await bulkCreate(countryData, "code");
        await measurementBulkCreate(measurementTypeData, "name")
        await genderBulkCreate(genderData, "name")
        console.log("============= ALL Data has been Seeded =================");
        logger.info("ALL Seeder has been Done Fine ", {});
    } catch (err) {
        console.log("err while seeding data", err)
        logger.warn("Error while Connecting DB for Seeder ", {
            meta: {
                error: err,
            },
        });
    } finally {
        console.log("We are in Finally block to close the all running Process");
        logger.info(
            "We are in Finally block to close the all running Process ",
            {}
        );
        process.exit(0);
    }
};
seedData();