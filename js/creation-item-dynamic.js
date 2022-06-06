/*!
  Dynamic input automatically created
  Without Jquery but use Cash (alternative of Jquery)
  version 0.0.1 (June, 2022)

  IT WOULD NOT WORK WITHOUT ANY LIVE SERVER

  Copyright (c) 2018-2022 Basile Routier
  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/

/*
Mandatory
*/
import Model from './model/model.js';
import Element from './model/element.js';


/**
 * Element that will be display everytime when press button to create an element
 */
var arrayElement = new Array();
var elementInput = new Element("input", "text", "truc[bidule][chouette][???][id]");
arrayElement.push(elementInput);


var model = new Model("container-items-added", "items", arrayElement);

/**
 * Event click on button
 */
$("#" + Model.getIdButtonItemAdd()).on("click", function (event) {
    model.createItemInForm();
});

/**
 * Event click on delete button
 */
$("div[id*=" + (model.getIdContainerElement()) + "]").on('click', 'button', function (event) {
    model.deleteItemInForm(event, 1);
});

/**
 * Form test
 * @param {*} e 
 */
formElement.onsubmit = async (e) => {
    e.preventDefault();
};