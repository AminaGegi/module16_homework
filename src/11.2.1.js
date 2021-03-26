export function arrChetNechet(arr){
    let nul = 0;// нулевые;
    let chet = 0; // четные
    let neChet = 0; // нечетные
    for (let i = 0; i < arr.length; i++){
        if (typeof(arr[i])=='number'){
        if (arr[i] == 0)
            nul++;
        else
        if ((arr[i] %= 2) == 0)
            chet++
        if ((arr[i] %= 2) == 1)
            neChet++
    }}
    let s = `Количество нулевых элементов в массиве - ${nul}, количество четных элементов - ${chet}, количество четных элементов - ${neChet}.`;
    return s
    };