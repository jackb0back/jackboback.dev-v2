var navs = document.getElementsByClassName("cont");
var home = "cont-home";
var currentNav = home;
for (let i = 0; i < navs.length; i++) {
    navs[i].style.display = "none";
}
var title = document.title;
var blurMessage = [{
        "title": "Why u leave :(",
        "icon": "res/assets/pfp.png"
    },
    {
        "title": "FREE ROBUX",
        "icon": "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/e/d/f/edfae9388da4cd8496b885a8a2df613372500d9c.png"
    },
    {
        "title": ":3",
        "icon": "res/assets/pfp.png"
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
    "v2.5"
];
var blur_intervalTimer = null;
var blur_timeoutTimer = null;
$("#status").html(splash_text[Math.floor(Math.random()*splash_text.length)])
window.addEventListener("blur", function() {
    blur_intervalTimer = setInterval(function() {
        var rand = Math.floor((Math.random() * blurMessage.length));
        document.title = blurMessage[rand].title;
        changeFavicon(blurMessage[rand].icon);
        //  blur_timeoutTimer = setTimeout(function() {
        //    document.title = title;
        //  },4000);
    }, 6000);
});

window.addEventListener("focus", function() {
    clearInterval(blur_intervalTimer);
    clearTimeout(blur_timeoutTimer);
    document.title = title;
    changeFavicon("res/assets/pfp.png");
});



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

function showCont(nav) {
    hideCont();
    navs[nav].style.display = "block";
    currentNav = nav;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
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
        console.log($(clone))
        $(clone).find("img")[0].src = fetchedData.projects[i].img;
        $(clone).find(".proj-tit").html(fetchedData.projects[i].name);
        $(clone).find(".proj-desc").html(fetchedData.projects[i].desc);
        $(clone).find(".proj-date").html(fetchedData.projects[i].date);
        $("#projects").append(clone);
    }
}

function getProjects() {
    fetch(window.location.href + "/api/projects", {
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
    getAllCells("C", "blog", dat => {
        fetchedData.blog = parseB64Dat(fetchedData.blog);
        fetchedData.blog.shift();
        fetchedData.blog.reverse();
        console.log(fetchedData.blog);
        displayBlog();
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




showCont("cont-contact");
// tick();