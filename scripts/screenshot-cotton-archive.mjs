import { writeFileSync } from "fs";

// Use a screenshot API to capture cotton-archive.com
const url = "https://cotton-archive.com";
const apiUrl = `https://image.thum.io/get/width/1440/crop/900/${url}`;

const res = await fetch(apiUrl);
const buffer = Buffer.from(await res.arrayBuffer());
writeFileSync("public/images/cotton-archive-top.jpg", buffer);
console.log("Saved cotton-archive-top.jpg");

// Archive page
const archiveUrl = `https://image.thum.io/get/width/1440/crop/900/${url}/archive`;
const res2 = await fetch(archiveUrl);
const buffer2 = Buffer.from(await res2.arrayBuffer());
writeFileSync("public/images/cotton-archive-archive.jpg", buffer2);
console.log("Saved cotton-archive-archive.jpg");
