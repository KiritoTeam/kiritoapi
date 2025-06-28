Para instalar a kirito.db.remote na sua aplicação basta utilizar 

```npm i kirito.db.remote```

No console.

# Rotas da database

```js
const KiritoDB = require("kirito.db.remote")
const db = new KiritoDB("database") //coloque sua key secret sem uma key secret não e possível utilizar a database

//Get na Db
db.get(`Testeteetet.djdndj`).then((response) => {
console.log(response)
})

//add na Db
db.add(`Teste.testeeee`, `90`)

//sub na db
db.sub(`Teste.trste`, `5`)


//set na db
db.set(`Teste.trste`, `10`)

//delete na db
db.delete(`Teste.trste`)


// pegar todos os dados da db
db.all().then((response) => {
console.log(response)
})
```

Agradecemos por utilizar nossa package.