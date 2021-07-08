function kilometerToMeter(kelometer){
    var meter = kelometer * 1000;
    return meter;
}

function budgetCalculator(watch,phone,laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrise = watchPrice + phonePrice + laptopPrice;
    return totalPrise;
}

function hotelCost(day) {
    var totalCost = 0;
    if (day<=10) {
        totalCost = day * 100;
    }
    else if (day <=20) {
        var firstPart = 10*100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart;
    }
    else{
        var firstPart = 10*100;
        var secondPart= 10* 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
    return totalCost;
}

function megaFriend(arr) {
    var maxString = arr[0].length;
    var bigFriend=arr[0];
    for (var i=1; i<arr.length; i++){
        var maximum =arr[i].length;
        if (maximum > maxString) {
            bigFriend = arr[i];
            maxString = maximum;
           
        }
    }
    return bigFriend;
}


