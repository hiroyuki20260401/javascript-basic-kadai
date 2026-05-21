// HTML要素を定数に取得します
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときのイベント処理を追加します
btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});