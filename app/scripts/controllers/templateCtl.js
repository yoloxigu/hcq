angular.module('haochiquanApp')
    .controller('TemplateCtl', function ($scope) {
        $scope.template = {
            header: 'views/templates/header.html',
            footer: 'views/templates/footer.html',
            ad: 'views/templates/ad.html',
            publish: 'views/templates/publish.html',
            content: 'views/templates/content.html',
            userinfo: 'views/templates/userinfo.html',
            usergroup: 'views/templates/usergroup.html'
        };
    });