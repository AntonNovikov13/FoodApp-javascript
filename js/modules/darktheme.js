var btn = document.querySelector('#theme-button');
var link = document.querySelector('#theme-link');

// DarkTheme
function darktheme() {
    btn.addEventListener('click', function () {
        ChangeTheme();
        localStorage.setItem('href', localStorage.getItem('href'));
    });

    function ChangeTheme() {
        let lightTheme = 'css/light.css';
        let darkTheme = 'css/dark.css';
        var theme = '';

        var currentTheme = link.getAttribute('href');

        if (currentTheme == darkTheme) {
            currentTheme = lightTheme;
            theme = 'css/light.css';
        } else {
            currentTheme = darkTheme;
            theme = 'css/dark.css';
        }
        localStorage.setItem('href', theme);
        link.setAttribute('href', localStorage.getItem('href'));
    }
}

function applyTheme(themeName) {
    let themeUrl = themeName;
    link.setAttribute('href', themeUrl);
}

let activeTheme = localStorage.getItem('href');
if (activeTheme === null) {
    applyTheme('css/light.css');
} else {
    applyTheme(activeTheme);
}

export default darktheme;
