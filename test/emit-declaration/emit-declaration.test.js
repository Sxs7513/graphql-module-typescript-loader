const fs = require('fs')
const compiler = require('../compiler.js')

test('Can emit valid declaration', async () => {
    try {
        await compiler({ entry: require.resolve('./index.js') })
    } catch (e) {
        console.log(e)
    }

    const declaration = fs.readFileSync(
        require.resolve('./test.graphql.d.ts'),
        'utf-8'
    )

    expect(declaration).toMatchSnapshot()
})