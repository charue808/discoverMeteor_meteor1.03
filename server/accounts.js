Accounts.onCreateUser(function(options, user) {
    user.intercomHash = IntercomHash(user, 'fhXTzc1bsP11QEAmUFKobyAUt5RDlKNNbSJU38q4');
    
    if (options.profile)
        user.profile = options.profile;
    
    return user;
});