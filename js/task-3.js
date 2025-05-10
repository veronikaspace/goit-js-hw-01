function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
    console.log(totalWidth)
    return getElementWidth;
}

getElementWidth("50px", "8px", "4px"); 
getElementWidth("60px", "12px", "8.5px"); 
getElementWidth("200px", "0px", "0px"); 
