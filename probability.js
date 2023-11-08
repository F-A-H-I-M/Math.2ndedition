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



















customise2=(a,b)=>{
let i=0
let no
let c
let d
while(i<100){

let ii=2

while(ii<20){
    
c=a/ii
d=b/ii    
//console.log(c,d)
if(c%1==0 && d%1==0){
a=c
b=d
break  
}
//console.log(a,b)    
        
ii++    
}

if(c%1!=0 || d%1!=0){
return(a+"/"+b) 
}         
i++    
}                     
}


//console.log(customise2(4*44,22*22))







 
 

 
 
 
 
 
 
 
 
 
                       

let math=()=>{
let r = Math.floor(Math.random()*20)+6
let a = Math.floor(Math.random()*30)+10
let b = Math.floor(Math.random()*10)+2
let c = Math.floor(Math.random()*10)+2
let d = Math.floor(Math.random()*10)+2
let e = Math.floor(Math.random()*2)+1
let f = Math.floor(Math.random()*1)+3
let z = Math.floor(Math.random()*4)
let power1 = Math.floor(Math.random()*6)
let power2 = Math.floor(Math.random()*6)
let p=Math.PI;
  
anscheck=Math.floor(Math.random()*4+1) 
questionno+=1
 
if (z==0){ 

//code for Circle 

if (e==0){
ans=customise2(b,a)
document.getElementById("question").innerHTML="একটি বাক্সে"+a+"টি বল আছে।যার মধ্যে "+b+" টি লাল বল এবং "+c+" সবুজ এবং "+(a-b-c)+" টি নীল বল আছে। তাহলে বল দৈবভাবে তুললে লাল হওয়ার সম্ভাবনা কত?"
}

else if (e==1){
ans=customise2(c,a)
document.getElementById("question").innerHTML="একটি বাক্সে"+a+"টি বল আছে।যার মধ্যে "+b+" টি লাল বল এবং "+c+"টি সবুজ বল এবং "+(a-b-c)+" টি নীল বল আছে। তাহলে বল দৈবভাবে তুললে সবুজ হওয়ার সম্ভাবনা কত?"
}

else if (e==2){
ans=customise2(a-b-c,a)
document.getElementById("question").innerHTML="একটি বাক্সে"+a+"টি বল আছে।যার মধ্যে "+b+" টি লাল বল এবং "+c+"টি সবুজ বল এবং "+(a-b-c)+" টি নীল বল আছে। তাহলে বল দৈবভাবে তুললে নীল হওয়ার সম্ভাবনা কত?"
}

else if (e==3){
ans=customise2(c,a)
document.getElementById("question").innerHTML="একটি বাক্সে"+a+"টি বল আছে।যার মধ্যে "+b+" টি লাল বল এবং "+c+"টি হলুদ বল এবং "+(a-b-c)+" টি সাদা বল আছে। তাহলে বল দৈবভাবে তুললে হলুদ হওয়ার সম্ভাবনা কত?"
}

else if (e==4){
ans=customise2(a-b-c,a)
document.getElementById("question").innerHTML="একটি বাক্সে"+a+"টি বল আছে।যার মধ্যে "+b+" টি লাল বল এবং "+c+"টি সবুজ বল এবং "+(a-b-c)+" টি সাদা বল আছে। তাহলে বল দৈবভাবে তুললে সাদা হওয়ার সম্ভাবনা কত?"
}
}

else if (z==1){

if (e==0){
ans=customise2(a-b,a)
document.getElementById("question").innerHTML="একটি বাক্সে"+a+"টি বল আছে।যার মধ্যে "+b+" টি লাল বল এবং "+c+"টি সবুজ বল এবং "+(a-b-c)+" টি সাদা বল আছে। তাহলে বল দৈবভাবে তুললে সাদা অথবা সবুজ হওয়ার সম্ভাবনা কত?"
}

else if (e==1){
ans=customise2(a-c,a)
document.getElementById("question").innerHTML="একটি বাক্সে"+a+"টি বল আছে।যার মধ্যে "+b+" টি লাল বল এবং "+c+"টি সবুজ বল এবং "+(a-b-c)+" টি সাদা বল আছে। তাহলে বল দৈবভাবে তুললে সাদা অথবা লাল হওয়ার সম্ভাবনা কত?"
}

else if (e==2){
ans=customise2(b+c,a)
document.getElementById("question").innerHTML="একটি বাক্সে"+a+"টি বল আছে।যার মধ্যে "+b+" টি লাল বল এবং "+c+"টি সাদা বল এবং "+(a-b-c)+" টি নীল বল আছে। তাহলে বল দৈবভাবে তুললে সাদা অথবা লাল হওয়ার সম্ভাবনা কত?"
}

else if (e==3){
ans=customise2((b*c),(a*a))
document.getElementById("question").innerHTML="একটি বাক্সে"+a+"টি বল আছে।যার মধ্যে "+b+" টি লাল বল এবং "+c+"টি সাদা বল এবং "+(a-b-c)+" টি নীল বল আছে। তাহলে বল দৈবভাবে তুললে সাদা এবং লাল হওয়ার সম্ভাবনা কত?"
}

else if (e==4){
ans=customise2((b*c),(a*a))
document.getElementById("question").innerHTML="একটি বাক্সে"+a+"টি বল আছে।যার মধ্যে "+b+" টি লাল বল এবং "+c+"টি নীল বল এবং "+(a-b-c)+" টি সাদা  বল আছে। তাহলে বল দৈবভাবে তুললে নীল এবং লাল হওয়ার সম্ভাবনা কত?"

}                                                   
}

else if (z==2){
if(e==0){
ans=customise2((e**2-1),(e**2))
document.getElementById("question").innerHTML=e+" টি মুদ্রা নিক্ষেপ করলে কমপক্ষে একটি H আসার সম্ভাবনা কত?" 
}

else if (e==1){
ans=customise2(1,2)
document.getElementById("question").innerHTML=2+" টি মুদ্রা নিক্ষেপ করলে H ও T এর অনুবাদ সমান হওয়ার সম্ভাবনা কত?" 
}

else if (e==2){
ans=customise2(6,16)
document.getElementById("question").innerHTML=4+" টি মুদ্রা নিক্ষেপ করলে H ও T এর অনুপাত সমান হওয়ার সম্ভাবনা কত?" 
}

else if (e==3){
ans=1
document.getElementById("question").innerHTML=e+" টি মুদ্রা নিক্ষেপ করলে কমপক্ষে একটি T ও কমপক্ষে একটি H আসার সম্ভাবনা কত?" 
}

else if (e==4){
ans=0
document.getElementById("question").innerHTML=e+" টি মুদ্রা নিক্ষেপ করলে কমপক্ষে একটি T এবং কমপক্ষে একটি H আসার সম্ভাবনা কত?" 
}                                                         
}   





else if(z==3){

if (e==0){
ans=customise2(b*f,a**2)
document.getElementById("question").innerHTML="রাশেদের চট্টগ্রাম থেকে ঢাকায় বাসে যাওয়া সম্ভাবনা "+b+"/"+a+"। ট্রেনে যাওয়ার সম্ভাবনা "+c+"/"+a+"।আবার ঢাকা হতে চট্টগ্রামে বাসে যাওয়ার সম্ভাবনা "+c+4+"/"+a+"। ট্রেনে যাওয়ার সম্ভাবনা "+f+"/"+a+" হলে চট্টগ্রাম থেকে বাসে এবং ঢাকা থেকে ট্রেনে আসার সম্ভাবনা কত "
}

else if (e==1){
ans=customise2(c*(c+4),a**2)
document.getElementById("question").innerHTML="রাশেদের চট্টগ্রাম থেকে ঢাকায় বাসে যাওয়া সম্ভাবনা "+b+"/"+a+"। ট্রেনে যাওয়ার সম্ভাবনা "+c+"/"+a+"।আবার ঢাকা হতে চট্টগ্রামে বাসে যাওয়ার সম্ভাবনা "+c+4+"/"+a+"। ট্রেনে যাওয়ার সম্ভাবনা "+f+"/"+a+" হলে চট্টগ্রাম থেকে ট্রেনে এবং ঢাকা থেকে বাসে আসার সম্ভাবনা কত "
}

else if (e==2){
ans=customise2(b+f,a)
document.getElementById("question").innerHTML="রাশেদের চট্টগ্রাম থেকে ঢাকায় বাসে যাওয়া সম্ভাবনা "+b+"/"+a+"। ট্রেনে যাওয়ার সম্ভাবনা "+c+"/"+a+"।আবার ঢাকা হতে চট্টগ্রামে বাসে যাওয়ার সম্ভাবনা "+c+4+"/"+a+"। ট্রেনে যাওয়ার সম্ভাবনা "+f+"/"+a+" হলে চট্টগ্রাম থেকে  বাসে অথবা ঢাকা থেকে ট্রেনে আসার সম্ভাবনা কত "
}
    
else if (e==3){
ans=customise2(c+c+4,a)
document.getElementById("question").innerHTML="রাশেদের চট্টগ্রাম থেকে ঢাকায় বাসে যাওয়া সম্ভাবনা "+b+"/"+a+"। ট্রেনে যাওয়ার সম্ভাবনা "+c+"/"+a+"।আবার ঢাকা হতে চট্টগ্রামে বাসে যাওয়ার সম্ভাবনা "+c+4+"/"+a+"। ট্রেনে যাওয়ার সম্ভাবনা "+f+"/"+a+" হলে চট্টগ্রাম থেকে ট্রেনে অথবা  ঢাকা থেকে বাসে আসার সম্ভাবনা কত "
}

else if (e==4){
ans=customise2((a**2-(b*(c+4))),a**2)
document.getElementById("question").innerHTML="রাশেদের চট্টগ্রাম থেকে ঢাকায় বাসে যাওয়া সম্ভাবনা "+b+"/"+a+"। ট্রেনে যাওয়ার সম্ভাবনা "+c+"/"+a+"।আবার ঢাকা হতে চট্টগ্রামে বাসে যাওয়ার সম্ভাবনা "+c+4+"/"+a+"। ট্রেনে যাওয়ার সম্ভাবনা "+f+"/"+a+" হলে চট্টগ্রাম থেকে বাসে এবং ঢাকা থেকে বাসে না আসার সম্ভাবনা কত "
}
}






else if (z==4){

if (e==0){
ans=customise2(b+c,a)
document.getElementById("question").innerHTML="একটি পুকুরে"+b+" টি মৃগেল মাছ"+c+" টি রুই মাছ ও"+a-b-c+"টি কাতলা মাছ আছে।তাহলে একটি মাস দৈবভাবে ধরা হলে মাছটি মৃগেল অথবা রুই হওয়ার সম্ভাবনা কত?"  
}

else if (e==1){
ans=customise2(a-c,a)
document.getElementById("question").innerHTML="একটি পুকুরে"+b+" টি মৃগেল মাছ"+c+" টি রুই মাছ ও"+a-b-c+"টি কাতলা মাছ আছে।তাহলে একটি মাস দৈবভাবে ধরা হলে মাছটি মৃগেল অথবা কাতলা হওয়ার সম্ভাবনা কত?"  
}

else if (e==2){
ans=customise2(b*c,a*a)
document.getElementById("question").innerHTML="একটি পুকুরে"+b+" টি মৃগেল মাছ"+c+" টি রুই মাছ ও"+a-b-c+"টি কাতলা মাছ আছে।তাহলে প্রতিস্থাপন না করে প্রথমবার মৃগেল এবং দ্বিতীয়বার রুই আসার সম্ভাবনা কত?"
}

else if (e==3){
ans=customise2(b*(a-b-c),a*a)
document.getElementById("question").innerHTML="একটি পুকুরে"+b+" টি মৃগেল মাছ"+c+" টি রুই মাছ ও"+a-b-c+"টি কাতলা মাছ আছে।তাহলে প্রতিস্থাপন না করে প্রথমবার মৃগেল এবং দ্বিতীয়বার কাতলা আসার সম্ভাবনা কত?"
}

else if (e==4){
ans=customise2(b*c*(a-b-c),a*(a-1)*(a-2))
document.getElementById("question").innerHTML="একটি পুকুরে"+b+" টি মৃগেল মাছ"+c+" টি রুই মাছ ও"+a-b-c+"টি কাতলা মাছ আছে।তাহলে প্রতিস্থাপন না করে প্রত্যেকবার ভিন্ন ভিন্ন মাছ আসার সম্ভাবনা কত?"
}
}
}




option=()=>{
let x = Math.floor(Math.random()*10)+1
let y = Math.floor(Math.random()*6)+1
let g = Math.floor(Math.random()*8)+1
let a=customise2(x,(y+21))
let b=customise2(y,(g+8))
let c=customise2(g,(x+10))
console.log(a,b,c,ans)
if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans;
document.getElementById("no2").innerHTML=
a;
document.getElementById("no3").innerHTML=
b;
document.getElementById("no4").innerHTML=
c;
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
a;
document.getElementById("no2").innerHTML=
ans;
document.getElementById("no3").innerHTML=
b;
document.getElementById("no4").innerHTML=
c;  
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=
a;
document.getElementById("no2").innerHTML=
b;
document.getElementById("no3").innerHTML=
ans;
document.getElementById("no4").innerHTML=
c;  
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
a;
document.getElementById("no2").innerHTML=
b;
document.getElementById("no3").innerHTML=
c;
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


