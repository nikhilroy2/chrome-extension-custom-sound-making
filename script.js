window.onload = (() => {
    
})

setTimeout(()=> {
    FindingSound()
    console.log("Sound Ready")
},5000)

function SoundSource() {
    // https://www.pacdv.com/sounds/voices/oh-yeah-everything-is-fine.wav
    let getSource = 'https://cdn.jsdelivr.net/gh/nikhilroy2/chrome-extension-custom-sound-making@master/soundCdn.js'
    return getSource;
}


function FindingSound() {
    let soundScript = document.querySelector('script[src*="https://assetsv2.fiverrcdn.com/assets/dist/entries/fNotificationSound-684357146b95835d4170c5f1f183819b.js?v=1"]');
    soundScript.id = "soundScript"
    soundScript.setAttribute('src', SoundSource())
    let js_side_nav_overlay = document.querySelector('.js-side-nav-overlay');


    // prev side
    let js_side_prev = js_side_nav_overlay.previousElementSibling;
    js_side_prev.classList.add('js_side_prev')
    //let js_side_prev_script = js_side_prev.innerHTML;
    //js_side_prev.innerHTML = '';
    //js_side_prev.innerHTML = js_side_prev_script.replace('', 'ps')


    // next side
    let js_side_next = js_side_nav_overlay.nextElementSibling;
    js_side_next.classList.add('js_side_next');
    let js_side_next_script = js_side_next.innerHTML;
    js_side_next.innerHTML = '';
    setInterval(()=> {
        js_side_next.innerHTML = js_side_next_script.replace('//assetsv2.fiverrcdn.com/assets/dist/entries/fNotificationSound-684357146b95835d4170c5f1f183819b.js', SoundSource())
    },10000)

    let msg = new Audio("https://res.cloudinary.com/jbfahad/video/upload/v1606047344/you-just-received-a-message-from-fiverr-you-just-received-a-message-_satbbs.mp3");
    $('.btn-toggle-sound').click(function() {
        //msg.play();
        $(this).hasClass('on') ? msg.pause() : msg.play()
    })

    console.log(soundScript)
}
