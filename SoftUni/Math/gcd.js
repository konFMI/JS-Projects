   function gcd(a, b) {
       if (a % b == 0) {
           return b
       }
       return gcd(b, a % b)
   }

   function gcdIter(a, b) {
       let copyA = a;
       let copyB = b;
       while (copyB !== 0) {
           [copyA, copyB] = [copyB, copyA % copyB];
       }
       return copyA;
   }




   console.log(gcd(2005, 101));