// inner width > innerHeight*1.65

const backgroundImageResizer = () => {
  console.log("a");
  if (window.innerWidth >= innerHeight * 1.65) {
    document.querySelector("body").classList.add("flexible-bg");
  } else {
    document.querySelector("body").classList.remove("flexible-bg");
  }
};

const debounce = (func, delay = 500) => {
  let timeoutId;

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func();
    }, delay);
  };
};

backgroundImageResizer();
window.addEventListener("resize", debounce(backgroundImageResizer, 100));
