// COMP 3123 Lab Test 1
// Zelda Pelletier

// Q3: File Module
const fs = require("fs");
const path = require("path");
const logsDir = path.join(__dirname, "Logs");

if (fs.existsSync(logsDir))
{
    const files = fs.readdirSync(logsDir);
    for (const file of files)
    {
        console.log("delete files..." + file);
        fs.unlinkSync(path.join(logsDir, file));
    }
    fs.rmdirSync(logsDir);
}