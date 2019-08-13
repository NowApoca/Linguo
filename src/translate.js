import {wordsPinCh} from "./vocabulary/pinyinChr"
import {wordsEngPin} from "./vocabulary/englishPinyin"
import {wordsEngChr} from "./vocabulary/englishChr"

export function translate(word,language){
    let translation;
    if(!word && word.toString()!="0"){
        return "";
    }
    switch(language){
        case "PIN":
            translation = wordsEngPin[word]
            break;
        case "CH":
            translation = wordsEngChr[word]
            break;
        case "NUMCHN":
            translation = wordsEngChr[word]
            break;
        default: 
            translation = ""
    }
    return translation;
}

export function translateNumber(number,language){
    let translatedNumber = ""
    if(!number){
        return "";
    }
    number = number.toString()
    switch(language){
        case "PIN":
            // translation = wordsEngPin[word]
            break;
        case "NUMCHN":
            let decimals = number.length
            number = parseInt(number);
            for(let n = 0; n < (decimals) ;n+=1){
                let digit = ""
                let digitRes = Math.trunc((number/(10**n))%10)
                if(digitRes !== 0){
                    switch(10**n){
                        case 1:
                                digit = translate(digitRes,language)
                        break;
                        case 10:
                                digit = translate(digitRes,language) + translate("10",language)
                        break;
                        case 100: 
                                digit = translate(digitRes,language) + translate("100",language)
                        break;
                        case 1000:
                                digit = translate(digitRes,language) + translate("1000",language)
                        break;
                        case 10000:
                                digit = translate(digitRes,language) + translate("10000",language)
                        break;
                        case 100000:
                                digit = translate(digitRes,language) + translate("10",language)
                        break;
                        case 1000000:
                                digit = translate(digitRes,language) + translate("100",language)
                        break;
                        case 10000000:
                                digit = translate(digitRes,language) + translate("1000",language)
                        break;
                        case 100000000:
                                digit = translate(digitRes,language) + translate("100000000",language)
                        break;
                        default:
                    }
                }
                if(digitRes === 0 && decimals === 1){
                    return translate("0",language)
                }
                translatedNumber = digit + translatedNumber
            }
            break;
        default: 
        translatedNumber = ""
    }
    return translatedNumber;
}