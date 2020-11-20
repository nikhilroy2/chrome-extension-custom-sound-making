
function FindingSound() {
    let soundScript = document.querySelector('script[src*="https://assetsv2.fiverrcdn.com/assets/dist/entries/fNotificationSound-684357146b95835d4170c5f1f183819b.js?v=1"]');
    soundScript.id = "soundScript"
    soundScript.setAttribute('src', SoundSource())
    let js_side_nav_overlay = document.querySelector('.js-side-nav-overlay');

    js_side_nav_overlay.nextElementSibling.innerHTML = '//'
    js_side_nav_overlay.previousElementSibling.innerHTML = '//'


   

    console.log(soundScript)
}
window.onload = (() => {
    
    FindingSound()
})


function SoundSource() {
    // https://www.pacdv.com/sounds/voices/oh-yeah-everything-is-fine.wav
    let getSource = 'https://cdn.jsdelivr.net/gh/nikhilroy2/chrome-extension-custom-sound-making@master/soundScript.js'
    return getSource;
}