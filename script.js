 window.onload=function(){
    let x = document.createElement("div")
    x.setAttribute("id","div")
    document.body.appendChild(x)
    let i=10
    let a=(f)=>{
        setTimeout(()=>{
            if(i>=1){
                x.classList.add("container","col-sm-12","text-center","font","mt-5")
                x.innerText=i
            }
            if(i==0){
                x.classList.add("container","col-sm-12","text-center","fontdisp")
                x.innerText="Happy Independence Day"
            }
            i--
            f(a)
        },1000)
    }
    let b=(temp)=>{
        temp(b)
    }
    a(b)
}