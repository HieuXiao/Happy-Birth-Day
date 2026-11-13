window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.remove('not-loaded');

    // Array.from giữ nguyên emoji (không bị tách thành 2 ký tự lỗi)
    const titles = Array.from('YEP!! HAPPY BIRTHDAY 🎂');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.textContent += titles[index];
        index++;
        setTimeout(appendTitle, 250); // mỗi ký tự cách nhau 250ms
      }
    }

    appendTitle();
  }, 1000);
});
