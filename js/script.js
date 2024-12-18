// 取得按鈕和選單
let menu = document.querySelector("#menu-bar"); // 修正 "querySelectoor" 拼寫錯誤
let navbar = document.querySelector(".navbar");

// 按下按鈕後產生的變化
menu.onclick = () => {
    menu.classList.toggle('fa-times'); // 切換按鈕樣式（例如 X 樣式）
    navbar.classList.toggle('active'); // 切換選單顯示或隱藏
}

// 回到上一層按鈕（控制滾動時出現按鈕）
window.onscroll = () => {
    // 修正 "window.screenY" 為 "window.scrollY"
    if (window.scrollY > 60) {
        document.querySelector('#scroll-up').classList.add('active');
    } else {
        document.querySelector('#scroll-up').classList.remove('active');
    }
}
