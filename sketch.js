var plants = [];
var buttons = [];
var activePlantIndex = null;

var bee;
var direction = 90;

function isModalActive() {
    return activePlantIndex !== null
}
var modalStatus;

var fillColor = 255;
var borderColor = 255;
var imgsfondo;

var isBeginning = true;
var isAboutOpen = false;

var buttondance;
var buttonclose;
var buttonabout;
var buttonstart;

function preload() {
    honeysources = [
        {
            tree: loadImage("./assets/tree_0.png"),
            treeWindow: loadImage("./assets/treeWindow_0.png"),
            title: 'Maple Tree',
            desc: 'Latin name:\nAcer Rubrum \n\nBlooming Months:\nMar - Apr \n\nPollen Color:\nGray-Brown',
            x: windowWidth * 33 / 40,
            y: windowHeight * 31 / 40,
            w: windowWidth / 10,
            zoomRatio: 1.1,
            value: 1,
            dancetitle: 'Sickle',
            dancedesc: 'Distance: 50-150 meters\n\nThe sickle dance is a transitional\ndance between the round dance\nand the waggle dance and it is used\nwhen the distance to the forage\nis somewhere inbetween.\nIt does not give directional information.',
            danceimg: loadImage("./assets/sickle.png"),
            points: [{
                    x: windowWidth * 21.4 / 40,
                    y: windowHeight * 21.7 / 32,
                },
                {
                    x: windowWidth * 23 / 40,
                    y: windowHeight * 19 / 32,
                },
                {
                    x: windowWidth * 24 / 40,
                    y: windowHeight * 17 / 32,
                },
                {
                    x: windowWidth * 25.5 / 40,
                    y: windowHeight * 13 / 32,
                },
                {
                    x: windowWidth * 21.8 / 40,
                    y: windowHeight * 13 / 32,
                },
                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 15 / 32,
                },
                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 18 / 32,
                },
                {
                    x: windowWidth * 18.6 / 40,
                    y: windowHeight * 21.6 / 32,
                },

                {
                    x: windowWidth * 16.8 / 40,
                    y: windowHeight * 19 / 32,
                },

                {
                    x: windowWidth * 15.9 / 40,
                    y: windowHeight * 17 / 32,
                },

                {
                    x: windowWidth * 14.5 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 18.2 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 19 / 40,
                    y: windowHeight * 15 / 32,
                },

                  ],
        },
        {
            tree: loadImage("./assets/tree_7.png"),
            treeWindow: loadImage("./assets/treeWindow_7.png"),
            title: 'Pumpkin',
            desc: 'Latin name:\nCurcubita Pepo \n\nBlooming Months:\nJul - Aug \n\nPollen Color:\nBright-Yellow',
            x: windowWidth * 18 / 40,
            y: windowHeight * 29.5 / 40,
            w: windowWidth / 20,
            zoomRatio: 1.1,
            value: 1,
            dancetitle: 'Sickle',
            dancedesc: 'Distance: 50-150 meters\n\nThe sickle dance is a transitional\ndance between the round dance\nand the waggle dance and it is used\nwhen the distance to the forage\nis somewhere inbetween.\nIt does not give directional information.',
            danceimg: loadImage("./assets/sickle.png"),
            points: [{
                    x: windowWidth * 21.4 / 40,
                    y: windowHeight * 21.7 / 32,
                },
                {
                    x: windowWidth * 23 / 40,
                    y: windowHeight * 19 / 32,
                },
                {
                    x: windowWidth * 24 / 40,
                    y: windowHeight * 17 / 32,
                },
                {
                    x: windowWidth * 25.5 / 40,
                    y: windowHeight * 13 / 32,
                },
                {
                    x: windowWidth * 21.8 / 40,
                    y: windowHeight * 13 / 32,
                },
                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 15 / 32,
                },
                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 18 / 32,
                },
                {
                    x: windowWidth * 18.6 / 40,
                    y: windowHeight * 21.6 / 32,
                },

                {
                    x: windowWidth * 16.8 / 40,
                    y: windowHeight * 19 / 32,
                },

                {
                    x: windowWidth * 15.9 / 40,
                    y: windowHeight * 17 / 32,
                },

                {
                    x: windowWidth * 14.5 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 18.2 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 19 / 40,
                    y: windowHeight * 15 / 32,
                },

                  ],
        },
        {
            tree: loadImage("./assets/tree_1.png"),
            treeWindow: loadImage("./assets/treeWindow_1.png"),
            title: 'Weeping Willow',
            desc: 'Latin name:\nSalix Baylonica \n\nBlooming Months:\nFeb-Apr \n\nPollen Color:\nYellow',
            x: windowWidth * 23 / 40,
            y: windowHeight * 22 / 40,
            w: windowWidth / 10,
            zoomRatio: 1.1,
            value: 3,
            dancetitle: 'Waggle',
            dancedesc: 'Distance: 100 meters - 3 kilometers  \n\nThe waggle dance includes information about\nfood direction. The orientation of the dance \nis based on the current sun azimuth,\nand the energy required to fly to\nthe goal is indicated by the length \nof the dance.',
            danceimg: loadImage("./assets/waggle.png"),
            points: [
                {
                    x: windowWidth * 22 / 40,
                    y: windowHeight * 10 / 32,
                },
                {
                    x: windowWidth * 23.8 / 40,
                    y: windowHeight * 13 / 32,
                },
                {
                    x: windowWidth * 24 / 40,
                    y: windowHeight * 16 / 32,
                },
                {
                    x: windowWidth * 24 / 40,
                    y: windowHeight * 19 / 32,
                },
                {
                    x: windowWidth * 22 / 40,
                    y: windowHeight * 22 / 32,
                },
                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 21 / 32,
                },
                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 19 / 32,
                },
                {
                    x: windowWidth * 19 / 40,
                    y: windowHeight * 17 / 32,
                },

                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 15 / 32,
                },

                {
                    x: windowWidth * 19 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 11 / 32,
                },

                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 10 / 32,
                },

                {
                    x: windowWidth * 16.2 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 16 / 40,
                    y: windowHeight * 16 / 32,
                },

                {
                    x: windowWidth * 16.2 / 40,
                    y: windowHeight * 19 / 32,
                },

                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 22 / 32,
                },
            ],
        },
        {
            tree: loadImage("./assets/tree_2.png"),
            treeWindow: loadImage("./assets/treeWindow_2.png"),
            title: 'Siberian Squill',
            desc: 'Latin name:\nScilla Siberica \n\nBlooming Months:\nMar-Apr\n\nPollen Color:\nSteel Blue',
            x: windowWidth * 25.5 / 40,
            y: windowHeight * 37 / 40,
            w: windowWidth / 4,
            zoomRatio: 1.1,
            value: 3,
            dancetitle: 'Round',
            dancedesc: '25-100 meters\n\nThe round dance does not give\ndirectional information. Bees fly out of the hive\nin all directions searching for the food source,\nthey are guided by the fragrance\nof the flower left on the dancing bee\nand by the smell of the scout bee itself.',
            danceimg: loadImage("./assets/Round.png"),
            points: [
                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 20.4 / 32,
                },
                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 16 / 32,
                },
                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 24 / 40,
                    y: windowHeight * 17 / 32,
                },
                {
                    x: windowWidth * 23 / 40,
                    y: windowHeight * 12 / 32,
                },
                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 10 / 32,
                },
                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 11 / 32,
                },
                {
                    x: windowWidth * 15.8 / 40,
                    y: windowHeight * 15 / 32,
                },

                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 21 / 32,
                },

                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 22 / 32,
                },

                ],
        },
        {
            tree: loadImage("./assets/tree_3.png"),
            treeWindow: loadImage("./assets/treeWindow_3.png"),
            title: 'Dandelion',
            desc: 'Latin name:\nTaraxacum Officinale \n\nBlooming Months:\nApr-May\n\nPollen Color:\nRed yellow orange',
            x: windowWidth * 23 / 40,
            y: windowHeight * 26 / 40,
            w: windowWidth / 10,
            zoomRatio: 1.1,
            value: 5,
            dancetitle: 'Waggle',
            dancedesc: 'Distance: 100 meters - 3 kilometers  \n\nThe waggle dance includes information about\nfood direction. The orientation of the dance \nis based on the current sun azimuth,\nand the energy required to fly to\nthe goal is indicated by the length \nof the dance.',
            danceimg: loadImage("./assets/waggle.png"),
            points: [
                {
                    x: windowWidth * 22 / 40,
                    y: windowHeight * 10 / 32,
                },
                {
                    x: windowWidth * 23.8 / 40,
                    y: windowHeight * 13 / 32,
                },
                {
                    x: windowWidth * 24 / 40,
                    y: windowHeight * 16 / 32,
                },
                {
                    x: windowWidth * 24 / 40,
                    y: windowHeight * 19 / 32,
                },
                {
                    x: windowWidth * 22 / 40,
                    y: windowHeight * 22 / 32,
                },
                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 21 / 32,
                },
                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 19 / 32,
                },
                {
                    x: windowWidth * 19 / 40,
                    y: windowHeight * 17 / 32,
                },

                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 15 / 32,
                },

                {
                    x: windowWidth * 19 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 11 / 32,
                },

                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 10 / 32,
                },

                {
                    x: windowWidth * 16.2 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 16 / 40,
                    y: windowHeight * 16 / 32,
                },

                {
                    x: windowWidth * 16.2 / 40,
                    y: windowHeight * 19 / 32,
                },

                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 22 / 32,
                },
            ],
        },
        {
            tree: loadImage("./assets/tree_4.png"),
            treeWindow: loadImage("./assets/treeWindow_4.png"),
            title: 'American Sycamore',
            desc: 'Latin name:\nPlatanus \n\nBlooming Months:\nApr-May\n\nPollen Color:\nLight olive',
            x: windowWidth * 11.5 / 40,
            y: windowHeight * 29 / 40,
            w: windowWidth / 9,
            zoomRatio: 1.1,
            value: 1,
            dancetitle: 'Sickle',
            dancedesc: 'Distance: 50-150 meters\n\nThe sickle dance is a transitional\ndance between the round dance\nand the waggle dance and it is used\nwhen the distance to the forage\nis somewhere inbetween.\nIt does not give directional information.',
            danceimg: loadImage("./assets/sickle.png"),
            points: [{
                    x: windowWidth * 21.4 / 40,
                    y: windowHeight * 21.7 / 32,
                },
                {
                    x: windowWidth * 23 / 40,
                    y: windowHeight * 19 / 32,
                },
                {
                    x: windowWidth * 24 / 40,
                    y: windowHeight * 17 / 32,
                },
                {
                    x: windowWidth * 25.5 / 40,
                    y: windowHeight * 13 / 32,
                },
                {
                    x: windowWidth * 21.8 / 40,
                    y: windowHeight * 13 / 32,
                },
                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 15 / 32,
                },
                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 18 / 32,
                },
                {
                    x: windowWidth * 18.6 / 40,
                    y: windowHeight * 21.6 / 32,
                },

                {
                    x: windowWidth * 16.8 / 40,
                    y: windowHeight * 19 / 32,
                },

                {
                    x: windowWidth * 15.9 / 40,
                    y: windowHeight * 17 / 32,
                },

                {
                    x: windowWidth * 14.5 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 18.2 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 19 / 40,
                    y: windowHeight * 15 / 32,
                },

                  ],

        },
        {
            tree: loadImage("./assets/tree_5.png"),
            treeWindow: loadImage("./assets/treeWindow_5.png"),
            title: 'Canola',
            desc: 'Latin name:\nBrassica Napus \n\nBlooming Months:\nMay-Jun\n\nPollen Color:\nLemon',
            x: windowWidth * 15 / 40,
            y: windowHeight,
            w: windowWidth / 3.6,
            zoomRatio: 1.1,
            value: 5,
            dancetitle: 'Round',
            dancedesc: '25-100 meters\n\nThe round dance does not give\ndirectional information. Bees fly out of the hive\nin all directions searching for the food source,\nthey are guided by the fragrance\nof the flower left on the dancing bee\nand by the smell of the scout bee itself.',
            danceimg: loadImage("./assets/Round.png"),
            points: [
                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 20.4 / 32,
                },
                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 16 / 32,
                },
                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 24 / 40,
                    y: windowHeight * 17 / 32,
                },
                {
                    x: windowWidth * 23 / 40,
                    y: windowHeight * 12 / 32,
                },
                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 10 / 32,
                },
                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 11 / 32,
                },
                {
                    x: windowWidth * 15.8 / 40,
                    y: windowHeight * 15 / 32,
                },

                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 21 / 32,
                },

                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 22 / 32,
                },

                ],

        },
        {
            tree: loadImage("./assets/tree_6.png"),
            treeWindow: loadImage("./assets/treeWindow_6.png"),
            title: 'Oak',
            desc: 'Latin name:\nCurcubita Pepo \n\nBlooming Months:\nJul-Aug\n\nPollen Color:\nBright yellow',
            x: windowWidth * 16 / 40,
            y: windowHeight * 22 / 40,
            w: windowWidth / 10,
            zoomRatio: 1.1,
            value: 1,
            dancetitle: 'Waggle',
            dancedesc: 'Distance: 100 meters - 3 kilometers  \n\nThe waggle dance includes information about\nfood direction. The orientation of the dance \nis based on the current sun azimuth,\nand the energy required to fly to\nthe goal is indicated by the length \nof the dance.',
            danceimg: loadImage("./assets/waggle.png"),
            points: [
                {
                    x: windowWidth * 22 / 40,
                    y: windowHeight * 10 / 32,
                },
                {
                    x: windowWidth * 23.8 / 40,
                    y: windowHeight * 13 / 32,
                },
                {
                    x: windowWidth * 24 / 40,
                    y: windowHeight * 16 / 32,
                },
                {
                    x: windowWidth * 24 / 40,
                    y: windowHeight * 19 / 32,
                },
                {
                    x: windowWidth * 22 / 40,
                    y: windowHeight * 22 / 32,
                },
                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 21 / 32,
                },
                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 19 / 32,
                },
                {
                    x: windowWidth * 19 / 40,
                    y: windowHeight * 17 / 32,
                },

                {
                    x: windowWidth * 21 / 40,
                    y: windowHeight * 15 / 32,
                },

                {
                    x: windowWidth * 19 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 20 / 40,
                    y: windowHeight * 11 / 32,
                },

                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 10 / 32,
                },

                {
                    x: windowWidth * 16.2 / 40,
                    y: windowHeight * 13 / 32,
                },

                {
                    x: windowWidth * 16 / 40,
                    y: windowHeight * 16 / 32,
                },

                {
                    x: windowWidth * 16.2 / 40,
                    y: windowHeight * 19 / 32,
                },

                {
                    x: windowWidth * 18 / 40,
                    y: windowHeight * 22 / 32,
                },
            ],

        },
    ];

    buttonsources = [
        {
            buttonimg: loadImage("./assets/button_1.png"), //CLOSE
            x: windowWidth * 30.8 / 32,
            y: windowHeight * 1.8 / 32,
            w: windowWidth / 33,
            onClick: function () {
                if (isModalActive()) {
                    plants[activePlantIndex].reset();
                    activePlantIndex = null;
                }
                modalStatus = 0;
            }
        },
        {
            buttonimg: loadImage("./assets/button_2.png"), //START
            x: windowWidth / 2,
            y: windowHeight * 22 / 32,
            w: windowWidth / 22,
            onClick: function () {
                isBeginning = false;
            }
        },
        {
            buttonimg: loadImage("./assets/button_3.png"), //DANCE
            x: windowWidth / 2,
            y: windowHeight * 25 / 32,
            w: windowWidth / 15,
            onClick: function () {
                modalStatus = 1;
            }

        },
        {
            buttonimg: loadImage("./assets/button_4.png"), //ABOUT
            x: windowWidth * 1.5 / 32,
            y: windowHeight * 1.3 / 32,
            w: windowWidth / 18,
            onClick: function () {
                isBeginning = false;
                modalStatus = 3;
            }
        },
    ];


    imgvalue = loadImage("./assets/value.png");
    imgsfondo = loadImage("./assets/sfondo.jpg");
}



