import {pickSelection} from '../services/randomizerService'

test(`Seleciona randomicamente 10 valores não null e undefined`, () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const selectedItems = pickSelection({ items,numberOfSelectedItems:10 });
    expect(selectedItems).not.toBeNull();
    expect(selectedItems).not.toBeUndefined();
    expect(selectedItems).toHaveLength(10)
})

test(`Seleciona randomicamente 2 valors não null e undefined`, () => {
    const items = ['Pão', 'Queijo', 'Mortadela', 'Manteiga', 'Farinha'];
    const selectedItems = pickSelection({ items, numberOfSelectedItems:2 });
    console.log(selectedItems)
    expect(selectedItems).not.toBeNull();
    expect(selectedItems).not.toBeUndefined();
    expect(selectedItems).toHaveLength(2);
})

test(`Seleciona randomicamente 5 valores e preenche com null se o número de seleções é maior que o de opções`, () => {
    const items = ['Pão', 'Queijo'];
    const selectedItems = pickSelection({ items, numberOfSelectedItems:5 });
    console.log(selectedItems)
    expect(selectedItems).not.toBeNull();
    expect(selectedItems).not.toBeUndefined();
    expect(selectedItems).toHaveLength(5);
    selectedItems.forEach((value,index) => {
        if (index > 1) expect(value).toBeNull();
    })
})