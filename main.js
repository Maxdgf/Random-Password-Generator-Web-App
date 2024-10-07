function Generate_Random_Password() {
    try {
        var symbolsCount = parseInt(document.getElementById('csb').value);
        const letters = document.getElementById('lo').checked;
        const numbers = document.getElementById('no').checked;
        const specials = document.getElementById('sso').checked;
        var errorDetect = document.getElementById('error__detector');
        var field = document.getElementById('result');
        var password = "";
        var copyIndekator = document.getElementById('copy__indekator');
        copyIndekator.innerHTML = "";
        errorDetect.innerHTML = "";

        var letters_set = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numbers_set = "0123456789";
        var specials_set = "!@#$%^&*()_+[]{}|;:',.<>?/`~";

        for (var i = 0; i < symbolsCount; i++) {
            var l_set = letters_set.charAt(Math.floor(Math.random() * letters_set.length));
            var n_set = numbers_set.charAt(Math.floor(Math.random() * numbers_set.length));
            var s_set = specials_set.charAt(Math.floor(Math.random() * specials_set.length));
            if (letters) {
                password += l_set;
            } if (numbers) {
                password += n_set;
            } if (specials) {
                password += s_set;
            }

            var final_answer = password.substring(0, symbolsCount);

            if (symbolsCount > 50) {
                final_answer = "";
                errorDetect.innerHTML = "Error: symbols count must not exceed 50!";
            }
        }

        password = final_answer;
        field.innerHTML = password;

    } catch {
        errorDetect.innerHTML = "Error: please, check settings and try again.";
        field.innerHTML = "None";
    }
}

function Copy_Password() {
    var data = document.getElementById('result');
    var copyDetector = document.getElementById('copy__indekator');
    copyDetector.innerHTML = "copied!";
    data.select();
    document.execCommand("copy");
}
