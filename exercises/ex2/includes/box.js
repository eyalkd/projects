/**
 * Created by Eyalkd on 26/04/14.
 */

function Box()
{
    var r = document.createElement('div');
    r.className = 'rec200x200';
    r.isopen = false;
    r.islast = false;
    r.onclick = function()
    {
        clickOnBox(this);//r);
    }

    this.rec = r;
}

function clickOnBox(obj)
{
    var arr = document.getElementsByClassName("rec200x200");
    var ele;
    var i;

    console.log(obj);

    for (i=0; i<arr.length; i++)
    {
        ele = arr[i];
        ele.className = "rec200x200";
        if (ele != obj)
        {
            ele.isopen = false
        }
        if (ele.islast)
        {
            ele.className += " withbackground";
        }
    }

    if (obj.isopen)
    {
        obj.className = "rec200x200";
        if (obj.islast)
        {
            obj.className += " withbackground";
        }
    }
    else
    {
        obj.className += " rec200x200click";
        if (obj.islast)
        {
            obj.className += " withbackgroundclick";
        }
    }

    obj.isopen = !obj.isopen;
}

window.onload = function()
{
    createBoxes();
}

function createBoxes()
{
    var container = document.getElementById("innerContent3");

    for (var i=0; i<6; i++)
    {
        var box = new Box();
        container.appendChild(box.rec);

        if (i == 5)
        {
            box.rec.innerHTML = "writing on last rectangle.";
            box.rec.className += " withbackground";
            box.rec.islast = true;
        }
    }

    // Adding clear
    var clear = document.createElement('div');
    clear.className = "clear";
    container.appendChild(clear);

}