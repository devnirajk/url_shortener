const urlModel = require("../models/url");
const ShortUniqueId = require("short-unique-id");


const uid = new ShortUniqueId({ length: 10 });

async function handleGenerateShortURL(req, res){
    const shortId = uid.rnd();
    const redirectURL = req.body.originalURL;
    const newUser = new urlModel({
        shortId, redirectURL
    });
    
    // Save Document
    newUser.save();
    res.end(`http://localhost:8002/${shortId}`);
}



async function openShortURL(req, res) {
    const shortId = req.params.urlId;

    try {
        const redirectURLObject = await urlModel.findOne({ shortId });

        if (redirectURLObject) {
            console.log(redirectURLObject.redirectURL);
            await res.redirect(redirectURLObject.redirectURL);
        } else {
            console.error("URL not found for shortId:", shortId);
            res.status(404).send("URL not found");
        }
    } catch (error) {
        console.error("Error retrieving URL:", error);
        res.status(500).send("Internal Server Error");
    }
}



module.exports = {handleGenerateShortURL, openShortURL};