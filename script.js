var h2 = document.querySelector('header h2');
var div = document.querySelector('div.wrapper');
// var header = document.querySelector('header');
var list = document.getElementById('list');
var btn = document.getElementById('add-btn');
var input = document.getElementById('add-input');
var hideBtn = document.getElementById('hide-list');
var hideBox = document.getElementById('hide');
var search = document.querySelector('#search-note input');

h2.classList.add('changeFt');

//This is to add new Items
btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (input.value !== "") {
        var newElement = document.createElement('li'),
            firstP = document.createElement('p'),
            secondP = document.createElement('p'),
            firstI = document.createElement('i'),
            secondI = document.createElement('i'),
            inputElem = document.createElement('input');

        firstP.textContent = input.value;
        firstI.setAttribute('class', 'fa fa-pencil-square-o');
        secondI.setAttribute('class', 'fa fa-times');
        secondP.appendChild(firstI);
        secondP.appendChild(secondI);
        inputElem.setAttribute('class', 'edit-note');
        inputElem.setAttribute('type', 'text');

        newElement.appendChild(firstP);
        newElement.appendChild(secondP);
        newElement.appendChild(inputElem);

        list.appendChild(newElement);

        input.value = '';
    }
});

//edit and remove items
list.addEventListener('click', function (e) {
    if (e.target.classList[1] === 'fa-pencil-square-o') {
        var parentPar = e.target.parentNode;
        parentPar.style.display = 'none';

        var note = parentPar.previousElementSibling;
        var input = parentPar.nextElementSibling;
        input.style.display = 'block';

        input.value = note.textContent;
        input.addEventListener('keypress', function(e) {
            if (e.key === "Enter") {
                if (input.value === "") {
                    //then delete the note
                    list.removeChild(note.parentNode);
                } else {
                    note.textContent = input.value;
                    input.style.display = 'none';
                    parentPar.removeAttribute('style');
                }
            }
        });
    } else if (e.target.classList[1] === 'fa-times') {
        list.removeChild(e.target.parentNode.parentNode);
    }
});

//Hide/ Show Notes
hideBtn.addEventListener('click', function (e) {
    var label = document.querySelector('label');
    if(hideBox.checked) {
        //then show
        list.style.display = 'none';
        label.textContent = 'Show Notes';
    } else {
        //then hide
        list.style.display = 'block';
        label.textContent = 'Hide Notes';
    }
});

//Search notes

search.addEventListener('keyup', function (e) {
    var searchChar = e.target.value.toUpperCase();

    var notes = Array.from(list.getElementsByTagName('li'));

    notes.forEach(function(note) {
        var text = note.firstElementChild.textContent.toUpperCase();
        if (text.indexOf(searchChar) === -1) {
            note.style.display = 'none';
        } else {
            note.style.display = 'block';
        }
    })
});

//
// for (var i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].addEventListener('click', removeKid(i));
// }
//
// function removeKid(i) {
//     list.removeChild(list.children[i]);
// }


// for (var j = 0; j < editButtons.length; j++) {
//     editButtons[j].addEventListener('click', function(i) {
//         listItems[i].te;
//     })
// }



