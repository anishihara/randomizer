const pickSelection = ({ items, numberOfSelectedItems = 3 }) => {
    let selectedItems = [];
    let currentItems = items;
    while (selectedItems.length < numberOfSelectedItems) {
        const bucket = createBucket(currentItems);
        const selectedIndex = pickIndex(bucket);
        selectedItems = selectedItems.concat(currentItems[selectedIndex]||null);
        currentItems = currentItems.filter(item => item !== currentItems[selectedIndex]);
    }
    return selectedItems;
}

const createBucket = (items) => {
    const buckets = items.map((item, index, items) => {
        return (index + 1) / items.length;
    });
    return buckets;
}

const pickIndex = (bucket) => {
    const randomValue = Math.random();
    if (bucket.length <= 0) return -1;
    const index = bucket.findIndex((value, index, array) => {
        if (index + 1 < array.length) {
            return randomValue > value && randomValue <= array[index + 1];
        }
        return true;
    });
    return index;
}

export {
    pickSelection,
}