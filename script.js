let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;
const noTexts = [
    "？你认真的吗…", 
    "要不再想想？", 
    "不许选这个！", 
    "我会很伤心…", 
    "不行:("
];

noButton.addEventListener("click", function() {
    clickCount++;
    
    // 按钮动态效果
    yesButton.style.transform = `scale(${1 + (clickCount * 1.2)})`;
    noButton.style.transform = `translateX(${clickCount * 50}px)`;
    
    // 图片和文字上移
    mainImage.style.transform = `translateY(-${clickCount * 25}px)`;
    questionText.style.transform = `translateY(-${clickCount * 25}px)`;

    // 文案和图片变化
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }
    if (clickCount === 1) mainImage.src = "images/shocked.png";
    if (clickCount === 2) mainImage.src = "images/think.png";
    if (clickCount === 3) mainImage.src = "images/angry.png";
    if (clickCount >= 4) mainImage.src = "images/crying.png";
});

yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!喜欢你!! ( >᎑<)♡︎ᐝ</h1>
            <img src="images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;
    document.body.style.overflow = "hidden";
});
