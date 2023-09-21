const cards = document.querySelectorAll('.tcard');
const expanded = document.querySelector('.expanded');
let currentCard;

function expandCard(event) {
  const card = event.target.closest('.tcard');
  if (!currentCard || currentCard !== card) {
    currentCard = card;
    expanded.style.display = 'block';
    card.parentNode.insertBefore(expanded, card);
    setTimeout(() => {
      card.style.transform = 'scale(1.1)';
      card.style.zIndex = 9999;
    }, 300);
  } else {
    closeExpanded();
  }
}

function closeExpanded() {
  currentCard = null;
  expanded.style.display = 'none';
  Array.from(document.querySelectorAll('.tcard')).forEach((card) => {
    card.style.transform = '';
    card.style.zIndex = '';
  });
}

cards.forEach((card) => {
  card.addEventListener('click', expandCard);
});

expanded.addEventListener('click', () => {
  closeExpanded();
});