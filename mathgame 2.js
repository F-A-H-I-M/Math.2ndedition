let right=0
let wrong=0
let anscheck=0
let questionno=0
let ansno=0
let objective=()=>{
let no1 = document.getElementById("no1");
let no2 = document.getElementById("no2");
let no3 = document.getElementById("no3");
let no4 = document.getElementById("no4");  

no1.addEventListener ('click',choice1);
no2.addEventListener ('click',choice2);
no3.addEventListener ('click',choice3);
no4.addEventListener ('click',choice4);

function choice1(){
ansno = 1;
document.getElementById("no1").style.background="#40e0ffcd";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="white";
//console.log("ans="+1)
document.getElementById("button").innerHTML=
`<button type="submit" id="next" onclick="next()">Next</button>`
}

function choice2(){
ansno = 2;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="#40e0ffcd";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="white";
//console.log("ans="+2)
document.getElementById("button").innerHTML=
`<button type="submit" id="next" onclick="next()">Next</button>`
}

function choice3(){
ansno = 3;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="#40e0ffcd";
document.getElementById("no4").style.background="white";
//console.log("ans="+3)
document.getElementById("button").innerHTML=
`<button type="submit" id="next" onclick="next()">Next</button>`
}

function choice4(){
ansno = 4;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="#40e0ffcd";
//console.log("ans="+4)
document.getElementById("button").innerHTML=
`<button type="submit" id="next" onclick="next()">Next</button>`
}
}





let objective2=()=>{

let no1 = document.getElementById("no1");
let no2 = document.getElementById("no2");
let no3 = document.getElementById("no3");
let no4 = document.getElementById("no4");
  
no1.addEventListener ('click',choice1);
no2.addEventListener ('click',choice2);
no3.addEventListener ('click',choice3);
no4.addEventListener ('click',choice4);

function choice1(){
ansno = 1;
document.getElementById("no1").style.background="#40e0ffcd";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="white";
//console.log("ans="+1)
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>`  

}

function choice2(){
ansno = 2;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="#40e0ffcd";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="white";
//console.log("ans="+2)
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>`  
}

function choice3(){
ansno = 3;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="#40e0ffcd";
document.getElementById("no4").style.background="white";
//console.log("ans="+3)
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>`  
}

function choice4(){
ansno = 4;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="#40e0ffcd";
//console.log("ans="+4)
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>`  
}
}

