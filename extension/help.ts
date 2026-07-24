var browser: Browser = browser || chrome;

document.getElementById('cancelButton').addEventListener('click', () => {
    browser.runtime.sendMessage(<AeroEyeCommand>{ acceptClicked: false, closeCallingTab: true }, () => { });
})
document.getElementById('acceptButton').addEventListener('click', () => {
    browser.runtime.sendMessage(<AeroEyeCommand>{ acceptClicked: true, closeCallingTab: true }, () => { });
})