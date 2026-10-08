// COMP 3123 Lab Test 1
// Zelda Pelletier

// Q3: File Module
const fs = require("fs");
const path = require("path");
const logsDir = path.join(__dirname, "Logs");

if (!fs.existsSync(logsDir))
{
    fs.mkdirSync(logsDir);
}
process.chdir(logsDir);
for (let i = 0; i < 10; i++)
{
    const fileName = "log" + i + ".txt";
    fs.writeFileSync(path.join(process.cwd(), fileName), "This is log file " + i);
    console.log(fileName);
}