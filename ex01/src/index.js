var isShiftPressed = false;
var isCapsLockPressed = false;
function handleButtonClick(value) {
    var textarea = document.getElementById("textArea");
    if (isShiftPressed == true) {
        textarea.value += value.toUpperCase();
        isShiftPressed = false;
    } else if (isCapsLockPressed == true){
        textarea.value += value.toUpperCase();


    }
    else {
        textarea.value += value;
    }
    

}

function submit() {
    var textarea = document.getElementById("textArea"); 
    alert(textarea.value);

}

function pressBackspace() {
    var textarea = document.getElementById("textArea"); 
    var editedText = textarea.value.slice(0, -1);
    textarea.value = editedText;
}

function pressedShift() {
    isShiftPressed = true;
}

function pressedCapsLock() {
if (isCapsLockPressed == true) {
    isCapsLockPressed = false;
} else {
    isCapsLockPressed = true;
}
}