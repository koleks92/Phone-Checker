function telephoneCheck(str) {
  let regex = /^(1[\s]?)?((?:[(](?:\d\d\d|\d\d\d)[)][\s]?)|(?:(?:\d\d\d|\d\d\d)[\s.-]?)){1}(\d\d\d|\d\d\d|\d\d{2}[\s.-]?){1}(\d{4}){1}$/
  if (regex.test(str))
    return true;
  return false;
}
