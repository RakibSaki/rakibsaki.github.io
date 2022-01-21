// It's an absolute mess
// Cuz I had to try everything


// const fs = require('fs');
 
// fs.readFile('./spells.html', function(error, data) {
//   // error is null if no error occurred, but an Error object if it did
//   if (error) {
//    throw error;
//   }
//   // the file data will be passed into the callback if no error was thrown
//   //let midResult = data.toString().split(/(<strong>)|(<\/strong>)/).filter(e => e !== undefined && e[0] !== '<' && e !== '' && e !== '<strong>' && e !== '</strong>' && e !== '</li><li>');
//   let result = data.toString().split('-');
//   let spells = [];
//   let descriptions = []
//   for (e of result) {
//     if (e[e.length - 1] === ' ') {
//         spells.push(e);
//     } else if (e[0] === ' ') {
//         descriptions.push(e);
//     }
//   }
//   result = spells;
//   fs.writeFile('./spells.txt', result.join('\n'), err => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     //file written successfully
//   })
// });

// //</li><li>*

const fs = require('fs');
 
fs.readFile('./spells.txt', function(error, data) {
  // error is null if no error occurred, but an Error object if it did
  if (error) {
   throw error;
  }
  // the file data will be passed into the callback if no error was thrown
  const spells = data.toString().split('\n');
  for (let i = 0; i < spells.length; i++) {
      spells[i] = spells[i].split(' - ');
      const name = spells[i][0];
      const description = spells[i][1];
      spells[i] = {
          name,
          description
      }
  }
  console.log(spells);
});