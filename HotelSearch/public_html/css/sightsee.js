// JavaScript Document


var logos = [
"http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2014/01/BA-logo.jpg",
"https://doublethedonation.com/wp-content/uploads/2012/11/Delta-Matching-Gift-Logo.png",
"http://netdna.webdesignerdepot.com/uploads/2013/02/american-airlines-1968-logo-1024x707.jpg",  
"http://netdna.webdesignerdepot.com/uploads/2009/03/aircanada.gif",
"http://vector.me/files/images/6/6/664094/united_airlines.png"
];

var Carlogos=[
"http://image.motortrend.com/f/features/auto_news/2011/1112_ford_focus_powershift_transmission_is_much_improved/36039328/ford-focus-side-view.jpg",
"http://static.usnews.rankingsandreviews.com/images/Auto/izmo/360633/2014_toyota_camry_angularfront.jpg",
"http://static.usnews.rankingsandreviews.com/images/Auto/izmo/360633/2014_toyota_camry_angularfront.jpg",
"http://static.usnews.rankingsandreviews.com/images/Auto/izmo/360633/2014_toyota_camry_angularfront.jpg",
"http://static.usnews.rankingsandreviews.com/images/Auto/izmo/360633/2014_toyota_camry_angularfront.jpg"

];




/* ================================================= */

function addLogo(type) {
    var newdiv = document.createElement('div');
    newdiv.setAttribute('class', 'location');
    var img = new Image();
    newdiv.appendChild(img);
    var r = Math.floor((Math.random() * 100) % 5);
    if (type == 'hotel')
        img.src = Hotellogos[r];
    else if (type =='car')
        img.src = Carlogos[r];
    else if (type=='sightsee')
        img.src = sightlogos[r];
    else
        img.src = sightlogos[r];
    return newdiv;
}

function addElement(text, style) {
    var newdiv = document.createElement('div');
    newdiv.setAttribute('class', style);
    newdiv.innerHTML = text;
    return newdiv;
}

function addRows(div, sizes) {
    var outputdivs = new Array(sizes.length);
    for (i = 0; i < sizes.length; i++) {
        var newdiv = document.createElement('div');
        newdiv.setAttribute('class', "flexrow");
        newdiv.innerHTML = sizes[i];
        outputdivs[i] = newdiv;
        div.appendChild(newdiv);
    }
    return outputdivs;
}

function addCols(div, sizes) {
    var outputdivs = new Array(sizes.length);
    for (i = 0; i < sizes.length; i++) {
        var newdiv = document.createElement('div');
        newdiv.setAttribute('class', "flexcol");
        newdiv.innerHTML = sizes[i];
        outputdivs[i] = newdiv;
        div.appendChild(newdiv);
    }
    return outputdivs;
}

function addButton(text,style) {
    var newdiv = document.createElement('div');
    newdiv.setAttribute('class', style);
    var myButton = document.createElement("input");
    myButton.type = "button";
    myButton.value = text;
    newdiv.appendChild(myButton);

    document.body.appendChild(newdiv);
    return newdiv;
}

function addLocationWithTime(loc) {
    var parent = document.createElement('div');
    parent.setAttribute('class', 'location');
    parent.appendChild(addElement(loc, 'place'));
    var d = Math.floor((Math.random() * 100) % 30);
    var mm = Math.floor((Math.random() * 100) % 12);


    parent.appendChild(addElement('2014/'+ mm + "/"+d, 'date'));

    var h = Math.floor((Math.random() * 100) % 24);
    var m = Math.floor((Math.random() * 100) % 60);

    parent.appendChild(addElement(h + ':' + m, 'time'));
    return parent;
}
/*
   function addHotelFromJson(hotel_json) {
   var parent = document.createElement('div');
   parent.setAttribute('class', 'hotel');
   var c = addRows(parent , ['test', 's', 's']);
   return parent;
   }*/
function addLogo(imgsrc) {
    var img = new Image();
    img.src = imgsrc;
    return img;
}

//============= HOTELS====================
function addTextLogo(text,image)
{
    var parent = document.createElement('div');
    parent.innerHTML =  text + "<br>\n";
    parent.appendChild(addLogo(image));
    return parent;
}

function addPartnerInfo(partnerinfo) {
    var parent = document.createElement('div');
    parent.innerHTML = ("List of prices in various websites<br><br>\n").bold();
    parent.appendChild(addTextLogo(partnerinfo[0].price,partnerinfo[0].logo ))
        parent.appendChild(addTextLogo(partnerinfo[1].price,partnerinfo[1].logo ))
        parent.appendChild(addButton('Add hotel','' ))
        return parent;
}


function addHotelFromJson(parent_name, hotel_json) {
    var divparent = document.getElementById(parent_name);
    var parent = document.createElement('div');
    parent.setAttribute('id', 'hotel');
    var c = addCols(parent, ['', '', '']);
    c[0].appendChild(addTextLogo(hotel_json.name, hotel_json.logo));

    var rs = addRows(c[1],[hotel_json.name.bold(),hotel_json.styledrating,hotel_json.rating.bold(), hotel_json.description.fontsize(2),hotel_json.reviews,hotel_json.view]);
    c[2].appendChild(addPartnerInfo(hotel_json.partners));
    divparent.appendChild(parent);
    return parent;
}

