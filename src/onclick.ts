export function onclick():void{
    const canvas = new UICanvas();
    const text = new UIText(canvas);
    text.value = "";


    const textInput = new UIInputText(canvas);
    textInput.width = "20%";
    textInput.height = "50px";
    textInput.vAlign = "bottom";
    textInput.hAlign = "center";
    textInput.fontSize = 10;
    textInput.placeholder = "Enter num1 and sum";
    textInput.positionY = "200px";
    textInput.isPointerBlocker = true;
    textInput.onTextSubmit = new OnTextSubmit((x) => {
        const text = new UIText(textInput);
        var max: number = 10;
        var arr1 = x.text.split(',');
        var sum: number = 0;
        for(let i=0; i<arr1.length-1 ; i++){
            sum = sum + parseInt(arr1[i]);
        }
        var num2: number = Math.floor(Math.random() * (max + 1));
        sum = sum + num2;
        var sum_entered: number = parseInt(x.text[x.text.length-1]);
        
        if(sum == sum_entered){
            text.value = "true, Your entered sum matches the resultant sum"  
        }else{
            text.value = "False, Your entered sum is " + sum_entered + " and resultant sum is " + sum;
        }

        text.width = "100%";
        text.height = "20px";
        text.vAlign = "top";
        text.hAlign = "left";
    }) 

}