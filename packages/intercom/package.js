Package.describe({
    summary: "Intercom package",
    name: 'intercom',
    version: '1.1.0'
});

Package.on_use(function (api) {
    api.addFiles('intercom_loader.js', 'client');
    api.add_files('intercom_server.js', 'server');
    api.export('IntercomHash', 'server');
});