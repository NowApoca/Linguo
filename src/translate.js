import {wordsCh} from "./vocabulary/chinese"

export function translate(word,language){
    let translation;
    switch(language){
        case "CH":
            translation = wordsCh[word]
            console.log(wordsCh,word,wordsCh[word])
            break;
        default: 
            translation = ""
    }
    return translation;
}