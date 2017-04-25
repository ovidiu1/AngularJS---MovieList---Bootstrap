(function() {
    'use strict';

    angular.module('MovieList').config(translate);
    translate.$inject = ['$translateProvider'];
    function translate($translateProvider) {
        $translateProvider.translations('en', {
            MOTTO: 'managing money better',
            TITLE: 'Hello',
            FOO: 'This is a paragraph',

            // login page
            TEXT_BOX_EMAIL: 'Email',
            TEXT_BOX_PASSWORD: 'Password',
            BUTTON_LOG_IN: 'Log in',
            CHECK_BOX_REMEBER_ME: 'Remeber me',
            LINK_SIGN_IN_VIA: 'Sign in via',
            LINK_FORGOT_PASSWORD: 'Forgert your password?',
            LINK_SIGN_UP: 'Sign up',

            // forgot password page
            MESSAGE_FORGOT_PASSWORD: 'Can\'t Sign in? Forget your password?',
            DESC_FORGOT_PASSWORD: 'Enter your email address below & we will send you password reset instructions..',
            LINK_LOG_IN: 'Log in using different account',
            BUTTON_SEND: 'Send',

            // sign up page
            // step 0
            TEXT_BOX_NAME: 'Name',
            BUTTON_SIGN_UP: 'Sign up',
            LINK_SIGN_UP_VIA: 'Sign up via',
            MESSAGE_SIGN_UP: 'Already have an account?',
            LINK_LOG_IN_HERE: 'Log in here',
            SIGN_UP_TITLE_FAMILY: 'Make your family part of the financial team',
            SIGN_UP_TITLE_ONLY_ME: 'How do you make your income?',
            
            //Validation
            REQUIRED_INPUT: 'This field is required!',
            EMAIL_FORMAT: 'Invalid email format!',

            // step GROUP
            BUTTON_ADD: 'Add',
            BUTTON_SAVE: 'Save',
            BUTTON_DISMISS: 'Dismiss',
            BUTTON_DONE: 'Done',


        });

        $translateProvider.translations('de', {
            MOTTO: 'geld besser verwalten',
            TITLE: 'Hallo',
            FOO: 'Dies ist ein Absatz',
        });

        $translateProvider.translations('fr', {
            MOTTO: 'mieux gérer l`argent',
            TITLE: 'Bonjour',
            FOO: 'C`est un paragraphe'
        });

        $translateProvider.translations('es', {
            MOTTO: 'manejar mejor el dinero',
            TITLE: 'Hola',
            FOO: 'Este es un párrafo'
        });

        $translateProvider.translations('ro', {

            MOTTO: 'pune bani sa munceasca',
            TITLE: 'Hello',
            FOO: 'This is a paragraph',

            // login page
            TEXT_BOX_EMAIL: 'Email',
            TEXT_BOX_PASSWORD: 'Parola',
            BUTTON_LOG_IN: 'Conecteaza-te',
            CHECK_BOX_REMEBER_ME: 'Remeber me',
            LINK_SIGN_IN_VIA: 'Conecteaza-te prin',
            LINK_FORGOT_PASSWORD: 'Forgert your password?',
            LINK_SIGN_UP: 'Inscrie-te',

            // forgot password page
            MESSAGE_FORGOT_PASSWORD: 'Can`t Sign in? Forget your password?',
            DESC_FORGOT_PASSWORD: 'Enter your email address below & we will send you password reset instructions..',
            LINK_LOG_IN: 'Inscrie-te folosind un cont diferit',
            BUTTON_SEND: 'Trimite',

            // sign up page
            TEXT_BOX_NAME: 'Nume',
            BUTTON_SIGN_UP: 'Inscrie-te',
            LINK_SIGN_UP_VIA: 'Inscrie-te prin',
            MESSAGE_SIGN_UP: 'Ai deja un cont?',
            LINK_LOG_IN_HERE: 'Conecteaza-te aici'

            // sign up steps
        });

        $translateProvider.preferredLanguage('en');

        //function setLanguage() {
        //    $http.get('http://ipinfo.io/json').
        //      success(function (data) {
        //          var key = data.country.toLowerCase();
        //          //$translate.use(key);
        //          $translateProvider.preferredLanguage(key);
        //          //$translateProvider.preferredLanguage('en');
        //      });
        //}
    }

})();