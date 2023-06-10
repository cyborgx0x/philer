function create_box () {
    let root = document.getElementById("root")
    let wrapper = build_child(root, "div", "col-3")
    let editor = build_child(wrapper, "div", "editor")
    let box_title = build_child(editor, "div", "box_title")
    box_title.contentEditable = "true"
    box_title.textContent = "new box"
    let box_content = build_child(editor, "div", "editor")
    box_content.contentEditable = "true"
    box_content.textContent = "new content"

}
