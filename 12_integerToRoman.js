var intToRoman = function(num) {
    let roman = "";
    let thousand = Math.floor(num / 1000);
    switch (thousand) {
        case 0: 
            break;
        case 1:
            roman += "M";
            break;
        case 2:
            roman += "MM";
            break;
        case 3:
            roman += "MMM";
            break;
    }
    num = num % 1000;
    let hundred = Math.floor(num / 100);
    switch (hundred) {
        case 0:
            break;
        case 1:
            roman += "C";
            break;
        case 2:
            roman += "CC";
            break;
        case 3:
            roman += "CCC";
            break;
        case 4:
            roman += "CD";
            break;
        case 5:
            roman += "D";
            break;
        case 6:
            roman += "DC";
            break;
        case 7:
            roman += "DCC";
            break;
        case 8:
            roman += "DCCC";
            break;
        case 9:
            roman += "CM";
            break;
    }
    num = num % 100;
    let ten = Math.floor(num / 10);
    switch (ten) {
        case 0:
            break;
        case 1:
            roman += "X";
            break;
        case 2:
            roman += "XX";
            break;
        case 3:
            roman += "XXX";
            break;
        case 4:
            roman += "XL";
            break;
        case 5:
            roman += "L";
            break;
        case 6:
            roman += "LX";
            break;
        case 7:
            roman += "LXX";
            break;
        case 8:
            roman += "LXXX";
            break;
        case 9:
            roman += "XC";
            break;
    }
    num = num % 10;
    switch (num) {
        case 0:
            break;
        case 1:
            roman += "I";
            break;
        case 2:
            roman += "II";
            break;
        case 3:
            roman += "III";
            break;
        case 4:
            roman += "IV";
            break;
        case 5:
            roman += "V";
            break;
        case 6:
            roman += "VI";
            break;
        case 7:
            roman += "VII";
            break;
        case 8:
            roman += "VIII";
            break;
        case 9:
            roman += "IX";
            break;
    }
    return roman;
}