/**
 * Created by Eyalkd on 26/04/14.
 */

function Box()
{
    //this.isopen = false;
    this.rec = document.createElement('div');
    this.rec.id = 'rec200x200';
    this.rec.innerHTML = "hei";
}

Box.prototype.getBox = function()
{
    var h = document.createElement('h1');
    h.innerHTML = 'TEST!';
    return h;
}

window.onload = function()
{
    createBoxes();
}

function createBoxes()
{
    var boxHeight = 0;
    var container = document.getElementById("innerContent3")

    //box.isopen = true;

    for (var i=0; i<6; i++)
    {
        var box = new Box();
        //box.rec = document.createElement('div');
        //box.rec.id = 'rec200x200';
        container.appendChild(box.rec);


    }

    // Adding clear
    var clear = document.createElement('div');
    clear.className = "clear";
    container.appendChild(clear);

}