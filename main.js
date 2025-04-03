import fs from 'node:fs/promises'


async function loadConfig(files) {
    let configData = {};

    for (const file of files) {
        try {
            const data = await fs.readFile(file, {encoding:"utf8"});
            console.log(` Loaded ${file}`);
            configData = { ...configData, ...JSON.parse(data) };
        } catch (err) {
            console.error(` Failed to load ${file}: ${err.message}`);
        }
    }

    console.log('Final merged config:', configData);
    return configData;
}

const configFiles = ['config.defaults.json', 'config.env.json', 'config.local.json'];
loadConfig(configFiles);
