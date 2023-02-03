"use strict"



/* set up the drawing canvas */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

/* Draw the border around the canvas */
clearCanvas();

/* Utility function to clear an SVG named "drawing" and put a border around it. You could make this more generally useful by making it clear an SVG with any name! */
function clearCanvas() {
    drawing.selectAll('svg>*').remove();
    drawing.append("rect")
        .attr("width", drawing.attr("width"))
        .attr("height", drawing.attr("height"))
        .attr("fill", "none")
        .attr("stroke", "red");
}

/***** Write your lab4 homework below here *****/

/*Here is the function to draw the caterpillar cartoon using the code from project one
the function is meant to draw the cartoon relative draw the cartoon relative to what the coordinates were from the previous canvas*/
function processBug(CaterPillarX, CaterPillarY) {


    /*caterpillar cartoon*/

    /*bugs head component*/
    let BugHead = drawing.append('ellipse')
        /*using the previous coordinate positions of our cartoon I added the value of the user's inputs (X,Y)
       to each coordinate value of the caterpillar's body, so they all move equidistantly based on a user's input.
       I think there's a more efficient way but couldn't find a breakthrough in that approach*/
        .attr("cx", CaterPillarX + 80)
        .attr("cy", CaterPillarY + 295)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    /*bug body*/
    let BugBody1 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 130)
        .attr("cy", CaterPillarY + 310)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");

    let BugBody2 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 160)
        .attr("cy", CaterPillarY + 280)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");


    let BugBody3 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 200)
        .attr("cy", CaterPillarY + 310)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/

        .attr("fill", "#5DB87D");

    let BugBody4 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 235)
        .attr("cy", CaterPillarY + 300)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    let BugBody5 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 263)
        .attr("cy", CaterPillarY + 270)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");

    let BugBody6 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 295)
        .attr("cy", CaterPillarY + 290)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    let BugBody7 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 325)
        .attr("cy", CaterPillarY + 315)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");

    let BugBody8 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 355)
        .attr("cy", CaterPillarY + 295)
        .attr("rx", 20)
        .attr("ry", 20)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    let BugBody9 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 370)
        .attr("cy", CaterPillarY + 280)
        .attr("rx", 15)
        .attr("ry", 15)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");



    /*bugs antennae*/
    let BugAntenna = drawing.append('line')
        .attr("x1", CaterPillarX + 55)
        .attr("y1", CaterPillarY + 250)
        .attr("x2", CaterPillarX + 65)
        .attr("y2", CaterPillarY + 268.5)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let BugAntenna2 = drawing.append('line')
        .attr("x1", CaterPillarX + 55)
        .attr("y1", CaterPillarY + 250)
        .attr("x2", CaterPillarX + 30)
        .attr("y2", CaterPillarY + 250)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let BugAntenna3 = drawing.append('line')
        .attr("x1", CaterPillarX + 80)
        .attr("y1", CaterPillarY + 270)
        .attr("x2", CaterPillarX + 70)
        .attr("y2", CaterPillarY + 250)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let BugAntenna4 = drawing.append('line')
        .attr("x1", CaterPillarX + 70)
        .attr("y1", CaterPillarY + 250)
        .attr("x2", CaterPillarX + 50)
        .attr("y2", CaterPillarY + 245.5)
        .attr("stroke", "black")
        .attr('stroke-width', .75);


    /*mouth component*/

    let BugMouth = drawing.append('line')
        .attr("x1", CaterPillarX + 80)
        .attr("y1", CaterPillarY + 308)
        .attr("x2", CaterPillarX + 60)
        .attr("y2", CaterPillarY + 308)
        .attr("stroke", "black")
        .attr('stroke-width', 2);


    /*bugs eye component*/

    let BugEyLeft = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 50)
        .attr("cy", CaterPillarY + 285)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", "black");

    let BugEyeRight = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 70)
        .attr("cy", CaterPillarY + 285)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", "black");
}

