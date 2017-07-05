/**
 * finance-factor's unit test module
 * @module finance-factors/test
 * @license MIT
 * @author diegofigs
 */

/* global describe, context, it */
import chai from 'chai'
import * as lib from '../lib/finance-factors.min'
const expect = chai.expect

describe('finance-factors', () => {
  describe('#singleFW()', () => {
    context('with 5% interest', () => {
      it('should return 1.05 over 1 period', () => {
        expect(lib.singleFW(5, 1)).to.be.equal(1.05)
      })
      it('should return 1.1025 over 2 periods', () => {
        expect(lib.singleFW(5, 2)).to.be.equal(1.1025)
      })
      it('should return 1.21550625 over 4 periods', () => {
        expect(lib.singleFW(5, 4)).to.be.equal(1.21550625)
      })
      it('should return 1.340095640625 over 6 periods', () => {
        expect(lib.singleFW(5, 6)).to.be.equal(1.340095640625)
      })
      it('should return 1.7958563260221292 over 12 periods', () => {
        expect(lib.singleFW(5, 12)).to.be.equal(1.7958563260221292)
      })
    })
    context('inverse relationship with PW factor', () => {
      it('should return inverse of PW(5,1)', () => {
        expect(lib.singleFW(5, 1)).to.be.equal(1 / 0.9523809523809523)
      })
      it('should return inverse of PW(5,12)', () => {
        expect(lib.singleFW(5, 12)).to.be.equal(1 / 0.5568374181775595)
      })
    })
  })
  describe('#singlePW()', () => {
    context('with 5% interest', () => {
      it('should return 0.9523809523809523 from 1 period', () => {
        expect(lib.singlePW(5, 1)).to.be.equal(0.9523809523809523)
      })
      it('should return 0.9070294784580498 from 2 periods', () => {
        expect(lib.singlePW(5, 2)).to.be.equal(0.9070294784580498)
      })
      it('should return 0.822702474791882 from 4 periods', () => {
        expect(lib.singlePW(5, 4)).to.be.equal(0.822702474791882)
      })
      it('should return 0.7462153966366276 from 6 periods', () => {
        expect(lib.singlePW(5, 6)).to.be.equal(0.7462153966366276)
      })
      it('should return 0.5568374181775595 from 12 periods', () => {
        expect(lib.singlePW(5, 12)).to.be.equal(0.5568374181775595)
      })
    })
    context('inverse relationship with FW factor', () => {
      it('should return inverse of FW(5,1)', () => {
        expect(lib.singlePW(5, 1)).to.be.equal(1 / 1.05)
      })
      it('should return inverse of FW(5,12)', () => {
        expect(lib.singlePW(5, 12)).to.be.equal(1 / 1.7958563260221292)
      })
    })
  })
})
