export const resourceTemplates = {
  Compute: {
    'availabilitySets': {
      apiVersion: '2017-03-30',
      location: '',
      properties: {},
    },
    'disks': {
      apiVersion: '2017-03-30',
      location: '',
      properties: {
        creationData: {
          createOption: ''
        }
      }
    },
    'images': {
      apiVersion: '2017-03-30',
      location: '',
      properties: {}
    },
    'snapshots': {
      apiVersion: '2017-03-30',
      location: '',
      properties: {
        creationData: {
          creationOption: ''
        }
      }
    },
    'virtualMachines': {
      apiVersion: '2017-03-30',
      location: '',
      properties: {}
    },
    'virtualMachines/extensions': {
      apiVersion: '2017-03-30',
      location: '',
      properties: {}
    },
    'virtualMachineScaleSets': {
    }
  }
};
