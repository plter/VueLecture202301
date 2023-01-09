function createApp() {
    return Vue.createSSRApp({
        data: () => ({count: 1}),
        template: `
          <button @click="count++">Click count {{ count }}</button>`
    });
}

let globalObject;
if (typeof global == 'object') {
    globalObject = global;
} else if (typeof window == 'object') {
    globalObject = window;
}

if (globalObject) {
    globalObject.simpleSsr = globalObject.simpleSsr || {};
    globalObject.simpleSsr.createApp = createApp;
}


