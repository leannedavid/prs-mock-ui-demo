webdevapp.controller('MyWebDevController', ['$scope', function($scope){

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
    'status': 'Approved',
    'comments': 'Added something to it'
  }]

  $scope.dzOptions = {
    //paramName : 'photo',
    maxFilesize : '10',
    uploadMultiple: 'no'
    //previewTemplate:


  }

  $scope.dzCallbacks = {
    'addedfile' : function(file){
      console.info('File added from dropzone 1.', file);
    }
  }


}])