/*Here is the function to draw the butterfly cartoon using the code from project one
the function is meant to draw the cartoon relative to what the coordinates were from the previous canvas*/
function processButterFly(ButterFlyX, ButterFlyY) {
    /*butterfly cartoon*/

    /*bottom wing component*/
    let BottomWingLeft = drawing.append('polyline')
        /*using the previous coordinate positions of our cartoon I added the value of the user's inputs (X,Y)
        to each coordinate value of the butterfly's body, so they all move equidistantly based on a user's input.
         I landed on a guess here that each of these 6 numbers were grouped as X,Y coordinates - luckily my bet was right*/
        .attr("points", closedPolygon(ButterFlyX + 200, ButterFlyY + 100, ButterFlyX + 200, ButterFlyY + 200, ButterFlyX + 150, ButterFlyY + 100))
        .attr("transform", "translate(170,20)")
        /*the following hexcode is the closest orange I could find to the original drawing*/
        .attr("fill", "#F88D53");

    let BottomWingRight = drawing.append('polyline')
        .attr("points", closedPolygon(ButterFlyX + 100, ButterFlyY + 200, ButterFlyX + 150, ButterFlyY + 100, ButterFlyX + 100, ButterFlyY + 100))
        .attr("transform", "translate(280,20)")
        /*the following hexcode is the closest color I could find to the original drawing*/
        .attr("fill", "#F88D53");

    /*top wing component*/
    let TopWingRight = drawing.append('polyline')
        .attr("points", closedPolygon(ButterFlyX + 350, ButterFlyY + 330, ButterFlyX + 320, ButterFlyY + 260, ButterFlyX + 265, ButterFlyY + 350))
        .attr("transform", "translate(110,-235)")
        .attr("fill", "yellow");

    let TopWingLeft = drawing.append('polyline')
        .attr("points", closedPolygon(ButterFlyX + 250, ButterFlyY + 330, ButterFlyX + 350, ButterFlyY + 350, ButterFlyX + 300, ButterFlyY + 270))
        .attr("transform", "translate(25,-235)")
        .attr("fill", "yellow");


    /*butterfly body component*/
    let ButterflyBody = drawing.append('rect')
        .attr("x", ButterFlyX + 370)
        .attr("y", ButterFlyY + 60)
        .attr("width", 10)
        .attr("height", 150)
        .attr("fill", "lightgreen");

    /*butterfly antennae*/
    let ButterflyAntennaLeft = drawing.append('line')
        .attr("x1", ButterFlyX + 350)
        .attr("y1", ButterFlyY + 25)
        .attr("x2", ButterFlyX + 365)
        .attr("y2", ButterFlyY + 50)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let ButterflyAntennaRight = drawing.append('line')
        .attr("x1", ButterFlyX + 400)
        .attr("y1", ButterFlyY + 25)
        .attr("x2", ButterFlyX + 385)
        .attr("y2", ButterFlyY + 50)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    /*butterfly eyes*/
    let ButterflyEyeLeft = drawing.append('ellipse')
        .attr("cx", ButterFlyX + 365)
        .attr("cy", ButterFlyY + 60)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "red");

    let ButterflyEyeRight = drawing.append('ellipse')
        .attr("cx", ButterFlyX + 385)
        .attr("cy", ButterFlyY + 60)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "red");

}

