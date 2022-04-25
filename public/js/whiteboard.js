// let bar = setInterval(function () {
//   var date = new Date();
//   if (date.getMinutes() % 15 === 0) {
//     uuidString();
//   }
// }, 60000);

// function uuidString() {
//   return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
//     (
//       c ^
//       (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
//     ).toString(16)
//   );
// }
// console.log(bar);

var wt = new api.WhiteboardTeam("#wt-container", {
  clientId: "61b01725780354638ff6c5ca312df6a4",
  boardCode: "48592eb3-1c83-484a-b7ca-071c541ba696",
  participant: {
    role: "editor",
  },
});
wt.fitToScreen();
