let records = [];

function getRecord() {
    return records;
}

function addRecord(record) {
    records.push(record);
    return records.slice(-10);
}

export {
    getRecord,
    addRecord
};