let right=0
let wrong=0
let anscheck=0
let questionno=0
let ansno=0
let ans=0;
let eque=0;
let output=0;
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
let r = Math.floor(Math.random()*20)+6
let a = Math.floor(Math.random()*10)+5
let b = Math.floor(Math.random()*10)+2
let c = Math.floor(Math.random()*20)+2
let d = Math.floor(Math.random()*10)+2
let e = Math.floor(Math.random()*5)
let f = Math.floor(Math.random()*10)+2
let g = Math.floor(Math.random()*4)+1
let x = Math.floor(Math.random()*10)
let y = Math.floor(Math.random()*10)
let z = Math.floor(Math.random()*5)
let power1 = Math.floor(Math.random()*6)
let power2 = Math.floor(Math.random()*6)
let p=Math.PI;
  
anscheck=Math.floor(Math.random()*4+1) 
questionno+=1
 
if (z==0){ 

//code for Circle 

if (e==0){
ans=p*r**2
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি বৃত্তের ব্যসার্ধ r = "+r+" সেমি "+" হলে,পরিধি কত?"
eque=1;
}

else if (e==1){
ans=4*p*r**2;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি গোলকের ব্যসার্ধ r = "+r+" সেমি "+" হলে,সমগ্রতলের ক্ষেত্রফল কত?"
}

else if (e==2){
ans=4/3**r**3;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি গোলকের ব্যসার্ধ r = "+r+" সেমি "+" হলে,আয়তন কত?"
eque=3;
}

else if (e==3){
ans=r;
document.getElementById("question").innerHTML="একটি গোলকের সমগ্র তলের ক্ষেত্রফল = "+(4*p*r**2).toFixed(2)+" বর্গ সেমি " + "হলে,ব্যাসার্ধ কত?"
eque=1;
}

else if (e==4){
ans=r;
document.getElementById("question").innerHTML="একটি গোলকের আয়তন  = "+(4/3*p*r**3).toFixed(2)+" ঘন সেমি " +" হলে,ব্যাসার্ধ কত?"
eque=1;
}
}

else if (z==1){

if (e==0){
ans=a**3;
document.getElementById("question").innerHTML="একটি ঘনকের এক বাহুর দৈর্ঘ = "+a+" সেমি "+" হলে,আয়তন কত?"
eque=3;
}

else if (e==1){
ans=6*a**2;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি ঘনকের এক বাহুর দৈর্ঘ = "+a+" সেমি "+" হলে,সমগ্র তলের ক্ষেত্রফল কত?"
eque=2;
}

else if (e==2){
ans=a
document.getElementById("question").innerHTML="একটি ঘনকের  সমগ্র তলের ক্ষেত্রফল = "+6*a**2+" বর্গ সেমি " +" হলে, বাহুর দৈর্ঘ কত?"
eque=1;
}

else if (e==3){
ans=a
document.getElementById("question").innerHTML="একটি ঘনকের আয়তন = "+a**3+" ঘন সেমি " +" হলে, বাহুর দৈর্ঘ কত?"
eque=1;
}

else if (e==4){
ans=3**0.5*a;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি ঘনকের এক বাহুর দৈর্ঘ = "+a+" সেমি "+" হলে,কর্ণ কত?"
eque=1;
}                                                   
}

else if (z==2){

if (e==0){
ans=a*b*c;
document.getElementById("question").innerHTML="একটি আয়তকার ঘন বস্তুর দৈর্ঘ,প্রস্থ,উচ্চতা যথাক্রমে "+a+" সেমি "+","+b+" সেমি "+","+c+" সেমি "+" হলে,আয়তন কত?"
eque=3;
}

else if (e==1){
ans=2*(a*b+b*c+c*a);
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি আয়তকার ঘন বস্তুর দৈর্ঘ,প্রস্থ,উচ্চতা যথাক্রমে "+a+" সেমি "+","+b+" সেমি "+","+c+" সেমি "+" হলে,সমগ্র তলের ক্ষেত্রফল কত?"
eque=2;
}

else if (e==2){
ans=(a**2*b**2*c**2)**0.5;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি আয়তকার ঘন বস্তুর দৈর্ঘ,প্রস্থ,উচ্চতা যথাক্রমে "+a+" সেমি "+","+b+" সেমি "+","+c+" সেমি "+" হলে,কর্ণের দৈর্ঘ কত?"
eque=1;
}

else if (e==3){
ans=2*(a*d*a*c+a*c*a*f+a*f*a*d);
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি আয়তকার ঘন বস্তুর দৈর্ঘ:প্রস্থ:উচ্চতা হলো "+d+":"+c+":"+f+" এবং আয়তন "+(a*d*a*e*a*f).toFixed(2)+" ঘন সেমি " +" হলে,সমগ্র তলের ক্ষেত্রফল কত?"
eque=2;
}

else if (e==4){
ans=((a*d)**2+(a*c)**2+(a*f)**2)**0.5;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি আয়তকার ঘন বস্তুর দৈর্ঘ:প্রস্থ:উচ্চতা হলো "+d+" সেমি "+":"+c+" সেমি "+":"+f+" সেমি "+" এবং আয়তন "+(a*d*a*e*a*f).toFixed(2)+" ঘন সেমি " +" হলে, কর্ণ কত?"
eque=1;
}                                                         
}   

