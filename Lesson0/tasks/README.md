# Результат роботи методів

## isObject(data): boolean

* isObject(String("hvcsdjh")) - false
* isObject(new Set()) - false
* isObject([]) - false
* isObject(new Object()) - true
* isObject({}) - true

## parseInteger(str): int

* parseInteger("21") - 21
* parseInteger("-21") - -21
* parseInteger(" 21") - 21
* parseInteger("  -21") - -21
* parseInteger("2121ssdfsdfsdf asdasdasd") - 2121
* parseInteger("sdfsdfsdf sdfsdf 228") - NaN
* parseInteger("-123456789123456789122") - -123456789123456800000

## parseFloat(str): float

* parseFloat("123456.7") - 123456.7
* parseFloat("123456.789123451.34.56") - 123456.789123451
* parseFloat(".123456.78912.34.56") - 0.123456
* parseFloat("-123.456sASDASD sdasdasd") - -123.456
* parseFloat("asdasdsaasd-123.456 sASDASD sdasdasd") - NaN

## includes(text, matchStr, index = 0): boolean

* includes("hello world", "world") - true
* includes("hello world", "world", 6) - true
* includes("hello world", "world", 7) - false
* includes("helloworld", "world") - true
* includes("helloworld", "i") - false

## split(text, divider): Array\<String\>

* split("a,b,c", ",") - [ 'a', 'b', 'c' ]
* split("hello world", " ") - [ 'hello', 'world' ]
* split("test", "e") - [ 't', 'st' ]
* split("123--456--789", "---") - [ '123--456--789' ]
* split("no-divider", ",") - [ 'no-divider' ]
* split("ab##cd##ef", "##") - [ 'ab', 'cd', 'ef' ]
* split("aaaaaa", "aa") - [ '', '', '', '' ]
* split("aaaabaaa", "aaa") - [ '', 'ab', '' ]

## parseBalance(message): int | float

* parseBalance('My wallet balance is 14960 USDT') - 14960
* parseBalance('My wallet balance is 123456789.99 USD') - 123456789.99
* parseBalance('My balance rest is 0.99 USDT') - 0.99
* parseBalance('dsfsdfdsf sdsdfsddf ssdf') - NaN

## countBalance1(message): Object

* countBalance1('Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT') -

{ kate: 1000, dmitrty: 350, max: 600 }

* countBalance1('Hello 500 <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT') -

{ kate: 1000, dmitrty: 350, max: 600 }

* countBalance1('Hello 500 <@Kate />, you did your work well and I sent you USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT') -

{ dmitrty: 350, max: 600 }

## countEmoji(message, emoji): Object

* countEmoji(case1, 'apple') - { kate: 1, max: 2, alisa: 2 }
* countEmoji(case2, 'apple') - { kate: 1, max: 3, alisa: 2 }
* countEmoji(case3, 'apple') - { kate: 1, max: 2, alisa: 2 }
* countEmoji(case4, 'apple') - { kate: 5, max: 2, alisa: 2 }
* countEmoji(case5, 'apple') - { kate: 1, max: 2, olia: 2, misha: 2, dasha: 2, alisa: 2, dima: 0, vasia: 0, gena: 0, ihor: 0, tolik: 0 }
* countEmoji(case6, 'apple') - { kate: 1, max: 2, alisa: 2 }

\
\
// count balance 3 - reverse

## countBalance2,3(message): int | float

* countBalance2,3("My wallet balance is 14690 USDT. I paid 750 USDT for plane tickets and 921 USDT for a flat") - 13019
* countBalance2,3("I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT.") - 13019
* countBalance2,3("I paid 750.502 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 1469023.123124 USDT.") - 1467351.6211239998

## На головну

* [Academy](/)
