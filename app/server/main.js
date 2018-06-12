// import { Meteor } from 'meteor/meteor';
const { exec } = Npm.require('child_process');

// Meteor.startup(() => {
//   // code to run on server at startup
//   console.log('Meteor server');
// });

Meteor.methods({
  runGeth: function(port) {
    console.log(`open child process to connect to port ${port}`);
    exec(
      'echo $(pwd) "/output.txt" && date >>  output.txt', {
        shell: true
      },
      (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      }
    );
  }
});



// // import { Meteor } from 'meteor/meteor';
// import 'child_process';

// // Meteor.startup(() => {
// //   console.log('Meteor server');
// // });

// Meteor.methods({
//   runGeth: function(port) {
//     var gethRPC = 'geth';


//     var gethThread = child_process.spawn(gethRPC, ['--rpc', '--rpccorsdomain', 'http://localhost:', port]);
//     gethThread.stdout.on('data', null);

//     // => {
//     //   if (error) {
//     //     console.log(error);
//     //   } else if (stderr) {
//     //     console.log(stderr);
//     //   }
//     //   console.log(stdout);
//     // });
//     //console.log(`open child process to connect to port ${port}`);
//   }
// });