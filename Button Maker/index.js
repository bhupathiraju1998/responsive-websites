let bgColorEl = document.getElementById("bgColorInput");
let fontColorEl = document.getElementById("fontColorInput");
let fontSizeEl = document.getElementById("fontSizeInput");
let fontweightEl = document.getElementById("fontWeightInput");
let paddingEl = document.getElementById("paddingInput");
let borderRadiusEl = document.getElementById("borderRadiusInput");
let customEl = document.getElementById("customButton");


function apply() {
    let backGroundd = bgColorEl.value;
    let fontColorr = fontColorEl.value;
    let fontSizee = fontSizeEl.value;
    let fontWeightt = fontweightEl.value;
    let paddingg = paddingEl.value;
    let borderRadiuss = borderRadiusEl.value;
    customEl.style.backgroundColor = backGroundd;
    customEl.style.color = fontColorr;
    customEl.style.fontSize = fontSizee;
    customEl.style.fontWeight = fontWeightt;
    customEl.style.padding = paddingg;
    customEl.style.borderRadius = borderRadiuss;

}