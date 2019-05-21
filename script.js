window.addEventListener("load", function(){


    let buttons = document.getElementsByTagName('button');
    let images = document.getElementById('mainContextColumn').getElementsByTagName('img');

    let coockiesList = document.cookie.split(';');


    for(let i = 0; i < buttons.length ; i++){
        console.log(images);
        let button = buttons[i];
        let image = images[i];
        let showBool;
        let coockieItemValue = getCookie("button"+i);
        console.log(">>>OriginalCoockieItem : "+coockieItemValue);



        if(coockieItemValue == null){
            showBool = "0";
        }else{
            coockieItemValue = coockieItemValue.trimLeft()
            console.log("OriginalCoockieItem : "+coockieItemValue);

            showBool = coockieItemValue.substring(0, coockieItemValue.length);

            console.log("button"+i+" showBool: "+showBool);

            if(showBool == "1"){
                image.classList.toggle("show");
            }else{

            }
        }

        image.classList.toggle("show");

        let turn = showBool;
        button.addEventListener("click", function() {
            image.classList.toggle("show");

            console.log("index of button in button"+i);
            if(turn == 1){
                turn = 0;
            }else{
                turn = 1;
            }
            console.log("button"+i+" : "+turn);
            document.cookie = "button"+i+"="+turn+";";
        });
    }
});



function getCookie(name)
{
    let coockies = document.cookie;
    coockiesArray = coockies.split(';');
    for(let i = 0; i < coockiesArray.length ; i++){
        coockie = coockiesArray[i];
        coockie = coockie.trimLeft().trimRight();

        let coockieName = coockie.substring(0, coockie.indexOf("="));
        let coockieValue = coockie.substring(coockie.indexOf("=")+1, coockie.length);

        if(name == coockieName){
            return coockieValue;
        }
    }
}