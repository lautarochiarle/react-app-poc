import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
platformName: 'Android',
deviceName: 'Android Emulator',
app: '/opt/blueleaf/poc/employeeapp/android/app/build/outputs/apk/debug/app-debug.apk'};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(20000);
    }) // Sometime for the app to load
    test('my first appium test', async () => {
    expect(await driver.hasElementByAccessibilityId('submitButton')).toBe(true);
    const element = await driver.elementByAccessibilityId('submitButton')
    await element.click()
    expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);
    });