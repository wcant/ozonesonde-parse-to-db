import { readSondeFile } from "./readFileUtils.js";   


if(process.argv.length === 2) {
    console.error("Expected at least one argument");
} else {
    const filename = process.argv[2];
    if(filename.endsWith(".l100")) {
        const {header, data} = await readSondeFile(filename, 29);
        console.log(header);
    } else if(filename.endsWith(".dat")) {
        const {header, data} = await readSondeFile(filename, 49);
    } else {
        console.error("Expected .l100 or .dat file");
    }
}