function queryParamsClient(urlName='www.example.com/', objectParams = {}){
    let notNullParam = []
    let countOfParam = 0
    let key,currentValue,val,keyParam1
    for (key in objectParams){
        currentValue = objectParams[key]
        if(currentValue!==''){
            notNullParam.push(key)
            countOfParam = countOfParam+1
        }
    }

    let i =0
    if (countOfParam>1){
        for (let i = 0; i < countOfParam; i++) {
            if(i>0){
                key = '&&'+notNullParam[i]
                val = objectParams[notNullParam[i]]
            }
            else {
                key = notNullParam[i]
                val = objectParams[notNullParam[i]]
            }
            urlName = urlName +key+'='+val
        }
        return (urlName)
    }
    else {
        keyParam1 = notNullParam[0]
        val = objectParams[notNullParam[0]]
        return (urlName+keyParam1+'='+objectParams[notNullParam[0]])
    }

}

module.exports = queryParamsClient
