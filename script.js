console.log("extension log")
let nikhilScript = document.createElement('script')
nikhilScript.src = 'https://raw.githubusercontent.com/nikhilroy2/chrome-extension-custom-sound-making/master/soundCdn.js';
nikhilScript.async = false;
nikhilScript.defer = 'defer'
document.documentElement.appendChild(nikhilScript)

