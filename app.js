$(document).ready(function() {

    //create button
    var $button1 = $('<button>Click Me</button>').attr('id', 'btn1').appendTo('body');


    //when button is clicked
    $('#btn1').click(function() {
        alert("Good Show!");
    })


    $('.submit').click(function() {
        event.preventDefault()
        let value = $('[type="text"]').val();
        console.log(value)
        $('[type="text"]').val('');
        alert("No Good!");

    })

    // mouse in/out of square
    $('#hoverDiv').css({
            'background-color': 'black',
            'height': '100px',
            'width': '100px'
        })
        // color change on mouseover
    $('#hoverDiv').hover(function() {
        $('#hoverDiv').css('background-color', 'purple')
        $('#hoverDiv').mouseleave(function() {
            $('#hoverDiv').css('background-color', 'black')
        })

    })

    //create paragragh
    $('<p>Let me Love you!</p>').attr('id', 'para').appendTo('body');

    // click to change color of text
    $('#para').click(function() {
        var colors = ['red', 'green', 'magenta', 'blue', 'teal', 'mint'];
        var random = Math.floor(Math.random() * colors.length);
        $('#para').css('color', colors[random]);
    })

    //add empty div than add button to it
    $('<div></div>').attr({ 'name': 'Markel', 'id': 'div' }).appendTo('body');
    $('<button>Empty Div Button</div>').attr('id', 'btn3').appendTo(div);

    //upon button click, add span with name
    $('#btn3').click(function() {
        $('<span>' + $('#div').attr('name') + '</span>').appendTo(div);
    })

    // click existing button to generate freinds list
    let array = ['Frances', 'Torry', 'Loc', 'Steve', 'James', 'Desean', 'Mike', 'Wiley', 'Kelis', 'Walter'];
    $('[id=friendsBtn]').click(function() {
        for (i = 0; i < array.length; i++) {
            var name = array[i]
            var list = $('<li></li>')
            $(list).append(name)
            $('[id=friends]').append(list)
        }
    })


})