if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
    HTMLElement.prototype.click = function() {
        var evt = this.ownerDocument.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        this.dispatchEvent(evt);
    }
}

document.getElementById("checkList").addEventListener("click", function(ev) {
    if (ev.target && ev.target.nodeName == "LI") {
        ev.target.classList.toggle("checked");
    }
});

function parseXML(name) {
    var xml = new XMLHttpRequest();
    var file = "codes/" + name + ".xml";
    xml.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            var xmlData = xml.responseXML;
            xmlData = (new DOMParser()).parseFromString(xml.responseText, "text/xml");
            xmlData = xmlData.getElementsByTagName("code");

            var i = 0;
            for (; i < xmlData.length; i++) {
                var li = document.createElement("li");
                var desc = xmlData[i].getElementsByTagName("title")[0].textContent;
                var t = document.createTextNode(desc);
                li.appendChild(t);
                li.setAttribute("data-codeName", xmlData[i].getElementsByTagName("title")[0].textContent);
                li.setAttribute("data-codeAuthor", xmlData[i].getElementsByTagName("author")[0].textContent);
                li.setAttribute("data-codeDesc", xmlData[i].getElementsByTagName("description")[0].textContent);
                li.setAttribute("data-codeVersion", xmlData[i].getElementsByTagName("version")[0].textContent);
                li.setAttribute("data-codeDate", xmlData[i].getElementsByTagName("date")[0].textContent);
                li.setAttribute("data-codeSrc", xmlData[i].getElementsByTagName("source")[0].textContent.replace(/[\s\n\r\t]+/gm, ""));
                li.setAttribute("onmouseover", "updateDescription(this)");
                document.getElementById("checkList").appendChild(li);
            }

            button = document.getElementById("downloadButton");
            button.style.visibility = "visible";
            button.disabled = false;
            button = document.getElementById("dolphinDownloadButton");
            button.style.visibility = "visible";
            button.disabled = false;
            button = document.getElementById("gcmDownloadButton");
            button.style.visibility = "visible";
            button.disabled = false;
            document.getElementById("gameID").disabled = false;
        }
    };

    xml.open("GET", file);
    xml.send();
}

function downloadGCT(data, filename) {
    var rawData = new Uint8Array(data.length / 2);

    for (var x = 0; x < rawData.length; x++) {
        rawData[x] = parseInt(data.substr(x * 2, 2), 16);
    }

    var file = new Blob([rawData], {
        type: "application/octet-stream"
    });

    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        var a = document.createElement("a"),
            url = window.URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        a.click();
        setTimeout(function() {
            window.URL.revokeObjectURL(url);
        }, 500);
    }
}

function generateGCT() {

    if (document.getElementById("gameID").value === "Choose Version") {
        alert("Select the game version!");
        return;
    }
    var data = "00D0C0DE00D0C0DE";
    var codeList = document.getElementById("checkList").getElementsByTagName("li");
    var valueSelected = false;
    for (var i = 0; i < codeList.length; i++) {
        if (codeList[i].className === "checked") {
            data += codeList[i].getAttribute("data-codeSrc");
            valueSelected = true;
        }
    }

    if (valueSelected) {
        data += "FF00000000000000";

        downloadGCT(data, document.getElementById("gameID").value + ".gct");
    } else {
        alert("No cheat(s) selected!");
    }
}

function downloadTXT(data, filename) {
    var file = new Blob([data], {
        type: "application/octet-stream"
    });

    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        var a = document.createElement("a"),
            url = window.URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        a.click();
        setTimeout(function() {
            window.URL.revokeObjectURL(url);
        }, 500);
    }
}

