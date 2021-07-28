import { formSubmitionHandler, validateInput } from '../src/domHelpers.js';

const fs = require('fs');

const initHtml = fs.readFileSync('./src/index.html');

beforeEach(() => {
  document.body.innerHTML = initHtml;
  jest.resetModules();
  jest.clearAllMocks();
});

describe('#validateInput', () => {
  describe('Invalid Input', () => {
    it('checks that Input field is not empty', () => {
      const event = { target: { name: 'score', value: '' } };
      expect(validateInput(event)).not.toBe(true);
      expect(validateInput(event).message).toBe('score can\'t be empty!');
    });
    it('checks that Input field is not white space', () => {
      const event = { target: { name: 'score', value: '  ' } };
      expect(validateInput(event)).not.toBe(true);
      expect(validateInput(event).message).toBe('score can\'t be empty!');
    });
  });
  describe('invalid name input', () => {
    it('checks that the name is at least 3 chars', () => {
      const e = { target: { name: 'name', value: 'xy' } };

      expect(validateInput(e).message).toBe('min name length 3 chars');
    });
  });
  describe('invalid score input', () => {
    it('checks that the score is a number', () => {
      const e = { target: { name: 'score', value: 'five' } };

      expect(validateInput(e).message).toBe('score must be a number');
    });
  });
});

describe('formSubmitionHandler', () => {
  it('extracts data from the form\'s input filelds as object ', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        elements: {
          name: { value: 'john' },
          score: { value: '6' },
        },
      },
    };

    const extractedData = formSubmitionHandler(event);

    expect(extractedData).toEqual({ name: 'john', score: 6 });
  });
});