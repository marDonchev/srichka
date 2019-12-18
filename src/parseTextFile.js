const fs = require("fs");

// Reading data in utf-8 format
// which is a type of character set.
// Instead of 'utf-8' it can be
// other character set also like 'ascii'
fs.readFile("./src/Text.txt", "utf-8", (err, data) => {
    if (err) throw err;
    let words = [];
    data.split("\n").map(l => {
        l.split(" ").map(word => {
            word = word.trim().toLowerCase();
            word = word
                .replace(",", "")
                .replace("/", "")
                .replace(".", "")
                .replace(";", "")
                .replace("?", "")
                .replace("!", "")
                .replace("-", "")
                .replace("„", "")
                .replace("“", "")
                .replace(":", "")
                .replace("–", "")
                .replace("…", "")
                .replace("(", "")
                .replace(")", "");
            if (word.length > 2) words.push(word);
        });
    });
    words = words.filter(function(item, pos) {
        return words.indexOf(item) === pos;
    });

    console.info("words", words);

    const exportLines = `const words = [${words
        .map(w => '"' + w + '"')
        .join(",")}]; 
export default words;`;

    // writing the words in a file
    console.log("Saving exported words ...");
    fs.writeFile("./src/words.js", exportLines, err => {
        // In case of a error throw err.
        if (err) throw err;
        console.log("💫  Done.");
    });

    // Converting Raw Buffer to text
    // data using tostring function.
});
