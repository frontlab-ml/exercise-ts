export const processFn1 = (list: Array<number>): Array<number> => {
    const newArr = list.slice(-3);
    return newArr;
};

export const processFn2 = (list: Array<number>): Array<number> => {
    const newArr = list.map((item, index) => {
        return item + item - index
    });
    return newArr;
};

export const processFn3 = (list: Array<number | string>): Array<string> => {
    const newArr = <Array<string>>list.filter(x => (typeof x === "string"));
    return newArr;
};
