export default {
    inserted: el => {
      function loadImage() {
        if (el.nodeName == 'IMG' && el) {
          el.addEventListener("load", () => {
            setTimeout(() => el.classList.add("loaded"), 100);
          });
          el.addEventListener("error", () => console.log("error"));
          el.src = el.dataset.url;
        }
        else {
          el.style.backgroundImage = `url(${el.dataset.url})`
        }
      }
  
      function handleIntersect(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImage();
            observer.unobserve(el);
          }
        });
      }
  
      function createObserver() {
        const options = {
          root: null,
          threshold: "0"
        };
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(el);
      }
      if (window["IntersectionObserver"]) {
        createObserver();
      } else {
        loadImage();
      }
    }
  };
  