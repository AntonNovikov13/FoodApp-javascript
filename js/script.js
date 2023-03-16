require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import { openModal } from './modules/modal';
import darktheme from './modules/darktheme';

window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(
        () => openModal('.modal', modalTimerId),
        50000
    );

    darktheme('theme');
    tabs(
        '.tabheader__item',
        '.tabcontent',
        '.tabheader__items',
        'tabheader__item_active'
    );
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2023-05-20');
    cards();
    calculator();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
});
