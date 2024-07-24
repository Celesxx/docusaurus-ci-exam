const { execSync } = require('child_process');

describe('Processus de build', () => 
{
    test('Vérification du build', () =>
    {
        try { execSync('yarn build', { stdio: 'inherit' }); } 
        catch (error) { throw new Error('Build process failed.'); }
    });
});
