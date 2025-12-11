/*-----Fav-Buttons-----
javascript:(function(){var script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'https://dev.k26.ch/Siaxma.js?dev=' + Math.floor(Math.random() * 100); document.head.appendChild(script);})();
---------------------*/

console.log("Javascript loaded");
//Style 

var stylesheet = document.createElement('link');
stylesheet.type = 'text/css';
const ASSET_BASE = "https://onlylegendscanmeetjeff.github.io/siaxma-addon";
stylesheet.href = ASSET_BASE + '/Siaxma.css?dev=' + Math.random();
stylesheet.rel = 'stylesheet';
document.head.appendChild(stylesheet);

//Darkmode
function updateDarkMode() {
    if (window.manualDarkMode != true) {
        //Update darkmode if needed
        var h = (new Date()).getHours();
        if (h >= 16) {
            toggleDarkmode(true);
        } else if (h < 16 && h >= 9) {
            toggleDarkmode(false);
        } else {
            toggleDarkmode(true);
        }
    }
}

function toggleDarkmode(dark) {
    var normalCss = ASSET_BASE + '/Siaxma.css?dev=' + Math.random();
var darkCss   = ASSET_BASE + '/Siaxma_dark.css?dev=' + Math.random();
    if (dark === true) {
        if (!(document.getElementById("dark-sheet"))) {
            var darkSheet = document.createElement('link');
            darkSheet.type = 'text/css';
            darkSheet.href = darkCss;
            darkSheet.rel = 'stylesheet';
            darkSheet.id = "dark-sheet"
            document.head.appendChild(darkSheet);
        }
    } else if (dark === false) {
        if (document.getElementById("dark-sheet")) {
            document.getElementById("dark-sheet").remove();
        }
    } else {
        if (document.getElementById("dark-sheet")) {
            toggleDarkmode(false);
        } else {
            toggleDarkmode(true);
        }
    }
}

updateDarkMode();


console.log("Stylesheet loaded");

var links = [
    [
        'Google <i style="color: #34A853;!important" class="fab fa-google"></i>',
        'https://www.google.ch',
        'Link zur Google Suchmaschine'
    ],
    [
        'Intranet <i style="color: #039DDC;!important" class="fab fa-internet-explorer"></i>',
        'https://afi.intranet.gr.ch',
        'Link zum AFI Intranet'
    ],
    [
        'Ivanti <i style="color: #DB2D27;!important" class="fas fa-clipboard-list"></i>',
        'http://kt.heat.gr.ch/HEAT/Default.aspx',
        'Link zum Ivanti (Tickets)'
    ],
    [
        'Trello <i style="color: #0079BF;!important" class="fab fa-trello"></i>',
        'https://trello.com/',
        'Link zu Trello.com'
    ],
    [
        'Meteo Schweiz <i style="color: #4A90E2;!important" class="fas fa-cloud-sun-rain"></i>',
        'https://www.srf.ch/meteo/wetter/Chur/46.8507,9.5317?geolocationNameId=c72886eed9d16241d1cd2acb752b492d',
        'Link zum Wetter in Chur'
    ]
];

//Initialize Element
var wholeDiv = document.querySelectorAll("table")[4];
wholeDiv.id = "wholeDiv";
document.body.innerHTML = document.body.innerHTML + '<div id="bigDiv"><div id="backDiv"></div></div>'
var bigDiv = document.getElementById("bigDiv");
bigDiv.innerHTML = wholeDiv.outerHTML + bigDiv.innerHTML
document.querySelectorAll("table")[4].remove();
wholeDiv = document.getElementById("wholeDiv");

//Add Stuff to Body
document.body.innerHTML = '<div id="widgets"></div>' + document.body.innerHTML;
document.body.innerHTML = '<div id="important-stuff"></div>' + document.body.innerHTML;
//Action Button
var settingsAction = document.querySelectorAll("#top td:last-of-type")[4].querySelector("a").href;
var logoutElement = document.getElementById("serverTimeDiv").parentElement.querySelector("a");
var logoutClickAction = logoutElement.getAttribute('onclick');
var logoutHrefAction = logoutElement.href;
document.body.innerHTML = document.body.innerHTML + `
    <div class="container">
        <div class="test icon-holder">
            <i class="fas fa-cog"></i>
        </div>
        <ul class="options">
            <li>    
                <span class="label">Darkmode umschalten</span>    
                <a onClick="window.manualDarkMode = true; toggleDarkmode();" class="icon-holder">        
                    <i class="fas fa-adjust"></i>    
                </a>
            </li>
            <li>    
                <span class="label">Widgets ausblenden</span>    
                <a onClick="toggleAllWidgets()" class="icon-holder">        
                    <i class="fas fa-eye-slash"></i>   
                </a>
            </li>
            <li>    
                <span class="label">JS entfernen</span>    
                <a onClick="location.reload();" class="icon-holder">        
                    <i class="fas fa-scroll"></i>   
                </a>
            </li>
            <li>
                <span class="label">Abmelden</span>   
                <a onClick="' + logoutClickAction + '") href="' + logoutHrefAction + '" class="icon-holder">        
                    <i class="fas fa-sign-out-alt"></i>
                </a>
            </li>
            <li>   
                <span class="label">Einstellungen</span>    
                <a href="' + settingsAction + '" class="icon-holder">        
                    <i class="fas fa-cog"></i>    
                </a>
            </li>
        </ul>
    </div>`;

//Set variables
bigDiv = document.getElementById("bigDiv");
wholeDiv = document.getElementById("wholeDiv");

// Static Siaxma “logo” – no external iframes/scripts
var siaxmaLogoHtml = `
    <div id="siaxma-logo" style="
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 8px 0;
    ">
        Siaxma <span style="opacity:.6; font-size:14px;">Tools</span>
    </div>
`;

var logoCell = document.querySelector("#topPageForm table tr td");
if (logoCell) {
    logoCell.innerHTML = siaxmaLogoHtml;
}

