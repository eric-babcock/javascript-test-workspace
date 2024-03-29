const { scryptSync, randomBytes } = require('crypto');

const users = [];

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64);

    const user = { email, password: `${salt}:${hashedPassword}` }

    users.push(user);

    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from (key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
}
console.log("hello")
signup("bubs", "bubs3")
signup("eric",'bubs3')

console.log(users[0])

login('bubs','bubsasdf')



login('bubs','bubs3')

