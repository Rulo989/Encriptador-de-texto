function encryptText(text) {

    const encryptionRule = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    };

    return text.split('').map(char => encryptionRule[char] || char).join('');
}

function decryptText(text) {

    const decryptionRule = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u',
    };

    for (const [key, value] of Object.entries(decryptionRule)) {
        text = text.replace(new RegExp(key, 'g'), value);
    }

    return text;
}

function isValidText(text) {

    const regex = /^[a-z0-9\s]*$/; 
    return regex.test(text);
}

document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;

    if (!isValidText(inputText)) {
        alert('Por favor, ingrese solo letras minúsculas y números.');
        return; 
    }

    const outputText = encryptText(inputText);
    
    document.getElementById('outputText').value = outputText;

    document.getElementById('inputText').style.backgroundColor = '#d4edda'; 
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;

    if (!isValidText(inputText)) {
        alert('Por favor, ingrese solo letras minúsculas y números.');
        return; 
    }

    const outputText = decryptText(inputText);
    
    document.getElementById('outputText').value = outputText;

    document.getElementById('inputText').style.backgroundColor = '#f8d7da'; 
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select(); 
    document.execCommand('copy'); 

    document.getElementById('inputText').style.backgroundColor = '#cce5ff'; 
});
