const closeModal = (modalConainer) => {
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    modalConainer.style.display = 'none';
  });
}

export default closeModal;