function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject('Error while registering')
            console.log('User registered')
            resolve()
        }, 3000);
    }
    )
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Email sent')
            resolve();
        }, 2000);
    }
    )
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User logged in successfully')
            resolve();
        }, 4000);
    }

    )
}

register().then(sendEmail).then(login)
    .catch(
        (err) => { console.log(err) }
    )