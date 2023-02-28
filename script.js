function addRows() {
  let rowNum = document.querySelector(".rowNum").value;

  let rows1 = "";
  let rows2 = "";
  for (var i = 1; i <= rowNum; i++) {
    rows1 += `<tr>
            <th scope="row">${i}</th>
            <td>
              <input class="m" type="number" placeholder="m" min="0" required />
            </td>
            <td>
              <input class="a" type="number" placeholder="a" min="0" required />
            </td>
            <td>
              <input class="b" type="number" placeholder="b" min="0" required />
            </td>
            <td class="te"> _ </td>
            <td class="s"> _ </td>
        </tr>`;
    rows2 += `<tr>
        <th scope="row">${i}</th>
        <td>
            <input class="T" type="number" placeholder="T" min="0" required />
        </td>
        <td class="Z"> - </td>
        </tr>`;
  }

  document.querySelector(".deviation-row").innerHTML = rows1;
  document.querySelector(".z-rows").innerHTML = rows2;
}

// //Graph
// const ctx = document.getElementById("myChart");

// new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: [
//       -3.25, -3.0, -2.75, -2.5, -2.25, -2.0, -1.75, -1.5, -1.25, -1.0, -0.75,
//       -0.5, -0.25, 0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5,
//       2.75, 3.0, 3.25,
//     ],
//     datasets: [
//       {
//         label: "Graph of z values",
//         data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

var expectedTime = [];
var deviation = [];


function calDeviation() {
  var mInputs = document.querySelectorAll(".m");
  var aInputs = document.querySelectorAll(".a");
  var bInputs = document.querySelectorAll(".b");
  var te = document.querySelectorAll(".te");
  var s = document.querySelectorAll(".s");

  console.log(mInputs);
  console.log(aInputs);
  console.log(bInputs);

  var m = [];
  var a = [];
  var b = [];

  for (var i = 0; i < mInputs.length; i++) {
    m.push(parseInt(mInputs[i].value));
    a.push(parseInt(aInputs[i].value));
    b.push(parseInt(bInputs[i].value));
  }

  for (var i = 0; i < m.length; i++) {
    expectedTime.push((a[i] + 4 * m[i] + b[i]) / 6);
    deviation.push((b[i] - a[i]) / 6);
    console.log("Expected time: ", (a[i] + 4 * m[i] + b[i]) / 6);
    console.log("standard deviastion: ", (b[i] - a[i]) / 6);
  }

  for (var i = 0; i < te.length; i++) {
    te[i].innerHTML = expectedTime[i];
    s[i].innerHTML = deviation[i];
  }
}


function calcZ() {

    var zOutput = document.querySelectorAll('.Z');

    var Z = [];
    var targetInputs = document.querySelectorAll('.T');
    for(var i=0; i<targetInputs.length; i++) {
        Z.push((parseInt(targetInputs[i].value) - expectedTime[i]) / deviation[i]);
    }
 
    for(var i=0; i<zOutput.length; i++) {
        zOutput[i].innerHTML = Z[i];
    }

}