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
    cart = JSON.parse(localStorage.getItem('cart')) || []
    showbook(cart)
    showdata(cart)
}


function addo() {
    let ids = this.id.slice(1)
    let newitem={}
    clsa=document.getElementById(`a${ids}`).getAttribute('class') 
    if(clsa == 'btn btn-default'){
        document.getElementById(`a${ids}`).setAttribute('class','btn btn-default d-none')
        document.getElementById(`r${ids}`).setAttribute('class','btn btn-default')
        let img= document.getElementById(`i${ids}`).getAttribute('href') 
        let nam= document.getElementById(`n${ids}`).innerHTML
        
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
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    showdata(cart)
}

function showbook(cart) {
    cart.forEach(function(element) {
        
        for(key in element){
           
            if(cart != null){
                document.getElementById(`a${element['id']}`).setAttribute('class','btn btn-default d-none')
                document.getElementById(`r${element['id']}`).setAttribute('class','btn btn-default')
                
            }
            else{
                document.getElementById(`a${element['id']}`).setAttribute('class','btn btn-default ')
                document.getElementById(`r${element['id']}`).setAttribute('class','btn btn-default d-none')
                
            }
        }
    })
    // addo()
    
}

function showdata(cart) {
   let cl = document.getElementById('collapseExample')
//    console.log(cl)

   var html=''
   cart.forEach(function(element,index) {
        html+=`
        <div class="card card-body" id="">
        <a href="${element['img']}">${element['name']}</a>      
        </div>`
        
  
    cl.innerHTML= html
})
  
}