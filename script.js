window.onload = (() => {
    setTimeout(()=> {
        FindingSound()
        console.log("Sound Ready")
    },1000)
})



function SoundSource() {
    // https://www.pacdv.com/sounds/voices/oh-yeah-everything-is-fine.wav
    let getSource = 'https://cdn.jsdelivr.net/gh/nikhilroy2/chrome-extension-custom-sound-making@master/soundScript.js'
    return getSource;
}


function FindingSound() {
    let soundScript = document.querySelector('script[src*="https://assetsv2.fiverrcdn.com/assets/dist/entries/fNotificationSound-684357146b95835d4170c5f1f183819b.js?v=1"]');
    //soundScript.id = "soundScript"
    soundScript.setAttribute('src', SoundSource())
    let js_side_nav_overlay = document.querySelector('.js-side-nav-overlay');

    js_side_nav_overlay.nextElementSibling.innerHTML = '//'
    js_side_nav_overlay.previousElementSibling.innerHTML = '//'
    let msg = new Audio("https://res.cloudinary.com/jbfahad/video/upload/v1606047344/you-just-received-a-message-from-fiverr-you-just-received-a-message-_satbbs.mp3");
    $('.btn-toggle-sound').click(function() {
        //msg.play();
        $(this).hasClass('on') ? msg.pause() : msg.play()
        
        
    })


   

    console.log(soundScript)
}
