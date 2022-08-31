import './styles/style.css';

const modal = document.getElementById('modal');
const btn = document.getElementById('modal-open');
const close = document.querySelector('.close');

btn.onclick = () => {
  modal.style.display = 'block';
};

close.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
