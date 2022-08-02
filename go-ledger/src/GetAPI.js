import axios from "axios";

const url = 'http://ec2-100-25-136-128.compute-1.amazonaws.com/api';

const fethURL = axios.create({
    basrURL: url
});

const createCar = (id, model, driverId) => {
    return fethURL.post("/invoke/createAsset", {
        asset: [
            {
                "@assetType": "car",
                id: id,
                model: model,
                driver: {
                    id: driverId,
                }
            }
          ]
    })
}

const createDrivers = (name, id, teamId) => {
    return fethURL.post("/invocke/createAsset", {
        asset: [
            {
              "@assetType": "driver",
              name: name,
              id: id,
              team: {
                id: teamId,
              },
            },
          ],
    })
}

const createTeams = (name,id) => {
    return fethURL.post("/invoke/createAsset", {
        asset: [
          {
            "@assetType": "team",
            name: name,
            id: id,
          },
        ],
      });
}

const createEvents = (name,date,prize,winnerId) => {
    return fethURL.post("/invoke/createAsset", {
        asset: [
          {
            "@assetType": "event",
            name: name,
            date: date,
            prize: prize,
            winner: {
              id: winnerId,
            },
          },
        ],
      });
}

const readEvent = (name, date) => {
    return fethURL.post("/query/readAsset", {
      key: {
        "@assetType": "event",
        name: name,
        date: date,
      },
    });
  }
  
const readTeam = (id) => {
    return fethURL.post("/query/readAsset", {
      key: {
        "@assetType": "team",
        id: id,
      },
    });
  }
  
const readDriver = (id) => {
    return fethURL.post("/query/readAsset", {
      key: {
        "@assetType": "driver",
        id: id,
      },
    });
  }
  
const readCar = (id) => {
    return fethURL.post("/query/readAsset", {
      key: {
        "@assetType": "car",
        id: id,
      },
    });
  }
  
const readAll = (type) => {
    return fethURL.post("query/search", {
      query: {
        selector: {
          "@assetType": type,
        },
      },
    });
  }
  
const deleteCar = (id) => {
    return fethURL.delete("/invoke/deleteAsset", {
      data: {
        key: {
          "@assetType": "car",
          id: id,
        },
      },
    });
  }
  
const deleteDriver = (id) => {
    return fethURL.delete("/invoke/deleteAsset", {
      data: {
        key: {
          "@assetType": "driver",
          id: id,
        },
      },
    });
  }
  
const deleteTeam = (id) => {
    return fethURL.delete("/invoke/deleteAsset", {
      data: {
        key: {
          "@assetType": "team",
          id: id,
        },
      },
    });
  }
  
const deleteEvent = (name, date) => {
    return fethURL.delete("/invoke/deleteAsset", {
      data: {
        key: {
          "@assetType": "event",
          name: name,
          date: date,
        },
      },
    });
  }
  
const updateEvent = (name, date, prize, winnerKey ) => {
    return fethURL.put("/invoke/updateAsset", {
      update: {
        "@assetType": "event",
        name: name,
        date: date,
        prize: prize,
        winner: {
          "@assetType": "driver",
          "@key": winnerKey,
        },
      },
    });
  }
  
const updateTeam = (id,name) => {
    return fethURL.put("/invoke/updateAsset", {
      update: {
        "@assetType": "team",
        id: id,
        name: name,
      },
    });
  }
  
const updateDriver = (id, name, teamKey) => {
    return fethURL.put("/invoke/updateAsset", {
      update: {
        "@assetType": "driver",
        id: id,
        name: name,
        team: {
          "@assetType": "team",
          "@key":teamKey,
        },
      },
    });
  }

const updateCar = (id , model, driverKey) => {
    return fethURL.put("/invoke/updateAsset", {
      update: {
        "@assetType": "car",
        id: id,
        model: model,
        driver: {
          "@assetType": "driver",
          "@key": driverKey,
        },
      },
    });
  }
  



export default {
    createCar, 
    createDrivers , 
    createEvents, 
    createTeams,
    readAll,
    readCar,
    readDriver,
    readEvent,
    readTeam,
    updateCar,
    updateDriver,
    updateEvent,
    updateTeam,
    deleteCar,
    deleteDriver,
    deleteEvent,
    deleteTeam,
}