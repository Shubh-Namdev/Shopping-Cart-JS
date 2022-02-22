const items = [

]


updateItem = (e) => {
    const itemElem = document.getElementById('item');
    const priceElem = document.getElementById('price');

    if (!itemElem.value || !priceElem.value) {
        alert('Empty feilds are not acceptable');
    } else {
        if (isNaN(priceElem.value)) {
            alert('Price should only be a Numeric number');
        } else { 
            const itemDetails = {
                item: itemElem.value,
                price: priceElem.value
            }
    
            items.push(itemDetails);
    
            itemElem.value = '';
            priceElem.value = '';
        }
        
    }
}

generateList = () => {
    const tableElem = document.getElementById('table');
    const tableBody = document.createElement('tbody');

    let serialNumber = 1;
    items.map((item) => {
        tableBody.innerText = '';
        const tableRow = document.createElement('tr');

        const itemNumber = document.createElement('td');
        itemNumber.textContent = serialNumber;
        tableRow.appendChild(itemNumber);

        const tableItemData = document.createElement('td');
        tableItemData.textContent = item.item;
        tableRow.appendChild(tableItemData);

        const tablePriceData = document.createElement('td');
        tablePriceData.textContent = item.price;
        tableRow.appendChild(tablePriceData)

        tableBody.appendChild(tableRow);    
        tableElem.appendChild(tableBody);
        serialNumber++;
    })
    const grandTotalRow=document.createElement('tr');
    const grandTotalElem=document.createElement('th')
    const grandTotal=items.reduce((prevValue,currentValue) => {
        return parseInt(prevValue)+parseInt(currentValue.price);
    },0)
    grandTotalElem.textContent=grandTotal;

    grandTotalRow.appendChild(grandTotalElem);
    tableBody.appendChild(grandTotalRow);

}

function insertItem() {
    const addItem = document.getElementById('add-item');
    addItem.addEventListener('click', () => {
        updateItem();
        generateList();

    });
}

insertItem();