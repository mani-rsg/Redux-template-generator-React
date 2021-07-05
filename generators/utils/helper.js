const generateDir = (path) => {

    // path = path.split("/");
    // path.pop();
    // path = path.join("/");
    console.log("path in mkdir", path);
    return new Promise((res, rej) => {
        fs.mkdir(path, { recursive: true }, (err) => {
            err ? rej(err) : res("success in creating the directory");
        });
    });
}
