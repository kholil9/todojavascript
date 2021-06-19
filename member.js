const activity = document.getElementById("activity");
const date = document.getElementById("date");
const table = document.getElementById("table");


let no= 0;
const deleteTable = (id) => {
    const row = document.getElementById('row' + id);
    row.innerHTML = '';
}
const submit = () => {
    no++;
    const value = activity.value;
    const dateValue = date.value;
    table.innerHTML +=  '<tr id="row'+ no +'">'+
                        '<td>'+ no +'</td>'+
                        '<td>'+ value +'</td>'+
                        '<td>'+ dateValue +'</td>'+
                        '<td onclick="deleteTable('+no+')">Delete</td>'+
                        '</tr>';
    activity.value='';
    date.value='';
}