function setup() {
    imageMode(CENTER);
    textFont('AlverataIrregular');
    createCanvas(windowWidth, windowHeight);
    numtree = 0;

    honeysources.forEach(function (honeysource, index) {
        plants.push(new Plant(index, honeysource));
    });

    buttonclose = new Button(buttonsources[0]);
    buttonstart = new Button(buttonsources[1]);
    buttondance = new Button(buttonsources[2]);
    buttonabout = new Button(buttonsources[3]);

    bee = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
    bee.addAnimation("floating", './assets/ape1.png', './assets/ape6.png');
}


function drawOverlay() {
    push();
    noStroke();
    fill(0, 200)
    rect(0, 0, windowWidth, windowHeight);
    pop();
}

function drawBeginning() {
    drawOverlay();

    push();
    textAlign(CENTER);
    fill('#ffcf48');
    textSize(windowWidth / 30);
    text("Beehaviour", width / 2, height / 3);
    pop();

    push();
    textAlign(CENTER);
    fill(255);
    textSize(windowWidth / 90);
    text("A honey bee colony consists of many thousands\nof individuals, all of which help to perform the work that  \n allows their colony to thrive. In this complex  \ncommunication system successful foragers perform \ndifferent type  of dance to direct the colony's foraging effort \n toward nectar and pollen producing sources.\nTake a look around and find out more.", width / 2, height / 2.45);
    pop();

    buttonstart.display();
}


