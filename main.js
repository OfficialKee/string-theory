console.log('xify loop')

function xify(string){
    let newString = '';
    for(i=0; i<string.length; i++){
         newString += 'x';
    }return newString
}
console.log(xify('hello'))
//--------------------------------------------------
console.log('\n');
console.log('yellingchars loop');

function yellingChars(str){
    let newString = '';
    for (i=0; i<str.length; i++){
           newString += str[i];
           newString += '!';
     } return newString;
}
console.log(yellingChars('hello'));
//----------------------------------------------------
console.log('\n');
console.log('indexChars');

function indexedChars(str){
    let newString = '';
    for (i=0; i<str.length; i++){
        newString += i;
        newString += str[i]

    } return newString
}
console.log(indexedChars('hello'))
//-----------------------------------------------------

console.log('\n')
console.log('exclaim!')

function exclaim(str){
        let newString = " ";
        for (let i = 0; i < str.length; i++){
            if (str[i] === '?' || str[i] === '.') {
                newString += '!';
            } 
            else newString += str[i];
        } 
        return newString;
    }
    console.log(exclaim('What are you doing? Are you a fool?'))

//--------------------------------------------------
console.log('\n')
console.log('truncate')

function truncate(str){
    let newString = '';
    for (i=0; i<15; i++){
        newString += str[i];
    }newString += '...'
    return newString
}console.log(truncate('What are you doing over there?'))

//--------------------------------------------------------
console.log('\n');
console.log('ciEmailify')

function ciEmailify(str,str2){
    return (`${str}.${str2}@codeimmersives.com`)
}
console.log(ciEmailify('Kee','Maloney'))
//----------------------------------------------------
console.log('\n')
console.log('reverse')

function reverse(str){
    let newString = '';
    for (i=str.length-1;i>-1; i--){
        newString += str[i]
    } return newString
}console.log(reverse('CodeImmersives'))

//-----------------------------------------
console.log('\n')
console.log('vowels')
let newString = ''
function vowels(str){
    for(i=0; i<str.length; i++){
        if (str[i].toLowerCase()=== 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u'){
            newString += str[i]
        }
    } return newString
}console.log(vowels('hello goodmorning'))

//----------------------------------------

console.log('\n')
console.log('stretch goals!!!')
//--------------------------------------
console.log('\n')
console.log('crazyCase')

function crazyCase(str){
    let str2 = '';
        for (i=0; i<str.length; i++){
            if(i % 2 === 0){
                str2 += str[i].toLowerCase()
            } else if (i % 2 !== 0){
                str2 += str[i].toUpperCase()
            }
            
        }return str2

}console.log(crazyCase('hello goodmorning'))
//---------------------------------------
console.log('\n')
console.log('titleCase')

function titleCase(str){
    let str2 = ''
    for (i=0; i<str.length; i++){
        if(str[i] === ' '){
            str2 += str[i];
            str2 += str[i+=1].toUpperCase();
        } else if (i === 0){
            str2 += str[i].toUpperCase();
        }else{
            str2 += str[i]
        }

    }return str2
}console.log(titleCase('welcome to code immersives'))
//-------------------------------------------
console.log('\n')
console.log('camelCase')
function camelCase(str){
    let str2 = ''
    for (i=0; i<str.length; i++){
        if(str[i] === ' '){
            str2 += str[i+=1].toUpperCase()
        }else {
            str2 += str[i]
        }
    }return str2
}console.log(camelCase('well yeah of course'))
//--------------------------------------------------

console.log('\n')
console.log('crazyCase2')
function crazyCase2(str){
    let str2 = ''
    let cnt = 0
    for (i=0; i<str.length; i++){
        if(str[i] === ' '){
            cnt += 1
        }if (cnt % 2 === 0){
            str2 += str[i].toUpperCase();
        }if (cnt % 2 !== 0){
            str2 += str[i].toLowerCase()
        } cnt += 1
        }return str2
}console.log(crazyCase2('multiple words here'))
