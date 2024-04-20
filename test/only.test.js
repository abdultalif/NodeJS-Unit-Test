test('test 1', () => console.log('test 1'));

test('test 2', () => console.log('test 2'));

// only berfungsi untuk run unit test untuk sendiri jadi yang tidak menggunakan only pada file ini tidak akan di test ini kebalikan dari skip
test.only('test 3', () => console.log('test 3'));

test('test 4', () => console.log('test 4'));

test('test 5', () => console.log('test 5'));