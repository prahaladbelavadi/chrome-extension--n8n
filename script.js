const perform = async () => {
    const res = await fetch("https://webhook.site/49792acf-583f-437d-89be-d227d341aba3", {
        method: "POST",
        body: document.documentURI,
        mode: "no-cors"
    });
    if (res) {
        document.body.style.backgroundColor = 'green';
        setTimeout(() => {
            const color = document.body.style.backgroundColor
            document.body.style.backgroundColor = color;
        }, 1000 * 5);
    } else {
        document.body.style.backgroundColor = 'red';
        setTimeout(() => {
            const color = document.body.style.backgroundColor
            document.body.style.backgroundColor = color;
        }, 1000 * 5);

    }
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: perform
    });
});

