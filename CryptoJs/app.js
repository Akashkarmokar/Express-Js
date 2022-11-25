/**
 * This module work on The Cipher Algorithms
 */
const express = require('express');
const route = express.Router();
const CryptoJS = require('crypto-js');



const secretKey = "0123456789";
const iv = "hello+world"
const passPhrase = "race fog come flash position garbage glass rule dizzy behind use tape"

/**
 * Hashing Input:
 * The hash algorithms accept either strings or instances of CryptoJS.lib.WordArray. A WordArray object represents an array of 32-bit words.
 * When you pass a string, it's automatically sconverted to a WordArray encoded as UTF-8.
 */
route.get('/aes-encryption',async (req,res,next)=>{
    const clientGivenMessage = req.query.message;
    const encryptedMessage = CryptoJS.AES.encrypt(clientGivenMessage,secretKey,{
        iv: CryptoJS.enc.Hex.parse(iv),
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.AnsiX923,
    });
    // const value = encryptedMessage.enc.toString(CryptoJS.enc.Utf8);
    // console.log(value);
    // console.log(encryptedMessage.toString());
    // console.log(encryptedMessage);
    // console.log(encryptedMessage.toString());
    // console.log(encryptedMessage.key.toString());
    // console.log(encryptedMessage.iv.toString());
    // console.log(encryptedMessage.padding);
    res.json({
        data: "encryptedMessage"
    });
})


module.exports = route;