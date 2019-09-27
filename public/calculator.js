//function to return value  of weight in weight column
function getWeight(num){
  var weightID = "weight".concat(num);
  var myTable = document.getElementById("myTable");
  var weight = document.getElementById(weightID).value;
  return weight;
}


//function to get calculate and update percentage.
function getPercentage(num) {
  var gradeID = "grade".concat(num);
  var outOfID = "outOf".concat(num);
  var myTable = document.getElementById("myTable");
  var grade = document.getElementById(gradeID).value;
  var outOf =document.getElementById(outOfID).value;
  var percent = 0;
  // if(outOf  <= 0 && grade < 0){
  //   myTable.rows[num-1].cells[4].innerHTML = "";
  // }
  // else {
    var temp = (grade/outOf);
    if(temp>=0&& outOf > 0){
      percent = temp;
      myTable.rows[num-1].cells[4].innerHTML = percent.toFixed(3);
    }
    else{
      myTable.rows[num-1].cells[4].innerHTML = "";
    }

  return percent;
}


//function that calculate weighted average
function weightedAverage(){
  var totalPercentage = 0;
  var totalWeight = 0;
  var weighted_Av = 0;
  var numOfRows = document.getElementById("myTable").rows.length;
  for( var j = 1; j < numOfRows; j ++){
    var temp = parseInt(getWeight(j+1),10);
    if(temp>=0){
      totalPercentage += getPercentage(j+1)*temp;
      totalWeight += temp;
    }
  }if(totalWeight>0){
    weighted_Av = totalPercentage/totalWeight;
  }
  document.getElementById("result").innerHTML = weighted_Av.toFixed(3);
}

//function that calculates mean of grade
  function average(){
    var numOfActivities=0;
    var percentTotal = 0;
    var mean = 0;
    var numOfRows = document.getElementById("myTable").rows.length;
    for( var i = 1; i < numOfRows; i ++){
      if(getPercentage(i+1) > 0){
        numOfActivities+=1;
        percentTotal+= getPercentage(i+1);
      }
    }
    alert(numOfActivities);
    if(numOfActivities > 0){
      mean = percentTotal/numOfActivities;
    }
    document.getElementById("result").innerHTML = mean.toFixed(3);
  }

  function setAttribute(input,rowNum,id){
    var myTable = document.getElementById("myTable");
    input.setAttribute("type","text");
    input.setAttribute("id", "id".concat(rowNum+1));
    input.setAttribute("value","");
    input.setAttribute("class","textbox");
    input.onclick = function() {
   getPercentage(6);
};
    return;
  }

  function addRow(){
    var myTable = document.getElementById("myTable");
    var numOfRows = document.getElementById("myTable").rows.length;
    var row = myTable.insertRow(numOfRows);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Activity ".concat(numOfRows);
    var cell2 = row.insertCell(1);
    cell2.innerHTML = "A".concat(numOfRows);

    var cell3 = row.insertCell(2);
    var input1 = document.createElement("input");
    cell3.appendChild(input1);
    setAttribute(input1,numOfRows,"weight");


    var cell4 = row.insertCell(3);
    //cell4.innerHTML= "/\n";
    var input2 = document.createElement("input");
    setAttribute(input2,numOfRows,"grade");
    cell4.appendChild(input2);
    var textnode = document.createTextNode("/");
    cell4.appendChild(textnode);
    var input3 = document.createElement("input");
    setAttribute(input3, numOfRows,"outOf");
    cell4.appendChild(input3);
    var cell5 = row.insertCell(4);
  }
