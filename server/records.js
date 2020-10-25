let records = [];

function getRecord() {
    return records;
}

function addRecord(record) {
    records.push(record);
    if (records.length > 10)
        records.shift();

    return records;
}

export {
    getRecord,
    addRecord
};