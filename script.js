// Open buttons list after 3 seconds
window.addEventListener('load', function () {
    setTimeout(() => { OpenButtons(); }, 3000);
})

// For Desktop
if (screen.width > 500) {

    // Initial conditions
    document.getElementById("chatWpp").style.bottom = "30px";
    document.getElementById("chatMail").style.bottom = "30px";
    document.getElementById("chatTelegram").style.bottom = "30px";

    function showButtons() {
        if (document.getElementById("chatWpp").style.bottom == "30px") {
            OpenButtons();
        } else {
            CloseButtons();
        }
    }

    // Function to open list of buttons
    function OpenButtons() {
        document.getElementById("chatWpp").style.bottom = "90px";
        document.getElementById("chatMail").style.bottom = "160px";
        document.getElementById("chatTelegram").style.bottom = "230px";

        document.getElementById("textWpp").style.visibility = "visible";
        document.getElementById("textMail").style.visibility = "visible";
        document.getElementById("textTele").style.visibility = "visible";

        document.getElementById("chatWpp").style.visibility = "visible";
        document.getElementById("chatMail").style.visibility = "visible";
        document.getElementById("chatTelegram").style.visibility = "visible";

        document.getElementById("iconWpp").style.visibility = "visible";
        document.getElementById("iconMail").style.visibility = "visible";
        document.getElementById("iconTele").style.visibility = "visible";

        document.getElementById("chatWpp").style.background = "rgba(37, 211, 102,1)";
        document.getElementById("chatMail").style.background = "rgba(212, 70, 56 ,1)";
        document.getElementById("chatTelegram").style.background = "rgba(0, 136, 204,1)";
        document.getElementById("iconChat").src = "img/close.png";

    }

    // Function to close list of buttons
    function CloseButtons() {
        document.getElementById("chatWpp").style.bottom = "30px";
        document.getElementById("chatMail").style.bottom = "30px";
        document.getElementById("chatTelegram").style.bottom = "30px";

        setTimeout(() => {
            document.getElementById("textWpp").style.visibility = "hidden";
            document.getElementById("textMail").style.visibility = "hidden";
            document.getElementById("textTele").style.visibility = "hidden";

            document.getElementById("chatWpp").style.visibility = "hidden";
            document.getElementById("chatMail").style.visibility = "hidden";
            document.getElementById("chatTelegram").style.visibility = "hidden";

            document.getElementById("iconWpp").style.visibility = "hidden";
            document.getElementById("iconMail").style.visibility = "hidden";
            document.getElementById("iconTele").style.visibility = "hidden";

        }, 200);

        document.getElementById("chatWpp").style.background = "rgba(37, 211, 102,0)";
        document.getElementById("chatMail").style.background = "rgba(212, 70, 56 ,0)";
        document.getElementById("chatTelegram").style.background = "rgba(0, 136, 204,0)";
        document.getElementById("iconChat").src = "img/chat.png";
    }

    // On hover Whatsapp button
    function messageOverWpp() {
        document.getElementById("textWpp").style.visibility = "visible";
        document.getElementById("textWpp").style.color = "rgba(255,255,255,1)";
    }

    // On leave Whatsapp button
    function messageLeaveWpp() {
        document.getElementById("textWpp").style.visibility = "hidden";
        document.getElementById("textWpp").style.color = "rgba(255,255,255,0)";
    }

    // On hover mail button
    function messageOverMail() {
        document.getElementById("textMail").style.visibility = "visible";
        document.getElementById("textMail").style.color = "rgba(255,255,255,1)";
    }

    // On leave mail button
    function messageLeaveMail() {
        document.getElementById("textMail").style.visibility = "hidden";
        document.getElementById("textMail").style.color = "rgba(255,255,255,0)";
    }

    // On hover telegram button
    function messageOverTele() {
        document.getElementById("textTele").style.visibility = "visible";
        document.getElementById("textTele").style.color = "rgba(255,255,255,1)";
    }

    // On leave telegram button
    function messageLeaveTele() {
        document.getElementById("textTele").style.visibility = "hidden";
        document.getElementById("textTele").style.color = "rgba(255,255,255,0)";
    }

} else {
    // For smartphones

    // Initial conditions
    document.getElementById("chatWpp").style.bottom = "30px";
    document.getElementById("chatMail").style.bottom = "30px";
    document.getElementById("chatTelegram").style.bottom = "30px";

    document.getElementById("iconWpp").style.visibility = "hidden";
    document.getElementById("iconMail").style.visibility = "hidden";
    document.getElementById("iconTele").style.visibility = "hidden";

    document.getElementById("chatWpp").style.visibility = "hidden";
    document.getElementById("chatMail").style.visibility = "hidden";
    document.getElementById("chatTelegram").style.visibility = "hidden";

    function showButtons() {
        if (document.getElementById("chatWpp").style.bottom == "30px") {
            OpenButtons();
        } else {
            CloseButtons();
        }
    }

    // Function to expand buttons
    function OpenButtons() {
        document.getElementById("chatWpp").style.bottom = "90px";
        document.getElementById("chatMail").style.bottom = "160px";
        document.getElementById("chatTelegram").style.bottom = "230px";

        document.getElementById("textWpp").style.visibility = "visible";
        document.getElementById("textMail").style.visibility = "visible";
        document.getElementById("textTele").style.visibility = "visible";

        document.getElementById("chatWpp").style.visibility = "visible";
        document.getElementById("chatMail").style.visibility = "visible";
        document.getElementById("chatTelegram").style.visibility = "visible";

        document.getElementById("iconWpp").style.visibility = "visible";
        document.getElementById("iconMail").style.visibility = "visible";
        document.getElementById("iconTele").style.visibility = "visible";

        document.getElementById("chatWpp").style.background = "rgba(37, 211, 102,1)";
        document.getElementById("chatMail").style.background = "rgba(212, 70, 56 ,1)";
        document.getElementById("chatTelegram").style.background = "rgba(0, 136, 204,1)";
        document.getElementById("iconChat").src = "img/close.png";

    }

    // Function to close buttons 
    function CloseButtons() {
        document.getElementById("chatWpp").style.bottom = "30px";
        document.getElementById("chatMail").style.bottom = "30px";
        document.getElementById("chatTelegram").style.bottom = "30px";

        setTimeout(() => {
            document.getElementById("textWpp").style.visibility = "hidden";
            document.getElementById("textMail").style.visibility = "hidden";
            document.getElementById("textTele").style.visibility = "hidden";

            document.getElementById("chatWpp").style.visibility = "hidden";
            document.getElementById("chatMail").style.visibility = "hidden";
            document.getElementById("chatTelegram").style.visibility = "hidden";

            document.getElementById("iconWpp").style.visibility = "hidden";
            document.getElementById("iconMail").style.visibility = "hidden";
            document.getElementById("iconTele").style.visibility = "hidden";

        }, 200);

        document.getElementById("chatWpp").style.background = "rgba(37, 211, 102,0)";
        document.getElementById("chatMail").style.background = "rgba(212, 70, 56 ,0)";
        document.getElementById("chatTelegram").style.background = "rgba(0, 136, 204,0)";
        document.getElementById("iconChat").src = "img/chat.png";
    }
}