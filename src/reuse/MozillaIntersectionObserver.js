//Intersection observer API concepts and usage
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


let options = {
    root: document.querySelector('#scrollArea'), 
    //or root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  
//   root
//   The element that is used as the viewport for checking visibility of the target.
//   Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.


  let observer = new IntersectionObserver(callback, options);



  let target = document.querySelector('#listItem');
  observer.observe(target);
  
  // the callback we setup for the observer will be executed now for the first time
  // it waits until we assign a target to our observer (even if the target is currently not visible)

  
//   Whenever the target meets a threshold specified for the IntersectionObserver,
//    the callback is invoked. The callback receives a list of
//     IntersectionObserverEntry objects and the observer:

let callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};