//---------------global
var documentHtmL=document;
var siteName = documentHtmL.getElementById('siteName');
var siteUrl = documentHtmL.getElementById('siteUrl');
var btnAdd = documentHtmL.getElementById('btnAdd')
var alertName = documentHtmL.getElementById('alertName')
var alerturl = documentHtmL.getElementById('alerturl')
var  bookcontainer=[];
//--------------start
if(getlocal() !== null){
bookcontainer = getlocal();
displaydata()}

//---------------events
btnAdd.onclick = function(){
    addbook()
}

//----------------functions
function addbook(){
    if(namevalidation()=== true & urlvalidation()===true){
var book ={
    name:siteName.value,
    url:siteUrl.value
}
bookcontainer.push(book)
// console.log(bookcontainer);
namevalidation();
displaydata();
setlocal();
resetform();


}
}
function displaydata(){
    var tabledata ='';
for(var i=0; i<bookcontainer.length;i++){
  tabledata += `                        <tr>
  <td>${bookcontainer[i].name}</td>
  <td><p class="small text-truncate" style="max-width: 300px;">${bookcontainer[i].url}</p></td>
  <td>
      <div class="hstack gap-3 justify-content-center">
          <a href="${bookcontainer[i].url}" target="_blank" class="btn btn-outline-dark">
              <i class="fa-regular fa-eye"></i>
          </a>
          <button class="btn btn-outline-danger" onclick="deletedata(${i})">
              <i class="fa-solid fa-trash"></i>
          </button>
      </div>
  </td>
</tr>`
}
documentHtmL.getElementById('tableBody').innerHTML=tabledata;
}

function deletedata(index){
    bookcontainer.splice(index,1);
    setlocal()
    displaydata()
// console.log(bookcontainer);

}
function resetform(){
    siteName.value=''
    siteUrl.value=''
}
function setlocal(){
    localStorage.setItem("bookscontain",JSON.stringify(bookcontainer))
}
function getlocal(){
   return JSON.parse(localStorage.getItem("bookscontain"))
}

//----------------validation
function namevalidation(){
    if(siteName.value ===''){
alertName.classList.remove('d-none')
return false;
    }
    else{
        alertName.classList.add('d-none')  
        return true;
    }
}
function urlvalidation(){
    if(siteUrl.value ===''){
alerturl.classList.remove('d-none')
return false;
    }
    else{
        alerturl.classList.add('d-none')  
        return true;
    }
}