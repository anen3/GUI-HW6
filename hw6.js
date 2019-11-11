//modified the example from w3schools to add multiple rows using a loop https://www.w3schools.com/jsref/met_table_insertrow.asp 
//figured out some form/dom manipulation from traversy dom crash course 4
var form = document.getElementById('addForm');
var filter = document.getElementById('filter');
var dataArr = [];
var brr = [];
var crr = [];

// Form submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e){
	var table = document.getElementById('mult');
	var arr = [];
	e.preventDefault();
	var item3Big = 0;
	var item1Big = 0;
	// Get input value as an int
	var newItem = parseInt(document.getElementById('item').value);
	var newItem2 = parseInt(document.getElementById('item2').value);
	var newItem3 = parseInt(document.getElementById('item3').value);
	var newItem4 = parseInt(document.getElementById('item4').value);

	if(newItem < newItem2){
	var numCols = newItem2 - newItem;
	}
	else 
	{
	item1Big = 1;
	numCols = newItem - newItem2;
	}
	if(newItem3 < newItem4) {
	var numRows = newItem4 - newItem3;
	console.log('newItem4: ' + newItem4 + ', newItem3: ' +  newItem3);

	}
	else {
	item3Big = 1;
	var numRows = newItem3 - newItem4;
	console.log('newItem3: ' + newItem3 + ', newItem4: ' +  newItem4);
	}
	console.log(typeof newItem);
	console.log(numCols);
	console.log(numRows);
	
	var row = table.insertRow(-1);
	var a = [];
	var txt = "";
	var i;
	var table = document.getElementById("mult");
	var row = table.insertRow(-1);
	// var table and row set up to insert empty cell in first row
	a.push(row.insertCell(-1));
	console.log((typeof a[a.length-1]));
	a[a.length -1].innerHTML = ""; // empty cell 
	if(item1Big) {
		
		for( i = newItem2; i <= newItem; i++)  // insert the entries for the first row
		  {
		  a.push(row.insertCell(-1));
		  console.log((typeof a[a.length-1]));
		  a[a.length -1].innerHTML = i;
		  }
		if(item3Big) {
			console.log('case 1');
		  for(q = newItem4; q <= newItem3; q++) // prints j rows
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  console.log((typeof a[a.length-1]));
			  a[a.length -1].innerHTML = q; // insert the y value into a cell
			  
			  for( i = newItem2; i <= newItem; i++) // adds in j entries per row
			  {
				  a.push(row.insertCell(-1));
				  console.log((typeof a[a.length-1]));
				  a[a.length -1].innerHTML = q * i;
			  }
		  }
		}
		else {
			console.log('case 2');
			for(q = newItem3; q <= newItem4; q++) // prints j rows
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  console.log((typeof a[a.length-1]));
			  a[a.length -1].innerHTML = q; // insert the y value into a cell
			  
			  for( i = newItem2; i <= newItem; i++) // adds in j entries per row
			  {
			  a.push(row.insertCell(-1));
			  console.log((typeof a[a.length-1]));
			  a[a.length -1 ].innerHTML = q * i;
			  }
		  }
		}
	}
	else { // when x range 2 is larger than x range 1
		//print out x range in mult table ex: range 1 to 4 gives first  : 1 2 3 4 
		for(i = newItem; i <= newItem2; i++)  // insert the entries for the first row
		  {
		  a.push(row.insertCell(-1));
		  console.log((typeof a[a.length-1]));
		  a[a.length -1].innerHTML = i;
		  }
		if(item3Big) {
			console.log('case 3');
		  for(q = newItem4; q <= newItem3; q++) // prints j rows
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  console.log((typeof a[a.length-1]));
			  a[a.length -1].innerHTML = q; // insert the y value into a cell
			  for(i = newItem; i <= newItem2; i++) // adds in j entries per row
			  {
				  a.push(row.insertCell(-1));
				  console.log((typeof a[a.length-1]));
				  a[a.length -1].innerHTML = q * i;
			  }
		  }
		}
		else {
			console.log('case 4');
			for(q = newItem3; q <= newItem4; q++) // prints j rows
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  console.log((typeof a[a.length-1]));
			  a[a.length -1].innerHTML = q; // insert the y value into a cell
			  for(i = newItem; i <= newItem2; i++) // adds in j entries per row
			  {
				  a.push(row.insertCell(-1));
				  console.log((typeof a[a.length-1]));
				  a[a.length -1].innerHTML = q * i;
			  }
		  }
		}
	}


	/*  var emptySpace = document.createElement('th');
	table.appendChild(emptySpace);
	for(var i = 0; i <= numCols; i++){
	arr[i]=(document.createElement('th'));
	arr[i].appendChild(document.createTextNode(parseInt(newItem) + i));
	table.appendChild(arr[i]);
	}
	for(var i = 0; i <= numRows; i++){
	brr[i]=(document.createElement('tr'));
	brr[i].appendChild(document.createTextNode(parseInt(newItem3) + i));
	table.appendChild(brr[i]);
	} */




	/* // Create new li element
	var tr = document.createElement('tr');
	var th = document.createElement('th');

	// Add class

	// Add text node with input value
	tr.appendChild(document.createTextNode(newItem)); // nodes, once appended, it is used. 
	th.appendChild(document.createTextNode(newItem2)); // need to make new textnode and 
	// Append li to list


	table.appendChild(th);
	table.appendChild(tr);
	*/


}

