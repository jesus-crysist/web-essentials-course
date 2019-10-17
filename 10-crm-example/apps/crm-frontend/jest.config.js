module.exports = {
  name: 'crm-frontend',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/crm-frontend',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
