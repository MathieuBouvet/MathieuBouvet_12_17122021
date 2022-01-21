function* counter({ start = 0, step = 1 } = {}) {
  while (true) {
    yield start;
    start += step;
  }
}

export { counter };
