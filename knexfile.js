module.exports={

    development:{
        client:'pg',
        connection:'postgres://localhost/sticker-store'
    },
    test: {
        client: 'pg',
        connection: 'postgres://localhost/test-sticker-store'
      }

}