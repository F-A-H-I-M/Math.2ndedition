let right=0
let wrong=0
let anscheck=0
let questionno=0
let ansno=0
let ans=0;
let eque=0;
let output=0;
let fd;
let F;
let q;
let b
let r
//let customize11;

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
`<button type="submit" id="finish" onclick="finish()">Finish</bF
tton>`  
}
}














customize=(real)=>{
let D=1
real=real**2
real=real.toFixed(2)

while(D<1000){
let rd=(real*D)
rd=rd.toFixed(5)
let c=rd%1
 if(c==0){  
 FD=real*D 
 FD=FD.toFixed(0)
 F=D.toFixed(0)        
 break   
 }    
 D++        
}
//console.log(FD+" divided-by "+F)
}















root2=(real1,real2)=>{
let a=0
let b=0
a=real1**0.5
b=real2**0.5


if(a%1==0 && b%1!=0 && real2!=1){

return(a+"/√"+real2) 
//console.log(a+"/√"+real2) 
}
else if(a%1==0 && b%1!=0 && real2==1){

return(a) 
//console.log(a)
}


else if(a%1!=0 && b%1==0 && b!=1){

return(" √"+real1+"/"+b)  
//console.log(" √"+real1+"/"+b)
}

else if(a%1!=0 && b%1==0 && b==1){
return(" √"+real1)  
//console.log(" √"+real1)
}

else if(a%1!=0 && b%1!=0 && real2!=1){
return("√"+real1+"/√"+real2) 
//console.log("√"+real1+"/√"+real2) 
}

else if(a%1!=0 && b%1!=0 && real2==1){
return("√"+real1) 
//console.log("√"+real1) 
}

else if(a%1==0 && b%1==0 && b!=1){


return(a+"/"+b) 
//console.log(a+"/"+b) 
}

else if(a%1==0 && b%1==0 && b==1){

return(a) 
//console.log(a) 
}

}
























 
root=(real1,real2,want)=>{
let a=0
let b=0
let c=0
let d=0
let e=0
let f=0
let i=1
let ii=1
let cut=0 
while(i<20){
e=real2*i
a=e**0.5
//console.log(i)
//console.log(a)
if(a%1==0){
f=real1*i
while(ii<20){
c=(f/ii)
d=c**0.5
//console.log(d)
//console.log(a)
if(d%1==0){
b=d 
break 
cut=1
} 
ii++
}
if(cut=1){
break
}  
}    
i++    
}
// divided by type 
if(want==1){
root2(real1,real2)        
}
else{
if(b==0){  
root2(real1,real2)
}
else{
//console.log(b+""+"√"+ii+"/"+a) 
} 
}
}









//Trecnometry equations


sin=(a)=>{
let b=a*Math.PI/180;
a=Math.sin(b)
customize(a)
root2(FD,F)
return(root2(FD,F))
}





cos=(a)=>{
let b=a*Math.PI/180;
a=Math.cos(b)
customize(a)
return(root2(FD,F))
//console.log(a)
}


tan=(a)=>{

let c=a

let b=a*Math.PI/180;
a=Math.tan(b)
//console.log(a)

//console.log(c)

if(c%30==0 && c%60!=0 && c%90!=90){

a=1/a
customize(a)
return(root2(F,FD))
}

else{
customize(a)
return(root2(FD,F))
//console.log(a)
}          
}



cosec=(a)=>{   
let b=a*Math.PI/180;
a=1/Math.sin(b)
customize(1/a)
return(root2(F,FD))   
}


sec=()=>{    
let b=a*Math.PI/180;
a=1/Math.cos(b)
customize(1/a)
return(root2(F,FD))                     
}


cot=(a)=>{

let c=a

let b=a*Math.PI/180;
a=1/Math.tan(b)
//console.log(a)

//console.log(c)

if(c%60==0){
a=1/a
customize(a)
return(root2(F,FD))
//console.log(a)
}

else{
customize(a)
return(root2(FD,F))
//console.log(a)
}          
}


//end of Trecnometry


//console.log(tan(30)) 



 




