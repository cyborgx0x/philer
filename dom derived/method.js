async function getData(source) {

    let data = await fetch(source).then((res)=>{
        return res.json()
    }).then((data)=>{
        return data
    })
    return data
}

function build_child(context, element, className) {
    let e = document.createElement(element)
    e.className = className
    context.appendChild(e)
    return e
}

function build_main(element) {
    let e = document.createElement(element)
    return e
}

function createClass(...properties){  
    return class {  
        constructor(...values){  
            for(const [index, property] of properties.entries()){  
                this[property] = values[index];  
            }  
        }  
    }  
}
const UserModel = createClass('username', 'passwordHash', 'email', 'age');  
const user = new UserModel('SeanF', 'hash_goes_here', 'example@email.com', 24);  
console.log(`${user.username}, age ${user.age}`);  

function render_post({type, data}, context) {
    console.log("now rendering")
    switch(type) {
        case "paragraph":
            let p = new Base ({element:"p", textContent:data.text })
            return p.create(context)
    }
}