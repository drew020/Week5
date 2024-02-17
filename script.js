//#region Objects and array

// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];
//#endregion Objects and array

//#region main process
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
//#endregion main process

//#region Functions
function getLearnerData(course, ag, submissions) {

    //Function Variables
    let vCourseInfoName = CourseInfo.name;
    let vAssignmentgruopName = AssignmentGroup.name;

    let vTotalNumberOfStudent = 0;
    let vUniqueLearnerIDCount = [];
    let vTotalNumberOfAssignments = 0;
    let vTotalNumberOfPossibleAssignmentTurnins = 0;

    //#region Display general purpose
    console.log(`---Data Summery---`);
    //#endregion Display general purpose

    //#region Display Course Info
    console.log(`Course Info: ${vCourseInfoName}`);
    //#endregion Display Course Info

    //#region Display relevant assignment groups of submissions
    console.log(`Assignment Group: ${vAssignmentgruopName}`);
    //#endregion Display relevant assignment groups of submissions

    //#region Display Statistic div
    console.log(`\n---Data Statistics---`);
    //#endregion Display Statistic div

    //#region display total number of students
    for (let i = 0; i < submissions.length; i++) {
        let j;

        if (vUniqueLearnerIDCount.includes(submissions[i].learner_id)) {
            //Debug
            //console.log("got match");
        }
        else {
            //console.log("not match");
            vUniqueLearnerIDCount.push(submissions[i].learner_id)
            j++
        }
        //debug
        //console.log(vLocalID)
    }

    vTotalNumberOfStudent = vUniqueLearnerIDCount.length;
    console.log(`Total number of student in Submissions: ${vUniqueLearnerIDCount.length}`);
    //#endregion display total number of students

    //#region display total number of possible Assignments per student
    vTotalNumberOfAssignments = ag.assignments.length;
    console.log(`Total number of possible assignments in submission: ${vTotalNumberOfAssignments}`)
    //#endregion display total number of possible Assignments per student

    //#region display current total number of assignments turned in of total possible total
    vTotalNumberOfPossibleAssignmentTurnins = vTotalNumberOfStudent * vTotalNumberOfAssignments;
    console.log(`Total possible number of assigments turn-in: ${vTotalNumberOfPossibleAssignmentTurnins}`)
    //#endregion display current total number of assignments turned in of total possible total

    //#region Total number of assignments turned-in to total possible

    //#region Total number of assignments turned-in to total possible

    // display total Assignments turned in on-time vs total possible
    // display total Assignments turned in late vs total possible
    // display avg total assignment turn in of student
    // display avg grade of student of submissions.
    // display avg grade per assignment of submissions.

    // display student information case by case
    //     display student overall grade avg
    //     display student ranking grade
    //     dispaly number of assignments turned in vs total number of assignments
    //     display assignment information case by case
    //         display assignment ID
    //         display if assignment was submitted
    //             display grade of assignment vs avg grade in submissions
    //             display days need to complete vs avg days needed to complete in submissions



}

function isAssignmentOntime() {
    let rBool;
    return (rBool);
}
//#endregion Functions


