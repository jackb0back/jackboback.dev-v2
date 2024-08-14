var navs = document.getElementsByClassName("cont");
var home = "cont-home";
var currentNav = home;
for (let i = 0; i < navs.length; i++) {
    navs[i].style.display = "none";
}
var api_route = ".netlify/functions/api"
var title = document.title;
var blurMessage = [{
        "title": "Why u leave :(",
        "icon": "res/assets/favicon.ico"
    },
    {
        "title": "FREE ROBUX",
        "icon": "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/e/d/f/edfae9388da4cd8496b885a8a2df613372500d9c.png"
    },
    {
        "title": ":3",
        "icon": "res/assets/favicon.ico"
    },
    {
        "title": "S̷̛̛̛̛̛̪̣̰̤̮̬̱̯͙̝͓̗̫̻̝͓͍̺̓̈́̾̔̇̀̈́́̃̍̎̍́̈́͋͐̏̓͗̽̃͌̓̐̎̎̍̈́̒͌̀̌͛̈́͗́́̈̌̈͌̑̓̅̑͐̏̔̄̆͌͐̀̅͑̽͋̌̈́̍͐̃͒̀̄͛̌̅͒͘̚͘̕̚͜͠͝͝͠ͅĶ̵̡̧̨̨̢̡̢̛̝̗̥͓͖̞͈͖̞̳͚̝̼̹̥̲͎̰̝͕̟̘̫̖̦̤͙͚͎̤̯̘̥͎̱͈͙̞̱̭̦͎̱̠̘̬̼̠̭̦͇͚̳̮͖̗̰͙̱̯͕̋̾̈́͌́̋̀͋̈́̌͊̉̂̎̍́́̍͗̆̆̆̂͜͝͝͝ͅͅͅͅI̸̗̥͚̗̼̰̪͊͂̓̂͛͊̅̿̓̊̍͆͋͜͝B̷̢̧̨̧̡̨̨͖̙̘̰͕̬̜̫͓̫͙͇̙͚̗̣̩̯̖̬͍̱̬̘̺̱̞̺̺̙̻͕̯̥͔̳͙̜̹̫̘̬͖̜̯̗̬̪̱̟̘̰̲͕̦̻̦̣͉̟̮̻̌̄̆͒̽̍̀̿́̔͛͛̽̊̾̔̎̅͒̎́͐͗̃͆̏́̉͒̉̀̓̚̚̕͘͜͜͝͝͝ͅǏ̷̧̡̡̨̧̢̨̧̡̡̡̧̨̛̛̛̦̰̫̪̙̼͍̫̗̭̯͉͔̝̭͔͔͔̲̗̪̮̹̹̮͇̱̣̦͕̟̺̟̜͚̦̩̜̼̦̜̖̗̬̺̪̭̝̝̙̙̥͚͍̰͚̮̤͕̜͙̘̝͇̲̰͚͎̞̊̉̈́̊̎̍̄̀̆̔̿̂̅̈̏̓̽͋̓̂̀̒̐͛͑̉̽̓̔̓̂́̓̍̀̽̔͑͗͒̏̑́̅͗͊͊̀͌̀̇͆̋̾͋̒̃͑͛̚̕̚̕͘͜͠͝͠͝͝͝͝ͅD̷̡̡̢̨̟͖̦͍̝̤͔̹̫̳̼̪̬͙͔̘͎͚̟̥̹̘̯̟̼͓̖̟̹̘͈̟̘͙̥̞̬͕̥͚͕̠̬̩̬͔̥̻͕͕̱̗͕̬̝͈̭̘̳͉̟̟͙̞̠͈̣͔̰̲̯̦͕͈̬̟͉̪͚̙͉̳͈̜̪͗̃̓̃͒͋̀͗̾̂̽̾͌̓͛̎̂̑́͋͐̍̂͋͐̍͋̾́̓͘͘̕͜͜͝͝͝͠Ḯ̵̛̛̟͍̰͇̝̥̙̎͒̃̄̌͐̅͐͆͆̈́̓̅̓̋̀͑̒̇́̇̒͌̅̈́̊̇͒͐͆̋͊̽̄͗̐͆́͋̊̋͂̍̋̋͛̽̆̄̃͐̉̓͂́͐͆͗̉̀̈́̀̓̾̋͆̌͋̈́̀̓̉͂͗̈̄̚͠͝͠ͅ",
        "icon": "res/assets/pfp_crazy.png"
    },
];
var splash_text = [
    "Now with backend!",
    "Where back!",
    "New and improved",
    "Chattttt"
];
var socials = {
    "discord": {
        "desc": "My discord",
        "url": "",
        "handel": "@jackboback"
    },
    "github": {
        "desc": "My github account",
        "url": "https://github.com/jackb0back",
        "handel": "@jackb0back"
    },
    "mail": {
        "desc": "My Gmail",
        "url": "",
        "handel": "jshouse310@gmail.com"
    },
    "youtube": {
        "desc": "My youtube channel",
        "url": "https://www.youtube.com/channel/UCvy42JSJSiZiou-WXAIOF9A",
        "handel": "Jackboback"
    },
    "scratch": {
        "desc": "My scratch account",
        "url": "https://scratch.mit.edu/users/jackboback/",
        "handel": "@jackboback"
    },
    "itch": {
        "desc": "My itch.io account",
        "url": "https://jackboback.itch.io/",
        "handel": "@jackboback"
    },
    "reddit": {
        "desc": "My reddit account",
        "url": "https://www.reddit.com/user/jackboback/",
        "handel": "@jackboback"
    },
    "tiktok": {
        "desc": "My tiktok account",
        "url": "https://www.tiktok.com/@jackboback32",
        "handel": "@Jackboback32"
    },
}
var blur_intervalTimer = null;
var blur_timeoutTimer = null;
$("#status").html(splash_text[Math.floor(Math.random()*splash_text.length)])


