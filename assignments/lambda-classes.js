// CODE here for your Lambda Classes

// three types of people

//person base class
class Person{
    //receives name, age, location properties
    constructor(attrs){
        this.name = attrs.name,
        this.age = attrs.age,
        this.location = attrs.location
    }
    //recieves speak method
    speak(){
        //speak method logs out 'Hello my name is Fred, I am from Bedrock' name and location are from the properties
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

// instructors
class Instructor extends Person{
    constructor(InstructorAbilities){
        //uses the same props as base person
        super(InstructorAbilities);
        //has the unique props of `specialty` what the Instructor is good at i.e. 'redux', `favLanguage` i.e. 'JavaScript, Python, Elm etc.', `catchPhrase` i.e. `Don't forget the homies`
        this.specialty = InstructorAbilities.specialty,
        this.favLanguage = InstructorAbilities.favLanguage,
        this.catchPhrase = InstructorAbilities.catchPhrase
    }
    /* has the following methods: `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.,`grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
    */
    demo(subject){
        return `'Today we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

//students
class Student extends Person{
    constructor(StudentAbilities){
        // have the same props as base person
        super(StudentAbilities);
        //properties: `previousBackground` i.e. what the Student used to do before Lambda School, `className` i.e. CS132, `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
        this.previousBackground = StudentAbilities.previousBackground,
        this.className = StudentAbilities.className,
        this.favSubjects = StudentAbilities.favSubjects
    }
    //methods: `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one. `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`, `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
    listsSubjects(){
        this.favSubjects.forEach(element => {
            return console.log(element);
        });
    }
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${student.name} has begun springt challenge on ${subject}.`
    }
}

//project managers
class ProjectManager extends Instructor{
    constructor(abilities){
        //ProjectManagers are extensions of Instructors
        super(abilities);
        //ProjectManagers have the following unique props: `gradClassName`: i.e. CS1, `favInstructor`: i.e. Sean
        this.gradClassName = abilities.gradClassName,
        this.faveInstructor = abilities.faveInstructor
    }
    //methods: `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!`​,`debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
    standUp(name, channel){
        return `${name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(name, subject){
        return `${name} debugs ${student.name}'s code on ${subject}.`
    }
}


