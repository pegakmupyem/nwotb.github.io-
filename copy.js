function copyOne(event) {
    event.preventDefault();
    CopyToClipboard(event.target.textContent, true, "Value copied");
}

function copyAll(event) {
    event.preventDefault();
    let data = `UDID: ${$("#udid").text()}\n`
    data += `IMEI: ${$("#imei").text()}\n`
    data += `PRODUCT / OS VERSION: ${$("#os-version").text()}\n`
    data += `SERIAL NUMBER: ${$("#serial-number").text()}\n`
    CopyToClipboard(data, true, "All data copied");
}

function CopyToClipboard(value, showNotification, notificationText) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();
    if (typeof showNotification === 'undefined') {
        showNotification = true;
    }
    if (typeof notificationText === 'undefined') {
        notificationText = "Copied to clipboard";
    }
    var notificationTag = $("div.copy-notification");
    if (showNotification && notificationTag.length == 0) {
        notificationTag = $("<div/>", {"class": "copy-notification", text: notificationText});
        $("body").append(notificationTag);
        notificationTag.fadeIn("slow", function () {
            setTimeout(function () {
                notificationTag.fadeOut("slow", function () {
                    notificationTag.remove();
                });
            }, 1000);
        });
    }
}
