const isValidLuhnNumber = require('../../src/libs/luhn');

describe('Luhn check', () => {
   it('should return false for empty, null, undefined values', () => {
      expect(isValidLuhnNumber(undefined)).toBe(false);
      expect(isValidLuhnNumber(null)).toBe(false);
      expect(isValidLuhnNumber('')).toBe(false);
   });

   it('should return false for valid non-string values', () => {
      expect(isValidLuhnNumber(4984421209470251)).toBe(false);
   });

   it('should return true for valid values', () => {
      expect(isValidLuhnNumber('4929389736846657')).toBe(true);
      expect(isValidLuhnNumber('4539107183256776492')).toBe(true);
      expect(isValidLuhnNumber('6011188610817576')).toBe(true);
      expect(isValidLuhnNumber('5367778339878719')).toBe(true);
      expect(isValidLuhnNumber('6011697962174721720')).toBe(true);
      expect(isValidLuhnNumber('4984421209470251')).toBe(true);
   });
});
