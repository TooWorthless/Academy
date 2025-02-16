import MyRegExp from "./myRegExp.js";

// Part 5

const text = "<@Viktor/>Hey team. I would +38 (050) 552-35-054 like to have qwer123+38050 552-35-054_aj@gmail123.service_5.com a call with <@Megan/> at 17:00. <@Mike/> test@test.rcomu would you join us?";
const regexp = new MyRegExp(text);

// search all phone numbers
// regexp.match(/\+[0-9]{2}(?=\s)\([0-9]{3}\)\s[0-9\s](?=\s)/ig);
// {10, 16}
regexp.match(/(\+?)[0-9]{2}(\s?)(\(?)[0-9]{3}(\)?)(\s?)[0-9\-]+/ig);
regexp.match(/(\+?)\d+[\d\-\(\)\s]{10,16}/ig);
// 














