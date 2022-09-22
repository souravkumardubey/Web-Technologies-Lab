// Common solution
// const submit = document.querySelector('.submit');
// const  input = document.getElementById('input');

// let text;

// submit.addEventListener('click',function(e){
//     e.preventDefault();
//     if ( input?.value ) {
        
//         let inputData = input.value;
//         // console.log(inputData);
//         let lines = input.value.split("\n");
//         let words = input.value.split(" ");
//         console.log(words.length + lines.length - 1)
//         let characters = words.reduce(function(acc,word){
//             return acc + Number(word.length);
//         },0)

//         console.log(characters);

//         console.log(lines.length);
//         alert(`characters ${characters}
//         words : ${words.length + lines.length - 1}
//         lines : ${lines.length}`)

//     }
// })

// Question 2 Solution
const emp_id = document.getElementById("emp_id")
const full_name = document.getElementById("full_name")
const father_name = document.getElementById("father_name")
const degree = document.getElementById("degree")
const company = document.getElementById("company")
const exp = document.getElementById("exp")
const special = document.getElementById("special")
const mob = document.getElementById("mob")
const mail = document.getElementById("mail")
const submit = document.getElementById('submit');

const date1 = document.getElementById('date1')
const date2 = document.getElementById('date2')

submit.addEventListener('click',function(e){
    e.preventDefault();

    if ( emp_id.value && full_name.value && father_name.value && degree.value && company.value && exp.value && special.value && mob.value && mail.value ) {

        // validating emp id
        if ( emp_id.value.slice(0,5) !== 'MLRIT' || emp_id.value.length !== 9 ) {
            alert("Enter correct employee id.");
        } 
        
        // validate fullname
        if ( full_name.value === undefined ) {
            alert("Enter full name.")
        }
        const name_words = full_name.value.split(" ");
        if ( name_words.length < 2 ) {
            alert("Enter full name correctly.")
   +2     }

        // validate father name
        if ( father_name.value === undefined ) {
            alert("Enter full name.")
        }
        const fathername_words = father_name.value.split(" ");
        if ( fathername_words.length < 2 ) {
            alert("Enter father name correctly.")
        }

        // validate experience
        if ( isNaN(exp.value) ) {
            alert("Experience should be in integer type")
        }
7
        // validate number
        if ( isNaN(mob.value) ) {
            alert("Mobile number should be a number");
        }
        else if ( mob.value.length !== 10 ) {
            alert("Mobile number should be a a 10digit number");
        }

        // validate email id
        if ( mail.value.search(/^[a-z]*[0-9]+@[a-z]*.(com||in)$/)) {
            alert("Enter a valid email id");
        }

        if ( date1.value === undefined ) {
            alert("Enter date1 value")
        }
        if ( date2.value === undefined ) {
            alert("Enter date2 value")
        }

        // check dates
        // date1 extraction
        const day = Number(date1.value.slice(0,2));
        const month = Number(date1.value.slice(3,5));
        const year = Number(date1.value.slice(6,10));
        
        // date2 extraction
        const day2 = Number(date2.value.slice(0,2));
        const month2 = Number(date2.value.slice(3,5));
        const year2 = Number(date2.value.slice(6,10));

        if ( year > year2 || month > month2 || day > day2 ) {
            alert("Date1 is greater than Date2. It should be less");
        }
        alert("Valid Dates")
        console.log("Form Submitted")
    } else {
        alert("Please enter all the details")
    }
})