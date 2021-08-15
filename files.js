"use strict";

const fs = require("fs");

let fileData = "";

fs.readFile("a.txt", (err, data) => {
    if (err) {
        console.log("Error", err);
        return;
    }
    fileData += data + "\n";
    fs.readFile("b.txt", (err, data) => {
        if (err) {
            console.log("Error", err);
            return;
        }
        fileData += data + "\n";
        fs.readFile("c.txt", (err, data) => {
            if (err) {
                console.log("Error", err);
                return;
            }
            fileData += data;
            console.log((fileData));
        });
    });
});