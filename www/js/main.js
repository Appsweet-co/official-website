new Worker("./www/js/work-with-us.js").postMessage(null);

const toggle = (id) => {
  const elem = document.querySelector(`#${id}`);
  requestAnimationFrame(() => elem.toggleAttribute('hidden'));
};
