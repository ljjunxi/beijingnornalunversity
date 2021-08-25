
module.exports.models = {
  schema: false,
  migrate: 'alter',
  attributes: {
    id: { type: 'number', autoIncrement: true },
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true },
  },
  dataEncryptionKeys: {
    default: 'HcKXTzV3MOT+wAX38xtY61AZJUVEC/2Fmwg5rpRmPwU='
  },
  cascadeOnDestroy: true
};
