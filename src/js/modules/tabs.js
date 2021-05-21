import traverse from 'babel-traverse';

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = 'none';
    });

    tab.forEach((item) => {
      item.activeClass.remover(activeClass);
    });
  }

  function showTabContent(i) {
    content[i].style.display = 'block';
  }
};

export default tabs;
