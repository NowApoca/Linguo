import {wordsPinCh} from "./vocabulary/pinyinChr"
import {wordsEngPin} from "./vocabulary/englishPinyin"
import {wordsEngChr} from "./vocabulary/englishChr"
import {wordsEnEs} from "./vocabulary/wordsEnEs"
import {wordsEnEn} from "./vocabulary/wordsEnEn"
import {hskVocabulary} from "./vocabulary/hskVocabulary"

export function translate(word,language){
    let translation;
    if(!word && word.toString()!="0"){
        return "";
    }
    switch(language){
        case "PIN":
            translation = wordsEngPin[word]
            break;
        case "es":
            translation = wordsEnEs[word]
            break;
        case "en":
            translation = wordsEnEn[word]
            break;
        case "CH":
            translation = wordsEngChr[word]
            break;
        case "NUMCHN":
            translation = wordsEngChr[word]
            break;
        case "SPN":
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

export function getRandomWord(fromLanguage, toLanguage, hsk){
    let words;
    switch(hsk){
        case 1:
            words = 150;
        break;
        case 2:
            words = 300;
        break;
        case 3:
            words = 600;
        break;
        case 4:
            words = 1200;
        break;
        case 5:
            words = 2500;
        break;
        case 6:
            words = 5000;
        break;
        default:
            words = 300;
        break;
    }
    let word = hskVocabulary[Math.trunc((Math.random()*(words-1)))]
    return word;
}