webdevapp.controller('MyWebDevController', ['$scope', function($scope){
    $scope.fileList =[
      {
      'fileName': 'Blah blah blah.jpg',
      'filePath': '/photos/test1.jpg',
      'lastModified': 'Forever Ago',
      'uploadedBy': 'Me',
      'status': 'Pending'
    },

    {
    'fileName': 'Pls.jpg',
    'filePath': '/photos/test2.jpg',
    'lastModified': 'Yesterday',
    'uploadedBy': 'Not Me',
    'status': 'Approved'
  }]


}])
