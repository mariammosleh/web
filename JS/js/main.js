


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
