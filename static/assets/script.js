

// self executing function here
(function () {
    setTimeout(() => {
        window.botpressWebChat?.init({
            host: 'https://chatbot.nguyenloki.com',
            botId: 'bot-bk',
            lazySocket: false
        })
    }, 1000);
  

})();