// ----------------------------------------------------------
// using waypoints library to reveal the newsletter signup 
// block when you scroll to that section
// 
// ----------------------------------------------------------

RevealOnScroll($(".newsletter__dark-background"), "55%");


function RevealOnScroll(els, offset) {
        
        var itemsToReveal = els;
        var offsetPercentage = offset;
        hideInitially();
        createWaypoints();
   

    function hideInitially() {
        itemsToReveal.addClass("waypoints");
    } 

    function createWaypoints() {        
    
            var waypoint = new Waypoint({
                element: document.getElementById('newsletter-section'),
                handler: function() {
                    itemsToReveal.addClass("waypoints__show-item");
                },
                offset: offsetPercentage
                });
       
    }//end createWaypoints
 }
