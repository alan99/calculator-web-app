let records = [];

function addRecord(record) {
    records.push(record);
    if (records.length > 10)
        records.shift();

    return records;
}

export {
    addRecord
};