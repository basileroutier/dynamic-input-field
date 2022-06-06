/* It creates an element with the given parameters. */
export default class Element {
    /**
     * This function creates a new element and assigns it to the element property of the object.
     * @param elementName - the type of element you want to create (e.g. input, button, div, etc.)
     * @param [type] - type of input (text, password, etc.)
     * @param [name] - the name of the element
     * @param [id] - the id of the element
     * @param [placeholder] - The text that appears in the input field when it's empty.
     * @param [hidden=null] - if true, the element will be hidden.
     * @param [value] - the value of the input
     * @param [element=null] - the element to be created
     */
    constructor(elementName, type = "", name = "", id = "", placeholder = "", hidden = null, value = "", element = null) {
        this.elementName = elementName;
        this.type = type;
        this.name = name;
        this.id = id;
        this.placeholder = placeholder;
        this.hidden = hidden;
        this.value = value;
        this.numberItem = 0;
        if (element !== null) {
            this.element = element;
        } else {
            this.element;
            this.createElement();
        }
    }

    setName(name) {
        this.name = name;
    }

    setPlaceHolder(placeholder) {
        this.placeholder = placeholder;
    }

    setHidden(hidden) {
        this.hidden = hidden;
    }

    /**
     * The function changes the value of the hidden variable from true to false or vice versa.
     */
    changeHiddenMode() {
        this.hidden = !this.hidden;
    }

    setValue(value) {
        this.value = value;
    }

    setItem(numberItem) {
        this.numberItem = numberItem;
    }

    /**
     * It returns the outerHTML of the element.
     * @returns The outerHTML of the element.
     */
    getElementHtml() {
        return this.element.outerHTML;
    }

    /**
     * This function sets the text of the element to the text passed in.
     * @param text - The text to be displayed in the text element.
     */
    setTextElement(text) {
        this.element.innerHTML = text;
    }

    /**
     * If the value of the property is not an empty string, then set the attribute of the element to
     * the value of the property.
     */
    createElement() {
        let element = document.createElement(this.elementName);
        if (this.type !== "") {
            element.setAttribute("type", this.type);
        }
        if (this.name !== "") {
            element.setAttribute("name", this.name);
        }
        if (this.id !== "") {
            element.setAttribute("id", this.id);
        }
        if (this.placeholder !== "") {
            element.setAttribute("placeholder", this.placeholder);
        }
        if (this.hidden !== null) {
            element.setAttribute("hidden", this.hidden);
        }
        if (this.value !== "") {
            element.setAttribute("value", this.value);
        }
        this.element = element;
    }



}