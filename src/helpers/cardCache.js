const storageProvider = window.localStorage;

const cardCache = {
    add: (type, id, value) => {
        const parsedValue = typeof value === 'object' ? JSON.stringify(value) : value;
        storageProvider.setItem(`${type}_${id}`, parsedValue);
    },
    save: (id, type) => {
        const saveListType = `savelist_${type}`;
        const initSaveList = JSON.parse(storageProvider.getItem(saveListType));
        const updatedSavelist = []
            .concat(initSaveList !== null ? initSaveList : [])
            .flat()
            .filter(k => k !== id)
            .concat(id);
        storageProvider.setItem(saveListType, JSON.stringify(updatedSavelist));
    },
    get: (type, id, scope) => {
        const localGet = (lId) => JSON.parse(storageProvider.getItem(`decklist_${lId}`));
        if (!scope) return localGet(id);
        else {
            const keys = Object.keys(storageProvider).filter(k => k.indexOf(type) > -1);
            if (type === 'savelist') {
                const parsedKey = JSON.parse(storageProvider.getItem(keys[0]));
                return parsedKey ? parsedKey.map(kId => localGet(kId)) : [];
            }
            else return keys.map(kId => JSON.parse(storageProvider.getItem(kId)));
        }
    },
    clear: (id, scope) => {
        if (!scope || scope !== 'all') storageProvider.remove(id);
        else storageProvider.clear();
    }
}

export default cardCache;