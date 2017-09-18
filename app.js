function hideInstructions() {
  document.querySelector('.instructions').setAttribute('visible', 'false');
}
setTimeout(hideInstructions, 10000);


function showNext() {
  document.querySelector('.link').setAttribute('visible', 'true');
}
setTimeout(showNext, 10000);

