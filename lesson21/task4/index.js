// DOM - get content element

// getTitle, getDescription, getPlans, getGoal
// input: -
// output: string, (elem.textContent, elem.innerText, elem.innerHTML, elem.outerHTML)

export const getTitle = function () {
  const titleElem = document.querySelector('.title');
  return titleElem.textContent;
};

export const getDescription = function () {
  const aboutElem = document.querySelector('.about');
  return aboutElem.innerText;
};

export const getPlans = function () {
  const plansElem = document.querySelector('.plans');
  return plansElem.innerHTML;
};

export const getGoal = function () {
  const goalElem = document.querySelector('.goal');
  return goalElem.outerHTML;
};

// test data

console.log('getTitle(): ', getTitle());
console.log('getDescription(): ', getDescription());
console.log('getPlans(): ', getPlans());
console.log('getGoal(): ', getGoal());
