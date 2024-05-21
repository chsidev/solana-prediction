const { config } = require('dotenv');
const bs58 = require('bs58');
const { Keypair } = require('@solana/web3.js');

config({path: '.env'});

const privateKeyEnvVariable = "PRIVATE_KEY"
const privateKey = process.env[privateKeyEnvVariable]

if (privateKey === undefined) {
    console.error('need a ' + privateKeyEnvVariable +' env variable');
    process.exit()
}
// setup wallet
let owner;

try {
    owner = Keypair.fromSecretKey(
        bs58.decode(privateKey)
    );
} catch {
    try {
        owner = Keypair.fromSecretKey(
            Uint8Array.from(JSON.parse(privateKey))
        );
    } catch {
        console.error('Failed to parse private key from Uint8Array (solana-keygen) and base58 encoded string (phantom wallet export)')
        process.exit();
    }
}

module.exports = owner;# Change 0 on 2024-03-08
# Change 1 on 2024-03-30
# Change 0 on 2024-05-21