function drawModal0() {
    plants[activePlantIndex].showModal0();
}

function drawModal1() {
    plants[activePlantIndex].showModal1();
    if (plants[activePlantIndex].showPoints) {
        drawPoints();
    }
}

function drawModal2() {
    plants[activePlantIndex].showModal2();
    drawPoints();
}

function drawModal3() {
    buttonclose.display();

    push();
    textAlign(CENTER);
    fill(255);
    textSize(windowWidth / 35);
    text("About", width / 2, height / 3);
    pop();

    push();
    textAlign(CENTER);
    fill(255);
    textSize(windowWidth / 90);
    text("University project built in p5.js\nCreative Coding course\n Politecnico di Milano\na.y. 2017-2018\n\n\nMade by:\nFrancesca Binda\nValentina Caiola\nMargherita Motta", width / 2, height / 2.5);
    pop();
}

function drawPoints() {
    plants[activePlantIndex].points.forEach(function (point) {
        point.display();
    });

    plants[activePlantIndex].points.forEach(function (point, index) {
        if (point.enabled && !point.visited) {
            var isInRange = point.checkIfInRange(mouseX, mouseY);
            if (isInRange) {
                point.visited = true;
                var next = plants[activePlantIndex].points[index + 1];
                if (next) {
                    next.enabled = true;
                } else {
                    modalStatus = 2;
                }
            }
        }
    });
}


