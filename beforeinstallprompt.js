      function addTableOfbeforeinstallprompt(data){
          // code to add table with data
          // console.log("shahil",data);
          let tableHeader = `<table>
                               <tr>
                                 <th>Sr.No.</t>
                                 <th>Page</th>
                                 <th>Platform</t>
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
          let milisec = data[i].time.seconds *1000
          let dateString = new Date(milisec)
          let sr = i+1
          let row =`<tr>
                      <td>`+ (i+1) + `</td>
                      <td>`+ data[i].Page + `</td>
                      <td>`+ data[i].platform + `</td>
                      <td>`+ dateString +`</td>
                    </tr>`
              tableContent = tableContent + row
          }
           tableContent = tableContent + tableFooter
           document.getElementById("bipdynamictable").innerHTML = tableContent;
      }

      fb.selectAll('beforeinstallprompt').then((data)=>{
        addTableOfbeforeinstallprompt(data)
      })

      function appinstalledTable(data) {
        // console.log('anp');
        if(data && data.length>0){
          let x = data.length;
          document.getElementById("bipTable").innerHTML = "Found " + x + " elements in the table.";
        }else {
          fb.selectAll('beforeinstallprompt').then((data)=>{
            let x = data.length;
            document.getElementById("bipTable").innerHTML = "Found " + x + " elements in the table.";
          })
        }

        document.getElementById("bipdynamictable").style.fontSize = "25px";
        document.getElementById("bipdynamictable").style.color = "red";
        document.getElementById("bipdynamictable").style.backgroundColor = "Gray";
        document.getElementById("bipdynamictable").style.display = "block";
        document.getElementById("dynamictable").style.display = "none";
        document.getElementById("appinstalledTable").style.display = "block";
        document.getElementById("totalTable").style.display = "none";
      }
