import {wordsPinCh} from "./vocabulary/pinyinChr"
import {wordsEngPin} from "./vocabulary/englishPinyin"

export function translate(word,language){
    let translation;
    switch(language){
        case "PIN":
            translation = wordsEngPin[word]
            break;
        case "CH":
            let engToPin = wordsEngPin[word]
            translation = wordsPinCh[engToPin]
            break;
        default: 
            translation = ""
    }
    return translation;
}