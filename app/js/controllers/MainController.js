module.exports = function($scope) {


    $scope.mainTitle = "Client Side Address Book";
    $scope.subTitle = "a single page address book application using JavaScript, HTML and CSS.";

    $scope.contactList = JSON.parse(localStorage.getItem('contacts'));
    $scope.contacts = (localStorage.getItem('contacts')!==null) ? $scope.contactList : [];
    localStorage.setItem('contacts', JSON.stringify($scope.contacts));

    $scope.uid = (localStorage.getItem('uid')!==null) ? localStorage.getItem('uid') : 0;
    localStorage.setItem('uid', $scope.uid);

    $scope.updateTotal = function() {
        $scope.totalContacts = $scope.contacts.length;
        if($scope.contacts.length === 0){
            $scope.contactAdd = true;
            $scope.closeNewAddition = true;
        }
        else{
            $scope.closeNewAddition = false;
        }
    };


    $scope.updateTotal();

    $scope.addingContact = function() {
        $scope.contactAdd = true;
    };

    $scope.editingContact = function (contact) {
        $scope.contactCopy = contact;
        $scope.contactEdit = true;
    };

    $scope.showFullDetails = function(contact) {
        $scope.fullDetails = contact;
        $scope.contactDetails = true;
    };


    $scope.deleteContact = function(contact){
        $scope.contacts.forEach(function(result, index){
            if(result['id']===contact){
                $scope.contacts.splice(index, 1);
            }
        });
        localStorage.setItem('contacts', JSON.stringify($scope.contacts));
        $scope.updateTotal();

    };

};