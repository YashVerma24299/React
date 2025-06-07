function genTicket(n) {
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr) {
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    if(sum%15==0){
        return true;
    }
    return false;
}

export {genTicket, sum};