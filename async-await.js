function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User registered')
            resolve();
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
            return reject('Login failed')
            console.log('User logged in successfully')
        }, 4000);
        // resolve();
    }
    
    )
}


async function loginProcess() {
    await register();
    await sendEmail();
    await login ();
}

loginProcess()
.catch( (err)=>{console.log(err)}
)
.finally(
    ()=>{console.log('All done')}
)