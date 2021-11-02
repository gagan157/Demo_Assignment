console.log('work')


let getid = document.querySelectorAll('.btncart');
getid.forEach(function(element) {     
    
        let alld = element.children
        Array.from(alld).forEach(function (element) {
            element.addEventListener('click',addo)
        
        })
    
    
})

if(localStorage.getItem('cart')==null){
    var cart=[]
}
else{
    cart = JSON.parse(localStorage.getItem('cart'))
    showbook(cart)
    showdata(cart)
}

//add in bookmark
function addo() {
    let ids = this.id.slice(1)
    let newitem={}
    let clsa = document.getElementById(`a${ids}`).getAttribute('class')
    console.log(clsa) 
    if(clsa == 'btn btn-default'){
        document.getElementById(`a${ids}`).setAttribute('class','btn btn-default d-none')
        document.getElementById(`r${ids}`).setAttribute('class','btn btn-default')
        let img= document.getElementById(`i${ids}`).getAttribute('href') 
        let nam= document.getElementById(`n${ids}`).innerHTML

        //show msg when you add bookmark
         

        var toastLiveExample = document.getElementById('liveToast1')        
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
       
        
        newitem={'id':ids,'name':nam,'img':img}
        cart.push(newitem)

        
       
    }
    else{
        document.getElementById(`a${ids}`).setAttribute('class','btn btn-default')
        document.getElementById(`r${ids}`).setAttribute('class','btn btn-default d-none')
        cart.forEach(function(element,index) {
            for(key in element){
               let dara = element[key]

                if(ids == dara){                
                    cart.splice(index, 1);
            }
                
            }
        })
         

        var toastLiveExample = document.getElementById('liveToast2')
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
        
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    showdata(cart)
}

// icon show off and on
function showbook(cart) {
    
    
    Array.from(cart).forEach(function(element) {
            
            
            if(cart != null){
                if(document.getElementById(`a${element['id']}`) != null){                              
                
                document.getElementById(`a${element['id']}`).setAttribute('class','btn btn-default d-none')
                document.getElementById(`r${element['id']}`).setAttribute('class','btn btn-default')

                }

            }
            else{

                document.getElementById(`a${element['id']}`).setAttribute('class','btn btn-default ')
                document.getElementById(`r${element['id']}`).setAttribute('class','btn btn-default d-none')
                
            }
        
        
    })
    showdata(cart)
    
}

function showdata(cart) {
   let cl = document.getElementById('collapseExample')
   var html=''
   cart.forEach(function(element,index) {
        html+=`        
        <div class="card card-body" id="">        
        <a href="${element['img']}">${element['name']}</a>      
        </div>`
   
})

cl.innerHTML = html



}


// side nav css ************************************************

document.getElementById('sbtnshow').addEventListener('click',shownav)
document.getElementById('sbtnhide').addEventListener('click',hidenav)

function shownav() {
    document.getElementById('sbtnshow').setAttribute('class','d-none')
    document.getElementById('sbtnhide').setAttribute('class','btn btn-default')
    document.getElementById('sidehid').style.width = '24%';
    // document.getElementById('sidehid').style.marginLeft = '-105%';    
    document.getElementById('sideexp').style.marginLeft = '-16vw';    
    document.getElementById('sideexp2').style.marginLeft = '-15vw';
    
    document.getElementById('sidehid').style.transition = "all 1s";
    document.getElementById('sideexp').style.transition = "all 1s";
    document.getElementById('sideexp2').style.transition = "all 1s";

  
    
    
}
function hidenav() {
    document.getElementById('sbtnshow').setAttribute('class','btn btn-default')
    document.getElementById('sbtnhide').setAttribute('class','d-none')
    document.getElementById('sidehid').style.width = '19vw';
    document.getElementById('sidehid').style.marginLeft = '0';
    document.getElementById('sideexp').style.marginLeft = '-14px';
    document.getElementById('sideexp2').style.marginLeft = '0';

    document.getElementById('sidehid').style.transition = "all 1s";
    document.getElementById('sideexp').style.transition = "all 1s";
    document.getElementById('sideexp2').style.transition = "all 1s";

    
}


//get info
let getinfo=document.getElementsByClassName('getinfo')


Array.from(getinfo).forEach(element => {
    // console.log(element)
    element.addEventListener('click',getinf)
    
});

function getinf() {
    let myid = this.id
    let name = document.getElementById(myid).children[1].children[0].innerHTML
    let Datetime = document.getElementById(myid).children[1].children[1].innerHTML    
    let filetype = name.split('.')[1]
    document.getElementById('infoname').innerHTML = name
    document.getElementById('infotype').innerHTML = filetype
    document.getElementById('infodate').innerHTML = Datetime
}


//click mousebutton


