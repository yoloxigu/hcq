'use strict';
angular.module('haochiquanApp')
    .controller('PartyCtl', function ($scope) {
        $scope.Parties = [
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 one',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                playerPartyCommentCount: '7',
                playerPartyRelayCount: '7',
                playerPartyCollectionCount: '7',
                playerPartyLaudCount: '7',
                playerPartyIsOpen: true,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: true
            },
            {
                playerUserName: 'UserName two',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 two',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                playerPartyCommentCount: '8',
                playerPartyRelayCount: '8',
                playerPartyCollectionCount: '8',
                playerPartyLaudCount: '8',
                playerPartyIsOpen: false,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: false

            },
            {
                playerUserName: 'UserName three',
                playerUserGender: 'Male',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 three',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 10:10',
                playerPartyCommentCount: '9',
                playerPartyRelayCount: '9',
                playerPartyCollectionCount: '9',
                playerPartyLaudCount: '9',
                playerPartyIsOpen: true,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: false
            },
            {
                playerUserName: 'UserName four',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 four',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 09:10',
                playerPartyCommentCount: '11',
                playerPartyRelayCount: '11',
                playerPartyCollectionCount: '11',
                playerPartyLaudCount: '11',
                playerPartyIsOpen: false,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: false
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 five',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 08:10',
                playerPartyCommentCount: '22',
                playerPartyRelayCount: '22',
                playerPartyCollectionCount: '22',
                playerPartyLaudCount: '22',
                playerPartyIsOpen: false,
                playerPartyHaveMiss: true,
                playerPartyInviteMale: true
            }
        ];

        $scope.selected = [false, false, false];
        $scope.hadin = [true, true, true];
        $scope.hadout = [false, false, false];

        $scope.choose = function (index) {
            $scope.selected.forEach(function(value, key) {
                if (index === key) {
                    $scope.selected[key] = !$scope.selected[key];
                    $scope.hadin[key] = !$scope.hadin[key];
                    $scope.hadout[key] = !$scope.hadout[key];

                } else {
                    $scope.selected[key] = false;
                    $scope.hadin[key] = true;
                    $scope.hadout[key] = false;
                }
            });
        };

        $scope.filted = true;
        $scope.subNav = function(filter) {
            if ('all' === filter || 'invite' === filter) {
                $scope.filted = true;
            } else {
                $scope.filted = false;
            }
         };


        // filter scope
        $scope.isVisited = [];

        $scope.visiter = function(length, index) {
            event.preventDefault();
            event.stopPropagation();
            if (0 === $scope.isVisited.length) {
                for (var i = 0; i < arguments[0]; i++) {
                    if (arguments[1] === i) {
                        $scope.isVisited.push(true);
                    } else {
                        $scope.isVisited.push(false);
                    }
                }
            } else {
                for (var j = 0; j < $scope.isVisited.length; j++) {
                    if (j === arguments[1]) {
                        $scope.isVisited[j] = true;
                    } else {
                        $scope.isVisited[j] = false;
                    }
                }
            }
        };
    });