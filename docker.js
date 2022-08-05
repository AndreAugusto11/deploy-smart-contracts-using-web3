const Docker = require("dockerode");

const containerImageVersion = "2021-01-08-7a055c3";
const containerImageName = "ghcr.io/hyperledger/cactus-besu-all-in-one";
const rpcApiHttpPort = 8545;
const rpcApiWsPort = 8546;
const envVars = ["BESU_NETWORK=dev", "BESU_LOGGING=TRACE"];

async function start() {
  const imageFqn = `${containerImageName}:${containerImageVersion}`;

  const docker = new Docker();

  docker.run(
    imageFqn,
    [],
    [],
    {
      ExposedPorts: {
        [`${rpcApiHttpPort}/tcp`]: {}, // besu RPC - HTTP
        [`${rpcApiWsPort}/tcp`]: {}, // besu RPC - WebSocket
        "8888/tcp": {}, // orion Client Port - HTTP
        "8080/tcp": {}, // orion Node Port - HTTP
        "9001/tcp": {}, // supervisord - HTTP
        "9545/tcp": {}, // besu metrics
      },
      // TODO: this can be removed once the new docker image is published and
      // specified as the default one to be used by the tests.
      Healthcheck: {
        Test: [
          "CMD-SHELL",
          `curl -X POST --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}' localhost:8545`,
        ],
        Interval: 1000000000, // 1 second
        Timeout: 3000000000, // 3 seconds
        Retries: 299,
        StartPeriod: 3000000000, // 1 second
      },
      // This is a workaround needed for macOS which has issues with routing
      // to docker container's IP addresses directly...
      // https://stackoverflow.com/a/39217691
      PublishAllPorts: true,
      Env: envVars,
    },
    {},
    (err) => {
      if (err) {
        console.log(err);
      }
    },
  );
}

start();