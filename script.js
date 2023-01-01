function caesarsCipher() {
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    let rot13 = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    let str = document.getElementById("text").value;
    let cipher = document.getElementById("cipher");
    let cipherStr = [];

    for(let i=0; i<str.length; i++) {
        for(let j=0; j<alphabet.length; j++) {
            if(str[i] === alphabet[j]) {
                cipherStr += rot13[j];
            } 
        } 
    }
    cipher.value = cipherStr;
}