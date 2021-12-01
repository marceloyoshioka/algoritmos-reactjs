
export default function Fibonacci(){
    const indices = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let a = 1;
    let b = 1;
    let c = 1;
    return(
        <ul>
            <li>1</li>
            <li>1</li>
           {
               
               indices.map((i) => {
                   if(i >=3){
                         c = a+b
                         a = b
                         b = c 
                        return <li>{c}</li>
                   } 

               })
           } 
        </ul>
    );
}