// window.addEventListener("blur", function() {
//     blur_intervalTimer = setInterval(function() {
//         var rand = Math.floor((Math.random() * blurMessage.length));
//         document.title = blurMessage[rand].title;
//         changeFavicon(blurMessage[rand].icon);
//         //  blur_timeoutTimer = setTimeout(function() {
//         //    document.title = title;
//         //  },4000);
//     }, 6000);
// });

// window.addEventListener("focus", function() {
//     clearInterval(blur_intervalTimer);
//     clearTimeout(blur_timeoutTimer);
//     document.title = title;
//     changeFavicon("res/assets/favicon.ico");
// });



function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}


function hideCont() {
    for (let i = 0; i < navs.length; i++) {
        navs[i].style.display = "none";
    }
}

function showCont(nav,anim) {
    hideCont();
    navs[nav].style.display = "block";
    currentNav = nav;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    if (anim == false) {
        return;
    }
    for (let i = 0; i < $(navs[currentNav]).find("sl-animation").length; i++) {
        if ($(navs[currentNav]).find("sl-animation")[i].classList.contains('playonload')) {
            var og_delay = $(navs[currentNav]).find("sl-animation")[0].delay;
            $(navs[currentNav]).find("sl-animation")[i].delay = 700;
            $(navs[currentNav]).find("sl-animation")[i].play = true;
            setTimeout(() => {
                $(navs[currentNav]).find("sl-animation")[i].delay = 0;
            }, 800);
        }else if ($(navs[currentNav]).find("sl-animation")[i].parentElement.classList.contains("playonload")) {
            for (let b = 0; b < $($(navs[currentNav]).find("sl-animation")[i].parentElement).children("sl-animation").length; b++) {
                var og_delay = $($(navs[currentNav]).find("sl-animation")[i].parentElement).children("sl-animation")[b].delay;
                $($(navs[currentNav]).find("sl-animation")[i].parentElement).children("sl-animation")[b].delay = 700;
                $($(navs[currentNav]).find("sl-animation")[i].parentElement).children("sl-animation")[b].play = true;
                setTimeout(() => {
                    $($(navs[currentNav]).find("sl-animation")[i].parentElement).children("sl-animation")[b].delay = 0;
                },800)
            }
        }
    }
}

function resizeItems() {
    $("#about-me").width("calc(100% - " + $("#about-side").width() + "px - 35px)")
    $("#socials").css("margin-top","calc("+$("#langs").height()+"px + 10% + 20px)")
}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function newSocialPopup(social) {
    if (socials[social] !== undefined) {
        var soc = socials[social];
        var _url = "";
        var _hand = "";
        if (soc.url !== "") {
            _url = `<a href="javascript:window.open('${soc.url}')">${soc.url}</a>`
        }
        if (soc.handel !== "") {
            _hand = `<b>${soc.handel}</b>`
        }
        $("#popups")[0].innerHTML += `
            <sl-dialog label="${soc.desc}">
                <p class="social-desc">
                    ${soc.desc}: ${_hand} <br><br> ${_url}
                </p>
            </sl-dialog>
        `
        setTimeout(function() {
            $("sl-dialog")[$("sl-dialog").length - 1].show();
        },250)
    }
}


async function tick(callLoop) {
    while (true) {
        //  console.log("tick");
        if (document.getElementsByClassName("min").length > 0) {
            document.getElementById("navBar").style.marginBottom = "45px";
        } else {
            document.getElementById("navBar").style.marginBottom = "10px";
        }

        if (document.getElementsByClassName("max").length > 0) {
            document.getElementById("navBar").style.marginBottom = "-45px"
            document.getElementById("navBar").style.opacity = "0.2";
            hideCont();
        } else {
            document.getElementById("navBar").style.opacity = "1";
            showCont(currentNav);
        }
        await delay(250);
    }
}


function newWin(name, cont, mount, cfg) {
    if (cfg == undefined || cfg == null || cfg == "") {
        cfg = {
            width: 600,
            height: 500,
            x: 50,
            y: 50,
        }
    }
    if (mount == true) {
        new WinBox(name, {
            class: "modern",
            mount: cont,
            width: cfg.width,
            height: cfg.height
        });
    } else {
        new WinBox(name, {
            class: "modern",
            html: cont,
            width: cfg.width,
            height: cfg.height,
            x: cfg.x,
            y: cfg.y,
        });
    }



}

