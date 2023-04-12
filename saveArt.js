//METHOD1
// function saveData() {
//     // Get the form data
//     const form = document.getElementById("new");
//     const formData = new FormData(form);
    
//     // Create a new Excel file
//     const wb = XLSX.utils.book_new();
//     const ws = XLSX.utils.json_to_sheet([Object.fromEntries(formData.entries())]);
    
//     // Add the worksheet to the workbook
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    
//     // Save the Excel file
//     const filename = "Articles.xlsx";
//     XLSX.writeFile(wb, filename);
//   }
  


//METHOD2
// // Get the form element
// const form = document.querySelector('#new');

// // Handle form submission
// form.addEventListener('submit', (event) => {
//   // Prevent the form from actually submitting
//   event.preventDefault();

//   // Get the form data as an object
//   const formData = new FormData(event.target);
//   const formDataObj = Object.fromEntries(formData.entries());

//   // Load the existing workbook
//   const fileReader = new FileReader();
//   fileReader.onload = function(event) {
//     const data = new Uint8Array(event.target.result);
//     const workbook = XLSX.read(data, { type: 'array' });

//     // Get the existing sheet data as an array of objects
//     const worksheet = workbook.Sheets['Sheet1'];
//     const existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//     // Append the new form data to the existing sheet data
//     existingData.push(Object.values(formDataObj));

//     // Write the updated data back to the workbook
//     XLSX.utils.sheet_add_aoa(worksheet, existingData, { origin: -1 });
//     const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

//     // Create a new Blob object from the binary string
//     const blob = new Blob([s2ab(excelFile)], { type: 'application/octet-stream' });

//     // Create a link element and trigger a download of the Excel file
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'Articles.xlsx';
//     link.click();
//   };
//   fileReader.readAsArrayBuffer(event.target.elements.excelFile.files[0]);
// });

// // Utility function to convert a string to an ArrayBuffer
// function s2ab(s) {
//   const buf = new ArrayBuffer(s.length);
//   const view = new Uint8Array(buf);
//   for (let i = 0; i < s.length; i++) {
//     view[i] = s.charCodeAt(i) & 0xFF;
//   }
//   return buf;
// }

//METHOD3
function saveData()
{
  var ExcelApp = new ActiveXObject("Excel.Application");
  var ExcelSheet = new ActiveXObject("Excel.Sheet");
  // a text is stored in the first cell  
  ExcelSheet.ActiveSheet.Cells(1,1).Value = "Texto1";
  // the sheet is saved
  ExcelSheet.SaveAs("C://Users/madaa/Documents/Sree/Exposys Datalabs/Backend Project/Articles.xlsx");
  // close Excel with the Quit() method of the Application object 
  ExcelSheet.Application.Quit();
}