const createReactApp = answer => {
    console.log(answer, 'create react');
    run(`npx create-react-app ${answer.name}`, (err, stdOut, stdErr) => {
        if (err) {
            console.error(err, 'error');
            return;
        }
        console.log('App created Successfully');
    })
}

module.exports = createReactApp;