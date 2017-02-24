/**
 * Returns a Future Worth Factor assuming a single payment.
 * @param i 100-based interest rate e.g. 15% = 15
 * @param n number of periods
 */
export function singleFW (i, n) {
  let futureWorthFactor = Math.pow((1 + (i / 100)), n)
  return futureWorthFactor
}

/**
 * Returns a Present Worth Factor assuming a single payment.
 * @param i 100-based interest rate e.g. 15% = 15
 * @param n number of periods
 */
export function singlePW (i, n) {
  let presentWorthFactor = 1 / singleFW(i, n)
  return presentWorthFactor
}

/**
 * @param i 100-based interest rate e.g. 15% = 15
 * @param n number of periods
 */
