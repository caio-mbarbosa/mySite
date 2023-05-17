function changeTab(tabId) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].id === tabId) {
        tabs[i].style.display = 'block';
      } else {
        tabs[i].style.display = 'none';
      }
    }
    
    const tabLinks = document.querySelectorAll('nav li');
    for (let i = 0; i < tabLinks.length; i++) {
      if (tabLinks[i].innerText.toLowerCase() === tabId) {
        tabLinks[i].classList.add('active');
      } else {
        tabLinks[i].classList.remove('active');
      }
    }
  }