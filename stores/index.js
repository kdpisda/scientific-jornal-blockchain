import { create } from "mobx-persist";
import localForage from "localforage";
import UIStore from "./ui";
import UserStore from "./user";

class Store {
  constructor() {
    this.ui = new UIStore(this);
    this.user = new UserStore(this);
  }
}

const store = new Store();
export default store;

localForage.setDriver(localForage.LOCALSTORAGE);

const hydrate = create({
  storage: localForage
});

const p1 = hydrate("address", store.user);
const p2 = hydrate("details", store.user);

Promise.all([p1, p2]).then(() => {
  console.log("Hydration complete");
  store.ui.fetchedFromPersist = true;
});
