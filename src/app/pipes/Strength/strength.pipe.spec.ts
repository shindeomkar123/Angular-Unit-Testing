import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let sPipe: StrengthPipe;
  beforeEach(() => {
    sPipe = new StrengthPipe();
  });

  it('should create pipe', () => {
    expect(sPipe).toBeInstanceOf(StrengthPipe);
  });

  it('should transform to weak when less than 10', () => {
    const value = sPipe.transform(5);
    expect(value).toBe('5 (weak)');
  });

  it('should transform to strong when more than 10', () => {
    const value = sPipe.transform(12);
    expect(value).toBe('12 (strong)');
  });

  it('should transform to strongest when more than 20', () => {
    const value = sPipe.transform(23);
    expect(value).toBe('23 (strongest)');
  });
});
