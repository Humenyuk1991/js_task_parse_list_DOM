'use strict';

function getSalary(element) {
  return Number(element.dataset.salary);
}

function sortList(workerList) {
  const items = Array.from(workerList.children);

  items.sort((a, b) => getSalary(b) - getSalary(a));

  workerList.append(...items);

  return items;
}

function getEmployees(workerList) {
  const items = Array.from(workerList.children);

  return items.map((item) => ({
    name: (item.dataset.name || '').trim(),
    position: (item.dataset.position || '').trim(),
    salary: getSalary(item) || 0,
    age: Number(item.dataset.age) || 0,
  }));
}

const list = document.querySelector('ul');

if (list) {
  sortList(list);

  getEmployees(list);
}
