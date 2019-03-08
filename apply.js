var classExtentionTrigger, fakeAClass, wrapper_modal, html, utils = window.optimizely.get('utils');
    fakeAClass = '.'+extension.modalTriggerClass;
    classExtentionTrigger = extension.modalTriggerClass.toString();

    utils.waitForElement(fakeAClass).then( function( elem ) {
        /* Insert HTML space holder for the Modal */ 
        document.querySelector('body').insertAdjacentHTML('beforeend','<div class="wrapper-details-optly-modal"></div>');
        document.querySelector('body').addEventListener("click", function(e) {
        /* Open Modal*/
        if(e.target.classList.contains(classExtentionTrigger)){
            /* Append HTML to Modal */ 
            html = extension.$render({ extension: extension });
            wrapper_modal = document.querySelector('.wrapper-details-optly-modal');
            wrapper_modal.innerHTML = html;
            if( location.pathname == "/checkout/order.do") {
                wrapper_modal.className += "pos-fixed-for-popup";
            }
        }
        /* Close Modal */  
        if(e.target.classList.contains('svg-close-icon') || e.target.classList.contains('modal--close-icon')){
            /* Clean Modal content*/ 
            wrapper_modal.innerHTML = '';
            }
        },false);
    });