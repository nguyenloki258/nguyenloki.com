

// self executing function here
(function () {
    setTimeout(() => {
        window.botpressWebChat?.init({
            host: 'https://aichatbot.bkholding.vn',
            botId: 'smart-chatbots-covid',
            lazySocket: false
        })
    }, 1000);
  

})();