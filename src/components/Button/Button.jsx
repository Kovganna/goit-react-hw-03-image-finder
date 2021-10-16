const loadMoreBtn = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};

export default loadMoreBtn;
