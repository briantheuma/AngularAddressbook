module.exports = function($scope) {

    $scope.updateContact = function (contact, isValid) {
        if (isValid) {
            $scope.contacts.forEach(function (result, index) {
                if (result['id'] === contact.id) {
                    $scope.contacts.splice(index, 1);
                }
            });
            localStorage.setItem('contacts', JSON.stringify($scope.contacts));

            $scope.contacts.push({
                id: contact.id,
                firstName: contact.firstName,
                lastName: contact.lastName,
                email: contact.email,
                address: contact.address,
                city: contact.city,
                zipCode: contact.zipCode,
                country: contact.country
            });
            localStorage.setItem('contacts', JSON.stringify($scope.contacts));
            $scope.$parent.contactEdit = false;
        }
    };

};