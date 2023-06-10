async function getData(source) {

    let data = await fetch(source).then((res)=>{
        return res.json()
    }).then((data)=>{
        return data
    })
    return data
}
let data = getData('/indexing.json')
data.then((res)=>{
    localStorage.setItem('data', JSON.stringify(res))
    console.log(res)
})