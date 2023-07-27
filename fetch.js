let arr=[]
async function fetch1()
{
    await fetch('http://localhost:3000/fetch1',{
        method:"get",
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.status)
        arr=data.data
        console.log(arr)
    })
}
fetch1()

arr.forEach((data)={

})