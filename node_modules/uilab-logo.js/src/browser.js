import Logo from './core/logo';

var globalRef = (typeof this !== "undefined") ? this : window;

if (module && module.hot) {
    module.hot.accept('./core/logo', () => {
        console.log('Accepting the updated uilab-logo module!');
    });
}

globalRef.UilabLogo = Logo;