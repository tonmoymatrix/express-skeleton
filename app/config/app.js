const moment = require("moment");
const appConfig = {
  DEFAULT_LANG: 'EN',
  DEFAULT_PAGE_LIMIT: 10,
  // NAME : getMailAuth
  // PERPOUS : get mail config 
  getMailAuth: () => {
    return {
      // pool: true,
      host: process.env.MAIL_HOST,
      port: 465, // process.env.MAIL_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME, // generated ethereal user
        pass: process.env.MAIL_PASSWORD // generated ethereal password
      }
    };
  },
  

  // NAME : send
  // PERPOUS : set proper return format for response
  send: (code, data, success = true) => {
    let result = {};
    result['status'] = 200;
    result['code'] = code;
    if (success === false) {
      result['statustext'] = 'error';
      result['message'] = data;
    } else {
      result['statustext'] = 'success';
      if (typeof data == 'object') {
        result['data'] = data;
      } else {
        result['message'] = data;
      }
    }


    return result;
  },



}
module.exports = appConfig;
