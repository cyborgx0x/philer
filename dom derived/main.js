let data = getData('/db.json')
data.then((res)=>{
    localStorage.setItem('data', JSON.stringify(res))
    res.forEach(element => {
        let node = new Collection(element)
        context = document.getElementById('mainContent')
        let card = build_child(context,'div',"card")
        // let title = build_child(card,'div',"card-title")
        let body = build_child(card,'div',"card-body")
        let post  = build_child(body,"div", "markdown")
        node.build_cover(post)
        node.build_header(post)
        node.build_content(post)
    });
})

// let data = [
//     {
//         element: "div",
//         textContent: "",
//         className: "markdown"
//     },
//     {
//         element: "h1",
//         textContent: "Try with the new DOM lib",
//         className: ""
//     },
//     {
//         element: "p",
//         textContent: "This is text content"
//     },
//     {
//         element: "img",
//         textContent: "Minh họa",
//         src:"https://i.pinimg.com/736x/38/17/20/3817203c0c413032901f9f5333bfe53b.jpg"
//     },
// ]
// let context = document.getElementById('mainContent')
// for ([key,value] of data.entries()) {
//     let innode = new Node(value)
//     innode.create(context)
// }
