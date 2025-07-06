/**
 * convert upper case every
 * arry element
 */
const day = ['sun', 'mon', 'tue'];
const newArray = [];
for (let me of day) {
    me = me.charAt(0).toLocaleUpperCase() + me.substring(1);
    newArray.push(me);

}
console.log(newArray);