var logoSecondRow = document.querySelector("#topPageForm table tbody tr:nth-child(2)");
if (logoSecondRow) {
    logoSecondRow.remove();
}

// Stub – rotate() still calls this, but we removed animation
function aniamteSiaxma() {
    // no-op
}


//Add "Important Stuff"
importantStuff = document.getElementById("important-stuff");
for (var i = 0; i < links.length; i++) {
    importantStuff.innerHTML = importantStuff.innerHTML + '  <a class="card" target="_blank" rel="noopener noreferrer" href="' + links[i][1] + '"><h3>' + links[i][0] + '</h3><p class="small">' + links[i][2] + '</p><div class="go-corner" target="_blank" rel="noopener noreferrer" href="' + links[i][1] + '"><div class="go-arrow"> â†’ </div></div></a>'
}

/*[].forEach.call(document.querySelectorAll("#important-stuff .card"), function(el) {
    el.classList.add("this-fade-in");
});*/

//Rotate button
document.querySelector("#layoutbottom td").innerHTML = document.querySelector("#layoutbottom td").innerHTML + '<button id="rotate-button" onClick="rotate();"><i class="fas fa-undo"></i></button>';

function rotate() {
    bigDiv.classList.toggle("rotated");
    setTimeout(() => {
        aniamteSiaxma();
    }, 200);
}

//Back div
backDiv.innerHTML = `
    <div id="tic-tac-toe">
        <h2>Tic Tac Toe </h2>
        <div class="switch">
            <input id="toggle-on" class="toggle toggle-left" name="toggle" value="false" type="radio" checked>
            <label for="toggle-on" class="btn">2 Spieler <i class="fas fa-user-friends"></i></label>
            <input id="toggle-off" class="toggle toggle-right" name="toggle" value="true" type="radio">
            <label for="toggle-off" class="btn">Computer <i class="fas fa-desktop"></i></label>
        </div>
            <div class="easy">
                <section>
                    <ul style="margin: 7px;">
                        <li id="lobby"><span>Lobby:</span> keine Lobby</li>
                        <li id="wins-player1"><span>Siege Spieler1:</span> 0</li>
                        <li id="wins-player2"><span>Siege Spieler2:</span> 0</li>
                        <li id="ties"><span>Unentschieden:</span> 0</li>
                    </ul>
                    <div class="game--container">
                        <div data-cell-index="0" class="cell"></div>
                        <div data-cell-index="1" class="cell"></div>
                        <div data-cell-index="2" class="cell"></div>
                        <div data-cell-index="3" class="cell"></div>
                        <div data-cell-index="4" class="cell"></div>
                        <div data-cell-index="5" class="cell"></div>
                        <div data-cell-index="6" class="cell"></div>
                        <div data-cell-index="7" class="cell"></div>
                        <div data-cell-index="8" class="cell"></div>
                    </div>
                    <h2 class="game--status"></h2>
                    <button class="textButton game--create">Spiel erstellen</button>
                    <button class="textButton game--join">Spiel beitreten</button>
                    <button class="textButton game--restart">Spiel neustarten</button>
                    <button class="textButton game--leave">Spiel verlassen</button>
                </section>
            </div>
            <div class="hard">
                <h2 class="game--title">Computer <i class="fas fa-desktop"></i></h2>
                <table>
                    <tr>
                        <td class="cell" id="0"></td>
                        <td class="cell" id="1"></td>
                        <td class="cell" id="2"></td>
                    </tr>
                    <tr>
                        <td class="cell" id="3"></td>
                        <td class="cell" id="4"></td>
                        <td class="cell" id="5"></td>
                    </tr>
                    <tr>
                        <td class="cell" id="6"></td>
                        <td class="cell" id="7"></td>
                        <td class="cell" id="8"></td>
                    </tr>
                </table>

                <h2 class="game--status-hard"></h2>
                <button class="textButton"onClick="startGame()">Spiel neustarten</button>
            </div>
        </div>
    </div>
    <div id="bus-table">
        <h2>Busfahrplan
        <div id="haltestelle-Dropdown">
            <div class="dropdown">
                <span class="dropdown-name" name="none">Haltestelle</span><span style="float: right">&nbsp;<i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="dropdown-content" data-type="hive">
                <div name="8574694" class="dropdown-option">Rigahaus</div>
                <div name="8581044" class="dropdown-option">Bahnhofplatz</div>
                <div name="8595591" class="dropdown-option">Alexanderplatz</div>
            </div>
        </div>
        </h2>
        <ul class="livedata"></ul>
        <button id="reload-bus" class="textbutton" onClick="getBusSchedule();"><i class="fas fa-sync"></i></button>
        <div id="bus-spinner">
            <div class="bars6"><span></span><span></span><span></span><span></span><span></span></div> 
        </div>
            <div class="bus-container">
                <!-- Bus --- https://codepen.io/nirazanbasnet/pen/YOxMXK -->
                <div class="bus-wrap">
                    <div class="inner">
                    <img src="https://onlylegendscanmeetjeff.github.io/siaxma-addon/assets/churbus.png">
                        <div class="tyres-wrapper">
                            <div class="tyres-content">
                                <div class="tyres">
                                    <div class="rim-section">
                                        <div class="rim-dot"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tyres-content">
                                <div class="tyres">
                                    <div class="rim-section">
                                        <div class="rim-dot"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tyres-content">
                                <div class="tyres">
                                    <div class="rim-section">
                                        <div class="rim-dot"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Road -->
                <div class="road-wrap">
                    <div class="bar slide-right"> </div>
                </div>
            </div>
            </div>
        </div>
        
    </div>
    <button id="rotate-button" onClick="rotate();"><i class="fas fa-undo"></i></button>
`;


//Bus Widgets
// Changes XML to JSON
function xmlToJson(xml) {
    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};