function draw() {
    console.log(modalStatus);

    push();
    imageMode(CORNER);
    image(imgsfondo, 0, 0, windowWidth, windowHeight);
    pop();

    plants.forEach(function (plant) {
        plant.display();
    });

    if (isModalActive()) {
        drawOverlay();
        if (modalStatus == 0) {
            drawModal0();
            buttondance.display();
            buttonclose.display();
        } else if (modalStatus == 1) {
            drawModal1();
            buttonclose.display();
        } else if (modalStatus == 2) {
            drawModal2();
            buttonclose.display();
        }
    }

    if (isBeginning) {
        drawBeginning();
    };

    if (modalStatus == 3) {
        if (!isModalActive()) {
            drawOverlay();
        }
        drawModal3();
    }

    if (!isBeginning) {
        buttonabout.display();
    }

    direction += 2;
    bee.attractionPoint(.2, mouseX + windowWidth / 5.5, mouseY + windowHeight / 7);
    bee.maxSpeed = 5;
    scale(0.7)
    drawSprites();

    if (windowWidth / windowHeight < 1.75 || windowWidth / windowHeight > 2.2) {
        push();
        background(7, 77, 82);
        textSize(width / 30);
        textAlign(CENTER);
        //translate(windowWidth/2, windowHeight/2);
        fill(255);
        text("Please,\nextend and refresh\nyour browser window.", windowWidth / 5 * 3.5, height / 5 * 3.5);
        fill(0, 102, 153);
        pop();
    }
}

