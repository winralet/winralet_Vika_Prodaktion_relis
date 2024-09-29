// JavaScript
const subscribeButton = document.querySelector('.subscribe-button');
const subscribeMessage = document.querySelector('.subscribe-message');

subscribeButton.addEventListener('click', () => {
  // Визуальные эффекты
  subscribeButton.classList.add('animate');
  setTimeout(() => {
    subscribeButton.classList.remove('animate');
  }, 1000);

  // Показать надпись "Вы подписались"
  subscribeMessage.classList.add('show');
  subscribeMessage.textContent = 'Вы подписались!';
  setTimeout(() => {
    subscribeMessage.classList.remove('show');
  }, 3000);
});

// JavaScript
const likeButton = document.querySelector('.like-button');

likeButton.addEventListener('click', () => {
  likeButton.classList.add('animate');
  likeButton.querySelector('.fas').classList.add('animate');
  setTimeout(() => {
    likeButton.classList.remove('animate');
    likeButton.querySelector('.fas').classList.remove('animate');
  }, 1000);
});

// Получаем все кнопки лайков
const likeButtons = document.querySelectorAll('.like-button');

// Создаем объект для хранения состояния лайков
const likes = {};

// Проходим по всем кнопкам лайков
likeButtons.forEach((button) => {
  // Получаем ID видео, для которого эта кнопка лайка
  const videoId = button.getAttribute('data-video-id');

  // Если у кнопки лайка есть атрибут data-video-id, то сохраняем его в объект likes
  if (videoId) {
    likes[videoId] = false;
  }

  // Добавляем обработчик события для кнопки лайка
  button.addEventListener('click', () => {
    // Получаем текущее состояние лайка для этого видео
    const currentState = likes[videoId];

    // Если лайк уже поставлен, то снимаем его
    if (currentState) {
      likes[videoId] = false;
      button.classList.remove('active');
      button.textContent = 'Лайк';
    } else {
      // Если лайк не ставился, то ставим его
      likes[videoId] = true;
      button.classList.add('active');
      button.textContent = 'Лайкнуто';
    }
  });
});
