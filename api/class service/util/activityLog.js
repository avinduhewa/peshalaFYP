const { generateActivityLog } = './generator';

const addActivityLog = (db, data, type) => {
  return new Promise((resolve, reject) => {
    const activityObj = generateActivityLog(data, type);
    db.collection('activityLog').insertOne(activityObj);
    return resolve({ success: true });
  })
}

module.exports = {
  addActivityLog
}