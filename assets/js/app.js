
//we can set animation delay as following in ms (default 1000)
ProgressBar.singleStepAnimation = 1500;
ProgressBar.init(
  [ 'Request Submission',
    'Received Responses',
    'Hired Professionals work on site',
    'Service payment done',
  ],
  'Service payment done',
  'progress-bar-wrapper' // created this optional parameter for container name (otherwise default container created)
);