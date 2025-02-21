// Case 1
{
    const contacts = `
    Контакты:
    - Username: @example
    - Email: example.email+test@gmail.com
    - Рабочий email: support@company.co.uk
    - Телефон (офис): +1 415-555-2671
    - Телефон (личный): +7 (911) 123-45-67
    - Альтернативный: 8-800-555-35-35
    - WhatsApp: +49-151-23456789`;

    const regexp = new RegExp(
        '(' + [
            '@[a-z0-9_-]{3,17}', // username
            '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}', // email
            '\\+?\\d{1,3}[- ]*?\\(?\\d{1,4}\\)?[- ]*?[\\d\\s\\-]{8,16}\\d', // phone
        ].join('|') + ')',
        'ig'
    );

    console.log('Case 1 (Contacts):', contacts.match(regexp));
    console.log();
}

// Case 2
{
    const dateAndTime = `
    - Дата: 12-02-2024
    - Время события: 08:30

    - Время отчета: 18:45`;

    const regexp = new RegExp(
        '(' + [
            // full date
            // (?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})
            '(\\d{4}-\\d{2}-\\d{2}|\\d{2}-\\d{2}-\\d{4})', // date
            '\\d{2}:\\d{2}', // time
        ].join('|') + ')',
        'ig'
    );

    console.log('Case 2 (Date and Time):', dateAndTime.match(regexp));
    console.log();
}

// Case 3
{
    const log = `
    Серверные логи:
    - Вход с IP: 192.168.0.1
    - Публичный IP: 203.0.113.42
    - Подозрительный MAC-адрес: 00:1A:2B:3C:4D:5E
    - Второй MAC-адрес: AA:BB:CC:DD:EE:FF
    - Дата: 1999-12-31`;

    const regexp = new RegExp(
        '(' + [
            '(?:[0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}', // mac-address
            '(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)', // ipv4
            // '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\.\\d{1,3}', // ipv4
            '(\\d{4}-\\d{2}-\\d{2}|\\d{2}-\\d{2}-\\d{4})', // date 
            '\d{2}:\d{2}', // time
            // '',
        ].join('|') + ')',
        'ig'
    );

    console.log('Case 3 (Server data):', log.match(regexp));
    console.log();
}

// Case 4
{
    const hashes = `
    Проверка безопасности:
    - MD5-хеш: d41d8cd98f00b204e9800998ecf8427e
    - SHA1-хеш: a94a8fe5ccb19ba61c4c0873d391e987982fbbd3
    - SHA256-хеш:  
    9c56cc26730e6ee3695d965dcbf870a1e7031cf63a7e9a1aa713ff33d7b7a076`;

    const regexp = new RegExp(
        '(' + [
            '\\b(?:[0-9a-f]{32}|[0-9a-f]{40}|[0-9a-f]{64})\\b', // hashes
        ].join('|') + ')',
        'ig'
    );

    console.log('Case 4 (Hashes):', hashes.match(regexp));
    console.log();
}

// Case 5
{
    const payment = `
    Данные:
    - Ссылка: https://shop.com/product?id=123
    - Карта: 4111-1111-1111-1111
    - Второй вариант: 5500 0000 0000 0004`;

    const regexp = new RegExp(
        '(' + [
            '(?:\\d{4}[-\\s]?){3}\\d{4}', // card
            // '(https?|ftp):\\/\\/[^\\s/$.?#].[^\\s]*', // url
            '[-a-z0-9@:%_\\+.~#?&\\/=]{2,256}\\.[a-z]{2,4}\\b(\\/[-a-z0-9@:%_\\+.~#?&\\/=]*)?', // url
        ].join('|') + ')',
        'ig'
    );

    console.log('Case 5 (Payment):', payment.match(regexp));
    console.log();
}