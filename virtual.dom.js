/*

DOM manipulation is slower, process that browser follows after that. 
Which is layout calculations and pixel painting, every time after every DOM update.

REACT works in batch mode in terms of updating,
 it updates the virtual DOM every time but updates the realDOM after some time. 
 In this way a bulk of DOM updates goes at once, 
 so the layout calculations and repainting cost gets reduced. In this way Virtual DOM makes things better and faster. This is usually less than 200ms so that our eyes don't comprehend the UI change.

so react virtual dom:

1 diffing algorithem to find out the change 
2 batch update DOM 

*/
