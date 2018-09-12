/**
 * Time: 2018-9-12
 */

/**
 * 罗马数字转数字
 * @param {*} r_num
 */
const romanToInt = function (r_num) {
    const RomanNumber = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    const str = r_num.toString();
    let result = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        const strItem = str.charAt(i);
        if (i + 1 == str.length) return result += RomanNumber[strItem];
        const strNextItem = str.charAt(i+1);
        if (strItem === 'I') {
            switch (strNextItem) {
                case 'V':
                    result += 4;
                    i++;
                    break;
                case 'X':
                    result += 9;
                    i++;
                    break;
                default:
                    result += RomanNumber[strItem];
                    break;
            }
        } else if (strItem === 'X') {
            switch (strNextItem) {
                case 'L':
                    result += 40;
                    i++;
                    break;
                case 'C':
                    result += 90;
                    i++;
                    break;
                default:
                    result += RomanNumber[strItem];
                    break;
            }
        } else if (strItem === 'C') {
            switch (strNextItem) {
                case 'D':
                    result += 400;
                    i++;
                    break;
                case 'M':
                    result += 900;
                    i++;
                    break;
                default:
                    result += RomanNumber[strItem];
                    break;
            }
        } else {
            result += RomanNumber[strItem];
        }
    }

    return result;
}
