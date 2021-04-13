var contactsOpenned = false;

window.addEventListener('load', function () {
    setTimeout(() => { openContacts(); }, 2000);
})

function openContacts() {
    contacts = document.querySelectorAll(".contact-icon");
    contacts.forEach(contact => {
        if (!contact.classList.contains("toggle-contact")) {
            var name = contact.querySelector(".contact-text").innerHTML;
            contact.classList.add(name.toLowerCase() + "-contact");
            contact.style.visibility = "visible";
        } else {
            img = contact.querySelector("img");
            img.src = "img/close.png";
        }
    });
}

function closeContacts() {
    contacts = document.querySelectorAll(".contact-icon");
    contacts.forEach(contact => {
        if (!contact.classList.contains("toggle-contact")) {
            var name = contact.querySelector(".contact-text").innerHTML;
            contact.classList.remove(name.toLowerCase() + "-contact");
            contact.style.visibility = "hidden";
        } else {
            img = contact.querySelector("img");
            img.src = "img/chat.png";
        }
    });
}

function toggleContacts() {
    if (contactsOpenned == true) {
        closeContacts();
    } else {
        openContacts();
    }
    contactsOpenned = !contactsOpenned;
}
