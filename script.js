let robot = {
    speed: 0,
    battery: 100,
    temperature: 35,
    status: "Idle"
};

// update UI
function updateUI() {
    document.getElementById("speed").innerText = robot.speed;
    document.getElementById("battery").innerText = robot.battery.toFixed(1) + "%";
    document.getElementById("temp").innerText = robot.temperature.toFixed(1) + "°C";
    document.getElementById("status").innerText = robot.status;
}

// simulate sensor changes
setInterval(() => {
    robot.battery -= 0.02;
    robot.temperature += (Math.random() - 0.5);

    if (robot.battery < 20) {
        robot.status = "Low Battery ⚠";
    }

    updateUI();
}, 1000);

// control system
function command(action) {
    if (action === "forward") {
        robot.speed = 5;
        robot.status = "Moving Forward";
    }

    if (action === "backward") {
        robot.speed = -5;
        robot.status = "Moving Backward";
    }

    if (action === "stop") {
        robot.speed = 0;
        robot.status = "Stopped";
    }

    updateUI();
}

// initial render
updateUI();
