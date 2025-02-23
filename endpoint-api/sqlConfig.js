var dbconfig = {
    development: {
        server: 'host.docker.internal',
        database:'team9_web_labDB',
        user:'sa',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  'localhost'  // SQL Server instance name
        }
    },
    production: {
        server: '10.21.43.203',
        database:'team5_web_labDB',
        user:'sa',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.56.1'  // SQL Server instance name
        }
    },

};
module.exports = dbconfig;
