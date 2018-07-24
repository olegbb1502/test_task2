var number = document.getElementById('counter');

var value = number.getAttribute("value");
number.setAttribute("value", 1+' page');

// console.log(value);

function add() {
    value++;
    // console.log(value);
    number.setAttribute("value", value+' pages');
}

function subtract() {
    if(value>1){
        value--;
        // console.log(value);
        number.setAttribute("value", value+' pages');
    }
    else number.setAttribute("value", 1+' page');
}

function countPrice() {
    var summ = document.getElementById('result-price');
    var type = document.getElementById('type').value;
    var place = document.getElementById('place').value;
    var days = document.getElementById('days').value;
    // console.log(type);
    // console.log(place);
    // console.log(days);
    // console.log(value);
    if(type == "Essay" && place == "University" && days == "14 days" && value == "1"){
        // console.log('success');
        summ.innerHTML = "12";
        document.getElementById('error').style.display = 'none';

    }
    if(type == "" && place == "" && days == "" && value == "" || type == "" || place == "" || days == "" || value == "") document.getElementById('error').innerHTML = "Uncorrect values";
}


function showMenu() {
    var show = false;
    if(!show){
        for (var i=0;i<document.getElementsByClassName('mobile-menu-list').length;i+=1){
            document.getElementsByClassName('mobile-menu-list')[i].style.display = 'flex';
        }
        show = true;
        return show;
    }
}


