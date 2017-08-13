var home = document.getElementById('home');
var bars = document.getElementById('bars');
var barChart = document.getElementById('bar-chart');
var envelope = document.getElementById('envelope');
var circle = document.getElementById('circle');
var navWindow = document.getElementById('nav-window');
var alterEgoDesigns = document.getElementById('alter-ego-designs');

home.addEventListener('click', function () {
    this.classList.add('slide-fade-right');
    bars.classList.add('icon-fade-out');
    barChart.classList.add('icon-fade-out');
    envelope.classList.add('icon-fade-out');
    circle.classList.add('circle-fade-out');
    navWindow.classList.add('full-screen');
    alterEgoDesigns.classList.add('icon-fade-out');
});

bars.addEventListener('click', function () {
    this.classList.add('slide-fade-right');
    home.classList.add('icon-fade-out');
    barChart.classList.add('icon-fade-out');
    envelope.classList.add('icon-fade-out');
    circle.classList.add('circle-fade-out');
    navWindow.classList.add('full-screen');
    alterEgoDesigns.classList.add('icon-fade-out');
});

barChart.addEventListener('click', function () {
    this.classList.add('slide-fade-left');
    home.classList.add('icon-fade-out');
    bars.classList.add('icon-fade-out');
    envelope.classList.add('icon-fade-out');
    circle.classList.add('circle-fade-out');
    navWindow.classList.add('full-screen');
    alterEgoDesigns.classList.add('icon-fade-out');
});

envelope.addEventListener('click', function () {
    this.classList.add('slide-fade-left');
    home.classList.add('icon-fade-out');
    bars.classList.add('icon-fade-out');
    barChart.classList.add('icon-fade-out');
    circle.classList.add('circle-fade-out');
    navWindow.classList.add('full-screen');
    alterEgoDesigns.classList.add('icon-fade-out');
});
