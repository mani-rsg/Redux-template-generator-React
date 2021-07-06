const { exec } = require('child_process');

module.exports = {
    run: (command, callback) => {
        exec(command, callback);
    }
};