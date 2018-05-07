const validator = require('validator');
const { objectId } = require('../mongodb/db');

const generateClassObj = (obj) => {
  return {
    _id: new objectId(),
    name: obj.name,
    organisationId: obj.organisationId,
    admins: [obj.userId],
    members: [obj.userId],
    tasks: [],
    state: 'active',
    createdAt: Date.now(),
    createdBy: obj.userId,
    updatedAt: Date.now()
  }
}

const generateTaskObj = (obj) => {
  return {
    _id: new objectId(),
    name: 'Sample Task',
    state: 'active',
    organisationId: obj.organisationId,
    classId: obj.classId,
    type: 'timeplus',
    createdAt: Date.now(),
    createdBy: obj.userId,
    updatedAt: Date.now()
  }
}

const generateActivityLog = (obj, type) => {
  const activityLog = {
    type,
    createdAt: Date.now(),
    createdBy: obj.userId
  };

  if (obj.organisationId)
    activityLog.organisationId = obj.organisationId
  if (obj.classId)
    activityLog.classId = obj.classId
  if (obj.taskId)
    activityLog.taskId = obj.taskId

  return activityLog;
}



module.exports = {
  generateClassObj,
  generateTaskObj,
  generateActivityLog
}