function addBusTable(data) {
    var liveData = document.querySelector(".livedata");
    try {
		var json = JSON.parse(data);
		const connections = json.connections.map(connection => {
		  const abfahrtszeit = new Date(connection.time);
		  const now = new Date();
		  let abfahrtin = Math.floor((abfahrtszeit - now) / 1000 / 60); // Calculating the time difference in minutes
		  if(abfahrtin < 1){
			  abfahrtin = "Jetzt"
		  }
		  else{
			  abfahrtin = abfahrtin + " min"
		  }
		  
		  const color = connection.color.split("~")[0]; // Extract the color without the additional information
		  const hexColor = color;

		  return {
			verspaetungSekunden: 0,
			ziel: connection.terminal.name,
			abfahrtszeit: abfahrtszeit.toLocaleString('de-CH',{
			  hour: 'numeric',
			  minute: 'numeric',
			  second: 'numeric',
			  hour12: false
			}),
			abfahrtin: abfahrtin,
			linie: connection.line,
			farbe: hexColor
		  };
		});

		window.haltestellen = connections;

        liveData.innerHTML = `
            <li class="title">
                <span class="linie keine-linie">Linie</span>
                <span class="richtung">Richtung</span>
                <span class="uhrzeit">Abfahrt um</span>
                <span class="abfahrt-in">Abfahrt in</span>
            </li>
        `;
        for (var i = 0; i < 6; i++) {
            thisRow = haltestellen[i];
            var verspaeteteSekunden = thisRow.verspaetungSekunden;
            if (verspaeteteSekunden > 0) {
                var verspaetung = "(+" + verspaeteteSekunden + "s)";
            } else {
                var verspaetung = "";
            }
            liveData.innerHTML += `
                <li><span class="linie">
                <span style="background: #${thisRow.farbe};" class="linie-${thisRow.linie}">${thisRow.linie}</span>
                </span><span class="richtung">${thisRow.ziel}</span>
                <span class="uhrzeit">${thisRow.abfahrtszeit} Uhr <span style="display: none" class="verspaetungSekunden">${verspaetung}</span></span>
                <span class="abfahrt-in">${thisRow.abfahrtin}</span>
                </li>
            `;
        }
        document.getElementById("bus-spinner").classList.add("opacity-0");
        [].forEach.call(document.getElementsByClassName('dropdown-option'), function(el) {
            el.classList.remove("disabled");
        });

        [].forEach.call(document.querySelectorAll(".livedata li"), function(el) {
            el.classList.add("this-fade-in");
        });

        thisList = document.querySelectorAll(".livedata li");
        var y = 0; //  set your counter to 1

        function myLoop() { //  create a loop function
            setTimeout(function() { //  call a 3s setTimeout when the loop is called
                thisList[y].classList.remove("this-fade-in"); //  your code here
                y++; //  increment the counter
                if (y < thisList.length) { //  if the counter < 10, call the loop function
                    myLoop(); //  ..  again which will trigger another 
                } //  ..  setTimeout()
            }, 100)
        }

        myLoop();
    } catch {

    }
}

function getBusSchedule(haltestelle = document.querySelector('#haltestelle-dropdown .dropdown').getAttribute("name")) {
    document.getElementById("bus-spinner").classList.remove("opacity-0");
    [].forEach.call(document.getElementsByClassName('dropdown-option'), function(el) {
        el.classList.add("disabled");
    });
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() { addBusTable(this.responseText) };

    xhttp.open("GET", "https://fahrplan.search.ch/api/stationboard.json?stop=" + haltestelle, true);
    //xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
}

[].forEach.call(document.getElementsByClassName('dropdown-option'), function(el) {
    el.addEventListener('click', function() {
        if (!(this.classList.contains("disabled"))) {
            this.parentElement.parentElement.getElementsByClassName("dropdown")[0].setAttribute("name", this.getAttribute("name"));
            this.parentElement.parentElement.getElementsByClassName("dropdown-name")[0].textContent = this.textContent;
            this.parentElement.classList.add("hidden");
            setTimeout(() => {
                this.parentElement.classList.remove("hidden");
            }, 50);

            getBusSchedule();
        }
    });
});

document.querySelector("#haltestelle-dropdown .dropdown-option").click();
getBusSchedule();

[].forEach.call(document.querySelectorAll("#widgets .widget"), function(el) {
    el.classList.add("this-fade-in");
});


function toggleAllWidgets() {
    //importantStuff.classList.toggle("this-fade-in");
    //widgets.classList.toggle("this-fade-in")

    importantStuff.classList.toggle("hidden");
    widgets.classList.toggle("hidden")
    document.getElementById("tic-tac-toe").classList.toggle("hidden");
    var busTable = document.getElementById("bus-table");
    if (busTable.style.width == "70%") {
        busTable.style.width = "100%";
    } else if (busTable.style.width == "") {
        busTable.style.width = "100%";
    } else {
        busTable.style.width = "70%"
    }
    //busTable.style.width = "100%"
    console.log("Widgets toggled");

}

toggleAllWidgets()

function update() {
    var iframe = document.getElementById('weatherwidget-io-0');
    iframe.src = iframe.src;
}

function shortUpdate() {
    getBusSchedule();
}

function minutesToTimeString(fullMinutes) {
    let timeArray = [];
    if (fullMinutes / 60 >= 0) {
        timeArray[0] = Math.floor(fullMinutes / 60);
        timeArray[1] = (fullMinutes - (timeArray[0] * 60));
    } else {
        timeArray[0] = Math.ceil(fullMinutes / 60);
        timeArray[1] = (fullMinutes - (timeArray[0] * 60));
    }

    timeArray[0] = addNull(timeArray[0]);
    timeArray[1] = addNull(timeArray[1]);
    if (timeArray[1] < 0) {
        timeArray[0] = timeArray[0].toString().replace("00", "-00")
    }
    return (timeArray[0] + ":" + (timeArray[1]).toString().replace("-", ""));
}

