webdevapp.controller('MyWebDevController', ['$scope', function($scope){
    $scope.sortType = 'fileName';
    $scope.sortReverse = false;

    $scope.fileList =[
      {
        'fileName': 'Blah blah blah.jpg',
        'filePath': '/photos/test1.jpg',
        'lastModified': 'Forever Ago',
        'uploadedBy': 'Me',
        'status': 'Pending',
        'comments': 'Initial upload here'
      },

      {
        'fileName': 'Pls.jpg',
        'filePath': '/photos/test2.jpg',
        'lastModified': 'Yesterday',
        'uploadedBy': 'Not Me',
        'status': 'On Hold',
        'comments': 'Added something to it'
      },

      {
        'fileName': 'Ok.jpg',
        'filePath': '/photos/test1.jpg',
        'lastModified': 'Some time ago',
        'uploadedBy': 'Welp',
        'status': 'Needs Approval',
        'comments': 'Trying to test'
      },

      {
        'fileName': 'A file.docx',
        'filePath': '/photos/test2.jpg',
        'lastModified': 'Now',
        'uploadedBy': 'Main Admin',
        'status': 'Approved',
        'comments': 'Document has been approved.'
      }


  ]

  $scope.dzOptions = {
    maxFilesize : '10',
    uploadMultiple: 'no'
  }

  $scope.dzCallbacks = {
    'addedfile' : function(file){
      console.info('File added.', file);
    }
  }

}])
