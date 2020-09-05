var matrix = [
    [
        new Сell(),
        new Сell('<p>A</p>'),
        new Сell('<p>B</p>'),
        new Сell('<p>C</p>'),
        new Сell('<p>D</p>'),
        new Сell('<p>E</p>'),
        new Сell('<p>F</p>'),
        new Сell('<p>G</p>'),
        new Сell('<p>H</p>'),
        new Сell()
    ],
    [
        new Сell('8'),
        new Сell('&#9820','','black'),
        new Сell('&#9822', '#8d6645','black'),
        new Сell('&#9821','','black'),
        new Сell('&#9819;', '#8d6645','black'),
        new Сell('&#9818;','','black'),
        new Сell('&#9821', '#8d6645','black'),
        new Сell('&#9822','','black'),
        new Сell('&#9820', '#8d6645','','black'),
        new Сell('<p>8</p>')
    ],
    [
        new Сell('7'),
        new Сell('&#9823;', '#8d6645','black'),
        new Сell('&#9823;','','black'),
        new Сell('&#9823;', '#8d6645','black'),
        new Сell('&#9823;','','black'),
        new Сell('&#9823;', '#8d6645','black'),
        new Сell('&#9823;','','black'),
        new Сell('&#9823;', '#8d6645','black'),
        new Сell('&#9823;','','black'),
        new Сell('<p>7</p>')
    ],
    [
        new Сell('6'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell('<p>6</p>')
       ],
    [
        new Сell('5'),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('<p>5</p>')
    ],
    [ 
        new Сell('4'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell('<p>4</p>')
    ],
    [
        new Сell('3'),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('', '#8d6645'),
        new Сell(),
        new Сell('<p>3</p>')
    ],
    [
        new Сell('2'),
         new Сell('&#9823;','','white'),
        new Сell('&#9823;','#8d6645','white'),
        new Сell('&#9823;','','white'),
        new Сell('&#9823;','#8d6645','white'),
        new Сell('&#9823;','','white'),
        new Сell('&#9823;','#8d6645','white'),
        new Сell('&#9823;','','white'),
        new Сell('&#9823;','#8d6645','white'),
        new Сell('<p>2</p>')
    ],
    [
         new Сell('1'),
        new Сell('&#9820', '#8d6645','white'),
        new Сell('&#9822','','white'),
        new Сell('&#9821', '#8d6645','white'),
        new Сell('&#9819;','','white'),
        new Сell('&#9818;', '#8d6645','white'),
        new Сell('&#9821','','white'),
        new Сell('&#9822', '#8d6645','white'),
        new Сell('&#9820','','white'),
        new Сell('<p>1</p>')
    ],
    [
        new Сell(),
        new Сell('A'),
        new Сell('B'),
        new Сell('C'),
        new Сell('D'),
        new Сell('E'),
        new Сell('F'),
        new Сell('G'),
        new Сell('H'),
        new Сell()
    ]
];

function Сell(text='', val, color='#8d6645'){
    this.text=text;
    this.backGround = val ? val : "BurlyWood";    
    this.color = color;
}















