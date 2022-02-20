let num = document.getElementById("number");
let btn = document.getElementById("btn");
let sonuc = document.getElementById("sonuc");




btn.addEventListener("click", ()=>{
    sonuc.innerHTML=""
   
if(num.value<9 && num.value>0){

    for(let i=0;i<num.value;i++){
       
        var arr = new Array();

        while(arr.length < 6){
     
        let nums = Math.floor(Math.random()*90+1);

        if(arr.indexOf(nums) === -1){
            arr.push(nums);}
       
       }
      
        let nums2 = Math.floor(Math.random()*90+1);
        let arr2 = new Array();

        if(arr.indexOf(nums2) === -1) { 
        arr2.push(nums2);}
        // console.log(arr2);
        
        let screen = arr.sort(function(a,b){ return a-b}).join(" - ") + "  |  " + arr2 + "  |  " + (Math.floor(Math.random() * 90) + 1) 
        
        sonuc.innerHTML += screen
        sonuc.innerHTML = sonuc.innerHTML + `<br/> <hr/>`
        
   }    
   
   
} 
else{
    sonuc.innerHTML = "Enter Number Between 1 to 8"
}   
});









// btn.addEventListener("click", ()=>{
//     if(num.value<9 && num.value>0){
//         numberValue=num.value
//         for(let i=0;i<numberValue;i++){
//             for(let j=1;j<=7;j++){

//                 let digit= [1,2,3,4,5]

//                 if((numbers[j-1] ==numbers[j]) && (digit.includes(j))){
//                 numbers.pop();
//                 numbers.push(Math.floor(Math.randım()*90+1));
//                 } 

//                 while ((j==7) && (numbers.slice(0,6).includes(numbers[6]))) {
//                 numbers.pop();
//                 numbers.push(Math.floor(Math.randım()*90+1));
//                 }

//                 let randomNumber = Math.floor(Math.randım()*90+1);
//                 numbers.push(randomNumber);
               
//             }
//             let joker = numbers.pop();
//             numbers.sort(function(a,b){return a-b});
         
        
//     }
//     else{
//         alert("please enter number 1 to 8");
//     }
// });

