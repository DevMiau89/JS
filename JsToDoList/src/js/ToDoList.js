/**
 * Created by Jacob on 2017-11-06.
 */


function myFunction(e) {
    var counter = 0;
    if(e.keyCode == 13){
        var add_element = $("#AddToList").val();
        var node = document.createElement("LI");

        node.TextContent = add_element;
        node.className = "toDo";
        document.getElementById("myList").append(node);
        counter++;
        add_element.value = "";
    }
    $("#items").innerText = counter;
}