/*Here is the function to draw both the caterpillar and butterfly cartoon using the code from project one
the function puts into consideration both axis of each cartoon */
function processBoth(CaterPillarX, CaterPillarY, ButterFlyX, ButterFlyY) {
    /*caterpillar cartoon*/

    /*bugs head component*/
    let BugHead = drawing.append('ellipse')
        /*using the previous coordinate positions of our cartoon I added the value of the user's inputs (X,Y)
       to each coordinate value of the caterpillar's body, so they all move equidistantly based on a user's input.
       I think there's a more efficient way but couldn't find a breakthrough in that approach*/
        .attr("cx", CaterPillarX + 80)
        .attr("cy", CaterPillarY + 295)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    /*bug body*/
    let BugBody1 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 130)
        .attr("cy", CaterPillarY + 310)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");

    let BugBody2 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 160)
        .attr("cy", CaterPillarY + 280)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");


    let BugBody3 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 200)
        .attr("cy", CaterPillarY + 310)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/

        .attr("fill", "#5DB87D");

    let BugBody4 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 235)
        .attr("cy", CaterPillarY + 300)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    let BugBody5 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 263)
        .attr("cy", CaterPillarY + 270)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");

    let BugBody6 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 295)
        .attr("cy", CaterPillarY + 290)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    let BugBody7 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 325)
        .attr("cy", CaterPillarY + 315)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");

    let BugBody8 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 355)
        .attr("cy", CaterPillarY + 295)
        .attr("rx", 20)
        .attr("ry", 20)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    let BugBody9 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 370)
        .attr("cy", CaterPillarY + 280)
        .attr("rx", 15)
        .attr("ry", 15)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");



    /*bugs antennae*/
    let BugAntenna = drawing.append('line')
        .attr("x1", CaterPillarX + 55)
        .attr("y1", CaterPillarY + 250)
        .attr("x2", CaterPillarX + 65)
        .attr("y2", CaterPillarY + 268.5)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let BugAntenna2 = drawing.append('line')
        .attr("x1", CaterPillarX + 55)
        .attr("y1", CaterPillarY + 250)
        .attr("x2", CaterPillarX + 30)
        .attr("y2", CaterPillarY + 250)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let BugAntenna3 = drawing.append('line')
        .attr("x1", CaterPillarX + 80)
        .attr("y1", CaterPillarY + 270)
        .attr("x2", CaterPillarX + 70)
        .attr("y2", CaterPillarY + 250)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let BugAntenna4 = drawing.append('line')
        .attr("x1", CaterPillarX + 70)
        .attr("y1", CaterPillarY + 250)
        .attr("x2", CaterPillarX + 50)
        .attr("y2", CaterPillarY + 245.5)
        .attr("stroke", "black")
        .attr('stroke-width', .75);


    /*mouth component*/

    let BugMouth = drawing.append('line')
        .attr("x1", CaterPillarX + 80)
        .attr("y1", CaterPillarY + 308)
        .attr("x2", CaterPillarX + 60)
        .attr("y2", CaterPillarY + 308)
        .attr("stroke", "black")
        .attr('stroke-width', 2);


    /*bugs eye component*/

    let BugEyLeft = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 50)
        .attr("cy", CaterPillarY + 285)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", "black");

    let BugEyeRight = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 70)
        .attr("cy", CaterPillarY + 285)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", "black");


    /*butterfly cartoon*/

    /*bottom wing component*/
    let BottomWingLeft = drawing.append('polyline')
        /*using the previous coordinate positions of our cartoon I added the value of the user's inputs (X,Y)
        to each coordinate value of the butterfly's body, so they all move equidistantly based on a user's input.
         I landed on a guess here that each of these 6 numbers were grouped as X,Y coordinates - luckily my bet was right*/
        .attr("points", closedPolygon(ButterFlyX + 200, ButterFlyY + 100, ButterFlyX + 200, ButterFlyY + 200, ButterFlyX + 150, ButterFlyY + 100))
        .attr("transform", "translate(170,20)")
        /*the following hexcode is the closest orange I could find to the original drawing*/
        .attr("fill", "#F88D53");

    let BottomWingRight = drawing.append('polyline')
        .attr("points", closedPolygon(ButterFlyX + 100, ButterFlyY + 200, ButterFlyX + 150, ButterFlyY + 100, ButterFlyX + 100, ButterFlyY + 100))
        .attr("transform", "translate(280,20)")
        /*the following hexcode is the closest color I could find to the original drawing*/
        .attr("fill", "#F88D53");

    /*top wing component*/
    let TopWingRight = drawing.append('polyline')
        .attr("points", closedPolygon(ButterFlyX + 350, ButterFlyY + 330, ButterFlyX + 320, ButterFlyY + 260, ButterFlyX + 265, ButterFlyY + 350))
        .attr("transform", "translate(110,-235)")
        .attr("fill", "yellow");

    let TopWingLeft = drawing.append('polyline')
        .attr("points", closedPolygon(ButterFlyX + 250, ButterFlyY + 330, ButterFlyX + 350, ButterFlyY + 350, ButterFlyX + 300, ButterFlyY + 270))
        .attr("transform", "translate(25,-235)")
        .attr("fill", "yellow");


    /*butterfly body component*/
    let ButterflyBody = drawing.append('rect')
        .attr("x", ButterFlyX + 370)
        .attr("y", ButterFlyY + 60)
        .attr("width", 10)
        .attr("height", 150)
        .attr("fill", "lightgreen");

    /*butterfly antennae*/
    let ButterflyAntennaLeft = drawing.append('line')
        .attr("x1", ButterFlyX + 350)
        .attr("y1", ButterFlyY + 25)
        .attr("x2", ButterFlyX + 365)
        .attr("y2", ButterFlyY + 50)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let ButterflyAntennaRight = drawing.append('line')
        .attr("x1", ButterFlyX + 400)
        .attr("y1", ButterFlyY + 25)
        .attr("x2", ButterFlyX + 385)
        .attr("y2", ButterFlyY + 50)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    /*butterfly eyes*/
    let ButterflyEyeLeft = drawing.append('ellipse')
        .attr("cx", ButterFlyX + 365)
        .attr("cy", ButterFlyY + 60)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "red");

    let ButterflyEyeRight = drawing.append('ellipse')
        .attr("cx", ButterFlyX + 385)
        .attr("cy", ButterFlyY + 60)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "red");
}
/*my button id for the first drawing is createcaterpillar, event listener is added so when a user clicks
on the button the draw caterpillar function is executed*/
document.getElementById("createCaterpillarButton").addEventListener("click", drawCaterpillar)

