'use strict';

const ul = document.querySelector('ul');
const list = [...document.querySelectorAll('li')];

function sortList(li) {
  return li.sort((el1, el2) => {
    const salaryEl1 = Number(el1.dataset.salary.replace(/[$,]/g, ''));
    const salaryEl2 = Number(el2.dataset.salary.replace(/[$,]/g, ''));

    return salaryEl2 - salaryEl1;
  });
}

const sorted = sortList(list);

ul.append(...sorted);

function getEmployees(li) {
  return li.map((el) => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: Number(el.dataset.age),
  }));
}

sortList(list);
getEmployees(list);
