import Element from './element.js';


const buttonAddItem = "dynamic-add-element";

/* 
 * It's a constant that is used to create the id of the container element.
 * UseFull for get number of current items when be deleted 
 */
const splitChar = "-";
/**
 * It's a constant that is used to create the id of the container element.
 * UseFull for get number of current items when be deleted
 */

/* It creates a form with a button to add a new item. */
export default class Model {

    /**
     * This function initializes the array of elements and the HTML elements.
     * @param idAllContainer - the id of the container that will contain all the elements
     * @param idContainerElement - the id of the container element
     * @param arrayElement - an array of objects that contain the data for each element
     */
    constructor(idAllContainer, idContainerElement, arrayElement) {
        this.indexContainerElement = 0;
        this.idAllContainer = idAllContainer;

        this.idContainerElement = idContainerElement;
        this.arrayElement = arrayElement;
        this.initializeArrayElement();
        this.initializeElementHtml();
    }

    /**
     * It creates a button and a div, and appends them to the form.
     */
    initializeElementHtml() {
        let elementButton = document.createElement("button");
        elementButton.innerHTML = "Ajouter une option";
        elementButton.id = buttonAddItem;
        $("form").append(elementButton.outerHTML + " " +
            '<div id="' + this.idAllContainer + '"></div>');
    }

    /**
     * It creates a button element, sets the text of the button to "Supprimé choix", and then adds the
     * button to the array.
     */
    initializeArrayElement() {
        let elementButton = new Element("button");
        elementButton.setTextElement("Supprimé choix");

        this.addElement(elementButton);
    }

    /**
     * The function sets the arrayElement variable to the value of the arrayElement parameter.
     * @param arrayElement - The array element to be set.
     */
    setArrayElement(arrayElement) {
        this.arrayElement = arrayElement;
    }

    /**
     * The function addElement() takes an element as a parameter and adds it to the arrayElement array.
     * @param element - The element to be added to the array.
     */
    addElement(element) {
        this.arrayElement.push(element);
    }

    /**
     * It takes an element as an argument and removes it from the array.
     * @param element - The element to be removed from the array.
     */
    removeElement(element) {
        const indexOfElement = this.arrayElement.indexOf(element);
        this.arrayElement.splice(indexOfElement, 1);
    }

    /**
     * This function returns the id of the button that adds an item to the list.
     * @returns The id of the button.
     */
    static getIdButtonItemAdd() {
        return buttonAddItem;
    }

    /**
     * It returns the value of the variable idContainerElements.
     * @returns The idContainerElements variable is being returned.
     */
    getIdContainerElement() {
        return this.idContainerElement;
    }


    /**
     * It takes an array of objects, each of which has a getElementHtml() method that returns a string
     * of HTML. It then appends each of those strings to a div, and then appends that div to another
     * div.
     * 
     * I'm trying to figure out how to do this in React. I'm not sure how to do it. I've tried a few
     * things, but I'm not sure how to do it.
     * 
     * Here's what I've tried:
     * 
     * 1) I tried to create a component that takes an array of objects, each of which has a
     * getElementHtml() method that returns a string of HTML. I then tried to append each of those
     * strings to a div, and then append that div to another div.
     * 
     * 2) I tried to create a component that takes an array of objects, each of which has a
     * getElementHtml() method that returns a string of
     */
    createItemInForm() {
        const idContainerElement = this.idContainerElement + this.indexContainerElement;
        $("#" + this.idAllContainer).append('<div id="' + idContainerElement + '"></div>');

        let outerHtml = "";
        for (let element of this.arrayElement) {
            if (element.name !== "") {
                const name = element.getElementHtml().replace("[???]", '[' + this.indexContainerElement + ']');
                outerHtml += name;
            } else {
                outerHtml += " " + element.getElementHtml();
            }
        }

        $("#" + idContainerElement).append(outerHtml);
        this.indexContainerElement++;
    }


    /**
     * It deletes an element from a form and renumbers the remaining elements.
     * @param event - the event that triggered the function
     * @param placeDeleteNumber - the number of the place where the element is deleted
     */
    deleteItemInForm(event, placeDeleteNumber) {
        let elementParent = event.target.parentElement;
        let elementContainerParent = elementParent.parentElement.childNodes;
        const elementSplit = elementParent.id.split(splitChar);
        const elementParentId = elementSplit[elementSplit.length - 1];
        elementParent.remove();

        let itemTmp = 0;
        for (let child of elementContainerParent) {
            const elementSplitChild = child.id.split(splitChar);
            const childElementId = elementSplitChild[elementSplitChild.length - 1];
            if (parseInt(childElementId, 10) > parseInt(elementParentId, 10)) {
                this.updateItem(child, itemTmp, placeDeleteNumber);
                child.id = (idContainerElements + itemTmp);
            }
            itemTmp++;
        }
        this.indexContainerElement--;
    }

    /**
     * It takes an element, a number, and a place, and then it updates the element's child nodes by
     * replacing the number in the name of the child nodes with the number and place.
     * @param elementToUpdate - the element to update
     * @param numeroElement - the number of the element to update
     * @param placeDeleteNumber - the number of the element to delete
     */
    updateItem(elementToUpdate, numeroElement, placeDeleteNumber) {
        let nodeChild = elementToUpdate.childNodes;
        let lengthAllNodes = nodeChild.length;
        for (let i = 0; i < lengthAllNodes; i++) {
            let node = nodeChild[i];
            if (this.isElementContainIndex(node.name)) {
                let nameReplace = this.replaceDigitInText(node.name, numeroElement, placeDeleteNumber);
                nodeChild[i].name = nameReplace
            }
        }
    }

    /**
     * It takes a string, a digit, and a number, and replaces the nth digit in the string with the
     * given digit.
     * 
     * Here's a longer explanation:
     * 
     * The function takes three parameters:
     * 
     * The function searches the text for a digit. If it finds one, it replaces it with the
     * replacementDigit. It does this numberElementToModify times.
     * 
     * For example, if the text is "abc[1]def[2]ghi[3]", the replacementDigit is "9", and the
     * numberElementToModify is 2, the function returns "abc[1]def[9]ghi[3]".
     * 
     * If the text is "abc[1]def[
     * @param text - the text to modify
     * @param replacementDigit - the digit to replace
     * @param numberElementToModify - The number of the element to modify.
     * @returns The text with the replacement digit.
     */
    replaceDigitInText(text, replacementDigit, numberElementToModify) {
        var finalText = "";
        var findedElementModify = 0;
        let i = 0;
        loopCheck:
            while (text.length > i && findedElementModify != numberElementToModify) {
                if (text[i] === '[') {
                    i++;
                    const indexStart = i;
                    while (text.length > i && text[i] != ']') {
                        if (!this.isElementDigit(text[i])) {
                            continue loopCheck;
                        }
                        i++;
                    }
                    findedElementModify++;
                    if (findedElementModify == numberElementToModify) {
                        return text.substring(0, indexStart) + replacementDigit + text.substring(i);
                    }
                }
                i++;
            }
        return finalText;
    }

    /**
     * If the name of the element contains a number in square brackets, return true, otherwise return
     * false.
     * @param nameElement - The name of the element you want to check.
     * @returns a boolean value.
     */
    isElementContainIndex(nameElement) {
        const regexCheckNumberWithSquare = /\[\d+\]/;
        return regexCheckNumberWithSquare.test(nameElement);
    }

    /**
     * It returns true if the element is a digit, false otherwise
     * @param element - The element to be tested.
     * @returns a boolean value.
     */
    isElementDigit(element) {
        return (/^\d+$/).test(element);
    }

}