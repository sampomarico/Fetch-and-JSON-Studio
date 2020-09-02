// TODO: add code here

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
           const div = document.getElementById("container");
            for(let i = 0; i < json.length; i++) {
                div.innerHTML = `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[0].firstName} ${json[0].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[0].hoursInSpace}</li>
                                <li>Active: ${json[0].active}</li>
                                <li>Skills: ${json[0].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[0].picture}>
                    </div>
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[1].firstName} ${json[1].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[1].hoursInSpace}</li>
                                <li>Active: ${json[1].active}</li>
                                <li>Skills: ${json[1].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[1].picture}>
                    </div>
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[2].firstName} ${json[2].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[2].hoursInSpace}</li>
                                <li>Active: ${json[2].active}</li>
                                <li>Skills: ${json[2].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[2].picture}>
                    </div>
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[3].firstName} ${json[3].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[3].hoursInSpace}</li>
                                <li>Active: ${json[3].active}</li>
                                <li>Skills: ${json[3].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[3].picture}>
                    </div>
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[4].firstName} ${json[4].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[4].hoursInSpace}</li>
                                <li>Active: ${json[4].active}</li>
                                <li>Skills: ${json[4].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[4].picture}>
                    </div>
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[5].firstName} ${json[5].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[5].hoursInSpace}</li>
                                <li>Active: ${json[5].active}</li>
                                <li>Skills: ${json[5].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[5].picture}>
                    </div>
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[6].firstName} ${json[6].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[6].hoursInSpace}</li>
                                <li>Active: ${json[6].active}</li>
                                <li>Skills: ${json[6].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[6].picture}>
                    </div>
                `;
            };  
        });
    });
});