function addTimeTester() {
    //Ausstempel Rechner
    buchungDiv = document.getElementById("ze_bookingDiv");
    buchungDiv.innerHTML = buchungDiv.innerHTML + `
    <div id="time-tester" class="closed">
        <div class="time-icon-holder">
            <i class="fas fa-stopwatch"></i>
        </div>
        <input id="time-picker" type="time">
        <span id="time-output" type="text" disabled></span>
    </div>`;

    setTimeout(() => {
        var timeTester = document.getElementById("time-tester");
        timeTester.addEventListener("click", function() {
            this.classList.remove("closed");
        });

        document.body.addEventListener("click", function(e) {
            if (buchungDiv.id != (e.target.id) && !timeTester.contains(e.target)) {
                timeTester.classList.add("closed");
            }
        });

        document.getElementById("time-picker").addEventListener("change", function() {
            var value = this.value;
            var timeOutput = document.getElementById("time-output");

            if (worked) {
                var inputHours = parseInt(value.split(":")[0], 10)
                var inputMinutes = parseInt(value.split(":")[1], 10)
                    //var fullInputMinutes = inputHours*60 + inputMinutes;
                var inputDate = new Date();

                inputDate.setHours(inputHours);
                inputDate.setMinutes(inputMinutes);

                var WorkTime = inputDate.getTime() - clockInTime.getTime();
                var workHours = Math.floor((WorkTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var workMinutes = Math.floor((WorkTime % (1000 * 60 * 60)) / (1000 * 60));
                //var workSeconds = Math.floor((WorkTime % (1000 * 60)) / 1000);

                var fullWorkMinutes = workHours * 60 + workMinutes + (dayMinutes - fullSaldo1Minutes);

                var ergebnisHeute = minutesToTimeString(fullWorkMinutes);

                var newSaldo = minutesToTimeString(fullSaldo2Minutes + fullWorkMinutes - (dayMinutes - fullSaldo1Minutes));

                timeOutput.innerHTML = "" + ergebnisHeute + " -> Saldo: " + newSaldo;

                if (fullWorkMinutes < dayMinutes) {
                    timeOutput.innerHTML = timeOutput.innerHTML + ' <i style="color: red" class="fas fa-sort-down"></i>'
                } else {
                    timeOutput.innerHTML = timeOutput.innerHTML + ' <i style="color: lime" class="fas fa-sort-up"></i>'
                }
            } else {
                timeOutput.innerHTML = "Fehler";
            }


        });
    }, 3000);
}

//Set Element TopPaddingTd
var element = document.getElementById("paddingtd");
element.style.height = "95px";
element.classList.add("fade-in");


calendarbuttons = '<td align="center" nowrap="nowrap"><button id="calendar-left" class="calendar-button" onclick="_calendar_ze_month.lastDay()"><i class="fas fa-chevron-left"></i></button><button id="calendar-today" class="calendar-button" onclick="_calendar_ze_month._setToday()">Heute</button><button id="calendar-right" class="calendar-button" onclick="_calendar_ze_month.nextDay()"><i class="fas fa-chevron-right"></i></button></td>'
calendarbuttonelement = document.querySelectorAll("#ze_tab table tbody tr td table tbody tr:last-of-type")[45];
calendarbuttonelement.id = "calendarbuttons";
calendarbuttonelement.innerHTML = calendarbuttons;

//Fontawesome Icons
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js';
document.head.appendChild(script);

document.querySelector("#WTButton_ze_monthPrintBtn").innerHTML = '<i class="fas fa-print"></i> Monatsbericht';
document.querySelector("#WTButton_ze_recalcDayBtn").innerHTML = '<i class="fas fa-calculator"></i>'

// Simple weather link – no external widget JS
widgets = document.getElementById("widgets");
if (widgets) {
    widgets.innerHTML = `
        <div class="widget">
            <div style="padding:8px 12px;">
                <strong>Wetter Chur</strong><br>
                <a href="https://www.srf.ch/meteo/wetter/Chur/46.8507,9.5317"
                   target="_blank"
                   rel="noopener noreferrer">
                    SRF Meteo öffnen
                </a>
            </div>
        </div>
    `;
}

//Bus Widget
//widgets.innerHTML += '<div class="widget"><ul class="livedata"></ul></div>';

function addNull(number) {
    stringNumber = number.toString();
    if (stringNumber.length == 1) {
        stringNumber = "0" + stringNumber;
    } else if (stringNumber.length == 2 && stringNumber.includes("-")) {
        stringNumber = stringNumber.replace("-", "-0");
    }
    return stringNumber;
}

function removeFadeIn() {
    //element.classList.remove("fade-in");  

    //Fast remove
    [].forEach.call(document.querySelectorAll(".fade-in"), function(el) {
        el.classList.remove("fade-in");
    });

    //Slow remove
    thisFadeInList = document.querySelectorAll(".this-fade-in");

    var y = 0; //  set your counter to 1

    function myLoop() { //  create a loop function
        setTimeout(function() { //  call a 3s setTimeout when the loop is called
            try {
                thisFadeInList[y].classList.remove("this-fade-in");
                y++; //  increment the counter
                if (y < thisFadeInList.length) { //  if the counter < 10, call the loop function
                    myLoop(); //  ..  again which will trigger another 
                } //  ..  setTimeout()
            } catch {
                console.log("Fehler (egal)")
            }
        }, 500)
    }

    myLoop();

}

//---------------------------- BEGINN HIER ----------------------------
addTimeTester();

// Set the date we're counting down to
let clockInTime = new Date();
let clockOutTime = new Date();
var finished = false;
var dayMinutes = 8 * 60 + 36;

worked = false;
var i = 1;
// Update the count down every 1 second
var x = setInterval(function() {
    try {
        var clockInChilds = document.querySelectorAll("#ze_bookingDiv table tbody tr:not(.disabledRow)");
        var clockIn = clockInChilds[clockInChilds.length - 1].children[1].textContent;
        clockIn = clockIn.split(":");

        var saldo = document.querySelector("#tableCell_ze_daySummary_2_0").parentElement.childNodes[1].textContent;
        saldo = saldo.replace("-", "");
        saldo = saldo.split(":");

        clockInTime.setHours(parseInt(clockIn[0], 10));
        clockInTime.setMinutes(parseInt(clockIn[1], 10));
        clockInTime.setSeconds(0);

        clockOutTime.setHours(clockInTime.getHours() + parseInt(saldo[0], 10));
        clockOutTime.setMinutes(clockInTime.getMinutes() + parseInt(saldo[1], 10));
        clockOutTime.setSeconds(0);

        var countDownDate = clockOutTime.getTime();

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Berechnen
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var percent = 100 / 30960000 * distance;
        percent = 100 - percent;

        hours = addNull(hours);
        minutes = addNull(minutes);
        seconds = addNull(seconds);
        if (hours != undefined) {
            lasthours = hours;
        }
        if (minutes != undefined) {
            lastminutes = minutes;
        }

        if (seconds != undefined) {
            lastseconds = seconds;
        }

        clockOutHours = addNull(clockOutTime.getHours());
        clockOutMinutes = addNull(clockOutTime.getMinutes());

        var tmpSaldo = document.getElementById("le_title_2").textContent;
        if (tmpSaldo.includes("-")) {
            var positive = false;
        } else {
            var positive = true;
        }
        try {
            if (!positive) {
                tmpSaldo = tmpSaldo.replace("-", "");
                tmpSaldo = tmpSaldo.split(" ")[0].split(" ")[1].split(":");
            } else {
                tmpSaldo = tmpSaldo.replace("-", "");
                tmpSaldo = tmpSaldo.split(" ")[1].split(":");
            }
        } catch {
            tmpSaldo = tmpSaldo.replace("-", "");
            tmpSaldo = tmpSaldo.split(" ")[1].split(":");
        }

        let tagesSaldo = [];
        fullSaldo1Minutes = parseInt(saldo[0], 10) * 60 + parseInt(saldo[1], 10);
        fullSaldo2Minutes = parseInt(tmpSaldo[0]) * 60 + parseInt(tmpSaldo[1]);
        if (!positive) {
            fullSaldo2Minutes = fullSaldo2Minutes * -1;
        }
        fullMinutes = fullSaldo1Minutes + fullSaldo2Minutes;
        if (fullMinutes / 60 >= 0) {
            tagesSaldo[0] = Math.floor(fullMinutes / 60);
            tagesSaldo[1] = (fullMinutes - (tagesSaldo[0] * 60));
        } else {
            tagesSaldo[0] = Math.ceil(fullMinutes / 60);
            tagesSaldo[1] = (fullMinutes - (tagesSaldo[0] * 60));
        }

        tagesSaldo[0] = addNull(tagesSaldo[0]);
        tagesSaldo[1] = addNull(tagesSaldo[1]);
        if (tagesSaldo[1] < 0) {
            tagesSaldo[0] = tagesSaldo[0].toString().replace("00", "-00")
        }

        SaldoString = (tagesSaldo[0] + ":" + (tagesSaldo[1]).toString().replace("-", ""));

        SaldoJetztFullMinutes = (tagesSaldo[0] - hours) * 60 + (tagesSaldo[1] - minutes);

        SaldoJetztString = minutesToTimeString(SaldoJetztFullMinutes);


        if (SaldoJetztString.toString().includes("NaN")) {
            if (lastSaldoJetztString != "") {
                SaldoJetztString = "<span style='color: red;'>" + lastSaldoJetztString + "</span>"
            } else {
                SaldoJetztString = "--:--"
            }
        } else {
            lastSaldoJetztString = SaldoJetztString
        }

        if (SaldoString.toString().includes("NaN")) {
            if (lastSaldoString != "") {
                SaldoString = "<span style='color: red;'>" + lastSaldoString + "</span>"
            } else {
                SaldoString = "--:--"
            }
        } else {
            lastSaldoString = SaldoString
        }

        if (document.getElementById("time-tester") == null) {
            addTimeTester();
        }

        if (percent > 92) {
            element.style.backgroundSize = "53px";
            element.classList.add("highPercent");
        } else {
            element.classList.remove("highPercent");
        }

       if (i == 1) {
    // Set HTML of #paddingtd (no external SVG)
    element.innerHTML = `
        <h1 id="clock"></h1>
        <span style="color: grey; height:100%; font-size:11px; padding-left:10px;">
            Von Nicolas Caluori
        </span>
        <br>
        <div id="myProgress">
            <div id="myBar">
                <span id="percent"></span>
            </div>
        </div>
    `;
    element.classList.add("fade-in");
}

        // If the count down is finished
        if (distance < 0) {
            finished = true;
            finishtime = countDownDate;
            now = new Date().getTime();
            uberstunden = now - finishtime;
            var hours = Math.floor((uberstunden % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((uberstunden % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((uberstunden % (1000 * 60)) / 1000);

            // Saldo Jetzt

            SaldoJetztFullMinutes = (hours) * 60 + (minutes + fullMinutes);

            SaldoJetztString = minutesToTimeString(SaldoJetztFullMinutes);

            hours = addNull(hours);
            minutes = addNull(minutes);
            seconds = addNull(seconds);
            if (hours != undefined) {
                lasthours = hours;
            }
            if (minutes != undefined) {
                lastminutes = minutes;
            }

            if (seconds != undefined) {
                lastseconds = seconds;
            }

            document.getElementById("clock").innerHTML = "<span style='color:green'>Fertig! </span> | Ãœberstunden: <span style='color:green'>" + hours + ":" + minutes + ":" + seconds + "</span> | <i class='far fa-clock'></i> Saldo jetzt: <span style='color:green'>" + SaldoJetztString + "</span>";
            document.getElementById("myBar").style.animation = undefined;
            document.getElementById("myBar").style.width = "100%";
            document.getElementById("percent").textContent = "100%";
        } else {
            document.getElementById("clock").innerHTML = "Bis: " + clockOutHours + ":" + clockOutMinutes + " | Noch: " + hours + ":" + minutes + ":" + seconds + " | <i class='far fa-clock'></i> Saldo: " + SaldoString + " | Saldo jetzt: " + SaldoJetztString + "";
            element.style.height = 0;
            document.getElementById("myBar").style.width = (percent) + "%";
            document.getElementById("percent").textContent = Math.round((percent + Number.EPSILON) * 100) / 100 + "%";
        }
        document.getElementById("myBar").classList.remove("stopped");

        if (i == 1) {
            setTimeout(() => {
                removeFadeIn();
            }, 0);
            i++;
        }

        //Set bus left property
        /*var entfernt = window.haltestellen[0]["abfahrt"]["@attributes"].nochSekunden;
        entfernt = 100 / 600 * entfernt;
        if (Math.round((81 - entfernt)) >= 81) {
            entfernt = 0;
            window.haltestellen[0]["abfahrt"]["@attributes"].nochSekunden;
        }
        if (Math.round(parseFloat(document.querySelector(".bus-wrap").style.left.replace("%", ""))) == Math.round((81 - entfernt)) && Math.round((81 - entfernt)) < 81) {
            window.haltestellen[0]["abfahrt"]["@attributes"].nochSekunden = window.haltestellen[0]["abfahrt"]["@attributes"].nochSekunden - 1;
            entfernt = window.haltestellen[0]["abfahrt"]["@attributes"].nochSekunden;
            entfernt = 100 / 600 * entfernt;
            document.querySelector(".bus-wrap").style.left = (81 - entfernt) + "%";
        } else {
            document.querySelector(".bus-wrap").style.left = (81 - entfernt) + "%";
        }*/

        worked = true;
    } catch {
        if (worked) {
            if (finished) {
                document.getElementById("clock").innerHTML = "Ãœberstunden: <span style='color:red'>" + lasthours + ":" + lastminutes + ":" + lastseconds + "</span> | <i class='far fa-clock'></i> Saldo: " + SaldoString + " | Saldo jetzt: <span style='color:red'>" + SaldoJetztString + "</span>";
            } else {
                document.getElementById("clock").innerHTML = "Bis: <span style='color:red'>" + clockOutHours + ":" + clockOutMinutes + "</span> | Noch: <span style='color:red'>" + lasthours + ":" + lastminutes + ":" + lastseconds + "</span> | <i class='far fa-clock'></i> Saldo: <span style='color:red'>" + SaldoString + "</span> | Saldo jetzt: <span style='color:red'>" + SaldoJetztString + "</span>";
            }
            document.getElementById("myBar").classList.add("stopped");
            console.log("Fehler... letzte Daten bleiben");
        } else {
            element.innerHTML = "<h1 id='clock'></h1><span style=' color: grey;height: 100%; font-size: 11px; padding-left: 10px;'>Von Nicolas Caluori</span><br><div id='myProgress'><div id='myBar'><span id='percent'></span></div></div>";
            document.getElementById("clock").innerHTML = "Warte auf erste Buchung... oder Fehler aufgetreten ";
            removeFadeIn();
            console.log("Fehler... noch keine Daten gesammelt");
        }
    }

    if (minutes % 10 === 0 && seconds == 0) {
        update();
        console.log("Update");

        updateDarkMode();
    } else if (seconds == 0) {
        shortUpdate();
        console.log("Short Update");
    }



}, 1000);

//------------------ Tic Tac Toe ------------------
document.getElementById("toggle-on").addEventListener("click", function() { //easy
    document.getElementById("toggle-off").value = "false";
    document.getElementById("toggle-on").value = "true";
    document.querySelectorAll("#tic-tac-toe .easy")[0].style.display = "block";
    document.querySelectorAll("#tic-tac-toe .hard")[0].style.display = "none";
});

document.getElementById("toggle-off").addEventListener("click", function() { //hard
    document.getElementById("toggle-on").value = "false";
    document.getElementById("toggle-off").value = "true";
    document.querySelectorAll("#tic-tac-toe .easy")[0].style.display = "none";
    document.querySelectorAll("#tic-tac-toe .hard")[0].style.display = "block";

});

//Multiplayer
window.ticCounter = 0;
window.lastgamestate = "";

function ticRequest(getHeaders, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4) {
            // defensive check
            if (typeof callback === "function") {
                // apply() sets the meaning of "this" in the callback
                callback.apply(xhttp);
            }
        }
    };
    xhttp.open("GET", "https://dev.k26.ch/tictactoe/handler.php?" + getHeaders, true);
    xhttp.send();
}

document.getElementsByClassName("game--leave")[0].addEventListener("click", function() {
    gamestate = ["", " ", "", "", "", "", "", "", ""];
    ticRequest("play=" + game + "&player=leaveGame&gamestate=" + JSON.stringify(gamestate), function() {
        var resp = this.responseText;
    });
});

document.getElementsByClassName("game--create")[0].addEventListener("click", function() {
    var game = "";
    var player = "";
    game = prompt("Spielnamen eingeben:", "");
    if (game != null && game != "") {
        player = (prompt("Deinen Namen eingeben:", ""));
        if (player != null && player != "") {
            window.game = game.toLowerCase();
            window.player = player;
            ticRequest("create=" + game + "&player=" + player, function() {
                var resp = this.responseText;
                alert(resp);
                tictactoeInterval = setInterval(() => {
                    ticRefresh();
                }, 5000);
                currentPlayer = "X";
                updateTictext();
            });
        } else {

        }
    } else {

    }
});

document.getElementsByClassName("game--join")[0].addEventListener("click", function() {
    var game = "";
    var player = "";
    game = prompt("Spielnamen eingeben:", "");
    if (game != null && game != "") {
        player = prompt("Deinen Namen eingeben:", "");
        if (player != null && player != "") {
            window.game = game.toLowerCase();
            window.player = player;
            ticRequest("join=" + game + "&player=" + player, function() {
                var resp = this.responseText;
                alert(resp);
                tictactoeInterval = setInterval(() => {
                    ticRefresh();
                }, 5000);
                currentPlayer = "O";
                updateTictext();
            });
        } else {

        }
    } else {

    }
});

function updateTictext() {
    document.getElementById("lobby").innerHTML = '<span>Lobby: </span>' + window.game;
    document.getElementById("wins-player1").innerHTML = '<span>Siege ' + window.player1 + ': </span>' + window.player1wins;
    document.getElementById("wins-player2").innerHTML = '<span>Siege ' + window.player2 + ': </span>' + window.player2wins;
    document.getElementById("ties").innerHTML = '<span>Unentschieden: </span>' + window.ties;
}

function ticleavegame() {
    clearInterval(tictactoeInterval);
    window.game = "";
    window.gamestate = "";
    window.allowMove = "";
    window.player = "";
    window.player1 = "";
    window.player2 = "";
    window.player1wins = 0;
    window.player2wins = 0;
    window.ties = 0;
    window.ticCounter = 0;
    updateTictext();
    gamestate = ["", "", "", "", "", "", "", "", ""];
}

function ticRefresh() {
    ticRequest("status=" + window.game + "&player=" + window.player, function() {
        if (window.draw) {
            window.draw = false;
            window.ties++;
            updateTictext();
        }
        window.won = "";
        var resp = this.responseText;
        window.gamestate = JSON.parse(resp).gamestate;
        window.gamestate = JSON.parse(window.gamestate)
        gamestate = window.gamestate;
        if (gamestate[0] == " ") {
            handleRestartGame();
        }
        if (gamestate[1] == " ") {
            ticleavegame();
        }
        window.nextMove = JSON.parse(resp).nextMove;
        window.player1 = JSON.parse(resp).player1;
        window.player2 = JSON.parse(resp).player2;

        if (window.player2 != "" && gameActive) {
            setTicStatusText(window.nextMove + " ist dran");
            updateTictext();

        } else if (window.player2 != "") {

        } else {
            setTicStatusText("Warte auf Spieler...");
        }

        if (window.player == window.nextMove) {
            window.allowMove = true;
        } else {
            window.allowMove = false;
        }

        [].forEach.call(document.querySelectorAll("[data-cell-index]"), function(el) {
            index = el.getAttribute("data-cell-index");
            el.innerHTML = window.gamestate[index];
        });
        if (gameActive) {
            handleResultValidation();
        }

        if (JSON.stringify(window.gamestate) == JSON.stringify(window.lastgamestate)) {
            window.ticCounter++;
        } else {
            window.lastgamestate = window.gamestate;
            window.ticCounter = 0;
        }
        if (window.ticCounter > 60) {
            ticleavegame();
        }
    });
}

function setTicStatusText(text) {
    statusDisplay.innerHTML = text;
}


const statusDisplay = document.querySelector('.game--status');

let gameActive = true;
let gamestate = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "";
window.player1 = "";
window.player2 = "";
window.player1wins = 0;
window.player2wins = 0;
window.ties = 0;
window.won = "";
window.draw = "";

const winningMessage = () => `${window.won} hat gewonnen!`;
const drawMessage = () => `Unentschieden!`;
const currentPlayerTurn = () => `Warte...`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gamestate[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    ticRequest("play=" + window.game + "&player=" + window.player + "&gamestate=" + JSON.stringify(gamestate), function() {
        var resp = this.responseText;
        ticRefresh();
    });
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gamestate[winCondition[0]];
        let b = gamestate[winCondition[1]];
        let c = gamestate[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            window.wonPlayer1 = a == "X" ? true : false;
            window.wonPlayer2 = a == "O" ? true : false;
            setTimeout(() => {
                document.querySelector("[data-cell-index='" + winCondition[0] + "']").style.backgroundColor = "#4da6ff";
            }, 200);
            setTimeout(() => {
                document.querySelector("[data-cell-index='" + winCondition[1] + "']").style.backgroundColor = "#4da6ff";
            }, 600);
            setTimeout(() => {
                document.querySelector("[data-cell-index='" + winCondition[2] + "']").style.backgroundColor = "#4da6ff";
            }, 1000);

            break;
        }
    }

    if (roundWon) {
        gameActive = false;
        if (window.wonPlayer1) {
            window.won = window.player1;
            window.player1wins++;
        } else if (window.wonPlayer2) {
            window.won = window.player2;
            window.player2wins++;
        } else {
            alert("Fehler! Gewinner konnte nicht ermittelt werden...")
        }
        console.log("Won:" + window.won);
        console.log("Punkte1:" + window.player1wins);
        console.log("Punkte2:" + window.player2wins);

        statusDisplay.innerHTML = winningMessage();
        return;
    }

    let roundDraw = !gamestate.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        document.querySelectorAll('.easy .cell').forEach(cell => cell.style.backgroundColor = "#66ff66");
        gameActive = false;
        window.draw = true;
        return;
    }

}

function handleCellClick(clickedCellEvent) {
    if (window.allowMove) {
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

        if (gamestate[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
        //handlePlayerChange();
    }

}

function handleRestartGame() {
    gameActive = true;
    gamestate = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.easy .cell').forEach(cell => {
        cell.innerHTML = "";
        cell.style.removeProperty('background-color');
    });
}

document.querySelectorAll('.easy .cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.easy .game--restart').addEventListener('click', function() {
    gamestate = [" ", "", "", "", "", "", "", "", ""];
    ticRequest("play=" + game + "&player=leaveGame&gamestate=" + JSON.stringify(gamestate), function() {
        var resp = this.responseText;
    });
});

//----------Hard

var origBoard; //an array that keeps track of what's in each square: X, O or nothing
const humanPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [ //array thats gonna show winning combinations
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

const cells = document.querySelectorAll('#tic-tac-toe .hard .cell'); // cells variable is going to store a reference to each element that has a class 'cell'  
startGame(); // calling function to start the game


//defining the function to start the game (it will also run when clicking on the "Replay" button)
function startGame() {
    origBoard = Array.from(Array(9).keys()) //make the array every number from 0-9
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = ''; //there will be nothing in the cell     
        cells[i].style.removeProperty('background-color'); // removing the background color
        cells[i].addEventListener('click', turnClick, false); //calling the turnClick function
        document.querySelector(".game--status-hard").innerHTML = "     ";
    }
}


//defining turnClick function
function turnClick(square) {
    if (typeof origBoard[square.target.id] === 'number') { //if id that was just clicked is a number, that means no one played in this spot
        turn(square.target.id, humanPlayer) //human player taking a turn
        if (!checkTie()) turn(bestSpot(), aiPlayer); //checking if there's a tie, if not, then the Ai Player will take a turn
    }
}


//defining turn function
function turn(squareId, player) {
    if (squareId != undefined) {
        origBoard[squareId] = player;
        document.getElementById(squareId).classList.add("this-fade-in");
        if (player == "X") {
            setTimeout(() => {
                document.getElementById(squareId).innerText = player; // updating the display so we can see where player clicked
                document.getElementById(squareId).classList.remove("this-fade-in");
            }, 100);
        } else {
            document.getElementById(squareId).classList.remove("this-fade-in");
            document.getElementById(squareId).innerText = player; // updating the display so we can see where player clicked
        }

        let gameWon = checkWin(origBoard, player)
        if (gameWon) gameOver(gameWon) // whenever the turn has been taken we're going to check if the game has been won
    }
}


// defining checkWin function
function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []); //finding every index that the player has played
    let gameWon = null;

    for (let [index, win] of winCombos.entries()) { //checking if the game has been won by looping through every winCombos
        if (win.every(elem => plays.indexOf(elem) > -1)) { //has the player played in every spot that counts as a win for that win
            gameWon = { index: index, player: player }; //which win combo the player won at & which player had won
            break;
        }
    }
    return gameWon;
}


