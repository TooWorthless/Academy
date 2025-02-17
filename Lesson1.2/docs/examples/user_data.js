// UserName
{
    const regexp = /^[a-z0-9_-]{3,16}$/;

    console.log(regexp.test('normal_login-123')); // true
    console.log(regexp.test('IncorrectLogin')); // false
    console.log(regexp.test('inc*rrect_l*gin')); // false
}

console.log();

// Email
{
    const regexp = new RegExp(
        [
            '[a-z0-9._%+-]+',
            '@[a-z0-9-]+\\.',
            '[a-z]{2,6}'
        ].join(''),
        'i'
    );

    console.log(regexp.test('correct-email@mail.com')); // true
    console.log(regexp.test('CORRECT.email@mail123.com')); //true
    console.log(regexp.test('incorrect-email@mail')); //false
}

console.log();

// Phone
{
    const regexp = new RegExp(
        [
            '\\b\\+?(\\d{1,4})?',
            '[- .]?',
            '\\(?\\d{2,3}\\)?',
            '[- .]?',
            '\\d{1,4}',
            '[- .]?',
            '\\d{1,4}\\b',
        ].join(''),
        'i'
    );

    console.log(regexp.test('(212) 348-2626')); // true
    console.log(regexp.test('+1 832-393-1000')); // true
    console.log(regexp.test('+1 202-456-11-11')); // true, but without last '-11' part
}

console.log();

// Password
{
    const regexp = new RegExp(
        [
            // (?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}
            '(?=.*[A-Z])',
            '(?=.*[!@#$&* ])',
            '(?=.*[0-9].*[0-9])',
            '(?=.*[a-z])',
            '.{8,}',
        ].join(''),
    );

    console.log(regexp.test('qwerty'));
    console.log(regexp.test('qwertyuiop'));
    console.log(regexp.test('abcABC123$'));
    console.log(regexp.test('Ve 0992760297'));
}

