// HTML要素をIDで取得します
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされた時のイベントを設定します
btn.addEventListener('click', () => {
  // 2000ミリ秒（2秒）後に実行する処理を指定します
  setTimeout(() => {
    text.textContent = 'ボタンがクリックされました';
  }, 2000);
});