function mouseClicked() {

    if (buttonabout.hasBeenClicked()) {
        buttonabout.onClick();
    };

    if (!isModalActive()) {
        plants.forEach(function (plant) {
            if (plant.hasBeenClicked() && isBeginning == false) {
                plant.onClick();
            }
        });
        if (buttonclose.hasBeenClicked()) {
            buttonclose.onClick();
        }

    } else {

        if (buttonclose.hasBeenClicked()) {
            buttonclose.onClick();
        }
        if (buttondance.hasBeenClicked()) {
            buttondance.onClick();
        }
    }

    if (buttonstart.hasBeenClicked()) {
        buttonstart.onClick();
    }
}


function Button(buttonsource) {
    this.x = buttonsource.x;
    this.y = buttonsource.y;
    this.w = buttonsource.w;
    this.img = buttonsource.buttonimg;
    this.onClick = buttonsource.onClick;

    this.display = function () {
        image(this.img, this.x, this.y, this.w, this.w);
    }

    this.hasBeenClicked = function () {
        var d = dist(mouseX, mouseY, this.x, this.y);
        return d < this.w / 2
    }
}

function Point(x, y, enabled) {
    this.x = x;
    this.y = y;
    this.r = 12;
    this.enabled = !!enabled;
    this.visited = false;

    this.display = function () {
        if (this.visited) {
            fill(fillColor);
        } else {
            noFill();
        }
        strokeWeight(2);
        if (this.enabled) {
            stroke(borderColor)
        } else {
            stroke(150);
        }
        ellipse(this.x, this.y, this.r);
    }

    this.checkIfInRange = function (mouseX, mouseY) {
        return dist(this.x, this.y, mouseX, mouseY) < this.r;
    }
}

