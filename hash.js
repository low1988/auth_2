const bcrpyt = require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrpyt.genSalt(10,(err,salt)=>{
//     if(err){
//         return next(err);
//     }

//     bcrpyt.hash('password123', salt,(err, hash)=>{
//         if(err){
//             return next(err);
//         }

//         console.log(hash);
//     });
// });

// const user = {
//     id : 1,
//     token: MD5('SDSAFASADASAD').toString()
// };

// console.log(user);

const id = '1000';
const secret = 'supersecret';

const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';

const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(receivedToken, secret);

console.log(decodeToken);