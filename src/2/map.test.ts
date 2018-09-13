import { exampleMap } from "./map";

describe('2', () => {
    it('map', () => {
        expect(
            exampleMap([{
                id: 'a11',
                label: 'label1',
                age: 54
            }, {
                id: 'b22',
                label: 'label2',
                age: 100
            }])
        ).toEqual([{
            id: 'a11',
            caption: '__a11_label1__54__'
        }, {
            id: 'b22',
            caption: '__b22_label2__100__'
        }])
    });
});