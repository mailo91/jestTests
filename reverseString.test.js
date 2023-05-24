const reverseString = require ('./tasks/task01')

test (
    'Проверяем реверс строки',
    () => {
       expect(reverseString('hello world')).toBe('dlrow olleh');
    }
);

