var main=document.getElementById("main");
    var s ="";
    let arr=["https://i.pinimg.com/736x/a4/97/c1/a497c1fdc33efb01677165b1e32f0cf4.jpg","https://i.pinimg.com/736x/d9/63/c3/d963c31da08a641905c02618c50b5132.jpg","https://i.pinimg.com/736x/1d/e4/78/1de478259d521d94f73a86994e0d128e.jpg","https://i.pinimg.com/736x/5e/5f/11/5e5f1131c07256c1c8bf54aeff52d183.jpg","https://i.pinimg.com/736x/46/c1/48/46c148c7983548e198894e75bb28c29a.jpg","https://i.pinimg.com/736x/0b/7b/d6/0b7bd690ba2179c761c870bcda4f84a2.jpg","https://i.pinimg.com/736x/41/49/c5/4149c566a8edb6e8f72d965863d8c936.jpg","https://i.pinimg.com/736x/2a/3d/83/2a3d83539040788ab36beb5f31e8b6dc.jpg","https://i.pinimg.com/736x/b1/1f/4d/b11f4d70197fb476bc0e329bd1c38ed4.jpg"];

for(let i=1;i<=48;i++){
    let r=Math.floor(Math.random()*arr.length)
    s+=`<div class="card">
        <img src=${arr[r]}>
    </div>`
}
main.innerHTML=s;