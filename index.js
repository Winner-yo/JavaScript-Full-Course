const axios = require('axios');

const fetchData = async () => {
  const data = await axios.get("https://cat-fact.herokuapp.com/");
  try {
    console.log(data)
  }
  catch (err) {
    console.log(err)
  } finally {
    console.log("Ashe")
  }
}

fetchData()

const event = new Promise((resolve, reject) => {
  const name = "John"
  if (name == "Ashe") {
    resolve(name);
  } else {
    reject("Name is not correct: it's "+name)
  }
})

event.then((name) => {
  console.log(name)
}).catch((err) => {
  console.log(err)
}).finally(() => {
    console.log("The promise is Finshed")
})

