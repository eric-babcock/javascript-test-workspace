var cm=0;


// display 0 when 0
function resultBasic(){
    //clear tag
    document.getElementById("result").innerHTML='';
    //function variables
    let resultContainer = document.createElement("div");
    let conversion = cm;
    // convert
    resultContainer.innerText=conversion;
    // add conversion to div
    document.getElementById("result").appendChild(resultContainer);
}

function resultCM2IN(){//cm to inches
    //clear tag
    document.getElementById("result").innerHTML='';
    //function variables
    let resultContainer = document.createElement("div");
    let initialValue = parseInt(document.getElementById("input-value").value);
    let convertedValue = initialValue * .393701
    console.log(initialValue)
    // convert
    resultContainer.innerText=convertedValue  + ' cm';
    // add conversion to div
    document.getElementById("result").appendChild(resultContainer);
}

function resultIN2CM(){//in to cm
    //clear tag
    document.getElementById("result").innerHTML='';
    //function variables
    let resultContainer = document.createElement("div");
    let initialValue = parseInt(document.getElementById("input-value").value);
    let convertedValue = initialValue * 2.54
    console.log(initialValue)
    // convert
    resultContainer.innerText=initialValue +' cm = '+ convertedValue  + ' in';
    // add conversion to div
    document.getElementById("result").appendChild(resultContainer);
}

function result(){
    let value = document.getElementById("unit").value;
    if (value == 'in'){
        resultIN2CM()
    }
    else if (value =='cm'){
        resultCM2IN() 
    }
    else 
    resultBasic()
}