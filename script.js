function add(){
var a= Number(document.getElementById("num1").value);
var b= Number(document.getElementById("num2").value);
var c=a+b;
document.getElementById("num").value=c
}

//caculate the value subract

function sub(){
    var a= Number(document.getElementById("num1").value);
    var b= Number(document.getElementById("num2").value);
    var c=a-b;
    document.getElementById("num").value=c
    }

    //calcualte the value multiply

    function multi(){
        var a= Number(document.getElementById("num1").value);
        var b= Number(document.getElementById("num2").value);
        var c=a*b;
        document.getElementById("num").value=c
        }

        //calculate the value divided

        function divide(){
            var a= Number(document.getElementById("num1").value);
            var b= Number(document.getElementById("num2").value);
            var c=a/b;
            document.getElementById("num").value=c
            }

            //clear the value

            function reset(){
                document.getElementById("num1").value=0;
                document.getElementById("num2").value=0;
                document.getElementById("num").value=0;
            }            
        
    

