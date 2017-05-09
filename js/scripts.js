// business logic
var puzzled = function(word) {
    var word = $("input#wordify").val();
    var newWord = word.split("");
    console.log(word[i])
    for (var i = 0; i < word.length; i += 1) {
        if (newWord[i] === "a" || newWord[i] === "e" || newWord[i] === "i" || newWord[i] === "o" || newWord[i] === "u") {
            newWord[i] = newWord[i].replace("a", "-");
            newWord[i] = newWord[i].replace("e", "-");
            newWord[i] = newWord[i].replace("i", "-");
            newWord[i] = newWord[i].replace("o", "-");
            newWord[i] = newWord[i].replace("u", "-");
        }
    }
    var newerWord = newWord.join("");

    return newerWord;
}

// user interface logic
$(document).ready(function() {
    $("form#puzzle").submit(function(event) {
        event.preventDefault();
        var wordIn = $("input#wordify").val();
        var wordPuzzle = puzzled(wordIn);
        $("#output").text(wordPuzzle);
    });
});