let math=()=>{
let a = Math.floor(Math.random()*10)+2
let b = Math.floor(Math.random()*10)+2
let c = Math.floor(Math.random()*20)
let e = Math.floor(Math.random()*5)
let x = Math.floor(Math.random()*6)+1
let y = Math.floor(Math.random()*8)+1
let z = Math.floor(Math.random()*5)
let power1 = Math.floor(Math.random()*6)
let power2 = Math.floor(Math.random()*6)
  
anscheck=Math.floor(Math.random()*4+1) 
questionno+=1
 
if (z==0){ 
let ans =a*x+b*x+c;
document.getElementById("question").innerHTML=
"If <br> "+a+"x+"+b+"x+"+c+"="+ans+"<br> what is the value of x? "

if (anscheck==1) {
document.getElementById("no1").innerHTML=
x
document.getElementById("no2").innerHTML=
y
document.getElementById("no3").innerHTML=
x+1
document.getElementById("no4").innerHTML=
x-2
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
x*2
document.getElementById("no2").innerHTML=
x
document.getElementById("no3").innerHTML=
x+5
document.getElementById("no4").innerHTML=
x-8      
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
x-1
document.getElementById("no2").innerHTML=
x*3-6
document.getElementById("no3").innerHTML=
x
document.getElementById("no4").innerHTML=
x/2     
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
x-3
document.getElementById("no2").innerHTML=
x*4-13
document.getElementById("no3").innerHTML=
x+2
document.getElementById("no4").innerHTML=
x   
}
}

else if (z==1){

if (e==0){
let ans=a*x+c+b*x-(a*c-b); 
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x +"<br>"+a+"x"+"+"+c+"+"+b+"x"+"-"+(a*c-b)+"=?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}

else if (e==1){
let ans=a*Math.pow(x,power1)-c+b*Math.pow(x,power2)
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+"<br>"+a+"x"+"<sup>"+power1+"</sup>"+"-"+c+"+"+b+"x"+"<sup>"+power2+"</sup>"+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}

else if (e==2){
let ans=a*Math.pow(x,power1)+b*Math.pow(x,power2)+c
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+"<br>"+a+"x"+"<sup>"+power1+"</sup>"+"+"+b+"x"+"<sup>"+power2+"</sup>"+"+"+c+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}

else if (e==3){
let ans=a*Math.pow(x,power1)+b*Math.pow(x,power2)-c+(a-b)*x
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+"<br>"+a+"x"+"<sup>"+power1+"</sup>"+"+"+b+"x"+"<sup>"+power2+"</sup>"+"-"+c+"+"+(a-b)+"x"+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}

else if (e==4){
let ans=a*Math.pow(x,power1)+b*Math.pow(x,power2)-c*x
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+"<br>"+a+"x"+"<sup>"+power1+"</sup>"+"+"+b+"x"+"<sup>"+power2+"</sup>"+"-"+c+"x"+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}                                                   
}

else if (z==2){
document.getElementById("question").innerHTML=
"If <br> "+a+"x"+"<sup>2</sup>"+"+"+b+"x"+"+"+c+"=0<br> what is the value of x? "

let ans11=Math.pow(b,2)-4*a*c
let ans1=(-b+Math.sqrt(ans11))/2*a
let ans22 =Math.pow(b,2)-4*a*c
let ans2=(-b-Math.sqrt(ans22))/2*a

if (ans11>=0&&ans22>=0){
    
if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans1+",  "+ans2
document.getElementById("no2").innerHTML=
ans1
document.getElementById("no3").innerHTML=
ans2
document.getElementById("no4").innerHTML=
ans1+ans2
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans1
document.getElementById("no2").innerHTML=
ans1+",  "+ans2
document.getElementById("no3").innerHTML=
ans2
document.getElementById("no4").innerHTML=
ans1*ans2  
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans1-ans2
document.getElementById("no2").innerHTML=
ans1
document.getElementById("no3").innerHTML=
ans1+",  "+ans2
document.getElementById("no4").innerHTML=
ans2 
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans1/ans2
document.getElementById("no2").innerHTML=
ans2
document.getElementById("no3").innerHTML=
ans1
document.getElementById("no4").innerHTML=
ans1+", "+ans2
}              
}

else if (ans11<0&&ans22>=0){
   
if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans2
document.getElementById("no2").innerHTML=
undefined 
document.getElementById("no3").innerHTML=
ans2+3+", "+ans11
document.getElementById("no4").innerHTML=
ans2-4
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans2*2+",  "+ans11
document.getElementById("no2").innerHTML=
ans2
document.getElementById("no3").innerHTML=
0
document.getElementById("no4").innerHTML=
undefined 
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
undefined
document.getElementById("no2").innerHTML=
0+", "+ans11
document.getElementById("no3").innerHTML=
ans2
document.getElementById("no4").innerHTML=
ans2+5
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
0
document.getElementById("no2").innerHTML=
ans2-1+", "+ans11
document.getElementById("no3").innerHTML=
undefined
document.getElementById("no4").innerHTML=
ans2
}          
}
else if (ans11>=0&&ans22<0){
  
if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans1
document.getElementById("no2").innerHTML=
undefined 
document.getElementById("no3").innerHTML=
ans1+3+",  "+ans11
document.getElementById("no4").innerHTML=
ans1-4
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans1*2
document.getElementById("no2").innerHTML=
ans1
document.getElementById("no3").innerHTML=
0+",  "+ans11
document.getElementById("no4").innerHTML=
undefined 
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
undefined
document.getElementById("no2").innerHTML=
0+",  "+ans11
document.getElementById("no3").innerHTML=
ans1
document.getElementById("no4").innerHTML=
ans1+5
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
0
document.getElementById("no2").innerHTML=
ans1-1+",  "+ans11``
document.getElementById("no3").innerHTML=
undefined
document.getElementById("no4").innerHTML=
ans1
}          
}  

