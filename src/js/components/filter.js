function data() {
  var btns = document.querySelectorAll('.filter__btn');
  var cards = document.querySelectorAll('.product');

  function filter(category, items) {
    items.forEach((item) =>{
      var isItemFiltered = !item.classList.contains(category);
      var isShowAll = category.toLowerCase() === 'all';

      if (isItemFiltered && !isShowAll) {
        item.classList.add('anim');
      }else{
        item.classList.remove('disappear');
        item.classList.remove('anim');
      }
    });
  }

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filter(btn.dataset.filter, cards);
    });
  });

  cards.forEach((card) => {
    card.ontransitionend = function () {
      if(card.classList.contains('anim')){
        card.classList.add('disappear');
      }
    };
  });
}

data();
