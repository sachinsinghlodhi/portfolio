function formSubmit() {
    debugger;
    event.preventDefault();
    const songs = document.querySelector('#songs').checked;
    const games = document.querySelector('#games').checked;
    const series = document.querySelector('#series').checked;
    if (songs || games || series) {
        var hobbies = (songs ? "Listening to Songs\n" : "") + (games ? "Playing FPS Games\n" : "") + (series ? "Watching TV Series\n" : "");
        const btn = document.querySelector('#submit');
        var isChecked = confirm("Selected hobbies:\n\n" + hobbies + "\nAre you sure?");


        if (isChecked) {
            var description = "";
            if (songs) {
                description = "Listening to Songs \n- In songs I prefer listening to retro songs. They are calm & soothing.\n My favourite song is Chand Shifarish.\n\n";
            }

            if (games) {
                description += "Playing FPS Games \n- I love to play fps games.\n If you want a gaming buddy then I am your guy.\n\n";
            }

            if (series) {
                description += "Watching TV Series \n- Name a series and I be I have watched it.\n My favourite series is Peaky Blinders.\n";
            }

            document.querySelector("#hobby-description").innerHTML = "<pre>" + description + "</pre>";
            document.querySelector('#songs').checked = false;
            document.querySelector('#games').checked = false;
            document.querySelector('#series').checked = false;
        }
    }
    else {
        var isChecked = confirm("Please Select Hobbies:\n\n");
        document.querySelector("#hobby-description").innerHTML = "<pre>" + "" + "</pre>";
    }
}

function mobileFormSubmit() {
    debugger;
    event.preventDefault();
    const songs = document.querySelector('#m-songs').checked;
    const games = document.querySelector('#m-games').checked;
    const series = document.querySelector('#m-series').checked;
    if (songs || games || series) {
        var hobbies = (songs ? "Listening to Songs\n" : "") + (games ? "Playing FPS Games\n" : "") + (series ? "Watching TV Series\n" : "");
        const btn = document.querySelector('#submit');
        var isChecked = confirm("Selected hobbies:\n\n" + hobbies + "\nAre you sure?");


        if (isChecked) {
            var description = "";
            if (songs) {
                description = "Listening to Songs: \nIn songs I prefer listening to retro songs.\nThey are calm & soothing.\nMy favourite song is Chand Shifarish.\n\n";
            }

            if (games) {
                description += "Playing FPS Games: \nI love to play fps games.\nIf you want a gaming buddy then I am your guy.\n\n";
            }

            if (series) {
                description += "Watching TV Series: \nName a series and I be I have watched it.\nMy favourite series is Peaky Blinders.\n";
            }

            document.querySelector("#m-hobby-description").innerHTML = "<pre>" + description + "</pre>";
            document.querySelector('#m-songs').checked = false;
            document.querySelector('#m-games').checked = false;
            document.querySelector('#m-series').checked = false;
        }
    }
    else {
        var isChecked = confirm("Please Select Hobbies:\n\n");
        document.querySelector("#m-hobby-description").innerHTML = "<pre>" + "" + "</pre>";
    }
}

function showImage() {
    document.getElementById("home-image").style.display = "block";
    document.getElementById("home-video").style.display = "none";

}

function showVideo() {
    document.getElementById("home-image").style.display = "none";
    document.getElementById("home-video").style.display = "block";
}

function mShowImage() {
    document.getElementById("m-home-image").style.display = "block";
    document.getElementById("m-home-video").style.display = "none";

}

function mShowVideo() {
    document.getElementById("m-home-image").style.display = "none";
    document.getElementById("m-home-video").style.display = "block";
}