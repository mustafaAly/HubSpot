/* BETA: https://www.npmjs.com/package/@hubspot/api-client */
const request = require("request");
const express = require("express");
const bodyParser = require('body-parser')
const axios = require('axios');
const Router = new express.Router();
const port = process.env.PORT || 8000
const app = express()
app.use(express.json())
app.use(bodyParser.json())
const apiKey = "6efc5d6c-93b8-4169-b347-6f43b75feefd"
const apiKey2 = "bea114a6-26f6-4d80-9660-73c5f76ec155"
const appID = 226127
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, application/json');
    next();
});
//Get Extensions Settings
// axios.get(`https://api.hubapi.com/crm/v3/extensions/calling/${appID}/settings?hapikey=${apiKey}`)
//     .then(data => {
//         console.log(data.data);
//     })
//     .catch(r => {
//         throw new Error(r)
//     });


//Get Extension Cards
// axios.get(`https://api.hubapi.com/crm/v3/extensions/cards/${appID}/?hapikey=${apiKey}`).then(data => {
//     console.log(data.data)
// }).catch(r => {
//     throw new Error(r)
// });



// Create Or Update Extension Settings
// axios.patch(`https://api.hubapi.com/crm/v3/extensions/calling/${appID}/settings?hapikey=${apiKey}`, {
//     isReady: true,
//     name: 'HubPhone',
//     width: 220,
//     url: 'https://www.example.com/hubspot/iframe',
//     height: 350
// })
//     .then(data => {
//         console.log('Settings Updated Successfully');
//     })
//     .catch(r => {
//         throw new Error(r)
//     });




//GetCompanies

// var options = {
//     method: 'GET',
//     url: 'https://api.hubapi.com/crm/v3/objects/companies',
//     qs: { limit: '10', archived: 'false', hapikey: 'YOUR_HUBSPOT_API_KEY' },
//     headers: { accept: 'application/json' }
// };

// axios.get(`https://api.hubapi.com/crm/v3/objects/companies?hapikey=${apiKey}`).then(r => {
//     console.log(r)
// }).catch(r => {
//     throw new Error(r)
// })

// var options = {
//     method: 'POST',
//     url: 'https://api.hubapi.com/crm/v3/objects/companies',
//     qs: {hapikey:apiKey},
//     headers: {accept: 'application/json', 'content-type': 'application/json'},
//     body: {
//       properties: {
//         property_number: '17',
//         property_dropdown: 'choice_b',
//         property_radio: 'option_1',
//         property_string: 'value',
//         property_multiple_checkboxes: 'chocolate;strawberry',
//         property_checkbox: 'false',
//         property_date: '1572480000000'
//       }
//     },
//     json: true
//   };

//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     console.log(body);
//   });


// var options = {
//     method: 'GET',
//     url: 'https://api.hubapi.com/crm/v3/objects/companies',
//     qs: {limit: '10', archived: 'false', hapikey: apiKey},
//     headers: {accept: 'application/json'}
//   };

//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     console.log(body);
//   });
// axios.get('https://app.hubspot.com/oauth/authorize?client_id=e3ac44f7-286e-4c90-9106-39d7c9685fd3&redirect_uri=https://app.hubspot.com/developer/8256290&scope=contacts%20content%20reports%20social%20automation%20actions%20timeline%20business-intelligence%20oauth%20forms%20files%20hubdb%20transactional-email%20integration-sync%20tickets%20e-commerce%20accounting%20sales-email-read%20forms-uploaded-files%20crm.import%20conversations.visitor_identification.tokens.create').
//     then(r => {
//         console.log(r.refresh_token)
//     }).catch(r => {
//         throw new Error(r)
//     })
var options = {
    method: 'GET',
    url: 'https://api.hubapi.com/crm/v3/objects/contacts',
    qs: { limit: '10', archived: 'false', hapikey: apiKey2 },
    headers: { accept: 'application/json' }
};
axios.get(`https://api.hubapi.com/crm/v3/objects/contacts?limit=10&archived=false&hapikey=${apiKey2}`).then(r => {
    console.log(JSON.stringify(r.data))
}).catch(r => {
    throw new Error(r);
})

// request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     console.log(body);
// });



app.listen(port, () => {
    console.log(`Server Is Up On Port ${port}`)
})