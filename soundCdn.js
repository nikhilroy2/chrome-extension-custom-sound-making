chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if( details.url == "https://assetsv2.fiverrcdn.com/assets/dist/entries/fNotificationSound-fd2bfa44e52b8c11ff39a2621c97ce54.js?v=1" )
            return {redirectUrl: "https://cdn.jsdelivr.net/gh/nikhilroy2/chrome-extension-custom-sound-making@master/nikhil_sound_cdn.js" };
    },
    {urls: ["*://assetsv2.fiverrcdn.com/assets/*.js*"]},
    ["blocking"]);




// ://127.0.0.1:5500/