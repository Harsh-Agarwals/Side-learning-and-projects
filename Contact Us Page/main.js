const form = document.querySelector("form");

const sendEmail = ({ mail, fname, lname, contact, address, message }) => {
    const mailBody =
        "Hello user, please find attached all the contents of your submitted form. <br><br>" +
        `User First Name: ${fname}<br>` +
        `User Last Name: ${lname}<br>` +
        `User Email: ${mail}<br>` +
        `User Phone Number: ${contact}<br>` +
        `User Address: ${address}<br>` +
        `User Message: ${message}<br><br>Thank you for filling the form!`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "harshagarwal9835@gmail.com",
        Password: "2C51008EA01A2761ABD6D77CFB319CEA0CE3",
        To: `${mail}`,
        From: "harshagarwal9835@gmail.com",
        Subject: "Contents of the form submitted using SMTP JavaScript",
        Body: `${mailBody}`,
    })
        .then((message) => {
            setTimeout(() => {
                window.location.href =
                    window.location.href.slice(
                        0,
                        window.location.href.lastIndexOf(".") - 5
                    ) + "success.html";
            }, 1000);
            alert("Message sent Successfully!");
        })
        .catch((e) => location.reload());
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userMail = document.querySelector("#email").value;
    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const phoneNumber = document.querySelector("#contact").value;
    const address = document.querySelector("#address").value;
    const message = document.querySelector("#message").value;

    const userData = {
        mail: userMail,
        fname: firstName,
        lname: lastName,
        contact: phoneNumber,
        address: address,
        message: message,
    };
    sendEmail(userData);
});
