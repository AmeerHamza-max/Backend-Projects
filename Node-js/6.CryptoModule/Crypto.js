 const crypto=require('crypto');
 // creates number x 2 characters like 8x2=16;
 const random=crypto.randomBytes(8).toString('hex');
 console.log(random);
 const hasValue=crypto.createHash('sha256').update('Ameer Hamza').digest('hex');
 console.log(hasValue);

 //if the value in update is same as you pass in previous the encrypted text will be the same.
 const hasValue1=crypto.createHash('sha256').update('Ameer Hamza').digest('hex');
 console.log(hasValue1);
 const Hamza={
    'a':'luck',
    'b':'baby'
 }
 console.log(`Hi my name is ${Hamza}`);