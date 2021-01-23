class createElement {

    constructor(classes, id, style, name = '') {
        this.classes = classes
        this.id = id
        this.style = style
        this.name = name
    }

    // dive
    divOpen() {
        return "<div  class='" + this.classes + "'  id='" + this.id + "'  style='" + this.style + "'>"
    }

    divClose() {
        return "</div>"
    }

    //  p element
    pOpen() {
        return "<p  class='" + this.classes + "'  id='" + this.id + "'  style='" + this.style + "'></p>"
    }

    pClose() {
        return "</p>"
    }

    // span element
    spanOpen() {
        return "<span  class='" + this.classes + "'  id='" + this.id + "'  style='" + this.style + "'>"
    }

    spanClose() {
        return "</span>"
    }

    // ul element
    ulOpen() {
        return "<ul  class='" + this.classes + "'  id='" + this.id + "'  style='" + this.style + "'>"
    }

    ulClose() {
        return " </ul>"
    }

    // li element
    liOpen() {
        return "<li  class='" + this.classes + "'  id='" + this.id + "'  style='" + this.style + "'>"
    }

    liClose() {
        return "</li>"
    }

    // i element
    iOpen()
    {
        return "<i  class='" + this.classes + "'  id='" + this.id + "'  style='" + this.style + "'>"
    }

    iClose()
    {
        return "</i>"
    }

}
