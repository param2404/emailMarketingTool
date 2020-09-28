const sgMail = require('@sendgrid/mail');
var fs=require('fs')
var stringTemplate = fs.readFileSync(__dirname + "/welcome.html", "utf8");
var {users}=require('./../data/users')


sgMail.setApiKey(process.env.SENDGRID_API_KEY);
users.forEach(element => {
    const msg = {
        to: `${element}`,
        from: process.env.MY_MAIL, // Use the email address or domain you verified above
        subject: 'Template',
        text: 'Welcome',
        html: `${stringTemplate}`,
    };
    // //ES6
    sgMail
        .send(msg)
        .then((data) => { console.log(data) }, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });

});
