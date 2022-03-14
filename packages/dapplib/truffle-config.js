require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth script mistake hunt glide flat slim'; 
let testAccounts = [
"0xd20acbe3628ad2aa3c3bbf10ad21bbca8ca57dfc03d425d5f9c04b36e9804797",
"0xba54d3768fef3bf986089f8759ff513a6d1b3950fb77381a63c093cbbd3b45b3",
"0xc58e577209c747e416d1bb312aaf48bd8ed513a8bd894d439c9316a72dbc65b1",
"0x6481d832678d184a838ddce3de730444e24df3ef24e6ddda22fd8e96edb1ae0f",
"0x8ef230460ead91c52ebf6b5fd5ed1eb41a68a3b4d81423c728ce28335484c8cc",
"0x78464fa318e2ae88a2dee0f0a70ac3312c3cdcde1415c1c337549b528f914238",
"0xb15556b82de4d238d9fb6ad24b405e92ef395220159f9d9b7c3c67de18914d35",
"0xd0d8d3c9e74ef20b8fe4c1041af50ed1fc959b25d499bd7e5796c4d5bf75a5ce",
"0xd24da1f94143743259df3ec3af1ca768895373669236ff93ef562b46985e4ead",
"0xc5d94484c6bb1b2a411303f81f15a65d1ffbff20000995c71dbd9845291a3a2a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
            version: '^0.8.0'
        }
    }
};

