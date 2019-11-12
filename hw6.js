//modified the example from w3schools to add multiple rows using a loop https://www.w3schools.com/jsref/met_table_insertrow.asp 
//figured out some form/dom manipulation from traversy dom crash course 4
//generating a table using appendChild
var form = document.getElementById('addForm');
var numRows = 0;
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
	//catch invalid inputs and inform user
	if(isNaN(newItem))
	{
		alertNaN();
		return;
	}
		
	if(isNaN(newItem2))
	{
		alertNaN();
		return;
	}
		
	if(isNaN(newItem3))
	{
		alertNaN();
		return;
	}
	if(isNaN(newItem4))
	{
		alertNaN();
		return;
	}


	//clear out the table 
	for(var i = 0; i <= numRows + 1; i++)
		 document.getElementById("mult").deleteRow(-1);

	if(newItem < newItem2){
		var numCols = newItem2 - newItem;
	}
	else {
		item1Big = 1;
		numCols = newItem - newItem2;
	}
	if(newItem3 < newItem4) {
		numRows = newItem4 - newItem3;
		console.log('newItem4: ' + newItem4 + ', newItem3: ' +  newItem3);

	}
	else {
		item3Big = 1;
		numRows = newItem3 - newItem4;
		console.log('newItem3: ' + newItem3 + ', newItem4: ' +  newItem4);
	}
	var a = [];
	var table = document.getElementById("mult"); // var table and row set up to insert empty cell in first row
	var row = table.insertRow(-1); // var table and row set up to insert empty cell in first row
	a.push(row.insertCell(-1));
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
			for(var q = newItem4; q <= newItem3; q++) // prints j rows
			{
				var table = document.getElementById("mult");
				var row = table.insertRow(-1);
				a.push(row.insertCell(-1));
				console.log((typeof a[a.length-1]));
				a[a.length -1].innerHTML = q; // insert the y value into a cell

				for(var i = newItem2; i <= newItem; i++) // adds in j entries per row
				{
				  a.push(row.insertCell(-1));
				  console.log((typeof a[a.length-1]));
				  a[a.length -1].innerHTML = q * i;
				}
			}
		}
		else {
			console.log('case 2');
			for(var q = newItem3; q <= newItem4; q++) // prints j rows
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  console.log((typeof a[a.length-1]));
			  a[a.length -1].innerHTML = q; // insert the y value into a cell
			  
			  for(var i = newItem2; i <= newItem; i++) // adds in j entries per row
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
		  for(var q = newItem4; q <= newItem3; q++) // prints j rows
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  console.log((typeof a[a.length-1]));
			  a[a.length -1].innerHTML = q; // insert the y value into a cell
			  for(var i = newItem; i <= newItem2; i++) // adds in j entries per row
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
			  for(var i = newItem; i <= newItem2; i++) // adds in j entries per row
			  {
				  a.push(row.insertCell(-1));
				  console.log((typeof a[a.length-1]));
				  a[a.length -1].innerHTML = q * i;
			  }
		  }
		}
	}
}

function alertNaN() {
  alert("At least one of your entries is not a number. Table did not get created.");
}

