/**
 * Count Space in a String
 */
let institute = "Institue of computer science & technology";

//define spaceCount method
spaceCount = (instituteName) => {
    let count = 0;

    for (let i = 0; i < instituteName.length; i++) {

        if (instituteName[i].includes(" ")) {
            count++;
        }

    }
    return count;
}
//calling the method and pasing argument
let result = spaceCount(institute);
console.log(result);