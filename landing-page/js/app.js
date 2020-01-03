/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const allsections = document.querySelectorAll('section');  // all  section object
let length = allsections.length; // how many sections in the article
let thisbar = document.querySelector('#navbar__list');  // the bar object
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav and adding the scroll functionality
for (let i = 1; i <= allsections.length; i++) {
    const newElement = document.createElement('li');
    newElement.setAttribute('id',`bar${i}`);
    newElement.setAttribute('class','menu__link');
    const linktowhere = `#section${i}`;
    //newElement.innerHTML = `<a href=${linktowhere}>${allsections[i-1].dataset.nav}</a>`;
    newElement.innerHTML = `<a href=javascript:void(0);>${allsections[i-1].dataset.nav}</a>`;
    // adding the scrolling functionality
    newElement.addEventListener(
        'click',function(){
            let y_position = allsections[i-1].getBoundingClientRect().top+window.scrollY-5;
            //e.preventDefault();
            window.scrollTo(
                {
                    top: y_position,
                    behavior: 'smooth'
                }
            )
    }
    )
    thisbar.appendChild(newElement);
};


// Add class 'active' to section when near top of viewport

let aFunction = () => {
    someArray = [];
    allsections.forEach((el, ind) => {
        someArray.push(el.getBoundingClientRect().top)
        
    })
    
    console.log(someArray);
    let firstElement = someArray.findIndex(el => el >= 0)
    console.log(firstElement);
    //
    // Check which one to make active and which one passive
    if (firstElement !== -1) {
        // document.getElementById("sc" + firstElement).classList.add('highlighted');
        // // Because I do not know scroll direction, I clear both neighbours
        // // if I am at the end, no neighbout afterwards
        // if (firstElement < length - 1) {
        //     document.getElementById("sc" + (firstElement + 1)).classList.remove("highlighted");
        // }
        // //if I am in the beginning no neighbour before
        // if (firstElement > 0) {
        //     document.getElementById("sc" + (firstElement - 1)).classList.remove("highlighted");
        // }
        for (let j = 0; j < length; j++) {
            if (firstElement === j) {
                document.getElementById(`section${j+1}`).setAttribute('class','your-active-class');
                document.getElementById(`bar${j+1}`).setAttribute('class','active-class')
            } else {
                document.getElementById(`section${j+1}`).setAttribute('class','not-active-class');
                document.getElementById(`bar${j+1}`).setAttribute('class','not-class')
            }
        }

    }
    //


}
document.addEventListener('scroll', aFunction);
// Scroll to anchor ID using scrollTO event

//for (let i = 1; i <= allsections.length; i++) {
 //   let add_scroll_bar = thisbar.children[i-1];
  //  add_scroll_bar.addEventListener(
   //     'click',function(e){
    //        let y_position = parseInt(allsections[j-1].dataset.nav.split(' ')[1], 10)+window.scrollY;
     //       e.preventDefault();
      //      window.scrollTo(
       //         {
        //            top: y_position,
         //           behavior: 'smooth'
          //      }
           // )
   // }
   // )
//}
        
/**
 * End Main Functions
 * Begin Events
 * 
*/
for (let j = 1; j<= allsections.length; j++) {
    
    const barsection_to_find = thisbar.children[j-1];
    barsection_to_find.addEventListener(
        'click', function(){
            //console.log(j);
            const this_section = allsections[j-1];
            let my_array = [];
            for (let i = 1; i <= allsections.length; i++) {
                my_array.push(i);
             }
             my_array.splice(j-1,1);
             //console.log(my_array,'now is the deleting part');
            for (const digit of my_array) {
                //console.log(digit);
                let delete_section_class = allsections[digit-1];
                delete_section_class.setAttribute('class','not-active-class');
              }
            this_section.setAttribute('class','your-active-class');
        }
    ) 

};
// Build menu 

// Scroll to section on link click

// Set sections as active

