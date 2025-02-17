{
    const regex = /hello/; // Ищет "hello" в строке
}

{
    const pattern = "hello";
    const regex = new RegExp(pattern);
}

{
    // Основные методы работы с RegExp

    // str.match(regex) - Ищет совпадения и возвращает массив
    // str.replace(regex, newSubstr) - Заменяет найденное значение
    // str.search(regex) - Возвращает индекс первого совпадения
    // str.split(regex) - Разделяет строку по регулярному выражению

    // Пример
    const str = "Привет, мир!";
    console.log(str.match(/мир/)); // ["мир"]
    console.log(str.replace(/мир/, "JavaScript")); // "Привет, JavaScript!"
    console.log(str.search(/мир/)); // 8 (индекс начала совпадения)
    console.log(str.split(/,/)); // ["Привет", " мир!"]
}

{
    // Основные методы объекта RegExp

    // regex.test(str) - Проверяет, есть ли совпадение (возвращает true/false)
    // regex.exec(str) - Возвращает информацию о первом совпадении

    // Пример
    const regex = /мир/;
    console.log(regex.test("Привет, мир!")); // true
    console.log(regex.exec("Привет, мир!")); // ["мир", index: 8, input: "Привет, мир!"]

}

{
    // Флаги регулярных выражений

    // g - Глобальный поиск(находит все совпадения, а не только первое)
    // i - Игнорирует регистр(/hello/i найдёт "hello", "HELLO", "HeLLo")
    // m - Многострочный режим(используется с ^ и $)
    // s - Разрешает.находить \n(включает режим "dotall")
    // u - Включает поддержку Юникода(например, для поиска эмодзи)
    // y - Поиск с привязкой к позиции в строке
}

