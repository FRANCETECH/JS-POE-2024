function fetchData(id, callback) {
  setTimeout(() => {
    const data = {
      userId: id,
      title: "This is the title for" + id,
    };
    callback(null, data);
  }, 1000);
}

// Pyramid of Doom : Callback hell
console.log("Staring fetching data");
fetchData(1, function (err, data1) {
  if (err) {
    console.error("Error fetching data for user 1:", err);
  } else {
    console.log("Data for user 1:", data1);
    fetchData(2, function (err, data2) {
      if (err) {
        console.error("Error fetching data for user 2:", err);
      } else {
        console.log("Data for user 2:", data2);
        fetchData(3, function (err, data3) {
          if (err) {
            console.error("Error fetching data for user 3:", err);
          } else {
            console.log("Data for user 3:", data3);
          }
        });
        fetchData(4, function (err, data4) {
          if (err) {
            console.error("Error fetching data for user 4:", err);
          } else {
            console.log("Data for user 4:", data4);
          }
        });
        fetchData(5, function (err, data5) {
          if (err) {
            console.error("Error fetching data for user 5:", err);
          } else {
            console.log("Data for user 5:", data5);
          }
        });
      }
    });
  }
});


const promise = new Promise((resolve, reject) => {
      if(true) {
        resolve("Success")
      } else {
        reject("Oops")
      }
})

promise.then((response) =>{
      return "Result " + response
     })
       .then((response) => console.log(response))
       .catch((err) => console.log("Error " + err))



let capsuleDispo = true
let demandeCapsule = new Promise((resolve, reject) => {
    // délais d'attente
    setTimeout(() => {
        if(capsuleDispo) {
            resolve("Voila vos capsules")
        } else {
            reject("Les capsules sont indisponibles")
        }
    }, 5000)
})

demandeCapsule.then((response) => console.log(response + " Je veux une poche avec !"))
              .catch((err) => console.log(err + " J'arrete le café"))
              .finally(() => console.log("J'aime le café"))


 function fetchData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
              userId: id,
              title: "This is the title for" + id,
            };
            resolve(data);
          }, 1000);
    })
}     

// // BAD 
// fetchData(1).then((data1) => {
//     console.log(data1)
//     fetchData(2).then((data2) => {
//         console.log(data2)
//          fetchData(3).then((data3) => {
//             console.log(data3)
//     })
//     })
// } )

// Chainage de then 
fetchData(1)
.then((d1) => {
   console.log(d1)
   return fetchData(2)
})
.then((d2) => {
    console.log(d2)
    return fetchData(3)
})
.then((d3) => {
    console.log(d3)
    return fetchData(4)
})

// Async Await (ES8)
function gatherChackra() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log("Chakra chargé !")
           resolve()
        }, 2000)
    })
}

function rasengan(target) {
    console.log(`Rasengan sur ${target}`)
}

function shadowCloneJutsu() {
    console.log("Invocation du clone des ombres");
}

// promesse classique
function narutoMove() {
    console.log("Naruto se prépare a attaquer")
    gatherChackra().then(() => {
        rasengan("Itachi")
        shadowCloneJutsu()
    }).catch((e) => {
        console.log(e)
    });
}
// avec async await ecrire du code asyncrone comme si c'était du code sync
// Syntaxical sugar 
const minatoMove = async () => {
    console.log("Minato se prépare a attaquer")
    await gatherChackra() // Pause
    rasengan("Itachi")
    shadowCloneJutsu()
}

function fetchData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
              userId: id,
              title: "This is the title for" + id,
            };
            resolve(data);
          }, 1000);
    })
}     

async function fetchAllData() {
    const data1 = await fetchData(1) // pause
    console.log("Data 1" + data1.title)
    const data2 = await fetchData(2) // pause
    console.log("Data 2" + data2.title)
    const data3 = await fetchData(3) // pause
    console.log("Data 3" + data3.title)

}

function gatherChackra2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           reject("OOOOPS")
        }, 2000)
    })
}

async function sasukeMove() {
    console.log("Sasuke se prépare a attaquer")
    try {
        await gatherChackra2()
        rasengan("Itachi")
        shadowCloneJutsu()
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Sasuke a finis son attaque")
    }
}

// Promise ALL 
const promesse1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesse 1")
    }, 5000);
})
const promesse2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promesse 2")
    }, 5000);
})
const promesse3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesse 3")
    }, 5000);
})

// Promise all permet de lancer plusieurs simultanément 
// si toutes les promesses sont résolues , il renvoie les resultat dans un tableau
// si une des promesses échoue, elles échouent toutes.
Promise.all([promesse1, promesse2, promesse3])
       .then((res) => console.log(res))
       .catch((e) => console.log("Erreur : " + e))










