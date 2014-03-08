// List of Filters to use in Regular Expressions These can be used in other
// languages other than JavaScript. The Square Brackets [] signify optional 
// parameters


// Filter a single email address eg. sample@example.com 
var emailfilter    =  /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i

// Filter a multiple email address in field seperaed by space or coma (,) eg.  
// sample@example.com[, sample@example.com[ sample@example.com ...] ]
var emailfiltermulti =  /^^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)(( *,* *)\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)( *,* *))*$/i

// Filter that requires two names eg. John Doe [...] The total names must not exceed 30 characters and must not be 
// less than a total of 5 characters
var namefilter     = /^[A-Za-z\-]{2,20} [A-Za-z\- ]{5,30}$/

//Password filter that must be 8-16 characters long, contain at least one capital letter, 
// small letter, number and at least one of the following symbols (!@#$&*-_)
var passwordfilter = /^(?=.*[A-Z]{1,})(?=.*[!@#$&*\-_]{1,})(?=.*[0-9]{1,})(?=.*[a-z]+).{8,16}$/

// Date filter that checks a date in the the MM/DD/YYYY OR MM-DD-YYYY formats ranging from 1940 - 2005
var datefilter     = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19[4-9]{1}[0-9]{1}|200[1-5])/

// Phone No. filter that requires the leading country code plus (+) and must be between 8 - 24 numbers, 
// brackets and dashes in length eg +254[(]722[)]000[-]000 or +254722000000/+254(722)000000/+254(722)000-000/+254-722-000-000 etc
// or whatever format is common to whatever country 
var phonefilter   = /^\+[0-9_\-\(\)\s]{8,24}$/i 