else if (z==3){

if (e==0){
ans=p*a**2*b;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি সিলিন্ডারের ভূমির ব্যাস "+2*a+" সেমি "+"ও উচ্চতা "+b+" সেমি "+" হলে, আয়তন কত?"
eque=3;
}

else if (e==1){
ans=p*a**2+2*p*a*b;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি সিলিন্ডারের ভূমির ব্যাস "+2*a+" সেমি "+"ও উচ্চতা "+b+" সেমি "+" হলে, সমগ্র তলের ক্ষেত্রফল কত?"
eque=2;
}

else if (e==2){
ans=b;
document.getElementById("question").innerHTML="একটি সিলিন্ডারের ভূমির ব্যাস "+2*a+" সেমি "+" ও সমগ্র তলের ক্ষেত্রফল "+(p*a**2+2*p*a*b).toFixed(2)+" বর্গ সেমি " +"হলে, উচ্চতা কত?"
eque=1;
}

else if (e==3){
ans=b;
document.getElementById("question").innerHTML="একটি সিলিন্ডারের ভূমির ব্যাস "+2*a+" সেমি "+" ও আয়তন "+(p*a**2*b).toFixed(2)+" ঘন সেমি " +"হলে, উচ্চতা কত?"
eque=1;
}

else if (e==4){
ans=p*a**2+2*p*a*b;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি সিলিন্ডারের উচ্চতা "+b+" সেমি "+" ও আয়তন "+(p*a**2*b).toFixed(2)+" ঘন সেমি " +"হলে, সমগ্র তলের ক্ষেত্রফল কত?"
eque=2;
}
}

else if (z==4){

if (e==0){
ans=(p*a**2*b)/3;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি সমবৃত্ত ভূমিক কোনকের ভূমির ব্যাস "+2*a+" সেমি "+"ও উচ্চতা "+b+" সেমি "+" হলে, আয়তন কত?"
eque=3;
}

else if (e==1){
ans=p*a**2+p*a*b;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি সমবৃত্ত ভূমিক কোনকের ভূমির ব্যাস "+2*a+" সেমি "+"ও হেলানো উচ্চতা "+b+" সেমি "+" হলে, সমগ্র তলের ক্ষেত্রফল কত?"
eque=2;
}

else if (e==2){
ans=p*a**2+p*a*(b**2+a**2)**0.5;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি সমবৃত্ত ভূমিক কোনকের ভূমির ব্যাস "+2*a+" সেমি "+"ও উচ্চতা "+b+" সেমি "+" হলে, সমগ্র তলের ক্ষেত্রফল কত?"
eque=2;
}

else if (e==3){
ans=(b**2+a**2)**0.5;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি সমবৃত্ত ভূমিক কোনকের ভূমির ব্যাস "+2*a+" সেমি "+"ও উচ্চতা "+b+" সেমি "+" হলে, হেলানো উচ্চতা কত?" 
eque=1;
}

else if (e==4){
ans=p*g**2+p*g*(g**2+a**2)**0.5;;
ans=ans.toFixed(2)
document.getElementById("question").innerHTML="একটি সমকোণী ত্রিভুজের অতিভুজ ব্যতীত অপর দুই বাহুর পরিমাণ যথাক্রমে "+a+" সেমি "+","+g+" সেমি "+"|"+"ত্রিভুজ টিকে বৃহত্তম বাহুর চারিদিকে ঘোরালে যে সমবৃত্ত ভূমিক কোনক উৎপন্ন হয় তাহার সমগ্রতলের ক্ষেত্রফল নির্ণয় করো?"
eque=2;
}
}
}



outputfun=()=>{
if(eque==1){
output=" সেমি ";        
}   
if(eque==2){
output=" বর্গ সেমি ";        
}      
if(eque==3){
output=" ঘন সেমি ";        
}          
}







option=()=>{
if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans+output;
document.getElementById("no2").innerHTML=
ans+65+output;
document.getElementById("no3").innerHTML=
ans+34+output;
document.getElementById("no4").innerHTML=
ans-45+output;
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans*2-45+output;
document.getElementById("no2").innerHTML=
ans+output;
document.getElementById("no3").innerHTML=
ans+32+output;
document.getElementById("no4").innerHTML=
ans-34+output;  
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
(ans/4).toFixed(2)+output;
document.getElementById("no2").innerHTML=
ans+4+output;
document.getElementById("no3").innerHTML=
ans+output;
document.getElementById("no4").innerHTML=
ans-56+output;  
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans*2+output;
document.getElementById("no2").innerHTML=
ans+46+output;
document.getElementById("no3").innerHTML=
ans-63+output;
document.getElementById("no4").innerHTML=
ans+output; 
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
outputfun()
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
outputfun()   
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
outputfun()
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


