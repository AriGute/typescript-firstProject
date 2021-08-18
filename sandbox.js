if (document.readyState === 'complete') {
    var character = 'mario';
    console.log(character);
    var inputs = document.querySelectorAll('input');
    console.log(inputs.length);
    inputs.forEach(function (input) { return console.log(input); });
}
