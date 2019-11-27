


function getNumber()
{
    var inp1= parseInt (document.getElementById("inp1").value);
    var result= document.getElementById("result");
    
    result.innerHTML= inp1;

}



function number()
{
    var inp2= parseInt (document.getElementById("inp2").value);
    var result1= document.getElementById("result1");
    
    if ((inp2%3==0) && (inp2 %4==0))
    {
        result1.innerHTML= "yes";
    }
    else{
        result1.innerHTML= "no";

    }

}


function getMax()
{
    var inp3= parseInt (document.getElementById("inp3").value);
    var inp4= parseInt (document.getElementById("inp4").value);

    var result2= document.getElementById("result2");
    
    if (inp3>inp4)
    {
        result2.innerHTML= inp3;
    }
    else{
        result2.innerHTML= inp4;

    }

}


function type1()
{
    var inp5= parseInt (document.getElementById("inp5").value);
    var result3= document.getElementById("result3");
    
    if (inp5>=0)
    {
        result3.innerHTML="positive";
    }
    else{
        result3.innerHTML="Negative";

    }


}


function getMaxMin()
{
    var inp6= parseInt (document.getElementById("inp6").value);
    var inp7= parseInt (document.getElementById("inp7").value);
    var inp8= parseInt (document.getElementById("inp8").value);

    var result4= document.getElementById("result4");
    var result5= document.getElementById("result5");

    
    if ((inp6>inp7) && (inp6>inp8) && (inp7>inp8))
    {
        result4.innerHTML= "max num " + inp6;
        result5.innerHTML= "min num " + inp8;

    }
    else if ((inp7>inp6) && (inp7>inp8) && (inp6>inp8)){
        result4.innerHTML= "max num " + inp7;
        result5.innerHTML= "min num " + inp8;

    }

}


function oddNum()
{
    var inp9= parseInt (document.getElementById("inp9").value);
    var result6= document.getElementById("result6");
    
    if (inp9%2==0)
    {
        result6.innerHTML= "Even";
    }
    else{
        result6.innerHTML= "Odd";

    }

}


function vowelLetter()
{
    var inp10= (document.getElementById("inp10").value);
    var result7= document.getElementById("result7");
    
    if ((inp10=="a") || (inp10=="o") || (inp10=="e") || (inp9=="u") || (inp9=="l"))
    {
        result7.innerHTML= "vowel"; 
    }
    else{
        result7.innerHTML= "consonant";

    }

}


function xX()
{
    var inp11= parseInt (document.getElementById("inp11").value);
    var result8= document.getElementById("result8");
    var i;

   for ( i=1; i<=inp11; i++)
   {
    result8.innerHTML += (i+"</br>");
   }
}


function multi()
{
    var inp12= parseInt (document.getElementById("inp12").value);
    var result9= document.getElementById("result9");
    var i;

   for ( i=1; i<=12; i++)
   {
    result9.innerHTML += (i*inp12);
   }
}


function evenNumber()
{
    var inp13= parseInt (document.getElementById("inp13").value);
    var result10= document.getElementById("result10");
    var i;

   for ( i=0; i<=inp13; i++)
   {
       if(i%2==0){
        result10.innerHTML+=i;
       }
   }
}


function powerNum()
{
    var inp14= parseInt (document.getElementById("inp14").value);
    var inp15= parseInt (document.getElementById("inp15").value);

    var result11= document.getElementById("result11");
    var power=1;
   
   for ( var i=0; i<=inp15; i++)
   {
    power= power * inp14;
      document.getElementById("result11").innerHTML=power;
   }
   

}



/*function avg()
{
    var inp16= (document.getElementById("inp16").value);
    var result12= document.getElementById("result12");

    var avrArr=[];
   var newArr= avrArr.push(inp16.split(""));
    
    var summ=0;
    for(var i=0; i<avrArr.length; i++){
        summ+=avrArr[i];
        result12.innerHTML=summ;
        console.log(summ)
    }

    console.log( avrArr);

}
*/
function avg()
{
   //var inp16= (document.getElementById("inp16").value);
    var result12= document.getElementById("result12");

    var avrArr=[1, 2, 4, 5, 6, 2, 2, 7, 8, 9];
    var summ=0;
    for(var i=0; i<avrArr.length; i++){
        summ+=avrArr[i] ;
        summ1=summ/10;
        result12.innerHTML= summ1;
        console.log(summ)
    }
    console.log( avrArr);

}


function reverse()
{

    var avrArr=[1, 2, 4, 5, 6, 2, 2, 7, 8, 9];
    var ray= avrArr.reverse();
    console.log(ray);


    var newArray= [];
    newArray.push(ray);
    console.log(newArray);//ليه في الكونسول بيكتب ال length=1

}

function intger(inp17){
    var inp17= parseInt (document.getElementById("inp17").value);

    var result14= document.getElementById("result14");

    result14.innerHTML=inp17;

}



function avgSum(x,y,z){

    var sumFunc= (x+y+z)/3;
   
     document.getElementById("result15").innerHTML=sumFunc;

}










