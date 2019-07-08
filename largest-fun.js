// find out the nth laegest element of the number
function nthLargestElement(a, n)
       {
           let a_ = a.sort((a,b) => {return a - b;}),
               largestNth;
           for (let i = 0, len = a_.length; i < len; i += 1)
           {
               if (i === n)
               {
                   largestNth = a[i - 1];
               }
           }
           return largestNth;
       }

       console.log(nthLargestElement([43, 56, 22, 89, 87, 90, 99, 542], 3));
