document.addEventListener('DOMContentLoaded', function() {

    var button = document.createElement('BUTTON');
    var buttonText = document.createTextNode('Click Me');
    button.appendChild(buttonText);
    document.body.prepend(button);

    button.addEventListener("click", function() {
        alert("Good Show!");
    });
})

var button2 = document.getElementById('button2')
button2.addEventListener("click", function() {
    let text = document.getElementById('textbar').value;
    alert(text);
})

var hoverDiv = document.getElementById('hoverDiv');
hoverDiv.style.backgroundColor = 'black';
hoverDiv.style.height = '100px';
hoverDiv.style.width = '100px';


//on hovering, change box color
hoverDiv.addEventListener("mouseover", function() {
    hoverDiv.style.backgroundColor = 'tan';
    hoverDiv.addEventListener("mouseout", function() {
        hoverDiv.style.backgroundColor = 'black';
    })
})

// create a paragraph with text
var p = document.createElement('p');
var pText = document.createTextNode('This is where the fun begins!');
p.appendChild(pText);
document.body.appendChild(p);

p.addEventListener("click", function() {
    var colors = ['grey', 'blue', 'green', 'yellow'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.color = randomColor;
})

var button3 = document.createElement('button');
var button3Text = document.createTextNode('Empty Div Button');
button3.appendChild(button3Text);
document.body.appendChild(button3);
var div = document.createElement('div');

button3.addEventListener("click", function() {
    var span = document.createElement('span');
    var spanText = document.createTextNode('Markel');
    span.appendChild(spanText);
    document.body.appendChild(span);
})


let friends = document.getElementsByClassName('friends')[0];
let friendsGoals = document.getElementById('friendsGoals');
let friendsArray = ['Frances', 'Torry', 'Wilk', 'Rell', 'James', 'Loc', 'Steve', 'Desean', 'Wiley', 'Kelis'];
let friendsBtn = document.getElementById('friendsBtn');
friendsBtn.addEventListener('click', function() {
    for (i = 0; i < friendsArray.length; i++) {
        var li = document.createElement("li");
        var text = document.createTextNode(friendsArray[i]);
        li.appendChild(text);
        friendsGoals.appendChild(li);
    }

})
