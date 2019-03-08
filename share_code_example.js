var optlyModal, optlyModalContent, legal_text_update;
    legal_text_update = '<b>THIS IS A LEGAL UPDATE</b><p style="color:green">Overwriting legal text succeed!</p>';

function registerClickToUpdateLegal(textToUpdate){
  	var utils;
   		utils = window.optimizely.get('utils');
    utils.waitForElement('.savings_calc_test-about-offer').then(function(){
    /* When elem is ready register click */    
     	myClick(textToUpdate);
    });
  	function myClick(textToUpdate){
  		document.querySelector('.savings_calc_test-about-offer').addEventListener('click', function(e){
    	/* Update legal text */
        setTimeout(function(){
          optlyModal = document.querySelector('.wrapper-details-optly-modal .details-optly-modal');
          if(optlyModal !== null){
              optlyModalContent = optlyModal.querySelector('div:nth-child(2)');
               optlyModalContent.innerHTML = textToUpdate;
          }
        },25);
    },false);
  }
}
registerClickToUpdateLegal(legal_text_update);