else if (ans11<0&&ans22<0){
  
if (anscheck==1) {
document.getElementById("no1").innerHTML=
undefined
document.getElementById("no2").innerHTML=
ans11 +", "+ans22
document.getElementById("no3").innerHTML=
ans22+3
document.getElementById("no4").innerHTML=
ans11-4
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans22*2
document.getElementById("no2").innerHTML=
undefined
document.getElementById("no3").innerHTML=
0
document.getElementById("no4").innerHTML=
ans22
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans22
document.getElementById("no2").innerHTML=
0+","+ans22
document.getElementById("no3").innerHTML=
undefined
document.getElementById("no4").innerHTML=
ans11+5
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
0
document.getElementById("no2").innerHTML=
ans11+", "+ans22
document.getElementById("no3").innerHTML=
ans22
document.getElementById("no4").innerHTML=
undefined
}          
}      
}   



else if (z==3){

if (e==0){
let ans=a*Math.pow(x,-power1)+c+b*Math.pow(x,power2)
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+"<br>"+a+"x"+"<sup>"+"-"+power1+"</sup>"+"+"+c+"+"+b+"x"+"<sup>"+power2+"</sup>"+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}



else if (e==1){
let ans=a*Math.pow(x,-power1)-c+b*Math.pow(x,-power2)
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+"<br>"+a+"x"+"<sup>"+"-"+power1+"</sup>"+"-"+c+"+"+b+"x"+"<sup>"+"-"+power2+"</sup>"+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}

else if (e==2){
let ans=a*Math.pow(x,-power1)+b*Math.pow(x,power2)+c
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+"<br>"+a+"x"+"<sup>"+"-"+power1+"</sup>"+"+"+b+"x"+"<sup>"+power2+"</sup>"+"+"+c+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}

else if (e==3){
let ans=a*Math.pow(x,-power1)+b*Math.pow(x,power2)-c
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+"<br>"+a+"x"+"<sup>"+"-"+power1+"</sup>"+"+"+b+"x"+"<sup>"+power2+"</sup>"+"-"+c+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}

else if (e==4){
let ans=a*Math.pow(x,-power1)+b*Math.pow(x,power2)+c+Math.pow(x,-e)
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+"<br>"+a+"x"+"<sup>"+"-"+power1+"</sup>"+"+"+b+"x"+"<sup>"+power2+"</sup>"
+"+"+c+"x"+"<sup>"+"-"+e+"</sup>"+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}
}

else if (z==4){

if (e==0){
let ans=a*Math.pow(x,power1)+c+b*Math.pow(y,power2)
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+" and "+"y = "+y+"<br>"+a+"x"+"<sup>"+power1+"</sup>"+"+"+c+"+"+b+"y"+"<sup>"+power2+"</sup>"+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}

else if (e==1){
let ans=a*Math.pow(y,power1)+b*Math.pow(x,power2)+c
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+" and "+"y = "+y+"<br>"+a+"y"+"<sup>"+power1+"</sup>"+"+"+b+"x"+"<sup>"+power2+"</sup>"+"+"+c+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}

else if (e==2){
let ans=a*Math.pow(y,power1)+b*Math.pow(x,power2)-c
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+" and "+"y = "+y+"<br>"+a+"y"+"<sup>"+power1+"</sup>"+"+"+b+"x"+"<sup>"+power2+"</sup>"+"-"+c+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}

else if (e==3){
let ans=a*Math.pow(y,-power1)+b*Math.pow(x,-power2)-c
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+" and "+"y = "+y+"<br>"+a+"y"+"<sup>"+"-"+power1+"</sup>"+"+"+b+"x"+"<sup>"+"-"+power2+"</sup>"+"-"+c+"="+"?"

if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}

else if (e==4){
let ans=a*Math.pow(x,power1)+b*Math.pow(y,-power2)-c
document.getElementById("question").innerHTML=
"If <br>  the value of x = "+x+" and "+"y = "+y+"<br>"+a+"x"+"<sup>"+power1+"</sup>"+"+"+b+"y"+"<sup>"+"-"+power2+"</sup>"+"-"+c+"="+"?"


if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans
document.getElementById("no2").innerHTML=
ans+65
document.getElementById("no3").innerHTML=
ans+34
document.getElementById("no4").innerHTML=
ans-45
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=
ans+32
document.getElementById("no4").innerHTML=
ans-34     
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
ans/4
document.getElementById("no2").innerHTML=
ans+4
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=
ans-56    
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2
document.getElementById("no2").innerHTML=
ans+46
document.getElementById("no3").innerHTML=
ans-63
document.getElementById("no4").innerHTML=
ans 
}
}
}
}

