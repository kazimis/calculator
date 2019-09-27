
//function to add new row
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
  setAttribute(input1,numOfRows,"weight");
  cell3.appendChild(input1);

  var cell4 = row.insertCell(3);
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

//function that set the attribute of input text box
function setAttribute(input,rowNum,id){
  var myTable = document.getElementById("myTable");

  input.setAttribute("type","text");
  input.setAttribute("id", id.concat(rowNum+1));
  input.setAttribute("value","");
  input.setAttribute("class","textbox");
  input.onkeyup = function(){
    var x =this.getAttribute("id");
    var rowsize = x[x.length -1];
    getPercentage(rowsize);
  };
}

//function to reset table to its default format
function reset(){
  var numOfRows = document.getElementById("myTable").rows.length;
  var index =numOfRows;
  while(index > 5){
    document.getElementById("myTable").deleteRow(index-1);
    index--;
  }
  while(index>0){
    var gradeID = "grade".concat(index);
    var outOfID = "outOf".concat(index);
    var weightID = "weight".concat(index);
    var myTable = document.getElementById("myTable");
    document.getElementById(gradeID).value = "";
    document.getElementById(outOfID).value ="";
    document.getElementById(weightID).value ="";
    myTable.rows[index-1].cells[4].innerHTML = "";
    document.getElementById("result").value = "";
    index--;

  }
}


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

    if(numOfActivities > 0){
      mean = percentTotal/numOfActivities;
    }
    document.getElementById("result").innerHTML = mean.toFixed(3);
  }
