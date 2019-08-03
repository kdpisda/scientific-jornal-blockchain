module.exports = {
  webpack: config => {
    // Alias all `react-native` imports to `react-native-web`
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web"
    };

    return config;
  },
  env: {
    // Will be available on both server and client
    MATIC_PROVIDER: "https://testnet2.matic.network/",
    PARENT_PROVIDER:
      "https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc",
    ROOTCHAIN_ADDRESS: "0x60e2b19b9a87a3f37827f2c8c8306be718a5f9b4",
    WITHDRAWMANAGER_ADDRESS: "0x4ef2b60cdd4611fa0bc815792acc14de4c158d22",
    MATIC_WETH_ADDRESS: "0x74f2a31a044c87bd687f2dcd5f858940f9c28d0c",
    SYNCER_URL: "https://matic-syncer2.api.matic.network/api/v1",
    WATCHER_URL: "https://ropsten-watcher2.api.matic.network/api/v1",
    PRIVATE_KEY:
      "0x6D55D9CEF711DC010CF46086CC5FD337026C5147FE7B13E1EE743DFC59505BF7"
  }
};
