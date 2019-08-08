function addTableOfrcb(data){
    console.log("shahil",data);
    let tableHeader = `<table>
                     <tr>
                       <th>Sr.No.</th>
                       <th>Mobile</th>
                       <th>Name</th>
                       <th>Page</th>
                       <th>Platform</th>
                       <th>Question</th>
                       <th>subject</th>
                       <th>Time</th>
                     </tr>`
    let tableFooter = `</table>`
    let tableContent = tableHeader;
    let row = data.length
    for(let i=0; i<row; i++){
    let rowOpener = `<tr>`
    let rowcloser = `</tr>`
    let rowDataOpener =`<td>`
    let rowDataCloser = `</td>`
    let mob = ''
    if(data[i].mobile){
      mob = data[i].mobile
    }
     else if(data[i].mobile1){
      mob = data[i].mobile1
    }else {
      mob = 'Mobile not found'
    }
    let milisec = data[i].time.seconds *1000
    let dateString = new Date(milisec)
    let sr = i+1
    let row =`<tr>
                <td>`+ (i+1) + `</td>
                <td>`+ mob + `</td>
                <td>`+ data[i].name +`</td>
                <td>`+ data[i].Page + `</td>
                <td>`+ data[i].platform + `</td>
                <td>`+ data[i].question +` </td>
                <td>`+ data[i].subject + `</td>
                <td>`+ dateString +`</td>
              </tr>`
        tableContent = tableContent + row
    }
     tableContent = tableContent + tableFooter
     document.getElementById("rcbdynamictable").innerHTML = tableContent;
}

fb.selectAll('rcb').then((data)=>{
  addTableOfrcb(data)
})

function rcbTable(data) {
  console.log('anp');
  if(data && data.length>0){
    let x = data.length;
    document.getElementById("rcbTable").innerHTML = "Found " + x + " elements in the table.";
  }else {
    fb.selectAll('rcb').then((data)=>{
      let x = data.length;
      document.getElementById("rcbTable").innerHTML = "Found " + x + " elements in the table.";
    })
  }

  document.getElementById("rcbdynamictable").style.fontSize = "25px";
  document.getElementById("rcbdynamictable").style.color = "red";
  document.getElementById("rcbdynamictable").style.backgroundColor = "Gray";
  document.getElementById("rcbdynamictable").style.display = "block";
  document.getElementById("dynamictable").style.display = "none";
  document.getElementById("rcbTable").style.display = "block";
  document.getElementById("totalTable").style.display = "none";
}