let start=()=>{
document.getElementById("objective").innerHTML=
`<p id="question"></p>
<ol>                                                                         
<li  id="no1"></li>                                                          
<li  id="no2"></li>                                              
<li  id="no3"></li>                                                                       
<li  id="no4"></li>                                                         
</ol>`
objective()
math()   
document.getElementById("button").innerHTML=
`<button type="submit" id="Pass" onclick="pass()">Pass</button>` 
document.getElementById("questionno").innerHTML=questionno+"/"+"15"
}

function startagain(){
right=0
wrong=0
questionno=0
start()            
}

function rule1(){    
document.getElementById("rulebox").innerHTML="For one correct answer you will get 1 point and for one wrong answer you will lose 0.3 point"
document.getElementById("b").innerHTML=
`<button type="button" id="rulebutton" onclick="rule2()">Rule</button>`
}

function rule2(){   
document.getElementById("rulebox").innerHTML=""
document.getElementById("b").innerHTML=
`<button type="button" id="rulebutton" onclick="rule1()">Rule</button>`
}

function pass(){   
wrong+=1
math()   

if(questionno==15){
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>` 
objective2()        
}
document.getElementById("questionno").innerHTML=questionno+"/"+"15"
}

function next(){

if (anscheck==ansno){    
right+=1   
//console.log("r"+right)    
}

else{
wrong+=1    
//console.log("w"+wrong)        
}

math()
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="white";
document.getElementById("button").innerHTML=
`<button type="submit" id="pass" onclick="pass()">Pass</button>`

if(questionno>=15){
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>`  
objective2()     
}
document.getElementById("questionno").innerHTML=questionno+"/"+"15"
//console.log("ansss="+anscheck)                                                  
}

function finish(){

if (anscheck==ansno){
right+=1   
//console.log("r"+right)    
}

else{
wrong+=1    
//console.log("w"+wrong)        
} 
let result=right*1-wrong*.3
result=result/15*100
result=result.toFixed(2)
//console.log(result+"%")
let css1="--p:"+result+";--b:2em;--c:#00ff6c";
let css2="--p:"+result*-1+";--b:2em;--c:red";

if(result<0){
document.getElementById("objective").innerHTML=
`<div class="pie animate" id="chart" style=`+css2+
`></div> 
<p id="comment"></p>
<div id="info"> 
    <p id="right"></p>   
     <p id="wrong"></p>  
     <p id="total"></p> 
      </div>`
document.getElementById("comment").innerHTML="Improve your mathematics skill";
document.getElementById("comment").style.color="red";
}

else{
document.getElementById("objective").innerHTML=
`<div class="pie animate" id="chart" style=`+css1+`></div> 
   <p id="comment"></p>
   <div id="info"> 
    <p id="right"></p>  
    <p id="wrong"></p>  
    <p id="total"></p>
   </div>` 
      
if(result<=30&&result>0){
document.getElementById("comment").innerHTML="You are growing";
document.getElementById("comment").style.color="#ff5f55";   
} 
  
else if(result<=60&&result>30){
document.getElementById("comment").innerHTML="A little bit more";       
document.getElementById("comment").style.color="#ff8800"
}  

else if(result<=80&&result>60){
document.getElementById("comment").innerHTML="very-good";       
document.getElementById("comment").style.color="#00ff6c"
} 
 
else if(result<100&&result>80){
document.getElementById("comment").innerHTML="perfect";           
document.getElementById("comment").style.color="#008b52"
}
  
else if(result==100){
document.getElementById("comment").innerHTML="extraordinary";            
document.getElementById("comment").style.color="#240071"
}    
}
let r=right*1
document.getElementById("right").innerHTML="correct ="+right+"="
+right+"x"+"1"+"="+r
let w=wrong*0.3
w=w.toFixed(2)
document.getElementById("wrong").innerHTML="wrong ="+wrong+"="
+wrong+"x"+"0.3"+"="+w
let total=r-w
total=total.toFixed(2) 
document.getElementById("total").innerHTML="total ="+r+"-"+w+"="
+total   
document.getElementById("button").innerHTML=
` <button type="submit" id="next" onclick="startagain()">Start Again</button>  ` 
document.getElementById("chart").innerHTML=result+"%";   
}