function generateTXT(s) {
    if (document.getElementById("gameID").value === "Choose Version") {
        alert("Select the game version!");
        return;
    }
    if (s.id === "dolphinDownloadButton") var data = "Paste the following on top of your games .ini file:\r\n[Gecko]";
    else var data = document.getElementById("gameID").value + "\r\nSuper Mario Sunshine";
    var codeList = document.getElementById("checkList").getElementsByTagName("li");
    var valueSelected = false;
    for (var i = 0; i < codeList.length; i++) {
        if (codeList[i].className === "checked") {
            data += "\r\n";
            if (s.id === "gcmDownloadButton") data += "\r\n";
            else data += "$";
            data += codeList[i].getAttribute("data-codeName") + " (" + codeList[i].getAttribute("data-codeDate") + ") [" + codeList[i].getAttribute("data-codeAuthor") + "]\r\n";
            data += (codeList[i].getAttribute("data-codeSrc").match(/.{8}/g).join(" ")).replace(/(.{17})./g, "$1\r\n");
            valueSelected = true;
        }
    }

    if (valueSelected) {
        downloadTXT(data, document.getElementById("gameID").value + ".txt");
    } else {
        alert("No cheat(s) selected!");
    }
}

function updateCodelist() {
    resetDescription();
    document.getElementById("gameID").disabled = true;
    button = document.getElementById("downloadButton");
    button.style.visibility = "hidden";
    button.disabled = true;
    button = document.getElementById("dolphinDownloadButton");
    button.style.visibility = "hidden";
    button.disabled = true;
    button = document.getElementById("gcmDownloadButton");
    button.style.visibility = "hidden";
    button.disabled = true;
    document.getElementById("checkList").innerHTML = "";
    var gameVersion = document.getElementById("gameID").value;
    parseXML(gameVersion);
}

function updateDescription(s) {
    document.getElementById("descriptionBox").innerHTML = "<p><h2>" +
        s.getAttribute("data-codeName") + "</h2></p><p><i>Author(s): " +
        s.getAttribute("data-codeAuthor") + "<br />Version: " +
        s.getAttribute("data-codeVersion") + " (" +
        s.getAttribute("data-codeDate") + ")</i></p>" + "<p>Description:<br />" +
        s.getAttribute("data-codeDesc") + "</p>";
}

function setButtonDescription(s) {
    if (s.id === "downloadButton")
        document.getElementById("descriptionBox").innerHTML = "<p><h2>Download GCT</h2></p><p>Download the cheats in the GCT format for use with Nintendont.</p>";
    else if (s.id === "dolphinDownloadButton")
        document.getElementById("descriptionBox").innerHTML = "<p><h2>Download for Dolphin</h2></p><p>Download a textfile containing the formatted codes for use with Dolphin. Copy the contents of the file on top of your games .ini file.</p>";
    else
        document.getElementById("descriptionBox").innerHTML = "<p><h2>Download for Gecko Cheat Manager</h2></p><p>Download the cheats in a textfile formatted for use with the <a href=\"http://wiibrew.org/wiki/CheatManager\">Gecko Cheat Manager</a>. Place the txt file in SD:/txtcodes/.</p><p>A zip archive containing pregenerated txt files with all available codes on this site can be downloaded <a href=\"files/GCMCodes.zip\">here</a>.";
}

function resetDescription() {
    document.getElementById("descriptionBox").innerHTML = "<p><h3>Select your codes from the list...</h3></p>";
}

function updateChangelog() {
    var xml = new XMLHttpRequest();
    var file = "changelog.xml";
    xml.onload = function() {
        if (this.status == 200 && this.responseXML != null) {
            var changelogData = xml.responseXML;
            changelogData = (new DOMParser()).parseFromString(xml.responseText, "text/xml");
            changelogData = changelogData.getElementsByTagName("update");

            for (var i = 0; i < changelogData.length && i < 5; i++) {
                document.getElementById("changelog").innerHTML += "<i>" + changelogData[i].getElementsByTagName("date")[0].textContent + ":</i> " + changelogData[i].getElementsByTagName("change")[0].textContent + "<br />";
            }

            document.getElementById("changelog").innerHTML += "<a target=\"_blank\" href=\"changelog.html\">more ...</a>";
        };
    }
    xml.open("GET", file);
    xml.send();
}