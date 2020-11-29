chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if( details.url == "https://assetsv2.fiverrcdn.com/assets/dist/entries/fNotificationSound-684357146b95835d4170c5f1f183819b.js?v=1" )
            return {redirectUrl: "http://www.mysite.com/js/library_dev.js" };
    },
    {urls: ["*://assetsv2.fiverrcdn.com/assets/*.js*"]},
    ["blocking"]);


console.log("bg script")    


// ://127.0.0.1:5500/