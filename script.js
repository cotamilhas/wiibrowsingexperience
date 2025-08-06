function showInfo() {
    var info = "";
    info += "Browser: " + navigator.appName + "<br />";
    info += "Version: " + navigator.appVersion + "<br />";
    info += "User-Agent: " + navigator.userAgent + "<br />";
    info += "Java Enabled: " + navigator.javaEnabled() + "<br />";
    info += "Cookies Enabled: " + navigator.cookieEnabled + "<br />";
    info += "Platform: " + navigator.platform + "<br />";
    info += "Language: " + (navigator.language || navigator.userLanguage || "N/A") + "<br />";
    info += "Online: " + navigator.onLine + "<br />";
    info += "Screen Width: " + screen.width + "<br />";
    info += "Screen Height: " + screen.height + "<br />";
    info += "Color Depth: " + screen.colorDepth + "<br />";
    info += "Timezone Offset: " + new Date().getTimezoneOffset() + " minutes<br />";
    info += "Current URL: " + window.location.href + "<br />";
    info += "Referrer: " + document.referrer + "<br />";
    info += "Title: " + document.title + "<br />";
    info += "Character Set: " + document.characterSet + "<br />";
    info += "Content Type: " + document.contentType + "<br />";
    info += "Last Modified: " + document.lastModified + "<br />";
    info += "Domain: " + window.location.hostname + "<br />";
    info += "Protocol: " + window.location.protocol + "<br />";
    info += "Port: " + (window.location.port || "default") + "<br />";
    info += "Pathname: " + window.location.pathname + "<br />";
    info += "Search: " + window.location.search + "<br />";
    info += "Hash: " + window.location.hash + "<br />";

    document.getElementById("info").innerHTML = info;
}

window.onload = showInfo;
