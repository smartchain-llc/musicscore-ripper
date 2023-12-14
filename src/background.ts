console.log("Music Ripper: Running background")
browser.webRequest.onBeforeRequest.addListener((details=>{
    console.log(`Fetch Intercepted: ${details}`)
}), { urls:["*://musescore.com/static/*.png"] })