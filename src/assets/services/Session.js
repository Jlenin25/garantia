// var Session = false;

// function FSession(params) {
//   Session = params;
// }

function Session() {
  let Estado = false;
  const Archive = [];

  Object.defineProperty(this, "estado", {
    get() {
      console.log("get!");
      return Estado;
    },
    set(value) {
      Estado = value;
      Archive.push({ val: Estado });
    },
  });
  this.getArchive = function () {
    return Archive;
  };
}

export {Session};
// export { FSession };
// export { Session };
