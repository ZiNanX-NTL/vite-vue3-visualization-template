const pestPredictionRoute: AuthRoute.Route = {
  path: '/pest-prediction',
  name: 'pest-prediction',
  component: 'big',
  redirect: '/pest-prediction/occurred',
  meta: {
    title: '病虫预报',
    icon: 'fluent:book-information-24-regular',
    order: 1
  },
  children: [
    {
      name: 'pest-prediction_occurred',
      path: '/pest-prediction/occurred',
      component: 'self',
      meta: {
        title: '发生实况',
        icon: 'fluent:book-information-24-regular',
        order: 1
      }
    },
    {
      name: 'pest-prediction_history',
      path: '/pest-prediction/history',
      component: 'self',
      meta: {
        title: '历史挖掘',
        icon: 'fluent:book-information-24-regular',
        order: 2
      }
    }
  ]
};

export default pestPredictionRoute;
