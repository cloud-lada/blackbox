/**
 * The Config type contains configuration values for the run command.
 */
export type Config = {
  /**
   * The HTTP endpoint to POST readings to.
   */
  endpoint: string;

  /**
   * The frequency (in milliseconds) to POST readings.
   */
  interval: number;

  /**
   * The API key to use for authentication.
   */
  apiKey: string;

  /**
   * The on-disk location to persist reading data when the API is not available.
   */
  overflowFile: string;
};

/**
 * Run the blackbox, uploading sensor data at a regular interval. If the API is not available, the reading will be
 * appended to the overflow file and reattempted later on.
 * @param config The configuration values for the blackbox.
 */
export function run(config: Config): void {
  validateConfig(config);

  //TODO: logic goes here
  console.log(
    config.endpoint,
    config.interval,
    config.apiKey,
    config.overflowFile
  );
}

/**
 * Ensure that the configuration has expected values.
 * @param config The configuration to validate.
 */
function validateConfig(config: Config): void {
  if (!config.endpoint) {
    throw new Error("endpoint not specified");
  }

  if (!config.interval || config.interval <= 0) {
    throw new Error(
      "invalid value for interval, expected a number greater than zero"
    );
  }

  if (!config.apiKey) {
    throw new Error("api key not specified");
  }

  if (!config.overflowFile) {
    throw new Error("overflow file not specified");
  }
}