//defining gameOver function
function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) { //going through every index of the WinCombos
        setTimeout(() => {
            document.getElementById(index).style.backgroundColor = "";
            document.getElementById(index).style.backgroundColor =
                gameWon.player === humanPlayer ? "#4da6ff" : "#ff0000"; //if the human won-set background color to blue, if AI won-set background color to red
        }, index * 100);
    }
    for (var i = 0; i < cells.length; i++) { //making sure we cannot click on the cells anymore
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player === humanPlayer ? "Du hast gewonnen!" : "Du hast verloren :("); //if human Player won show "You win!", otherwise show "You lose."
}


//defining declareWinner function
function declareWinner(who) {
    document.querySelector(".game--status-hard").innerText = who;
}

//defining emptySuares function
function emptySquares() {
    return origBoard.filter(s => typeof s === 'number'); //filter every element in the origBoard to see if the type of element equals number. If yes, we are gonna return it (all the squares that are numbers are empty, the squares with X and O are not empty)
}


//defining bestSpot function
function bestSpot() {
    return minimax(origBoard, aiPlayer).index; //will always play in the first empty squre
}


//defining checkTie function
function checkTie() {
    if (emptySquares().length === 0 && document.querySelector(".game--status-hard").innerText == "") { //if every squre is filled up &nobody has won then it's a tie
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "#66ff66"; //setting the background color to green
            cells[i].removeEventListener('click', turnClick, false); //making sure user cannot click anywhere as the game is over
        }
        declareWinner("Unentschieden!")
        return true; //returning true as it's a tie
    }
    return false;
}


