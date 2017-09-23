webdevapp.controller('MyWebDevController', function($scope, $location){
  $scope.sortType = 'fileName';
  $scope.sortReverse = false;

  $scope.currentPath = $location.url().slice(1)
  $scope.pathList = $scope.currentPath.split('/')

  $scope.fileList = [
    {
      'fileName': 'B - Image1.jpg',
      'filePath': '/files/test-image1.jpg',
      'lastModified': 'Forever Ago',
      'uploadedBy': 'Me',
      'status': 'Pending',
      'comments': 'Initial upload here'
    },

    {
      'fileName': 'P - Image2.jpg',
      'filePath': '/files/test-image2.jpg',
      'lastModified': 'Yesterday',
      'uploadedBy': 'Not Me',
      'status': 'On Hold',
      'comments': 'Added something to it'
    },

    {
      'fileName': 'O - Excel.xlsx',
      'filePath': '/files/test-excel1.xlsx',
      'lastModified': 'Some time ago',
      'uploadedBy': 'Welp',
      'status': 'Needs Approval',
      'comments': 'Trying to test'
    },

    {
      'fileName': 'A - File.docx',
      'filePath': '/files/test-word1.docx',
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

  $scope.checkAll = function(){
    angular.forEach($scope.fileList, function(file){
      file.select = $scope.selectAll
    })
  }
})
