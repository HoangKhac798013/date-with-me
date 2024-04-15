let button = document.querySelectorAll(".svgs button");

button.forEach(function(button) {
    button.addEventListener('click', function() {
        this.querySelector('svg').classList.toggle('liked');
    })
});
