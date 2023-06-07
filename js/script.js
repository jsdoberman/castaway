'use strict'

/* =========================================================== БУРГЕР МЕНЮ */
const burger = document.querySelector('.hamburger'),
	hideMenu = document.querySelector('.main-menu'), //Блок который скрывается
	menuLink = document.querySelectorAll('.main-menu__item'); //Класс элементов меню, по которым кликаем 

		burger.addEventListener('click', function() {
			hideMenu.classList.toggle('main-menu_active'); //Класс активности
			burger.classList.toggle('hamburger_close');

		});

		menuLink.forEach(function(item) {
			item.addEventListener('click', function() {
				hideMenu.classList.toggle('main-menu_active'); //Класс активности
				burger.classList.toggle('hamburger_close');
				document.body.style.overflow = '';
			});
		});


/* =========================================================== Движение элементов по прокрутке страницы */

/* -------------------------------------------Движение ввурх */
function onEntryToTop(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('to-top'); //Добавляем класс активности
		} /* else change.target.classList.remove('to-top'); */ // Оставляем - будет срабатывать каждый раз
	});
}

let optionsToTop = {
		threshold: [0.1] 
};

let observerToTop = new IntersectionObserver(onEntryToTop, optionsToTop); 
let elementsToTop = document.querySelectorAll('.to-top_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsToTop) { 
	observerToTop.observe(elm); 
}



/* ---------------------------------------Движение слева на право */
function onEntryLeftToRight(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('left-to-right'); //Добавляем класс активности
		} /* else change.target.classList.remove('left-to-right'); */ // Оставляем - будет срабатывать каждый раз
	});
}

let optionsLeftToRight = {
		threshold: [0.1] 
};

let observerLeftToRight = new IntersectionObserver(onEntryLeftToRight, optionsLeftToRight); 
let elementsLeftToRight = document.querySelectorAll('.left-to-right_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsLeftToRight) { 
	observerLeftToRight.observe(elm); 
}



/* ---------------------------------------Движение справа на лево */
function onEntryRightToLeft(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('right-to-left'); //Добавляем класс активности
		}/*  else change.target.classList.remove('right-to-left'); */ // Оставляем - будет срабатывать каждый раз
	});
}

let optionsRightToLeft = {
		threshold: [0.1] 
};

let observerRightToLeft = new IntersectionObserver(onEntryRightToLeft, optionsRightToLeft); 
let elementsRightToLeft = document.querySelectorAll('.right-to-left_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsRightToLeft) { 
	observerRightToLeft.observe(elm); 
}


/* ---------------------------------------Движение поворот */
function onEntryRotate(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('rotate'); //Добавляем класс активности
		} /* else change.target.classList.remove('rotate');  */// Оставляем - будет срабатывать каждый раз
	});
}

let optionsRotate = {
		threshold: [0.5] 
};

let observerRotate = new IntersectionObserver(onEntryRotate, optionsRotate); 
let elementsRotate = document.querySelectorAll('.rotate_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsRotate) { 
	observerRotate.observe(elm); 
}