function Plant(index, source) {
    this.index = index;
    this.x = source.x;
    this.y = source.y;
    this.w = source.w;
    this.zoomRatio = source.zoomRatio;
    this.value = source.value;
    this.img = source.tree;
    this.treeWindow = source.treeWindow;
    this.desc = source.desc;
    this.title = source.title;
    this.dancetitle = source.dancetitle;
    this.dancedesc = source.dancedesc;
    this.danceimg = source.danceimg;
    this.bigX = windowWidth / 1.5;
    this.showPoints = false;
    this.points = source.points.map(function (point, index) {
        return new Point(point.x, point.y, index === 0);
    });

    this.reset = function () {
        this.bigX = windowWidth / 1.5;
        this.showPoints = false;
        this.points = source.points.map(function (point, index) {
            return new Point(point.x, point.y, index === 0);
        });
    }

    this.display = function () {
        var width = this.w;
        if (this.hasBeenClicked() && !isBeginning) {
            width = this.w * this.zoomRatio;
        }
        image(this.img, this.x, this.y, width, width);
    }

    this.hasBeenClicked = function () {
        var d = dist(mouseX, mouseY, this.x, this.y);
        return d < this.w / 2
    }

    this.onClick = function () {
        activePlantIndex = this.index;
        modalStatus = 0;
    }

    this.showModal0 = function () {
        image(this.treeWindow, windowWidth / 1.5, windowHeight / 2.1, windowWidth * 6 / 32, windowWidth * 6 / 32);

        push();
        fill('#ffcf48');
        noStroke();
        textSize(windowWidth / 38);
        text(this.title, windowWidth / 3, windowHeight / 3.1);
        pop();

        for (var i = 0; i < this.value; i++) {
            image(imgvalue, windowWidth / 2.93 + i * windowWidth / 35, windowHeight / 2.65, windowWidth / 50, windowWidth / 50);
        }

        push();
        fill(255);
        noStroke();
        textSize(windowWidth / 90);
        text(this.desc, windowWidth / 3, windowHeight / 2.2);
        pop();
    }

    this.showModal1 = function () {
        if (this.bigX > windowWidth / 5) {
            this.bigX = this.bigX - 10;
        } else if (this.bigX = windowWidth / 5.2) {
            this.showPoints = true;

            push();
            textAlign(CENTER);
            fill('#white');
            noStroke();
            textSize(windowWidth / 60);
            text('follow the trail', windowWidth / 2, (windowHeight * 2.5) / 16);
            pop();

        }


        image(this.treeWindow, this.bigX, windowHeight / 2.1, windowWidth * 6 / 32, windowWidth * 6 / 32);
    }


    this.showModal2 = function () {
        image(this.treeWindow, this.bigX, windowHeight / 2.1, windowWidth * 6 / 32, windowWidth * 6 / 32);

        image(this.danceimg, windowWidth / 2, windowHeight / 2, windowWidth * 9 / 32, windowHeight * 12 / 32);

        push();
        fill('#ffcf48');
        noStroke();
        textSize(windowWidth / 38);
        text(this.dancetitle, (windowWidth * 23) / 32, (windowHeight * 6) / 16);
        pop();

        push();
        noStroke();
        fill(255);
        textSize(windowWidth / 95);
        text(this.dancedesc, (windowWidth * 23) / 32, (windowHeight * 7.5) / 16);
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}
