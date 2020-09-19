$("#createNewTaskButton").click(function() {
    newPage = "createNewTask";
    uiLoader();
    var date = new Date();
    $("#creationDateCreateNewTask").html(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
});

$("#startNewSprint").ready(function() {
    $("#startNewSprint").hide(0);
});

$("#startNewSprintButton").click(function() {
    newPage = "startNewSprint";
    uiLoader();
    getNewSprintId();
});

$("#backToMainFromCreateNewTask").click(function() {
    newPage = "dashboard";
    uiLoader();
});

$("#backToMainFromNewSprint").click(function() {
    newPage = "dashboard";
    uiLoader();
});

$("#dashboard").ready(function() {
    var result = getDashboardData();
    console.log(result);
});

$("#Business").click(function() {
    selectedCategory = "Business";
    newPage = "taskPage";
    uiLoader();
    setDataIntoCard();
});

$("#Development").click(function() {
    selectedCategory = "Development";
    newPage = "taskPage";
    uiLoader();
    setDataIntoCard();

});

$("#Marketing").click(function() {
    selectedCategory = "Marketing";
    newPage = "taskPage";
    uiLoader();
    setDataIntoCard();
});

$("#backlogButton").click(function() {
    selectedStatus = "Completed";
    newPage = "taskPage";
    uiLoader();
    setDataIntoCard();
});

$("#totalCompletedTask").click(function() {
    selectedStatus = "Completed";
    newPage = "taskPage";
    uiLoader();
    setDataIntoCard();
});

$("#filterSprint").click(function() {
    var filterSprintNumber = $("#filterSprintNumber").val();
    sprintFilter(filterSprintNumber);
});


$("#taskPage").ready(function() {
    $("#taskPage").hide(0);
});

$("#createNewTask").ready(function() {
    $("#createNewTask").hide(0);
});


$("#editTask").ready(function() {
    $("#editTask").hide(0);
});

$("#logWork").ready(function() {
    $("#logWork").hide(0);
});

$("#submitCreateNewTask").click(function() {
    var title = $("#titleCreateNewTask").val();
    var des = $("#desCreateNewTask").val();
    var priority = $("#priorityCreateNewTask").val();
    var difficulty = $("#difficultyCreateNewTask").val();
    var creator = $("#creatorCreateNewTask").val();
    var assignee = $("#assigneeCreateNewTask").val();
    var estimatedTime = $("#estimatedTimeCreateNewTask").val();
    var status = $("#statusCreateNewTask").val();
    var category = $("#categoryCreateNewTask").val();
    var storyPointNumber = $("#storyPointNumber").val();
    var createNewTaskSprintNumber = $("#createNewTaskSprintNumber").val();

    console.log(title);
    console.log(des);
    console.log(priority);
    console.log(difficulty);
    console.log(creator);
    console.log(assignee);
    console.log(estimatedTime);
    console.log(status);
    console.log(category);
    console.log(createNewTaskSprintNumber);
    console.log(storyPointNumber);

    var createNewTaskFunction = firebase.functions().httpsCallable('createNewTask');
    createNewTaskFunction({ Title: title, Description: des, Priority: priority, Difficulty: difficulty, Creator: creator, Assignee: assignee, EstimatedTime: estimatedTime, Status: status, Category: category, CreateNewTaskSprintNumber: createNewTaskSprintNumber, StoryPointNumber: storyPointNumber }).then(result => {
        console.log(result.data);
        newPage = "dashboard";
        uiLoader();
    });
});

$("#submitNewSprint").click(function() {
    var startDate = $("#startdateNewSprint").val();
    var endDate = $("#enddateNewSprint").val();
    var status = $("#statusNewSprint").val();

    console.log(startDate);
    console.log(endDate);
    console.log(status);

    var startNewSprintFunction = firebase.functions().httpsCallable('startNewSprint');
    startNewSprintFunction({ StartDate: startDate, EndDate: endDate, Status: status }).then(result => {
        console.log(result.data);
        newPage = "dashboard";
        uiLoader();
    });
});

$("#logWorkSubmit").click(function() {
    var logWorkDone = $("#logWorkDone").val();
    var logWorkComment = $("#logWorkComment").val();
    var logWorkStatus = $("#logWorkStatus").val();
    logWorkDone = parseInt(logWorkDone) + parseInt(logWorkRT);

    var logWorkFunction = firebase.functions().httpsCallable('logWork');
    logWorkFunction({ LogWorkDone: logWorkDone, LogWorkStatus: logWorkStatus, LogWorkComment: logWorkComment }).then(result => {
        console.log(result.data);
        newPage = "dashboard";
        uiLoader();
    });

});