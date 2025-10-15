import { formatCurrency } from '../script/utils/money.js';

describe('Test-suite: formatCurrency', () => {
  it('Convert cents into dollars', () => {
    expect(formatCurrency(2090)).toEqual('20.90');
  });

    it('Works with Zero(0)', () => {
      expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to nearest cents', () => {
      expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});