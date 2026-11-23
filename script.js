// Enhance the three readable sections into an accessible tab interface.
const tablist = document.querySelector('.tablist');
const tabs = Array.from(tablist.querySelectorAll('button'));
const panels = tabs.map((tab) => document.getElementById(tab.dataset.panel));
tablist.setAttribute('role', 'tablist');
function selectTab(index, moveFocus = false) {
  tabs.forEach((tab, i) => {
    const selected = i === index;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    panels[i].hidden = !selected;
  });
  if (moveFocus) tabs[index].focus();
}
tabs.forEach((tab, index) => {
  tab.id = `tab-${tab.dataset.panel}`;
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-controls', panels[index].id);
  panels[index].setAttribute('role', 'tabpanel');
  panels[index].setAttribute('aria-labelledby', tab.id);
  panels[index].tabIndex = 0;
  tab.addEventListener('click', () => selectTab(index));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    selectTab(next, true);
  });
});
selectTab(0);
