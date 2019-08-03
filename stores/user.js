import { observable } from "mobx";
import { persist } from "mobx-persist";

class UserStore {
  @persist
  @observable
  address = "guesttoken";

  @observable username = "";

  @persist("object")
  @observable
  details = {};

  @observable
  hash = "";
}

export default UserStore;
