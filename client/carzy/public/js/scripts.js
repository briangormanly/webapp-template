/**
 * Carzy - The Car Enthusiast's Companion
 * © 2023 Brian Gormanly
 *
 */

/*
 * Menu management for carzy 
 */

window.addEventListener( "load", () => {
    
} );


let sideBarStatus = true;
function toggleSidebar() {
    if ( !sideBarStatus ) {
        document.getElementById( "carzySideBar" ).style.width = "250px";
        document.body.style.marginLeft = "250px";
    }
    else {
        document.getElementById( "carzySideBar" ).style.width = "85px";
        if( window.innerWidth > 992 ) {
            document.body.style.marginLeft = "85px";
        }
    }
    sideBarStatus = !sideBarStatus;
}

// add events for toggle sidebar
if( document.getElementById( "carzySideBar" ) ) {
    toggleSidebar();
    document.getElementById( "carzySideBar" ).addEventListener( "mouseover", toggleSidebar );
    document.getElementById( "carzySideBar" ).addEventListener( "mouseout", toggleSidebar );
}


