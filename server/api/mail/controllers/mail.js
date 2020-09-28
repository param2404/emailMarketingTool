const mailer = require('./../../../services/mailer')

const mail = async (req, res) => {
    await mailer()
}

module.exports={mail}