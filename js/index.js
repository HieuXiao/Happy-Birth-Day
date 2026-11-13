const title = document.querySelector('.title');
const text = Array.from('Is this day special?');

// Tạo toàn bộ span một lần rồi gán vào DOM (layout flex đã có trong css/index.css)
title.innerHTML = text
  .map((char) => (char === ' ' ? `<span style="width: 1rem"></span>` : `<span>${char}</span>`))
  .join('');

title.querySelectorAll('span').forEach((element) => {
  element.style.animationDelay = `${Math.random() * 3}s`;
});
