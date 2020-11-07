class Searcher {

   constructor(arrayToTest) {
       this.proposedArray = arrayToTest
   }

  linearSearch(element) {
    for (let i = 0; i<= this.proposedArray.length; i++){

       if (this.proposedArray[i] === element) {
           return i;
       }

    }

     return -1;

    }

    binarySearch(element) {
        let lowerBound = 0;
        let upperBound = this.proposedArray.length - 1;

     while(lowerBound <= upperBound) {
        let midPoint = Math.floor((lowerBound + upperBound)/2);
        const midPointElement = this.proposedArray[midPoint];

        if (element === midPointElement) {
            return midPoint;
        }
      
      (element > midPointElement)  && (lowerBound = midPoint + 1);
      (element < midPointElement)  && (upperBound = midPoint - 1);

     }
     
     return -1;

    }
}

const searcher = new Searcher([1,3,9,10]);

console.log(searcher.linearSearch(10));
searcher.proposedArray = [10,14,19,26,27,31,33,35,42,44];

console.log(searcher.binarySearch(26));