/*here is another function to draw the caterpillar once more but this time relative to the value inputs of my variables xInput1 and yInput1*/
function drawCaterpillar() {
    let x = document.getElementById("xInput1").value
    let y = document.getElementById("yInput1").value
    /*initially I checked the console to see what my inputs were being read as. They were seen as strings 
    and not numbers so I parseIntegered them to be read as numbers-searched online*/
    x = parseInt(x)
    y = parseInt(y)
    clearCanvas()
    /*this then executes our previous processbug function which was just to draw the caterpillar in
    its origin point but now the function takes into command the inputs of x,y when a user interacts
    with the text inputs*/
    processBug(x, y)
    console.log(x, y)
}

document.getElementById("createButterflyButton").addEventListener("click", drawButterfly)

/*here is another function to draw the butterfly once more but this time relative to the value inputs of my variables xInput2 and yInput2*/

function drawButterfly() {
    let x = document.getElementById("xInput2").value
    let y = document.getElementById("yInput2").value
    x = parseInt(x)
    y = parseInt(y)
    clearCanvas()
    processButterFly(x, y)
    console.log(x, y)
}

document.getElementById("createBoth").addEventListener("click", drawBoth)

/*Bonus section
here is a new function to draw both, taking into consideration all 4 inputs (xInput1,yInput2, xInput2, yInput2) 
as well as the "processBoth" function to initially make the two cartoons appear simultaneously.*/

function drawBoth() {
    let x1 = document.getElementById("xInput1").value
    let y1 = document.getElementById("yInput1").value
    let x2 = document.getElementById("xInput2").value
    let y2 = document.getElementById("yInput2").value
    x1 = parseInt(x1)
    y1 = parseInt(y1)
    x2 = parseInt(x2)
    y2 = parseInt(y2)
    clearCanvas()
    processBoth(x1, y1, x2, y2)
    console.log(x1, y1, x2, y2)
}

;