function addAllHotels(divname) {
    var n=5;
    var hotel_json = JSON.parse(hoteldata);
    for (var i = 0; i < n; i++) {
        addHotelFromJson(divname, hotel_json[i]);
    }
}

//=============sightseeing====================
function randint(start, stop) {
    return Math.floor((Math.random()*1000)%(stop - start)+start);
}

function addSightInfo(partnerinfo) {
    var parent = document.createElement('div');
    parent.innerHTML = ("<br><br>\n").bold();
    parent.appendChild(addElement(partnerinfo[0].link.fontsize(2),''));
        parent.appendChild(addElement(partnerinfo[1].link.fontsize(2),''));
    var str="From";
    parent.appendChild(addElement(str.fontsize(2),''));
    var price=("$" + randint(50,100)).bold();
    var str1= price + " <br> per person <br>\n  ";
    parent.appendChild(addElement(str1.fontsize(2),''));
        parent.appendChild(addButton('Add Trip','' ));
        return parent;
}

function addSightFromJson(parent_name,sight_json) {
    var divparent = document.getElementById(parent_name);
    var parent = document.createElement('div');
    parent.setAttribute('id', 'hotel');
    var c = addCols(parent, ['', '', '']);
    c[0].appendChild(addTextLogo(sight_json.name, sight_json.logo));

    var rs = addRows(c[1],[sight_json.name.bold(),sight_json.styledrating, 'Show on map',sight_json.description.fontsize(2),sight_json.Openinghours]);
    c[2].appendChild(addSightInfo(sight_json.partners));
    divparent.appendChild(parent);
    return parent;
}

function addAllSight(divname) {
     var n=5;
    var sight_json = JSON.parse(sightdata);
     for (var i = 0; i < n; i++) {
         addSightFromJson(divname,sight_json[i]);
     }
}


//=============Flights====================

function randtime() {
    var d = Math.floor((Math.random() * 100) % 30);
    var mm = Math.floor((Math.random() * 100) % 12);
    return d + ":"+ mm + " pm";
}

function addFlightInfo() {
var parent = document.createElement('div');
    parent.innerHTML = ("<br><br>\n");
    var price=("$" + randint(500,1000)).bold();
    var str1= " per person <br>\n  ";
parent.appendChild(addElement(price,''));
    parent.appendChild(addElement(str1.fontsize(2),''));
    parent.appendChild(addButton('Add Flight','' ));
    return parent;
}

function addLocationWithTime(loc) {
    var parent = document.createElement('div');
    parent.setAttribute('class', '');
    parent.appendChild(addElement(loc,''));
    var d = Math.floor((Math.random() * 100) % 30);
    var mm = Math.floor((Math.random() * 100) % 12);
  // var date = Date.currentDate();
   
    
    parent.appendChild(addElement('2014/'+ mm + "/"+d, 'date'));

    var h = Math.floor((Math.random() * 100) % 24);
    var m = Math.floor((Math.random() * 100) % 60);

    parent.appendChild(addElement(h + ':' + m, 'time'));
    return parent;
}

function addFlightFromJson(parent_name,flight_json) {
    var divparent = document.getElementById(parent_name);
    var parent = document.createElement('div');
    parent.setAttribute('id', 'flight2');
    var c = addCols(parent, ['', '','','']);
    c[0].appendChild(addTextLogo('', flight_json.logo));
   /* var rs = addRows(c[1],[flight_json.name.bold(),flight_json.styledrating, flight_json.        description.fontsize(2),flight_json.Openinghours]);*/
    addRows(c[1], ['','San Francisco', randtime().bold()]);
    addRows(c[2], ['','New York', randtime().bold()]);
     c[3].appendChild(addFlightInfo());
    divparent.appendChild(parent);
return parent;
}

function addAllFlights(divname) {
     var n=5;
     var flight_json = JSON.parse(flightdata);
     for (var i = 0; i < n; i++) {
         addFlightFromJson(divname,flight_json[i]);
     }
}

//=============Cars====================

function addCarInfo(partnerinfo) {
    var parent = document.createElement('div');
    parent.innerHTML = ("<br><br>\n").bold();
    parent.appendChild(addElement(partnerinfo[0].link.fontsize(2),''));
    parent.appendChild(addElement(partnerinfo[1].link.fontsize(2),''));
    var str="From";
    parent.appendChild(addElement(str.fontsize(2),''));
    var price=("$" + randint(50,100)).bold();
    var str1= price + " <br> per day <br>\n  ";
    parent.appendChild(addElement(str1.fontsize(2),''));
        parent.appendChild(addButton('Add Car','' ));
        return parent;
}

function addCarFromJson(parent_name,car_json) {
    var divparent = document.getElementById(parent_name);
    var parent = document.createElement('div');
    parent.setAttribute('id', 'car');
    var c = addCols(parent, ['','','']);
    c[0].appendChild(addTextLogo('',car_json.logo));
    var rs = addRows(c[1],[car_json.name.bold(),car_json.styledrating, car_json.description.fontsize(2)]);
    c[2].appendChild(addCarInfo(car_json.partners));
    divparent.appendChild(parent);
    return parent;
}

function addAllCars(divname) {
     var n=5;
    var car_json = JSON.parse(cardata);
     for (var i = 0; i < n; i++) {
         addCarFromJson(divname,car_json[i]);
     }
}

