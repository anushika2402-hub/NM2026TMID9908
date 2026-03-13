// Micro Goals Tracker Program using print()

var goals = [];

// Function to add a goal
function addGoal(goalName) {
    var goal = {
        name: goalName,
        completed: false
    };
    goals.push(goal);
    print("Goal Added: " + goalName);
}

// Function to complete a goal
function completeGoal(goalName) {
    for (var i = 0; i < goals.length; i++) {
        if (goals[i].name == goalName) {
            goals[i].completed = true;
            print("Goal Completed: " + goalName);
            return;
        }
    }
    print("Goal not found");
}

// Function to display goals
function showGoals() {
    print("Micro Goals List:");

    for (var i = 0; i < goals.length; i++) {
        var status;

        if (goals[i].completed == true) {
            status = "Completed";
        } else {
            status = "Pending";
        }

        print((i + 1) + ". " + goals[i].name + " - " + status);
    }
}

// Program execution
addGoal("Read 10 pages");
addGoal("Exercise 15 minutes");
addGoal("Drink 2 liters water");

completeGoal("Exercise 15 minutes");

showGoals();
