'use strict';

angular.module('angularDragAppApp')
  .directive('section', function () {

    return {
        restrict: 'E',
        scope: true,
        template: '<div id="sec-{{$index + 1}}" class="section">'
				  + '	<div draggable="{{section.drag}}" class="handle-section">{{section.title}}</div>'
				  + '</div>',

        link: function(scope, element, attrs) {

			var objSectionDrag = (function ($) {

			    //private 
				var pos = 0;
				var posInit = 0;
				var posEnd = 0;
				var currentSection = null;
				var nextTargetDown = null;
				var nextTargetUp = null;

				function dragStart(draggieInstance, event, pointer){

				  posInit = draggieInstance.position.y;
				  currentSection = $(event.srcElement.offsetParent).parent();

				}

				function dragMove(draggieInstance, event, pointer){

				  currentSection.css('background', '#f2dede');

				  if (pos < draggieInstance.position.y) {
				    //go down
				    if (nextTargetUp != null) {nextTargetUp.css('background', 'white');};
				    nextTargetDown = currentSection.next();

				    if (nextTargetDown.children(0).hasClass('section')) {
				      nextTargetDown.css('background', '#dff0d8');
				    }

				  }else if (pos > draggieInstance.position.y) {
				    //go up
				    if (nextTargetDown != null) {nextTargetDown.css('background', 'white');};
				    nextTargetUp = currentSection.prev();

				    if (nextTargetUp.children(0).hasClass('section')) {
				      nextTargetUp.css('background', '#dff0d8');
				    }

				  };

				  pos = draggieInstance.position.y;

				}

				function dragEnd(draggieInstance, event, pointer){

				  posEnd = draggieInstance.position.y;
				  var elClone1, elClone2;

				  if (posInit > posEnd) {
				    //go up
				    var aboveSection = currentSection.prev();

				    if (aboveSection != null) {

				      currentSection.animate({'top': '-='+(currentSection.position().top-aboveSection.position().top)+'px' }, 'slow', function(){

				        elClone1 = currentSection.clone().removeAttr( "style" );//css('top','0px');
				        elClone1.insertBefore(aboveSection);
				        currentSection.attr('id','_cloned1');
				        $('#_cloned1').remove();
				        objSectionDrag.attachSectionDrag(elClone1, 'y');

				      });

				      aboveSection.animate({'top': '+='+((currentSection.position().top-aboveSection.position().top)-pos)+'px' }, 'slow', function(){

				        elClone2 = aboveSection.clone().removeAttr( "style" );//.css('top','0px');
				        elClone2.insertAfter(elClone1);
				        aboveSection.attr('id','_cloned2');
				        $('#_cloned2').remove();
				        objSectionDrag.attachSectionDrag(elClone2, 'y');

				      });

				    }

				    console.log(aboveSection);

				  }else if (posInit < posEnd) {
				    // go down
				    var belowSection = currentSection.next();

				    if (belowSection != null) {

				      currentSection.animate({'top': '+='+(belowSection.position().top-currentSection.position().top)+'px' }, 'slow', function(){

				        elClone1 = currentSection.clone().removeAttr( "style" );//css('top','0px');
				        elClone1.insertAfter(belowSection);
				        currentSection.attr('id','_cloned1');
				        $('#_cloned1').remove();
				        objSectionDrag.attachSectionDrag(elClone1, 'y');

				      });

				      belowSection.animate({'top': '-='+((belowSection.position().top-currentSection.position().top)+pos)+'px' }, 'slow', function(){

				        elClone2 = belowSection.clone().removeAttr( "style" );//.css('top','0px');
				        elClone2.insertBefore(elClone1);
				        belowSection.attr('id','_cloned2');
				        $('#_cloned2').remove();
				        objSectionDrag.attachSectionDrag(elClone2, 'y');

				      });

				    }

				  }

				}


			    // public
			    return {

			        container: '#template',
					attachSectionDrag: function(element, axis){

						var dragEl = $(element).get(0);

						var draggie = new Draggabilly( dragEl, {
							handle: '.handle-section',
							containment: this.container,
							axis: axis
						});

						draggie.on('dragStart', dragStart);
						draggie.on('dragMove', dragMove);
						draggie.on('dragEnd', dragEnd);

						return draggie;

					}

			    };

			}(jQuery));

			element.ready(function(){
				objSectionDrag.attachSectionDrag(element, 'y');
			});

        }
    }


  });
