let mainContent = document.getElementById('mainContent')
let headers = mainContent.querySelectorAll("h2")
let toc = document.getElementById('toc')
for (header of headers) {
    header.id = string_to_slug(header.outerText)
    let link = document.createElement('a')
    link.href = "#"+ header.id 
    link.textContent = header.outerText
    link.className = "dropdown-item"
    toc.appendChild(link)
}

function slugGen(input) {
    let string = String(input)
    return string.replace(/[#_]/g, "_")
}
console.log(slugGen("hello world?"))


function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}