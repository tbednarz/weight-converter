function calc() {
    let loadedAmount = document.getElementById("loaded").value; //grabs the value for loaded weight
    let unloadedAmount = document.getElementById("unloaded").value; //grabs value for unloaded weight
    let final = document.getElementById("result").value = Math.round(`${(loadedAmount - unloadedAmount) * 0.0005}` * 100)/100; //variable for your final result including formula in tons
    let resultInPounds = document.getElementById('result').value = Math.round(`${(loadedAmount - unloadedAmount)}`);//variable for final result in lbs

    if (!loadedAmount) {
        document.getElementById("loaded").value = alert("waiting for an initial value for loaded weight"); //alert if there is no input in loaded field and form is submitted
    } else {
        loadedAmount = parseInt(loadedAmount); 
    }
    if(!unloadedAmount) {
        document.getElementById("unloaded").value = alert("waiting for initial value for unloaded weight"); //alert if there is no input in unloaded field and form is submitted
    } else {
        unloadedAmount = parseInt(unloadedAmount);
    }
    if( loadedAmount < unloadedAmount) {
        alert("loaded amount must be greater than unloaded amount"); // if the loaded weight is less than the returning unloaded weight alert is given
    }
    document.getElementById("result").innerHTML = final + " Tons or " + resultInPounds + " lbs"; //pushes final results into the results form.


}