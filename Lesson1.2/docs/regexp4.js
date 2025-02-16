import MyRegExp from "./myRegExp.js";

// Part 4

const text = "<@Viktor/>Hey team. I would like to have qwer123_aj@gmail123.service_5.com a call with <@Megan/> at 17:00. <@Mike/> test@test.rcomu would you join us?";
const regexp = new MyRegExp(text);

// search all mails
regexp.match(/\w+@[\w.-]+\.[a-z]{2,12}/ig);
// [ 'qwer123_aj@gmail123.service_5.com', 'test@test.rcomu' ]














