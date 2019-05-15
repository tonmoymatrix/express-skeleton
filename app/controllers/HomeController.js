/*****************************************************
# Company Name          : 
# Author                :                                 
# Created Date          : 15-04-2019
# Module                : HomeController                     
# Object name           : HomeController    
# Functionality         : landing page for api
# Purpose               : index
*******************************************************/
const appConfig = require('../config/app');
module.exports = {

  index: (req, res) => {
    res.render('index');
  }
}