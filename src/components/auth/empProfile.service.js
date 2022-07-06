import { getDoc, setDoc, doc } from "firebase/firestore";

import { db } from "../../firebase/firebase";
import { EmpProfile } from "./EmpProfile";

class EmpProfileService {
  constructor() {
    this.collection = "empProfiles";
  }

  async saveProfile(profile) {
    const docRef = doc(db, this.collection, profile.id);
    await setDoc(docRef, profile.toJson());
  }

  async fetchProfile(user) {
    const docRef = doc(db, this.collection, user.uid);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return EmpProfile.fromFirebase(docSnap);
    } else {
      return new EmpProfile(user.uid);
    }
  }
}

const service = new EmpProfileService();

export default service;
