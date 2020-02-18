require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember erosion grid entire bone stock'; 
let testAccounts = [
"0xbaaf44103fa13571827f0b0921373eaa967adcbc48ceab682ff7fee2e2c5ca12",
"0x344f9bd5a087b15245c0c422fb36e2e7ff87bdffc26b50f2017403f300264ad6",
"0x479e9c40de848a1b0596c99299a2a1a6bd026f02ca58e5899c8d367a0ca2007c",
"0x9aa29b01e1140c4d5028217e3d5547834342df113559ed861f725b3985b94ba6",
"0x91023754035baa08e66bee49035e5d3910d7f17da111262dab6700b317168b53",
"0x79b46c1311c2c3c43170670767d6fb8d7836a95c4a901ff4d7dfa3a5f4554e71",
"0x640f5e417fc0cd7d8b49d886936c8967043889f43026311641f507dd7af2478d",
"0x400f1fdc03d5be9e6dbda6b1bb18db5e2df75629b9bd9d8e4059a42b64d113b7",
"0xf2fbf187f14dd36ede5853ab3f7e7ddef316f8f58fd8733986ff521c043984c7",
"0xfed4c4decf2a6dcfdd4a7b45732336de968232f9efa90d0715adaa33c7026d7a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