//defining minimax function
function minimax(newBoard, player) {
    var availSpots = emptySquares(newBoard); //defining the indexes of the available spots in the board

    if (checkWin(newBoard, player)) { //checking who wins
        return { score: -10 }; //if O wins we return -10
    } else if (checkWin(newBoard, aiPlayer)) {
        return { score: 10 } // if X wins we return 10
    } else if (availSpots.length === 0) {
        return { score: 0 } //tie, we return 0
    }
    var moves = []; //collect the scores from each of the empty spots to evaluate them later
    for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]]; //setting the index number of the empty spot, that was store as a number in the origBoard, to the index property of the move object
        newBoard[availSpots[i]] = player; //setting empty spot on a newBoard to the current player

        if (player === aiPlayer) { //calling the minimax function with the other player in the newly changed newBoard
            var result = minimax(newBoard, humanPlayer);
            move.score = result.score; //store the object result from the minimax function call, that includes a score property, to the score property of the move object
        } else {
            var result = minimax(newBoard, aiPlayer);
            move.score = result.score; //if the minimax function does not find a terminal state, it goes level by level (deeper into the game). this recursion happens until it reached out the terminal state and returns a score one level up
        }

        newBoard[availSpots[i]] = move.index; // minimax resets newBoard to what it was before

        moves.push(move); //pushes the move object to the moves array
    }

    var bestMove; //minimax algorithm evaluates the best move in the moves array
    if (player === aiPlayer) { //choosing the highest score when AI is playing and the lowest score when the human is playing            
        var bestScore = -10000; //if the player is AI player, it sets variable bestScore to a very low number
        for (var i = 0; i < moves.length; i++) { //looping through the moves array
            if (moves[i].score > bestScore) { //if a move has a higher score than the bestScore, the algorithm stores that move
                bestScore = moves[i].score;
                bestMove = i; //if there are moves with similar scores, only the first will be stored
            }
        }
    } else { // when human Player
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) { //minimax looks for a move with the lowest score to store
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove]; //returning object stored in bestMove
}