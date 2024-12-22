document.getElementById("translateBtn").addEventListener("click", async function () {
    const inputText = document.getElementById("inputText").value.trim();
    const targetLanguage = document.getElementById("languageSelect").value;

    if (!inputText) {
        alert("لطفاً متنی برای ترجمه وارد کنید.");
        return;
    }

    try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://libretranslate.com/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                q: inputText,
                source: "auto",
                target: targetLanguage,
            }),
        });

        // بررسی وضعیت پاسخ
        if (!response.ok) {
            throw new Error(`خطا در ارتباط با API: ${response.statusText}`);
        }

        const data = await response.json();

        // بررسی داده‌های دریافتی و نمایش نتیجه
        if (data && data.translatedText) {
            document.getElementById("translatedText").innerText = data.translatedText;
        } else {
            document.getElementById("translatedText").innerText = "نتیجه‌ای یافت نشد.";
        }
    } catch (error) {
        console.error("خطا:", error);
        document.getElementById("translatedText").innerText = "خطایی در ترجمه رخ داده است.";
    }
});