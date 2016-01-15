module.exports = function($scope) {
    $scope.addContact = function (isValid) {
        if (isValid) {
            $scope.uid++;
            localStorage.setItem('uid', $scope.uid);
            $scope.contacts.push({
                id: $scope.uid,
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email: $scope.email,
                address: $scope.address,
                city: $scope.city,
                zipCode: $scope.zipCode,
                country: $scope.country
            });
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.email = '';
            $scope.address = '';
            $scope.city = '';
            $scope.zipCode = '';
            $scope.country = '';
            localStorage.setItem('contacts', JSON.stringify($scope.contacts));
            $scope.$parent.contactAdd = false;
            $scope.newContact.$setUntouched(true);
            $scope.newContact.$setPristine(true);
            $scope.updateTotal();
        }
    };

    $scope.resetForm = function(){
        $scope.newContact.$setUntouched(true);
        $scope.newContact.$setPristine(true);
    }
};