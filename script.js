var butstart = document.getElementById("butstart");
var pusk = document.getElementById("pusk");
var dis_none = document.getElementById("dis_none");
var menu = document.getElementById("menu");
var stme = document.getElementById("stme");
stme.addEventListener("click", function(){
    menu.style.display = "none";
    dis_none.style.display = "block";
});
var help1 = document.getElementById("help1");
var stme1 = document.getElementById("stme1");
stme1.addEventListener("click", function(){
    menu.style.display = "none";
    help1.style.display = "block";
});

var help2 = document.getElementById("help2");
var stme2 = document.getElementById("stme2");
stme2.addEventListener("click", function(){
    menu.style.display = "none";
    help2.style.display = "block";
});
var help3 = document.getElementById("help3");
var stme3 = document.getElementById("stme3");
stme3.addEventListener("click", function(){
    menu.style.display = "none";
    help3.style.display = "block";
});
var range = document.getElementById("rangeeprostoi")
var change = document.getElementById("rangeprostoi")
rangeeprostoi.addEventListener("change", function(){
    change.innerHTML = this.value;
});

var secund = document.getElementById("sekundpm1")
var inc = document.getElementById("inp");
var dec = document.getElementById("inm");
inc.addEventListener("click", function(){
    var k = parseFloat(secund.innerHTML);
    secund.innerHTML = k + 0.25;
});
dec.addEventListener("click", function(){
    var k = parseFloat(secund.innerHTML);
    if(k <= 0.25){
        this.disabled = true;
    }
    else{
        secund.innerHTML = k - 0.25;
    }
});
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var addp = true, addm = false, special = false;
plus.addEventListener("click", function(){
    if(addp == true){
    var path = this.src;
    var index = path.lastIndexOf("/");
    path = path.substring(0, index + 1);
    this.src = path + "plus.jpg";
    addp = false;

    var pathm = minus.src;
    var index = pathm.lastIndexOf("/");
    pathm = pathm.substring(index + 1, pathm.length);
    if(pathm == "minus.jpg"){
        butstart.disabled = true;
    }
    }
    else{
        var path = this.src;
    var index = path.lastIndexOf("/");
    path = path.substring(0,index + 1);
    this.src = path + "plus_green.jpg";
    addp = true;
    butstart.disabled = false;
    }
});
minus.addEventListener("click", function(){
    if(addm == false){
        var path = this.src;
        var index = path.lastIndexOf("/");
        path = path.substring(0,index + 1);
        this.src = path + "minus_red.jpg";
        addm = true;
        butstart.disabled = false;
    }
    else{
        var path = this.src;
        var index = path.lastIndexOf("/");
        path = path.substring(0,index + 1);
        this.src = path + "minus.jpg";
        addm = false;

        var pathp = plus.src;
        var indexm = path.lastIndexOf("/");
        pathp = pathp.substring(indexm + 1, pathp.length);
        if(pathp == "plus.jpg"){
            butstart.disabled = true;
        }
    }
});
butstart.addEventListener("click", function(){
    dis_none.style.display = "none";
    pusk.style.display = "block";
    var checked_radio = document.querySelectorAll("input.radiol");
    for(var i = 0; i < checked_radio.length; i++)
    {
        if(checked_radio[i].checked)
        {
           var check = parseInt(checked_radio[i].value);
        }
    }
    var oraliq = document.querySelectorAll("input.radio");
    for(var j = 0; j < oraliq.length; j++)
    {
        if(oraliq[j].checked)
        {
            var interval = oraliq[j].value;
            
        }
    }
    switch(check)
    {
        case 2: {
        if(interval  == "1_9")
        {
            var misol = misollar.array_10_99_10m9_2;
            var count = Math.floor(Math.random() * misollar.array_10_99_10m9_2.length);
            var numbers = misol[count];
        }
        if(interval == "1_20")
        {
            var misol = misollar.array_1_20_10m9_2;
            var count = Math.floor(Math.random() * misollar.array_1_20_10m9_2.length);
            var numbers = misol[count];
        }
        if(interval == "100_999")
        {
            var misol = misollar.array_100_999_10m9_2;
            var count = Math.floor(Math.random() * misollar.array_100_999_10m9_2.length);
            var numbers = misol[count];
        }
    }
    case 3: {
        if(interval == "1_9")
        {
            var misol = misollar.array_10_99_10m9_3;
            var count = Math.floor(Math.random() * misollar.array_10_99_10m9_3.length);
            var numbers = misol[count];
        }
        if(interval == "1_20")
        {
            var misol = misollar.array_1_20_10m9_3;
            var count = Math.floor(Math.random() * misollar.array_1_20_10m9_3.length);
            var numbers = misol[count];
        }
        if(interval == "100_999")
        {
            var misol = misollar.array_100_999_10m9_3;
            var count = Math.floor(Math.random() * misollar.array_100_999_10m9_3.length);
            var numbers = misol[count];
        }
    }
    case 4: {
        if(interval == "1_9")
        {
            var misol = misollar.array_10_99_10m9_4;
            var count = Math.floor(Math.random() * misollar.array_10_99_10m9_4.length);
            var numbers = misol[count];
        }
        if(interval == "1_20")
        {
            var misol = misollar.array_1_20_10m9_4;
            var count = Math.floor(Math.random() * misollar.array_1_20_10m9_4.length);
            var numbers = misol[count];
        }
        if(interval == "100_999")
        {
            var misol = misollar.array_100_999_10m9_4;
            var count = Math.floor(Math.random() * misollar.array_100_999_10m9_4.length);
            var numbers = misol[count];
        }
    }
    case 5: {
        if(interval == "1_9")
        {
            var misol = misollar.array_10_99_10m9_5;
            var count = Math.floor(Math.random() * misollar.array_10_99_10m9_5.length);
            var numbers = misol[count];
        }
        if(interval == "1_20")
        {
            var misol = misollar.array_1_20_10m9_5;
            var count = Math.floor(Math.random() * misollar.array_1_20_10m9_5.length);
            var numbers = misol[count];
        }
        if(interval == "100_999")
        {
            var misol = misollar.array_100_999_10m9_5;
            var count = Math.floor(Math.random() * misollar.array_100_999_10m9_5.length);
            var numbers = misol[count];
        }
    }
}
var raqamlar = document.getElementById("numbers");
var counter = 0, sum = 0;
var myinterval = setInterval(function(){
    raqamlar.innerText = numbers[counter];
    counter++;
    sum += numbers[counter];
    if(counter == numbers.length){
        clearInterval(myinterval);
    }
},1000);    

    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
    var Bchi = document.getElementById("Bchi");
    var Ichi = document.getElementById("Ichi");
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    setInterval(function(){
        seconds ++;
        if(seconds == 60){
            seconds = 0;
            minutes ++;
        }
       if (minutes == 60){
            minutes = 0;
            hours ++;
        }

        second.textContent = (seconds < 10) ? "0" + seconds : seconds;
        minute.textContent = (minutes < 10) ? "0" + minutes : minutes;
        hour.textContent = (hours < 10) ? "0" + hours : hours;
        
    },1000);
    });
    
 
