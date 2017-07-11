module.exports = function () {
  var faker = require('faker')
  var _  = require('lodash')
  
  return {
  users : _.times(100, function(id) {
    return generateUsers(id)
  })
  }

  function generateUsers(id) {
    var client ;
    var clientId;
    var subscriptionId;
    var subscriptionName;
    var subscriptionUrl ;

        if (id < 10){
           client = 'Develop';
           clientId = 'ca3ae414-c710-0007-9ac9-a3bf00ad87c7';
           subscriptionId = '9de83841-76c8-004d-8d7b-a3bf00ae8204';
            subscriptionName = 'Develop-1';
            subscriptionUrl = 'develop-1';
        }else if(id < 40 ) {
          client = 'Develop';
          clientId = 'ca3ae414-c710-0007-9ac9-a3bf00ad87c7';
          subscriptionId = 'cadd197a-4ec9-004d-84aa-a4dc00da3d1c';
           subscriptionName = 'Monitor';
           subscriptionUrl = 'monitor';
        }else if( id < 45){
          client = 'Develop-1';
          clientId = 'ca3ae414-c710-0007-9ac9-a3bf00ad87c7';
          subscriptionId = '9de83841-76c8-004d-8d7b-a3bf00ae8204';
          subscriptionName = 'Toolkit for Leaders';
          subscriptionUrl = 'toolkit-for-leaders';
        }else if(id <80) {
          client = '*Editorial Team';
          clientId = 'e9857e38-42ea-0007-92e5-9e6f00ad05b6';
          subscriptionId = 'd71fbf13-eef7-004d-a68b-9e6f00b5ab5e';
          subscriptionName = 'Toolkit for manager';
          subscriptionUrl = 'toolkit-for-manager';
        }else if(id <100) {
          client = '*Editorial Team';
          clientId = 'e9857e38-42ea-0007-92e5-9e6f00ad05b6';
          subscriptionId = '49c859a8-d35c-004d-8be4-9e6f00ad729d';
          subscriptionName = 'Toolkit for Leaders';
          subscriptionUrl = 'toolkit-for-leaders';
        }

        return {
          id,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          userName: faker.internet.userName(),
          client: client,
          clientId: clientId,
          subscriptionId: subscriptionId,
          active:true,
          regularEmail:false,
          forcePasswordReset: false,
          multiSubscription:false,
          type:'normal',
          subscriptionName: subscriptionName,
          subscriptionUrl: subscriptionUrl,
          accessMethod:'sso',
          createdAt: faker.date.between('2016-01-01', '2017-07-01')
        }
  }
}
