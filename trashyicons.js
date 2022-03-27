/*
  THIS ICON PACK REQUIRES jQUERY. IT WILL NOT WORK WITHOUT IT.
*/

tiIcons = ["exclamation"];

window.addEventListener('load', function() {
    if (window.jQuery) {  
        // jQuery is loaded  
    } else {
        // jQuery is not loaded
        console.log("")
    }

    $(".ti-exclamation").html('<svg xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" style="font-size: 999px;" width="16" height="16" viewBox="0 0 16 16" version="1.1" id="svg5" inkscape:version="1.1.2 (b8e25be833, 2022-02-05)" sodipodi:docname="exclamation.svg"><sodipodi:namedview xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" id="namedview7" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:pageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:document-units="px" showgrid="true" inkscape:zoom="24.4375" inkscape:cx="1.8209719" inkscape:cy="11.232737" inkscape:window-width="1920" inkscape:window-height="986" inkscape:window-x="-11" inkscape:window-y="-11" inkscape:window-maximized="1" inkscape:current-layer="layer1"><inkscape:grid type="xygrid" id="grid9"/></sodipodi:namedview><defs id="defs2"/><g xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1"><rect style="fill:#000000" id="rect329" width="0" height="7" x="8" y="2"/><ellipse style="fill:#000000" id="path563" cx="8" cy="12.5" rx="2" ry="1.5"/><rect style="fill:none" id="rect1899" width="3" height="7" x="6" y="3"/><rect style="fill:#000000" id="rect1945" width="4" height="8" x="6" y="2"/></g></svg>');

})
