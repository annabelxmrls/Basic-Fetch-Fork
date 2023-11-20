//part 2: fetch color
fetch("https://www.colr.org/json/color/latest")
    .then((response) => response.json())
    .then((color) => {
        const newColor = color.colors[0].hex;

fetch("houses.json")
    .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = "";

        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        data.forEach((house) => {
            let family = house.members.join(" | ");

            // generate the html snippet for one array item
            //to be added to the "html" temp holder.
            let objInfo = `
            <div class="box" style="background-color: #${newColor}">
                <dl class="list">
                    <dt class="house"><span>House:</span> ${house.name}</dt>
                    <dd class="folks">Members: ${family}</dd>
                </dl>
            </div>
            `;

            html += objInfo;
        });

        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = html;
    })
    .catch((err) => console.log("Oops, the data isn't working!", err));
    //this only runs if there is an error during the above process
})
.catch((err) => console.log("Oops, the color isn't working!",err));
//this only runs if there is an error during the above process