const progressBar = document.querySelector('#scroll-progress');

const updateScrollProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollPercentage = (scrollTop / scrollableHeight) * 100;
  
  progressBar.style.width = scrollPercentage + '%';
};

window.addEventListener('scroll', updateScrollProgress);    