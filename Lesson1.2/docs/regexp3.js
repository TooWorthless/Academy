import MyRegExp from "./myRegExp.js";

// Part 3

const text = "<@Viktor/>Hey team. I would like to have a call with <@Megan/> at 17:00. <@Mike/> would you join us?";
const regexp = new MyRegExp(text);

// search all nicknames
regexp.match( /(?<=<@)(?<=@)\w+(?=\/>)/ig);
// [ 'Viktor', 'Megan', 'Mike' ]














