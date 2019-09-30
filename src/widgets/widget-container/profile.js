export default {
  name: '容器',
  icon: '',
  description: '描述',
  controllers: [
    {
      propName: 'width',
      controllerType: 'CTRL_NUMBER_INPUT',
      label: '宽度'
    },
    {
      propName: 'height',
      controllerType: 'CTRL_NUMBER_INPUT',
      label: '高度值'
    },
    {
      propName: 'heightModel',
      controllerType: 'CTRL_SELECT',
      label: '高度模式',
      setting: {
        options: [
          {
            value: 'auto',
            label: '根据内容高度'
          },
          {
            value: 'px',
            label: '自定义数值高度'
          }
        ]
      }
    }
  ]
};
