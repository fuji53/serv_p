alert("dont leave me alone");

function themeToggler() {
    let theme = localStorage.getItem('theme')
    if (theme == null) {
        theme = 'black'
    } else if (theme === 'white') {
        theme = 'black'
    } else if (theme === 'black') {
        theme = 'white'
    }
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('theme', theme)
}

setInterval(function () {
    document.getElementById('time').innerHTML = 'Server Time: ' + new Date().toLocaleString('ru-RU', {timeZone: 'Asia/Yekaterinburg'});
}, 1000);