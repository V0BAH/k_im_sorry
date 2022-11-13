var guilty = "I feel Guilty!";
var lyrics = "";
var times = 100000;

while (times > 0) {
    lyrics = lyrics + times + " times " + guilty + " I'm Sorry Kristina! <br>";

    if (times > 1) {
        times - 1;
    }
    else {
        lyrics = lyrics + "You are the Best in the Universe! " + guilty + ". <br>";
    }
    times = times - 1;
}

document.write(lyrics);
