webdevapp.controller('MyWebDevController', ['$scope', '$location', function($scope, $location){
  $scope.sortType = 'fileName';
  $scope.sortReverse = false;

  $scope.currentPath = $location.url().slice(1)
  $scope.pathList = $scope.currentPath.split('/')

  $scope.fileList = [
    {
      'fileName': 'B - Image1.jpg',
      'filePath': '/files/test-image1.jpg',
      'lastModified': 'Forever Ago',
      'uploadedBy': 'Andrew McLees',
      'status': 'Pending',
      'comments': 'Initial upload here'
    },

    {
      'fileName': 'P - Image2.jpg',
      'filePath': '/files/test-image2.jpg',
      'lastModified': 'Yesterday',
      'uploadedBy': 'Leanne David',
      'status': 'On Hold',
      'comments': 'Added something to it'
    },

    {
      'fileName': 'O - Excel.xlsx',
      'filePath': '/files/test-excel1.xlsx',
      'lastModified': 'Some time ago',
      'uploadedBy': 'Justin Sarenas',
      'status': 'Needs Approval',
      'comments': 'Trying to test'
    },

    {
      'fileName': 'A - File.docx',
      'filePath': '/files/test-word1.docx',
      'lastModified': 'Now',
      'uploadedBy': 'Ben Solis',
      'status': 'Approved',
      'comments': 'Document has been approved'
    }
  ]

  $scope.dzOptions = {
    maxFiles:1,
    init: function() {
      this.on('addedfile', function(file) {
        if (this.files.length > 1) {
          this.removeFile(this.files[0]);
        }
      });
    }
  }

  $scope.nameOfFile = ''
  $scope.lastModified = ''

  $scope.dzCallbacks = {
    'addedfile' : function(file){

      $scope.nameOfFile = file.name
      $scope.lastModified = file.lastModifiedDate
      $scope.emptyFile = false
      console.info('File added.', file);
    }
  }

  $scope.checkAll = function(){
    angular.forEach($scope.fileList, function(file){
      file.select = $scope.selectAll
    })
  }

  $scope.fileUpload = function(newFile){
    this.newFile.fileName = $scope.nameOfFile
    this.newFile.lastModified = $scope.lastModified

    if(this.newFile.fileName && this.newFile.status){
      $scope.fileList.push({
        'fileName': this.newFile.fileName,
        'filePath': this.newFile.fileName,
        'lastModified': this.newFile.lastModified,
        'uploadedBy': 'User',
        'status': this.newFile.status,
        'comments': this.newFile.comments

      })

      //$location.path('/departments/arts-and-letters/art')
    }
  }
}])
