async function async1() {
    console.log('async1 start');
    await async2().then(() => {
        console.log('async1 middle');
    });
    console.log('async1 end');
}

function async2() {
    return new Promise(resolve => {
        console.log('async2');
        resolve();
    });
}

function* generate() {
    console.log('generate-1');
    yield;
    console.log('generate-1.2');
    yield;
    console.log('generate-1.3');
}

function* generate2() {
    console.log('generate-2');
    yield;
    console.log('generate-2.2');
}

console.log('script start');

setTimeout(() => {
    console.log('setTimeout 1');
    queueMicrotask(() => {
        console.log('microtask from setTimeout 1');
    });
}, 0);

setTimeout(() => {
    console.log('setTimeout 2');
}, 0);

const generator1 = generate();
async1();

const generator2 = generate2();

process.nextTick(() => {
    console.log('next tick 1');
    queueMicrotask(() => {
        console.log('microtask from next tick 1');
    });

    setTimeout(() => {
        console.log('setTimeout from next tick');
        generator1.next();
    }, 0);
});

queueMicrotask(() => {
    console.log('microtask 1');
    setImmediate(() => {
        console.log('setImmediate from microtask 1');
        generator1.next();
        process.nextTick(() => {
            console.log('next tick inside setImmediate');
        });
    });
});

queueMicrotask(() => {
    console.log('microtask 2');
    setTimeout(() => {
        console.log('setTimeout 3');
    }, 0);
});

setImmediate(() => {
    console.log('setImmediate 1');
    generator2.next();
    process.nextTick(() => {
        console.log('next tick inside setImmediate 1');
    });
});

generator2.next();

console.log('script end');
