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
    demo(subject = 'JavaScript'){
        return `Today we are learning about ${subject}.`
    }
    grade(student = Elliot, subject = 'JavaScript'){
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
        
        this.favSubjects.forEach(function(favSubjects) {
            console.log(favSubjects);
        });
        
        return `My favorite subjects are ${this.favSubjects}.`;
    }
    PRAssignment(subject = 'JavaScript'){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject = 'JavaScript'){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

//project managers
class ProjectManager extends Instructor{
    constructor(abilities){
        //ProjectManagers are extensions of Instructors
        super(abilities);
        //ProjectManagers have the following unique props: `gradClassName`: i.e. CS1, `favInstructor`: i.e. Sean
        this.gradClassName = abilities.gradClassName,
        this.favInstructor = abilities.favInstructor
    }
    //methods: `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!`​,`debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
    standUp(channel = '#Web25_Tim'){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(Student = Elliot, subject = "JavaScript"){
        return `${this.name} debugs ${Student.name}'s code on ${subject}.`
    }
}

//instructor objects

const Dan  = new Instructor({
    name: 'Dan',
    location: 'USA',
    age: 32,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Let's code!`
});

const Josh = new Instructor({
    name: 'Josh',
    location: 'USA',
    age: 30,
    favLanguage: 'JavaScript',
    specialty: 'Full-stack',
    catchPhrase: `Let's have fun!`
});

const Brit = new Instructor({
    name: 'Brit',
    location: 'Canada',
    age: 29,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `It's getting cold out here, eh?`
});

//student objects

const Elliot = new Student({
    name: 'Elliot',
    location: 'Michigan',
    age: 24,
    previousBackground: 'Worked as a Press Op',
    className: 'Web25',
    favSubjects: ['Python', 'Javascript', 'Ruby']
});

const Chance = new Student({
    name: 'Chance',
    location: 'California',
    age: 50,
    previousBackground: 'DVD writing',
    className: 'Web25',
    favSubjects: ['Python', 'Javascript', 'Ruby', 'Dreamweaver']
});

const Cameron = new Student({
    name: 'Cameron',
    location: 'The land that was fought over',
    age: 28,
    previousBackground: 'Lenin',
    className: 'Web25',
    favSubjects: ['HTML', 'CSS', 'Javascript']
});

//project manager objects

const Tim = new ProjectManager({
    name: 'Tim',
    location: 'Oregon',
    age: 28,
    specialty: 'JavaScript',
    favLanguage: 'Java',
    catchPhrase: 'Cool, cool!',
    gradClassName: 'Web25',
    favInstructor: 'Josh'
});

const Tommy = new ProjectManager({
    name: 'Tommy', 
    location: '?',
    age: 'guess' ,
    specialty: 'Node.Js', 
    favLanguage: 'C#', 
    catchPhrase: `What's sleep?`, 
    gradClassName: 'Web21',
    favInstructor: 'Luis'
});

const Bartholemew = new ProjectManager({
    name: 'Bartholomew',
    location: 'Over the rainbow',
    age: 25,
    specialty: 'Java', 
    favLanguage: 'C', 
    catchPhrase: `Who's HTML?`,
    gradClassName: 'Web22',
    favInstructor: 'Brit'
});

//console.logs

console.log(Brit.demo());
console.log(Brit.grade());
console.log(Elliot.listsSubjects());
console.log(Elliot.PRAssignment());
console.log(Elliot.sprintChallenge());
console.log(Tim.standUp());
console.log(Tim.debugsCode());
