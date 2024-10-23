const Country = require("./schema");
const database = Country;

module.exports.bulkCreate = async (data, uniqueField) => {
    const operations = data.map((item) => ({
        updateOne: {
            filter: { [uniqueField]: item[uniqueField] }, // Unique field to check duplicates
            update: { $set: item },
            upsert: true, // Insert if no match is found
        },
    }));
    try {
        return await database.bulkWrite(operations);
    } catch (err) {
        console.error(`Error in bulkCreate for ${Model.collection.name}:`, err);
        throw err; // Re-throw the error to handle it at a higher level if necessary
    }
};

module.exports.getActive = async () => {
    return await database.find({
        status: true,
    }).sort({ name: 1 });
};