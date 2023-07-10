const crypto = require('crypto')


export async function getRundomNumber() {
    return Math.floor(Math.random() * 1000 + 1);
}

export async function getNumberString() {
    return crypto.randomBytes(20).toString("hex")
}




