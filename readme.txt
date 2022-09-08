i didnt include the rest of the node_modules, install is manually
sudo npm install npm

i already included @openzeppelin/contracts inside node_modules or you can delete it and install it manually

npm install @openzeppelin/contracts

the contracts is already premade, you just have to name your own token here:
https://docs.openzeppelin.com/contracts/4.x/wizard

note* in truffle-config.js, hdwallet-provider is not installed by default so you have to install it manually

sudo npm install --save @truffle/hdwallet-provider

