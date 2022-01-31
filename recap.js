// function

function hasMoonRisen(moon) {
    if (moon > 9 && moon < 16) {
        return true;
    }
    else {
        return false;
    }
}
var specificTime = 10;
var result = hasMoonRisen(specificTime);
console.log('The moon has risen', result);