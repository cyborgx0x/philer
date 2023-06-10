class Base {
    constructor({element,textContent,className, src}) {
        this.element = element;
        this.textContent = textContent;
        this.className = className;
        this.src = src
    }
    create(context) {
        /**
        * take a html node and return a html node
        */
        let e = document.createElement(this.element)
        e.textContent = this.textContent
        e.className = this.className
        e.src = this.src
        context.appendChild(e)
        return e
    }
    
}

class Image extends Base {
    constructor({element, className, src, alt}) {
        super({element, className, src, alt})
        this.alt = alt
    }
    build() {
        console.log(this)
    }
    create(context) {
        // console.log("this method executed")
        let e = document.createElement(this.element)
        e.className = this.className
        e.src = this.src
        e.alt = this.alt
        context.appendChild(e)
        return context
    }
}

class Post {
    constructor({time, blocks, version}) {
        this.time = time
        this.blocks = blocks
        this.version  = version
    }
    build_post(context) {
        console.log(this.blocks)
        this.blocks.forEach((index) => {
            render_post(index, context)
        })
    }
}
class Collection {
    constructor({id,name,content, cover, description}) {
      this.id = id
      this.name = name
      this.cover = cover
      this.content = content
      this.description = description
    }
    build_cover(context) {
        let cover = {
            element: "img",
            src: this.cover,
            className:"card-img-top"
        }
        let node = new Image(cover)
        node.create(context)
        // console.log(node)
        return node
    }
    build_header(context) {
        let header = {
            element: "h1",
            textContent:this.name,
            className: "header"
        }
        let node = new Base(header)
        node.create(context)
        return node
    }
    build_content (context) {
        let item = new Post(this.content)
        item.build_post(context)
    }
    set updateContent(newcontent){
        this.content = newcontent
    }
    set updateName(newname){
        this.name = newname
    }
}

class Order{
    constructor(...structure){
        this.structure = structure
    }
}