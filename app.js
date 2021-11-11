//  GLOBAL VARIABLES
let UsersContainer = document.querySelector('.UsersContainer')
let UserBtn = document.querySelector('.UserBtn')
let User = document.querySelector('.User')


// EVENT LISTENERS

    window.addEventListener('DOMContentLoaded', Loadjson)
    
    UsersContainer.addEventListener('click', ShowPost)


//JSON LOADING FUNCTION

function Loadjson(){

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {   

        let html = ''     
            data.map(PieceOfData => {
            html+= `<div class="User"> <h1 class="UserId">User: ${PieceOfData.id} </h1>
            <h3 class="UserName"><span class="UserNameTitle">USERNAME: &nbsp&nbsp</span>${PieceOfData.name}</h3><button class="UserBtn">Click to see post</button>
            <p class="UserBody">${PieceOfData.body}</p> 
        </div>`
    

    })
    //PUTTING THE DATA ONTO THE SCREEN
    UsersContainer.innerHTML = html
})
}
function ShowPost(e){
    if(e.target.classList.contains('UserBtn')){
        //GETTING THE NAME OF THE ITEM THE USER SELECTED
        let User = e.target.parentElement

        let SelectedBodyClass = User.querySelector('.UserBody')

        let SelectedUserBtn = User.querySelector('.UserBtn')

        let SelectedUserName = User.querySelector('.UserName').textContent

        let SelectedBody = User.querySelector('.UserBody').textContent

        //TOGGLING THE BODY WHEN THE USER HITS THE BUTTON AND ALSO CHANGING THE STYLING
        SelectedBodyClass.classList.toggle('Show')
        SelectedUserBtn.textContent == 'Click to see post' ? e.target.textContent = 'Hide post': e.target.textContent = 'Click to see post';
        
        if(SelectedUserBtn.textContent !== 'Click to see post'){
            SelectedUserBtn.style.backgroundColor = 'red'
        }
        else{
            SelectedUserBtn.style.backgroundColor = 'rgb(0, 81, 255)'
        }


    }
}
