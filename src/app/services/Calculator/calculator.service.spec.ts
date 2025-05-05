import { TestBed } from '@angular/core/testing';
import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';
const mockLoggerService = jasmine.createSpyObj('LoggerService', [
  'log',
  'clear',
]);
describe('CalculatorService', () => {
  let calculatorService: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: mockLoggerService },
      ],
    });
    calculatorService = TestBed.inject(CalculatorService);
  });
  it('should add two numbers', () => {
    const result = calculatorService.add(2, 3);
    expect(mockLoggerService.log).toHaveBeenCalled();
    expect(result).toBe(5);
  });

  it('should subtract two numbers', () => {
    const result = calculatorService.subtract(5, 3);
    expect(mockLoggerService.log).toHaveBeenCalled();
    expect(result).toBe(2);
  });
});
