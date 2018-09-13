export interface InputType {
    id: string,
    label: string,
    age: number,
}

export interface OutType {
    id: string,
    caption: string,
}

const mapFun = (_item: InputType): OutType => {
    return {
        id: '',
        caption: '',
    };
};

export const exampleMap = (list: Array<InputType>): Array<OutType> => {
    return list.map(mapFun);
}