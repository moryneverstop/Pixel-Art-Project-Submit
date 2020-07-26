
var height, width, color;
//when size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (grid) {
    grid.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    makeGrid(height, width);
})


function makeGrid(row, col) {
    $("table tr").remove();
     // loop over rows and columns.
    for (var i = 1; i <= row; i++) {
        $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
        for (var j = 1; j <= col; j++) {
            $("#table" + i).append("<td></td>");
        }
    }

    // This will add color to the boxes
    $("td").click(function addColor() {
        color = $("#colorPicker").val();

        if ($(this).attr("style")) {
            $(this).removeAttr("style")
    } else {
        $(this).attr("style", "background-color:" + color);
    }
    })
}
