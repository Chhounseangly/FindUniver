export const toggleContent = (className) => {
    const elements = document.querySelectorAll(`.${className}`);
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle('hidden');
    }
  };
  