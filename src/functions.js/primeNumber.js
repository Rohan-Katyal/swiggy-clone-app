
const findPrime = (num) => {
    // 
    // 
    // 
    
    let i,
      primes = [2,3],
      n = 5


    //   isPrime Starts

    const isPrime = (num1) => {

        let i = 1,
        p = primes[i],
        limit = Math.ceil(Math.sqrt(num1));

        // console.log(`Outside iPrime loop : ${p}`);

        while (p <= limit) {
            if (num1 % p === 0){
                return false;
            }
            i += 1;
            p = primes[i];
            // console.log(`Inside iPrime loop : ${p}`);
        }

        // console.log('isPrime Loop exit')

        return true;

    };


    // isPrime Ends

    for (i = 3; i <= num; i += 1){

        // console.log(primes);

        while (!isPrime(n)) {
            n += 2;
            // console.log('loop false')
        }

        primes.push(n);
        n += 2;
        // console.log('loop true')

        // here we are doing +2 as most of the prime numbers are odd,
        // and if we have an odd value and is added with 1, it will give us an even number,
        // and and odd number if added with 2,
        // so we want the numbers that are not prime,
        
    }
    
    return primes[num-1];

}

// let pos = 11
// console.log(findPrime(pos));


export default findPrime;



// const nextprime = (prime)=>{
//     // Prime number after prime

//     for(let i=0; i < prime ;i++){
//         let nextPrime = prime+1;

//         if(!isPrime(nextPrime)){
//             nextPrime += 1
//         }

//         return nextPrime;
//     }
    
// }