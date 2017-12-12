'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var shopElement = setup.querySelector('.setup-artifacts-shop');
  var artifactsElement = setup.querySelector('.setup-artifacts');
  var draggedItem = null;
  var cloneDraggedItem;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName === 'IMG') {
      draggedItem = evt.target;
      cloneDraggedItem = draggedItem.cloneNode();
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    artifactsElement.style.outline = '';
    if (evt.target.className === 'setup-artifacts-cell' && !evt.target.childNodes.length) {
      evt.target.style.backgroundColor = '';
      evt.target.appendChild(cloneDraggedItem);
    }
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    artifactsElement.style.outline = '2px dashed red';
    if (evt.target.className === 'setup-artifacts-cell' && !evt.target.childNodes.length) {
      evt.target.style.backgroundColor = 'yellow';
    }
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    artifactsElement.style.outline = '';
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
