function addRows() {
  let rowNum = document.querySelector(".rowNum").value;

  let rows1 = "";
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
  }
  rows1 += ` <tr>
  <td style="width: 190px">Total Expected Time: </td>
  <td class = "total-te"> - </td>
</tr>
<tr>
  <td style="width: 190px">Total Standard Deviation: </td>
  <td class="total-s"> - </td>
</tr>`

  document.querySelector(".deviation-row").innerHTML = rows1;
}



var expectedTime = [];
var deviation = [];

var totalTime = 0;
var totalDeviation = 0;

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
    totalTime += (expectedTime[i]);
    
    s[i].innerHTML = deviation[i];
    totalDeviation += (deviation[i]*deviation[i])
  }

  document.querySelector(".total-te").innerHTML = (totalTime);
  document.querySelector(".total-s").innerHTML = Math.sqrt(totalDeviation);
}


function calcZ() {
  var zOutput = document.querySelector('.z-value');
  var targetInputs = document.querySelector('.target-days');

    var zAns = (targetInputs.value - totalTime)/(Math.sqrt(totalDeviation));

 
    zOutput.innerHTML = zAns;
    

}