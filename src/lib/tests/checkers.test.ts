import { expect, describe, it } from 'vitest';
import {
  hasNoConsecutiveLetterChecker,
  hasNumberChecker,
  hasSpecialCharChecker,
  hasUpperCaseChecker,
} from '../checkers';

describe('string checking functions', () => {
  it('returns true if word has an upper case letter', () => {
    expect(hasUpperCaseChecker('holA')).toBe(true);
  });

  it('returns false if word has not an upper case letter', () => {
    expect(hasUpperCaseChecker('saludos')).toBe(false);
  });

  it('returns true if a word has a number in it', () => {
    expect(hasNumberChecker('h311o w0r1d')).toBe(true);
  });

  it('returns false if a word has not a number in it', () => {
    expect(hasNumberChecker('hello world')).toBe(false);
  });

  it('returns true if a word has a special character in it', () => {
    const testWord = "hello!";
    const alt1 = "_salut"
    const alt2 = "love_peace"
    const alt3 = "'testing'123¡"
    const alt4 = "¿are you okay?"
    expect(hasSpecialCharChecker(testWord)).toBe(true);
    expect(hasSpecialCharChecker(alt1)).toBe(true);
    expect(hasSpecialCharChecker(alt2)).toBe(true);
    expect(hasSpecialCharChecker(alt3)).toBe(true);
    expect(hasSpecialCharChecker(alt4)).toBe(true);
  });

  it('returns true if a word has not a special character in it', () => {
    const testWord = 'this doesnt have a special character 123';
    expect(hasSpecialCharChecker(testWord)).toBe(false);
  });

  it('returns true if a word has no consecutive letters', ()=> {
    const testWord = 'n0 c0n$3c'
    expect(hasNoConsecutiveLetterChecker(testWord)).toBe(true)
  })

  it('returns true if a word has no consecutive letters', ()=> {
    const testWord = 'this is a consecutive letter word'
    expect(hasNoConsecutiveLetterChecker(testWord)).toBe(false)
  })
});
