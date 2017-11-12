/**
 * Created by Jacob on 2017-11-06.
 */

var counter = 0;
function myFunction(e) {
    if(e.keyCode == 13){
        var add_element = $("#AddToList").val();
        var node = document.createElement("LI");

        node.textContent = add_element;
        node.className = "toDo";
        document.getElementById("myList").append(node);
        counter++;
        $("#AddToList").val("");
        console.log(counter);
    }
    $("#items span").text("To Do Items: "+ counter);
}


function clearAll() {
    $("#myList").empty();
    counter = 0;
    $("#items span").text("To Do Items: "+ counter);
}
