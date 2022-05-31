This is a small extension to modify the webhosted version of f/sn to act closer to the actual visual novel by making non-focused text transparent and adding a way to click to progress.

To install:
 - Download VNmod.zip
 - Extract the files to a safe directory
 - In chrome, browse to Chrome://extension
 - Toggle on "Developer Mode" in the top right
 - Select "Load Unpacked" in the top left
 - Select the folder that was extracted
 - Browse to the site and the changes should work



Dev Notes below:

Templated from the guide at:
https://www.lateral.io/resources-blog/create-chrome-extension-modify-websites-html-css



the opacity is on the divs inside div.text-area
Opacity is removed with the "focused" parameter on the div, scrolling changes which div has the parameter active
The "keydown" event listener has the fuctionality I want to add to "onclick" inside the relevant div.

Goals:
    Make non-focused text fully transparent
    Add onClick functionality

Packaging:
    Chrome:
        https://groups.google.com/a/chromium.org/g/chromium-apps/c/F4W0bCmYryw?pli=1
