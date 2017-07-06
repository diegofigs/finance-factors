/**
 * Small library for calculation of basic financial factors.
 * @module finance-factors
 * @author diegofigs <diego.fv94@gmail.com>
 * @license MIT
 */

/**
 * Returns a Future Worth Factor assuming a single payment.
 * @param {Number} i 100-based interest rate e.g. 15% = 15
 * @param {Number} n number of periods
 * @return {Number}
 * @example let futureWorth = singleFW(5, 1);
 * console.log(futureWorth); // Returns 1.05
 */
export function singleFW (i, n) {
  let futureWorthFactor = Math.pow((1 + (i / 100)), n)
  return futureWorthFactor
}

/**
 * Returns a Present Worth Factor assuming a single payment
 * in the future.
 * @param {Number} i 100-based interest rate e.g. 15% = 15
 * @param {Number} n number of periods
 * @return {Number}
 * @example let presentWorth = singlePW(5, 1);
 * console.log(presentWorth); // Returns 0.9523809523809523
 */
export function singlePW (i, n) {
  let presentWorthFactor = 1 / singleFW(i, n)
  return presentWorthFactor
}

/**
 * Returns an Annual Worth Factor assuming a single payment.
 * @param {Number} i 100-based interest rate e.g. 15% = 15
 * @param {Number} n number of periods
 * @return {Number}
 */
export function uniformAWfromP (i, n) {
  let futureWorthFactor = this.singleFW(i, n)
  let annualWorthFactor = (futureWorthFactor * (i / 100) / (futureWorthFactor - 1))
  return annualWorthFactor
}

/**
 * Returns an Annual Worth Factor assuming a single payment
 * in the future.
 * @param {Number} i 100-based interest rate e.g. 15% = 15
 * @param {Number} n number of periods
 * @return {Number}
 */
export function uniformAWfromF (i, n) {
  let futureWorthFactor = this.singleFW(i, n)
  let annualWorthFactor = ((i / 100) / (futureWorthFactor - 1))
  return annualWorthFactor
}

/**
 * Returns a Future Worth Factor assuming an uniform annual
 * payment across 'n' number of periods.
 * @param {Number} i 100-based interest rate e.g. 15% = 15
 * @param {Number} n number of periods
 * @return {Number}
 */
export function uniformFWfromA (i, n) {
  return 1 / uniformAWfromF(i, n)
}

/**
 * Returns a Present Worth Factor assuming an uniform annual
 * payment across 'n' number of periods.
 * @param {Number} i 100-based interest rate e.g. 15% = 15
 * @param {Number} n number of periods
 * @return {Number}
 */
export function uniformPWfromA (i, n) {
  return 1 / uniformAWfromP(i, n)
}
