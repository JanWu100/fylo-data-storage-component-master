const backgroundImageResizer = () => {
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

let storageTaken = 815;
let storageLeft = 1000 - storageTaken;
const root = document.querySelector(":root");

const setStorageUsage = () => {
  root.style.setProperty("--storage-taken", `${storageTaken}`);
  root.style.setProperty("--storage-taken-percent", `${storageTaken / 10}%`);
  root.style.setProperty("--storage-left", `${storageLeft}`);
};
setStorageUsage();
