const API_KEY = "O6kcl0Md0t8JhJz4cy3i8r7UHNK-ZqsJPpRt81pxBSc";
const displayPhoto = document.getElementById("displayPhoto");
const input = document.getElementById("input");
const searchBtn = document.getElementById("searchBtn");
let pageNum = 0;
function DeletePrevImg(){
    displayPhoto.innerHTML = "";
}

function MorePage(){
    return pageNum++;
}

window.addEventListener("load" , function(){
    LoadImgData();
})

function LoadImgData(){
    DeletePrevImg()
    var api = `https://api.unsplash.com/search/photos/?query=${input.value}&per_page=30&page=${MorePage()-1}&client_id=${API_KEY}`
    fetch(api)
    .then(res =>{
        if(res.ok)
        {
            return res.json();
        }
        else{
            alert("Error "+ res.status)
        }
    })
    .then(data =>{
        DisplayData(data)
    })
}

function DisplayData(data){
    for (let i = 0; i < data.results.length; i++) {
        AddPhoto(data.results[i].urls.regular);
    }
}

function AddPhoto(link){
    var img = document.createElement('img');
    img.src = link;
    document.getElementById("displayPhoto").appendChild(img);
}