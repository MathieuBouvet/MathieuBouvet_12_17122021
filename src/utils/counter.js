/**
 * Create a generator that will yield numbers based on the configuration.
 * Starting from "start", it will add "step" to it
 * 
 * @generator
 * @param {Object} [counterConfiguration] the configuration for the created counter
 * @param {number} [start] the starting value of the counter, defaults to 0
 * @param {number} [step] the step between each yielded value
 * 
 * @yields {number} the next number
 */
function* counter({ start = 0, step = 1 } = {}) {
  while (true) {
    yield start;
    start += step;
  }
}

export { counter };