let math=()=>{
r = Math.floor(Math.random()*9)+2
let a = Math.floor(Math.random()*6)+1
let e = Math.floor(Math.random()*5)
let z = Math.floor(Math.random()*6)
let p=Math.PI;  
anscheck=Math.floor(Math.random()*4+1) 
questionno+=1 



 
 
if (z==0){ 

//code for sin

if (e==0){

q=sin(a*15)
ans=cos(a*15)
document.getElementById("question").innerHTML="if sinθ="+q+"."+"what is the value of cosθ"
}

else if (e==1){
q=sin(a*15)
ans=tan(a*15)
document.getElementById("question").innerHTML="if sinθ="+q+"."+"what is the value of tanθ"
}

else if (e==2){
q=sin(a*15)
ans=cosec(a*15)
document.getElementById("question").innerHTML="if sinθ="+q+"."+"what is the value of cosecθ"
}

else if (e==3){
q=sin(a*15)
ans=sec(a*15)
document.getElementById("question").innerHTML="if sinθ="+q+"."+"what is the value of secθ"
}

else if (e==4){
q=sin(a*15)
ans=cot(a*15)
document.getElementById("question").innerHTML="if sinθ="+q+"."+"what is the value of cotθ"
}
}

else if (z==1){
//code for cos

if (e==0){

q=cos(a*15)
ans=sin(a*15)
document.getElementById("question").innerHTML="if cosθ="+q+"."+"what is the value of sinθ"
}

else if (e==1){
q=cos(a*15)
ans=tan(a*15)
document.getElementById("question").innerHTML="if cosθ="+q+"."+"what is the value of tanθ"
}

else if (e==2){
q=cos(a*15)
ans=cosec(a*15)
document.getElementById("question").innerHTML="if cosθ="+q+"."+"what is the value of cosecθ"
}

else if (e==3){
q=cos(a*15)
ans=sec(a*15)
document.getElementById("question").innerHTML="if cosθ="+q+"."+"what is the value of secθ"
}

else if (e==4){
q=cos(a*15)
ans=cot(a*15)
document.getElementById("question").innerHTML="if cosθ="+q+"."+"what is the value of cotθ"
}
                            
}

else if (z==2){
//code for tan

if (e==0){

q=tan(a*15)
ans=sin(a*15)
document.getElementById("question").innerHTML="if tanθ="+q+"."+"what is the value of sinθ"
}

else if (e==1){
q=tan(a*15)
ans=cos(a*15)
document.getElementById("question").innerHTML="if tanθ="+q+"."+"what is the value of cosθ"
}

else if (e==2){
q=tan(a*15)
ans=cosec(a*15)
document.getElementById("question").innerHTML="if tanθ="+q+"."+"what is the value of cosecθ"
}

else if (e==3){
q=tan(a*15)
ans=sec(a*15)
document.getElementById("question").innerHTML="if tanθ="+q+"."+"what is the value of secθ"
}

else if (e==4){
q=tan(a*15)
ans=cot(a*15)
document.getElementById("question").innerHTML="if tanθ="+q+"."+"what is the value of cotθ"
}
                                                   
}   

else if (z==3){
//code for cosec

if (e==0){

q=cosec(a*15)
ans=sin(a*15)
document.getElementById("question").innerHTML="if cosecθ="+q+"."+"what is the value of sinθ"
}

else if (e==1){
q=cosec(a*15)
ans=cos(a*15)
document.getElementById("question").innerHTML="if cosecθ="+q+"."+"what is the value of cosθ"
}

else if (e==2){
q=cosec(a*15)
ans=tan(a*15)
document.getElementById("question").innerHTML="if cosecθ="+q+"."+"what is the value of tanθ"
}

else if (e==3){
q=cosec(a*15)
ans=sec(a*15)
document.getElementById("question").innerHTML="if cosecθ="+q+"."+"what is the value of secθ"
}

else if (e==4){
q=cosec(a*15)
ans=cot(a*15)
document.getElementById("question").innerHTML="if cosecθ="+q+"."+"what is the value of cotθ"
}

}

else if (z==4){
//code for sec
if (e==0){

q=sec(a*15)
ans=sin(a*15)
document.getElementById("question").innerHTML="if secθ="+q+"."+"what is the value of sinθ"
}

else if (e==1){
q=sec(a*15)
ans=cos(a*15)
document.getElementById("question").innerHTML="if secθ="+q+"."+"what is the value of cosθ"
}

else if (e==2){
q=sec(a*15)
ans=tan(a*15)
document.getElementById("question").innerHTML="if secθ="+q+"."+"what is the value of tanθ"
}

else if (e==3){
q=sec(a*15)
ans=cosec(a*15)
document.getElementById("question").innerHTML="if secθ="+q+"."+"what is the value of cosecθ"
}

else if (e==4){
q=sec(a*15)
ans=cot(a*15)
document.getElementById("question").innerHTML="if secθ="+q+"."+"what is the value of cotθ"
}
}


else if (z==5){
//code for sec
if (e==0){

q=cot(a*15)
ans=sin(a*15)
document.getElementById("question").innerHTML="if cotθ="+q+"."+"what is the value of sinθ"
}

else if (e==1){
q=cot(a*15)
ans=cos(a*15)
document.getElementById("question").innerHTML="if cotθ="+q+"."+"what is the value of cosθ"
}

else if (e==2){
q=cot(a*15)
ans=tan(a*15)
document.getElementById("question").innerHTML="if cotθ="+q+"."+"what is the value of tanθ"
}

else if (e==3){
q=cot(a*15)
ans=cosec(a*15)
document.getElementById("question").innerHTML="if cotθ="+q+"."+"what is the value of cosecθ"
}

else if (e==4){
q=cot(a*15)
ans=sec(a*15)
document.getElementById("question").innerHTML="if cotθ="+q+"."+"what is the value of secθ"
}
}
}





option=()=>{
let a 
let b
let c
let d
a=sin((r-1)*3)
b=sin((r-1)*9)
c=cos((r+1)*5)
d=tan((r-1)*6)
console.log(a,b,c,d)



if (anscheck==1) {




document.getElementById("no1").innerHTML=
ans;
document.getElementById("no2").innerHTML=b

document.getElementById("no3").innerHTML=c

document.getElementById("no4").innerHTML=d
}

else if (anscheck==2) {


document.getElementById("no1").innerHTML=a
document.getElementById("no2").innerHTML=
ans
document.getElementById("no3").innerHTML=c
document.getElementById("no4").innerHTML=d
}

else if (anscheck==3) {

document.getElementById("no1").innerHTML=a
document.getElementById("no2").innerHTML=b
document.getElementById("no3").innerHTML=
ans
document.getElementById("no4").innerHTML=d
}

else if (anscheck==4) {

document.getElementById("no1").innerHTML=a
document.getElementById("no2").innerHTML=b
document.getElementById("no3").innerHTML=c
document.getElementById("no4").innerHTML=
ans; 
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
option()   
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
option()
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
option()
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