var db = "https://script.google.com/macros/s/AKfycbwG9_gq4u8ZPXuV3N8dwJT-P9j5ms4xLfC-5ZKyCbgJEKGw658DW6Ma72-nEuXzZlrS/exec"
var fetchedData = {};

function parseB64Dat(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i] = JSON.parse(atob(arr[i]));
    }

    return arr;
}

function getCellVal(val, retName, callback) {
    const formData = new FormData();
    formData.append("action", "getVal");
    const url1 = `${db}?key=${val}`;
    fetch(url1, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            // //console.log(data);
            console.log("%c Fetched " + val + " and placed it in " + retName, "color:lime;");
            fetchedData[retName] = data.flat();
            console.table(fetchedData);
            //alert("all good blud");
            //QUnit.dump.parse(fetchedData);
            callback(fetchedData);
        })
}

function getAllCells(val, retName, callback) {
    const formData = new FormData();
    formData.append("action", "getAllValsIn");
    formData.append("column", val);
    const url1 = `${db}?key=${val}`;
    fetch(url1, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            //  console.log(data);
            console.log("%c Fetched " + val + " and placed it in fetchedData." + retName, "color:lime;");
            fetchedData[retName] = data.flat();
            console.table(fetchedData);
            callback(fetchedData);
        })
}

function isBase64(str) {
    if (str === '' || str.trim() === '') {
        return false;
    }
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}

function displayBlog() {
    document.getElementById("JB_blog").innerHTML = "";
    for (let i = 0; i < fetchedData.blog.length; i++) {
        if (isBase64(fetchedData.blog[i].cont)) {
            fetchedData.blog[i].cont = atob(fetchedData.blog[i].cont);
        }
        document.getElementById("JB_blog").innerHTML = `
       <div class="vertical-rect glass"><h2 style="margin:0;">${fetchedData.blog[i].title}</h2><h5 style="margin:0;margin-top:5px;margin-bottom:5px;">Posted by:${fetchedData.blog[i].poster} on ${fetchedData.blog[i].date}</h5>
       ${fetchedData.blog[i].cont}
       </div>
       ` + document.getElementById("JB_blog").innerHTML;
    }
}

function displayProjects() {
    $("#projects").html("");
    for (i in fetchedData.projects) {
        console.log(i)
        var clone = $("#template-project")[0].content.cloneNode(true);
//        console.log($(clone))
        $(clone).find("img")[0].src = fetchedData.projects[i].img;
        $(clone).find(".proj-tit").html(fetchedData.projects[i].name);
        $(clone).find(".proj-desc").html(fetchedData.projects[i].desc);
        $(clone).find(".proj-date").html(fetchedData.projects[i].date);
        $("#projects").append(clone);
    }
}

function getProjects() {
    fetch(window.location.href +api_route + "/projects", {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            fetchedData.projects = data;
            console.log(data);
            displayProjects();
        })
}


function getBlog() {
    fetch(window.location.href +api_route + "/blog", {
        method: 'GET'
    })
    .then(res => res.json())
    .then(dat => {
        fetchedData.blog = dat;
        fetchedData.blog.reverse();
        console.log(fetchedData.blog);
        // displayBlog();
    })
}




function calculateAge(startDate) {
    const today = new Date();
    const birthDate = new Date(startDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Check if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
//calculateAge("yyyy-mm-dd")

function formatDateToMMDDYYYY(date) {
    // Ensure the input is a valid Date object
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error("Invalid date");
    }
  
    // Extract the day, month, and year from the date object
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
  
    // Format the day and month to ensure two digits (e.g., "01", "09")
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    // Construct the formatted date string
    return `${formattedMonth}/${formattedDay}/${year}`;
}


function createPost() {
    var token = $("#dev-token").val();
    var title = $("#dev-tit").val();
    var cont = quill.getSemanticHTML();
    if (token !== "") {
        if (title !== "") {
            $("#dev-post")[0].disabled = true;
            var res = {
                "title": title,
                "cont": btoa(cont),
                "date": formatDateToMMDDYYYY(new Date())
            }

            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.3.3'},
                body: JSON.stringify({
                    "action":"addBlog",
                    "key": token,
                    "data": res
                })
              };
              
              fetch('http://localhost:8888/.netlify/functions/api/', options)
                .then(response => response.text())
                .then(response => {
                   console.log(response);
                   alert("added blog post.");
                })
                .catch(err => console.error(err));

        }else {            
            alert("title required");
        }
    }else {
        alert("Token required");
    }
}



function handleKeyPress(event) {
    if (event.key == "~") {
        showCont("cont-dev");
    }
}




document.addEventListener('keydown', handleKeyPress);
// showCont("cont-dev");
showCont("cont-home",false);
// tick();