

function isComponentVisible(callback,target){
    let options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0
      }

    let observer = new IntersectionObserver(callback, options);
    // callback should take this form (entries, observer)

    observer.observe(target);
}

export default isComponentVisible