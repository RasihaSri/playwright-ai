getToken()
    .then(token => {
        return getUser(token);
    })
    .then(user => {
        console.log(user);  
    })

async function run() {
    let token = await getToken();
    let user = await getUser();
}