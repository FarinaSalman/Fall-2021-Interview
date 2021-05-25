const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/Url');

// @route   POST /api/url/encode
// @desc    Encodes a URL to a shortened URL
router.post('/encode', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');

    // Check base url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    // Create url code
    const urlCode = shortid.generate()

    // Check long url
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });

            if (url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await url.save();
                
                res.status(200).json(url);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json('Server error');
        }
    } else {
        res.status(401).json('Invalid long url');
    }
});

// @route   POST /api/decode
// @desc    Decodes a shortened URL to its original URL
router.post('/decode', async (req, res) => {
    const { shortUrl } = req.body;
    const baseUrl = config.get('baseUrl');

    // Check base url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    // Create url code
    const urlCode = shortid.generate()

    // Check short url
    if (validUrl.isUri(shortUrl)) {
        try {
            let url = await Url.findOne({ shortUrl });

            if (url) {
                res.status(200).json(url);
            } else {
                res.status(404).json('short url not found');
            }
        } catch (err) {
            console.error(err);
            res.status(500).json('Server error');
        }
    } else {
        res.status(401).json('Invalid short url');
    }
});

module.exports = router;