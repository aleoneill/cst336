// Javascript vs JQuery
console.dir(document);
// let seeImage = document.getElementById('see');
let seeImage = $("#see");
// let changeButton = document.getElementById('change');
let changeButton = $("#change");
// changeButton.addEventListener('click', function(e) {
//     seeImage.setAttribute('src', 'img/now-you-dont.png');
// });
changeButton.on('click', function(e) {
    //seeImage.get(0).setAttribute('src', 'img/now-you-dont.png');
    seeImage.attr('src', 'img/now-you-dont.png');
})

// document.getElementById('moon').addEventListener('click', function(e) {
//     seeImage.setAttribute('class', 'hide');
// });

$("#moon").on('click', onMoonClick).on('touchStart', onMoonClick);

function onMoonClick(e) {
    seeImage.setAttribute('class', 'hide');
}