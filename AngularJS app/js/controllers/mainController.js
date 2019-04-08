app.controller('mainController', ['$scope', function($scope){
    $scope.title = {
        main: 'My first AngularJS App',
        para: 'Photo booth selvage wayfarers raclette vinyl, man braid cred retro. Neutra godard non, kogi cillum ugh tousled do next level dolore. Ramps hella ut, ut irony lomo live-edge artisan bicycle rights waistcoat aute lyft fanny pack four loko.'
    };

    $scope.pricing = [
        {
            type   : 'Free',
            price  : 0,
            desc   : 'Photo booth selvage wayfarers raclette vinyl, man braid cred retro. Neutra godard non, kogi cillum ugh tousled do next level.',
            ctatext: 'Sign up for FREE'
        },
        {
            type   : 'Pro',
            price  : 14.99,
            desc   : 'Photo booth selvage wayfarers raclette vinyl, man braid cred retro. Neutra godard non, kogi cillum ugh tousled do next level.',
            ctatext: 'Get started' 
        },
        {
            type   : 'Enterprise',
            price  : 34.99,
            desc   : 'Photo booth selvage wayfarers raclette vinyl, man braid cred retro. Neutra godard non, kogi cillum ugh tousled do next level.',
            ctatext: 'Contact us' 
        }
    ]

    $scope.products = [
        {
            name    : 'Paris city break',
            price   : 288,
            desc    : 'Photo booth selvage wayfarers raclette vinyl, man braid cred retro. Neutra godard non, kogi cillum ugh tousled do next level.',
            ctatext : 'Get deal',
            likes   : 0,
            dislikes: 0,
            image   : 'img/arch.jpg'
        },
        {
            name    : 'Barcelona couples retreat',
            price   : 320,
            desc    : 'Photo booth selvage wayfarers raclette vinyl, man braid cred retro. Neutra godard non, kogi cillum ugh tousled do next level.',
            ctatext : 'Get deal',
            likes   : 0,
            dislikes: 0,
            image   : 'img/arch2.jpg'
        },
        {
            name    : 'Portugal family getaway',
            price   : 550.99,
            desc    : 'Photo booth selvage wayfarers raclette vinyl, man braid cred retro. Neutra godard non, kogi cillum ugh tousled do next level.',
            ctatext : 'Get deal',
            likes   : 0,
            dislikes: 0,
            image   : 'img/arch3.jpg'
        }
    ]

    $scope.addOne = function(index){
        $scope.products[index].likes += 1;
    }

    $scope.minusOne = function(index){
        $scope.products[index].dislikes += 1;
    }
}])