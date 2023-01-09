window.loadScript = function (url) {
    return new Promise((resolve, reject) => {
        let d = document.createElement("script");
        d.onload = resolve;
        d.onerror = reject;
        d.src = url;
        document.head.appendChild(d);
    });
}